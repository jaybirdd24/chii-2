import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Chii Wellness — Mount Maunganui Wellness Clinic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #FFF8F0 0%, #F4F6F2 50%, #E8EBE4 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(135, 160, 111, 0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(135, 160, 111, 0.08)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6B8E5A",
              display: "flex",
            }}
          >
            Wellness Clinic Mount Maunganui
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#2D3028",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Chii Wellness
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#5A5D55",
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Acupuncture, Chinese Medicine, Physiotherapy, Massage &amp; Beauty
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #87A06F, #6B8E5A)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
