"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg"

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative"
      style={{ overflow: "hidden" }}
    >
      <MeshGradientBg />

      <div className="relative z-10 min-h-[600px] flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-mono uppercase tracking-widest text-[#1A56DB] text-sm mb-8"
        >
          {"PRONTO PARA ENCHER A AGENDA?"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-7xl leading-tight text-[#ffffff] text-center"
        >
          <span className="block">QUANTOS PACIENTES</span>
          <span className="block">
            ESTÁS A <span className="text-[#1A56DB]">PERDER</span>
          </span>
          <span className="block">ESTA SEMANA SEM SABER?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-white text-xl max-w-xl mx-auto mt-8"
        >
          Pede o diagnóstico gratuito e descobre onde está a oportunidade que ainda não estás a aproveitar.
        </motion.p>

        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-3 mt-12 font-mono font-semibold text-sm md:text-lg bg-[#1A56DB] text-[#ffffff] rounded-full py-4 md:py-5 px-8 md:px-12 hover:bg-[#0A2A6E] hover:scale-105 transition-all text-center"
        >
          <MessageCircle className="w-5 h-5" />
          {"QUERO SABER O QUE ESTOU A PERDER →"}
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-sm font-mono text-white/50 uppercase tracking-widest"
        >
          {"SEM COMPROMISSO · RESULTADO EM 30 MINUTOS · VIA WHATSAPP"}
        </motion.p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #000000)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  )
}
