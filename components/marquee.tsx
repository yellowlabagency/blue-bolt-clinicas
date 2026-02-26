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
    <section
      className="py-5 border-y border-[#1a1a1a] overflow-hidden flex flex-col gap-3 outline-none"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      {/* Linha 1 — rola esquerda, branca, fonte mono */}
      <div>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-left 28s linear infinite" }}>
          {[...ROW1, ...ROW1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="font-mono uppercase text-xs tracking-[0.18em] text-white">{item}</span>
              <span className="text-[#ffd600]/60 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2 — rola direita, branca suave, fonte sans */}
      <div>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-right 28s linear infinite" }}>
          {[...ROW2, ...ROW2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="font-sans text-xs text-white/40 tracking-wide">{item}</span>
              <span className="text-white/15 text-[10px]">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
