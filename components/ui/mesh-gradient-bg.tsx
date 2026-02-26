export function MeshGradientBg() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 100% 70% at 10% 50%, rgba(255, 170, 0, 0.55) 0%, transparent 65%),
          radial-gradient(ellipse 70% 90% at 80% 15%, rgba(204, 136, 0, 0.40) 0%, transparent 60%),
          radial-gradient(ellipse 55% 55% at 55% 88%, rgba(255, 214, 0, 0.22) 0%, transparent 55%),
          #060400
        `,
      }}
    />
  )
}
