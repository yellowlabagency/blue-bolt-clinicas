"use client"

const ITEMS = [
  "ESTRATÉGIA",
  "BRANDING",
  "CONTEÚDO",
  "SOCIAL MEDIA",
  "TRÁFEGO PAGO",
  "WEB DESIGN",
  "SAAS & APPS",
  "AGENTES DE IA",
  "AUTOMAÇÃO",
  "INTEGRAÇÕES",
]

function MarqueeRow({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-4 shrink-0">
      <span className="font-mono uppercase text-sm tracking-widest text-white">{item}</span>
      <span className="text-[#ffd600] text-sm">{"◆"}</span>
    </span>
  ))

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-4 shrink-0"
        style={{
          animation: `${reverse ? "marquee-right" : "marquee-left"} ${speed}s linear infinite`,
        }}
      >
        {content}
        {content}
        {content}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="py-5 border-y border-[#1a1a1a] overflow-hidden flex flex-col gap-4">
      <MarqueeRow speed={40} />
      <MarqueeRow reverse speed={30} />
    </section>
  )
}
