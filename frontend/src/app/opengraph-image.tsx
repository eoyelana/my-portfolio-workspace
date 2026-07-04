import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "Emmanuel Oyelana · Data & AI Engineer";

// Brand colors (match the portfolio's indigo -> purple accent gradient)
const ACCENT_FROM = "#6366f1";
const ACCENT_TO = "#a855f7";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "#09090b",
        color: "#fafafa",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 120,
          height: 10,
          borderRadius: 5,
          background: `linear-gradient(90deg, ${ACCENT_FROM}, ${ACCENT_TO})`,
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
        Emmanuel Oyelana
      </div>
      <div style={{ marginTop: 24, fontSize: 34, color: "#a1a1aa" }}>
        Data & AI Engineer · Trustworthy AI & Governance
      </div>
      <div style={{ marginTop: 56, fontSize: 26, color: "#71717a" }}>
        www.eoyelana.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
