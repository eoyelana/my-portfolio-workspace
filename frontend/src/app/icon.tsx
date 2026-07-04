import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Brand colors (match the portfolio's indigo -> purple accent gradient)
const ACCENT_FROM = "#6366f1"; // indigo
const ACCENT_TO = "#a855f7"; // purple
const FOREGROUND = "#f4f4f5"; // near-white initials

// Image generation
export default function Icon() {
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
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: -1,
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
        borderRadius: 8,
      }}
    >
      EO
    </div>,
    {
      ...size,
    },
  );
}
