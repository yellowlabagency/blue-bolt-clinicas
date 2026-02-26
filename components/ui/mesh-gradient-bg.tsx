"use client"
import { MeshGradient } from "@paper-design/shaders-react"

export function MeshGradientBg() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <MeshGradient
        style={{
          width: "100%",
          height: "100%",
        }}
        colors={["#ffd600", "#ffaa00", "#cc8800", "#2a1f00", "#1a1400", "#000000"]}
        distortion={0.6}
        swirl={0.4}
        grainMixer={0}
        grainOverlay={0}
        speed={0.3}
        offsetX={0.05}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
