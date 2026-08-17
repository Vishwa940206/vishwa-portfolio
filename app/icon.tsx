import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e9c393, #9c5f2e)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
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
