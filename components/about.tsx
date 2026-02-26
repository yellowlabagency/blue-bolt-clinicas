"use client"

import { motion } from "framer-motion"

const STATS = [
  {
    number: "2",
    label: "MUNDOS, UMA EQUIPE",
    description: "Criação e tech na mesma mesa",
  },
  {
    number: "10+",
    label: "SERVIÇOS NO ARSENAL",
    description: "Do branding ao SaaS",
  },
  {
    number: "24/7",
    label: "SEMPRE EM CAMPO",
    description: "IA operando enquanto você dorme",
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
    <section id="sobre" className="py-32 px-6 md:px-16 bg-[#000000]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
      >
        (01) A LAB
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-[#ffffff] leading-tight">
            <span className="block">CONTAR</span>
            <span className="block">{"HISTÓRIAS É"}</span>
            <span className="block">{"SÓ O COMEÇO."}</span>
          </h2>

          <p className="font-sans font-light text-base md:text-lg text-white leading-relaxed mt-8 max-w-lg">
            {"Criação que vende. Tecnologia que escala. A Yellow Lab existe pra fazer sua marca ocupar espaço real no mercado, com estratégia, identidade e as ferramentas certas pra crescer."}
          </p>

          <a
            href="#servicos"
            className="inline-block mt-10 font-mono text-sm border border-[#ffffff]/30 text-[#ffffff] rounded-full px-8 py-4 hover:bg-[#ffffff]/10 hover:border-[#ffffff] transition-all"
          >
            {"VER NOSSOS SERVIÇOS"}
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
              <p className="font-display text-7xl text-[#ffffff]">{stat.number}</p>
              <p className="font-mono uppercase tracking-widest text-[#ffd600] text-sm mt-2">
                {stat.label}
              </p>
              <p className="font-sans text-white text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
