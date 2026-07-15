import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MovedBanner } from "@/components/layout/MovedBanner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ClientDecorations } from "@/components/ui/ClientDecorations";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chii.co.nz"),
  title: {
    default: "Chii Wellness | Mount Maunganui Wellness Clinic",
    template: "%s | Chii Wellness",
  },
  description:
    "Experience holistic wellness at Chii. We offer acupuncture, physiotherapy, massage, and waxing in a calm, welcoming environment.",
  keywords: [
    "wellness clinic",
    "acupuncture",
    "physiotherapy",
    "massage",
    "waxing",
    "Mount Maunganui",
    "Tauranga",
    "holistic health",
  ],
  openGraph: {
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Experience holistic wellness at Chii. Acupuncture, physiotherapy, massage, and waxing.",
    type: "website",
    locale: "en_NZ",
    siteName: "Chii Wellness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Experience holistic wellness at Chii. Acupuncture, physiotherapy, massage, and waxing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        <ThemeProvider>
            <MovedBanner />
            <Header />
            {children}
            <Footer />
            <ClientDecorations />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
