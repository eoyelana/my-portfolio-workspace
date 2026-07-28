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

// www.eoyelana.com is the canonical host. Vercel also serves the whole site on
// the project's production alias, which returned HTTP 200 with no X-Robots-Tag
// and a permissive robots.txt, and Perplexity had it indexed as a result
// separate from www. A self-referencing canonical is a hint a crawler may
// ignore, and answer engines are the least likely to honour it, so the fix is
// to stop serving content there at all rather than to ask nicely.
const productionAlias = "my-portfolio-workspace.vercel.app";

// Per-deployment preview hostnames carry a branch or commit hash and are NOT
// matched by the redirect above, so PR previews keep working. They still get
// noindex, because a preview URL that leaks into a link is the same duplicate
// problem in a smaller form.
const anyVercelHost = "(?<sub>.*).vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: productionAlias }],
        destination: "https://www.eoyelana.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: anyVercelHost }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
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
