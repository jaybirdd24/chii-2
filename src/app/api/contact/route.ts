import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 254; // RFC 5321
const MAX_PHONE_LENGTH = 30;
const MAX_SERVICE_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  /** Honeypot field — should always be empty */
  company?: string;
}

export async function POST(request: Request) {
  try {
    // --- Rate limiting (5 requests per 15 minutes per IP) ---
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0].trim() ?? "unknown";
    const { allowed, retryAfterMs } = rateLimit(ip, {
      max: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(retryAfterMs / 1000)) },
        }
      );
    }

    const data: ContactFormData = await request.json();

    // --- Honeypot check (bots fill in hidden fields) ---
    if (data.company) {
      // Silently accept — don't reveal it's a honeypot
      return NextResponse.json({ success: true });
    }

    // --- Required fields ---
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // --- Length limits ---
    if (data.name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be under ${MAX_NAME_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (data.email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email must be under ${MAX_EMAIL_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (data.phone && data.phone.length > MAX_PHONE_LENGTH) {
      return NextResponse.json(
        { error: `Phone must be under ${MAX_PHONE_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (data.service && data.service.length > MAX_SERVICE_LENGTH) {
      return NextResponse.json(
        { error: `Service must be under ${MAX_SERVICE_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (data.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // --- Email format ---
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // TODO: Connect to your email service here.
    //
    // Examples:
    //
    // Resend (https://resend.com):
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Chii Wellness <noreply@chii.co.nz>",
    //     to: "chiihealth768@gmail.com",
    //     subject: `New enquiry from ${data.name}`,
    //     text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\n\n${data.message}`,
    //   });
    //
    // Or use SendGrid, Nodemailer, etc.
    // ---------------------------------------------------------

    // For now, log and return success
    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your message." },
      { status: 500 }
    );
  }
}
