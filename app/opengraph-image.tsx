import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0908",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(184,118,58,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(156,95,46,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e9c393, #9c5f2e)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: 700,
            color: "#0a0908",
            marginBottom: 40,
          }}
        >
          VR
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#f3ede3", lineHeight: 1.15 }}>
          Building Digital Experiences
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#dca467", lineHeight: 1.15 }}>
          That Actually Work.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#a89a8b" }}>
          {siteConfig.name} — {siteConfig.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
