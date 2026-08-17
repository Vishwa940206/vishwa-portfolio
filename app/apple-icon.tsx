import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 128,
            height: 128,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e9c393, #9c5f2e)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 700,
            color: "#0a0908",
          }}
        >
          VR
        </div>
      </div>
    ),
    { ...size }
  );
}
