import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nouah Labs — Digital Product Studio",
    template: "%s | Nouah Labs",
  },
  description:
    "A modern digital product studio that builds mobile apps and websites for startups, businesses, and founders.",
  metadataBase: new URL("https://nouahlabs.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nouahlabs.com",
    siteName: "Nouah Labs",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
