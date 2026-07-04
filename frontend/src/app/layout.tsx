import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { socials } from "@/lib/content";
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
        <footer className="mt-auto border-t border-white/10">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400">
            <p>© 2026 Emmanuel Oyelana</p>
            <nav aria-label="Contact links" className="flex gap-5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-50"
              >
                GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-50"
              >
                LinkedIn
              </a>
              <a
                href={socials.email}
                className="transition-colors hover:text-zinc-50"
              >
                Email
              </a>
            </nav>
          </div>
        </footer>
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
