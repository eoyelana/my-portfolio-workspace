import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Brand colors (match the portfolio's indigo -> purple accent gradient)
const ACCENT_FROM = "#6366f1"; // indigo
const ACCENT_TO = "#a855f7"; // purple
const FOREGROUND = "#f4f4f5"; // near-white initials

// Apple touch icon: solid square, iOS applies its own corner mask
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${ACCENT_FROM} 0%, ${ACCENT_TO} 100%)`,
        color: FOREGROUND,
        fontSize: 96,
        fontWeight: 700,
        letterSpacing: -4,
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      EO
    </div>,
    {
      ...size,
    },
  );
}
