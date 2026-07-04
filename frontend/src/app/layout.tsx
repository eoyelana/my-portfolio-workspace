import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Emmanuel Oyelana is a Data & AI Engineer focused on trustworthy AI and governance. He builds GenAI for banking, governed data pipelines, and LLM evaluation.";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eoyelana.com"),
  title: {
    default: "Emmanuel Oyelana · Data & AI Engineer",
    template: "%s · Emmanuel Oyelana",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Emmanuel Oyelana",
    title: "Emmanuel Oyelana · Data & AI Engineer",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
