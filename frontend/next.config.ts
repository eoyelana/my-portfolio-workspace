import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Everything this static site loads is same-origin: Next.js chunks, the one
// Tailwind stylesheet, self-hosted Geist fonts, and Vercel's own analytics
// scripts (served from /_vercel/*). So 'self' covers every resource. The
// inline hydration payloads and the JSON-LD block are un-nonced in static
// output, which is why script-src needs 'unsafe-inline'. The policy's value
// here is not stopping first-party inline execution (there is no user input to
// inject through) but constraining the blast radius if bundled code is ever
// compromised: no cross-origin script loads, no exfiltration channels
// (connect-src), no form posts, no <base> hijack, no plugin content.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), accelerometer=(), gyroscope=(), magnetometer=(), payment=(), usb=(), browsing-topics=()",
  },
  // Production only: connect-src 'self' would block the dev server's HMR
  // websocket, so the CSP is omitted while running `next dev`.
  ...(isProd
    ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
    : []),
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Humans can download the CV, but search engines must not index
        // the PDF itself: it would compete with the homepage for name
        // searches.
        source: "/Emmanuel_Oyelana_CV.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
