import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="bg-page" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('theme');
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme;
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
              } catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
