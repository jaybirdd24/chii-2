import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
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
          background: "#87A06F",
          borderRadius: 6,
          fontFamily: "Georgia, serif",
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: "#FFFDF9",
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
