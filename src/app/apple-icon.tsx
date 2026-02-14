import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #87A06F, #6B8E5A)",
          borderRadius: 36,
          fontFamily: "Georgia, serif",
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: "#FFFDF9",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size }
  );
}
