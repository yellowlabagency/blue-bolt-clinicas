const ROW1 = [
  "AGENDA MAIS CHEIA", "MAIS PACIENTES NOVOS", "CLÍNICA NO TOPO DO GOOGLE", "CRESCIMENTO PREVISÍVEL",
  "MENOS DEPENDÊNCIA DO PASSA-A-PALAVRA", "FUNIL QUE TRABALHA ENQUANTO OPERAS",
]

const ROW2 = [
  "DIAGNÓSTICO", "ESTRATÉGIA", "RESULTADO",
  "DIAGNÓSTICO", "ESTRATÉGIA", "RESULTADO",
  "DIAGNÓSTICO", "ESTRATÉGIA", "RESULTADO",
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
      {/* Linha 1 — rola esquerda */}
      <div>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-left 28s linear infinite" }}>
          {[...ROW1, ...ROW1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="font-mono uppercase text-xs tracking-[0.15em] text-white">{item}</span>
              <span className="text-[#1A56DB]/50 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2 — rola direita, mesma fonte, menos brilho */}
      <div>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "footer-marquee-right 28s linear infinite" }}>
          {[...ROW2, ...ROW2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-4">
              <span className="font-mono uppercase text-xs tracking-[0.15em] text-white/45">{item}</span>
              <span className="text-[#1A56DB]/25 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
