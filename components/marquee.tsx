const ITEMS_ROW1 = [
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

const ITEMS_ROW2 = [
  "Identidade Visual",
  "Gestão de Tráfego",
  "Produção de Conteúdo",
  "Automação com IA",
  "Desenvolvimento Web",
  "Social Media",
  "Consultoria Estratégica",
  "SaaS Personalizado",
  "Integrações & APIs",
  "Agentes de IA",
]

export function Marquee() {
  return (
    <section className="py-5 border-y border-[#1a1a1a] overflow-hidden flex flex-col gap-4">
      {/* Linha 1 — uppercase, branco, separador amarelo */}
      <div className="flex flex-wrap gap-4 px-6">
        {ITEMS_ROW1.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0">
            <span className="font-mono uppercase text-sm tracking-widest text-white">{item}</span>
            {i < ITEMS_ROW1.length - 1 && (
              <span className="text-[#ffd600] text-sm">◆</span>
            )}
          </span>
        ))}
      </div>
      {/* Linha 2 — capitalizado, amarelo/dourado suave, separador diferente */}
      <div className="flex flex-wrap gap-4 px-6">
        {ITEMS_ROW2.map((item, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0">
            <span className="font-sans text-sm text-[#ffd600]/60 tracking-wide">{item}</span>
            {i < ITEMS_ROW2.length - 1 && (
              <span className="text-white/20 text-xs">—</span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
