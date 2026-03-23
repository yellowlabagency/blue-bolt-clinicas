"use client"

import { motion } from "framer-motion"

const STATS = [
  {
    number: "400+",
    label: "NEGÓCIOS TRANSFORMADOS",
    description: "Resultados comprovados em Portugal e Brasil",
  },
  {
    number: "TOP 5%",
    label: "PME PORTUGAL",
    description: "Google Partner — entre as melhores agências do país",
  },
  {
    number: "5M€+",
    label: "GERIDOS EM PUBLICIDADE",
    description: "Investimento que gera consultas, não só cliques",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 px-6 md:px-16 bg-[#000000]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
      >
        (01) A BLUE BOLT
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-[#ffffff] leading-tight">
            <span className="block">MAIS CONSULTAS.</span>
            <span className="block">MENOS GABINETES</span>
            <span className="block">VAZIOS.</span>
          </h2>

          <p className="font-sans font-light text-base md:text-lg text-white/80 leading-relaxed mt-8 max-w-lg">
            A Blue Bolt trabalha com clínicas em Portugal que querem crescer sem depender do passa-a-palavra. O resultado é uma agenda mais previsível, pacientes novos a chegar pelo digital e a tua clínica no topo quando pesquisam na zona.
          </p>

          {/* Logos de credenciais */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <img
              src="/google-partner.webp"
              alt="Google Partner"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/selo-top5.png"
              alt="Scoring TOP 5% Melhores PME Portugal 2025"
              className="h-28 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <a
            href="#servicos"
            className="inline-block mt-10 font-mono text-sm border border-[#ffffff]/30 text-[#ffffff] rounded-full px-8 py-4 hover:bg-[#ffffff]/10 hover:border-[#ffffff] transition-all"
          >
            {"VER O QUE MUDA"}
          </a>
        </motion.div>

        {/* Right column - stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-0"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`${i === 0 ? "pb-8" : "py-8"} ${i < STATS.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}
            >
              <p className="font-display text-5xl md:text-7xl text-[#ffffff]">{stat.number}</p>
              <p className="font-mono uppercase tracking-widest text-[#1A56DB] text-sm mt-2">
                {stat.label}
              </p>
              <p className="font-sans text-white/60 text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
