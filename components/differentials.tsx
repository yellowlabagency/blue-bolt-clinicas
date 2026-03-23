"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

const PROCESS_DATA = [
  {
    title: "01",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] mb-3">
          01 — DIAGNÓSTICO
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          PERCEBEMOS O QUE ESTÁ A TRAVAR O CRESCIMENTO
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Analisamos onde a tua clínica está a perder pacientes antes de chegarem à porta. Entregamos uma leitura honesta do que está a acontecer. Sem custo, sem compromisso.
        </p>
      </div>
    ),
  },
  {
    title: "02",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] mb-3">
          02 — ESTRATÉGIA
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          SABEMOS EXACTAMENTE O QUE FAZER A SEGUIR
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Com base no diagnóstico, definimos as acções com maior impacto para o teu momento. Nada genérico. Nada que possa esperar.
        </p>
      </div>
    ),
  },
  {
    title: "03",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] mb-3">
          03 — EXECUÇÃO
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          EM DUAS SEMANAS COMEÇAS A VER RESULTADOS
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          O funil entra em campo. Pacientes novos começam a chegar. A agenda começa a preencher. Tu ficas nas consultas.
        </p>
      </div>
    ),
  },
  {
    title: "04",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] mb-3">
          04 — CRESCIMENTO
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          CADA MÊS MELHOR QUE O ANTERIOR
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Analisamos o que está a funcionar e amplificamos. O que pode melhorar, melhoramos. A clínica cresce com base sólida, não por sorte.
        </p>
      </div>
    ),
  },
]

export function Differentials() {
  return (
    <section id="como-funciona" className="bg-[#000000] pt-16 md:pt-24 px-6 md:px-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
      >
        (04) COMO FUNCIONA
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-7xl leading-tight text-[#ffffff] mb-4"
      >
        <span className="block">QUATRO PASSOS</span>
        <span className="block">
          ATÉ À <span className="text-[#1A56DB]">AGENDA</span>
        </span>
        <span className="block">MAIS CHEIA.</span>
      </motion.h2>

      <Timeline data={PROCESS_DATA} />
    </section>
  )
}
