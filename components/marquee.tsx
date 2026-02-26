const ROW1 = [
  "ESTRATÉGIA", "BRANDING", "CONTEÚDO", "SOCIAL MEDIA", "TRÁFEGO PAGO",
  "WEB DESIGN", "SAAS & APPS", "AGENTES DE IA", "AUTOMAÇÃO", "INTEGRAÇÕES",
]

const ROW2 = [
  "Identidade Visual", "Gestão de Tráfego", "Produção de Conteúdo", "Automação com IA",
  "Desenvolvimento Web", "Social Media", "Consultoria Estratégica", "SaaS Personalizado",
  "Integrações & APIs", "Agentes de IA",
]

export function Marquee() {
  return (
    <section className="py-5 border-y border-[#1a1a1a] overflow-hidden flex flex-col gap-4">

      {/* Linha 1 — rola para esquerda */}
      <div className="overflow-hidden">
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-left 30s linear infinite" }}>
          {[...ROW1, ...ROW1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="font-mono uppercase text-sm tracking-widest text-white">{item}</span>
              <span className="text-[#ffd600] text-sm">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2 — rola para direita, branca */}
      <div className="overflow-hidden">
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-right 30s linear infinite" }}>
          {[...ROW2, ...ROW2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="font-sans text-sm text-white/60 tracking-wide">{item}</span>
              <span className="text-white/20 text-xs">—</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
