import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://chii.co.nz"),
  title: {
    default: "Chii Wellness | Mount Maunganui Wellness Clinic",
    template: "%s | Chii Wellness",
  },
  description:
    "Experience holistic wellness at Chii. We offer acupuncture, physiotherapy, massage, waxing, and facials in a calm, welcoming environment.",
  keywords: [
    "wellness clinic",
    "acupuncture",
    "physiotherapy",
    "massage",
    "waxing",
    "facials",
    "Mount Maunganui",
    "Tauranga",
    "holistic health",
  ],
  openGraph: {
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Experience holistic wellness at Chii. Acupuncture, physiotherapy, massage, waxing, and facials.",
    type: "website",
    locale: "en_NZ",
    siteName: "Chii Wellness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chii Wellness | Mount Maunganui Wellness Clinic",
    description:
      "Experience holistic wellness at Chii. Acupuncture, physiotherapy, massage, waxing, and facials.",
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
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
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
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
            <ClientDecorations />
          </SmoothScrollProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
