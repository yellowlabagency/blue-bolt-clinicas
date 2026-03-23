import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Blue Bolt — Marketing Digital para Clínicas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#1A56DB",
            }}
          />
          BLUE BOLT · GOOGLE PARTNER · +400 CLÍNICAS
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            A AGENDA
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#1A56DB",
              lineHeight: 1,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            MAIS CHEIA
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            COMEÇA AQUI.
          </span>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "1px",
            }}
          >
            Marketing Digital para Clínicas em Portugal
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A56DB",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            bluebolt.agency
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
