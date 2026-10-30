import { ImageResponse } from "next/og";

export const alt = "J&E Events — Where Extraordinary Events Begin.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#080F2B",
          color: "white",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>J&E EVENTS</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 650, lineHeight: 1.02 }}>
          <div style={{ display: "flex" }}>Events That Inspire.</div>
          <div style={{ display: "flex", color: "#F7C5DE" }}>Experiences That Last.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#D7DCEC" }}>Where Extraordinary Events Begin.</div>
      </div>
    ),
    size,
  );
}
