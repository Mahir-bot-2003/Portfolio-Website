import type { Metadata } from "next";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahir Makar — ML Engineer & Builder",
  description:
    "I build ML systems that detect fraud, understand conversations, and solve real problems. Engineer obsessed with form, clarity, and impact.",
  metadataBase: new URL("https://mahirmakar.com"),
  openGraph: {
    title: "Mahir Makar — ML Engineer & Builder",
    description: "Engineer obsessed with building real systems.",
    url: "https://mahirmakar.com",
    siteName: "Mahir Makar",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mahir Makar" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahir Makar",
    description: "Engineer obsessed with building real systems.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
