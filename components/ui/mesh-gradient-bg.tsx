export function MeshGradientBg() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 100% 70% at 10% 50%, rgba(26, 86, 219, 0.50) 0%, transparent 65%),
          radial-gradient(ellipse 70% 90% at 80% 15%, rgba(10, 42, 110, 0.40) 0%, transparent 60%),
          radial-gradient(ellipse 55% 55% at 55% 88%, rgba(26, 86, 219, 0.18) 0%, transparent 55%),
          #000408
        `,
      }}
    />
  )
}
