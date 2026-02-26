"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg"

export function FinalCTA() {
  return (
    <section
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
          className="font-mono uppercase tracking-widest text-[#ffd600] text-sm mb-8"
        >
          {"PRONTO PRA CRESCER?"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl leading-tight text-[#ffffff] text-center"
        >
          <span className="block">VAMOS CRIAR</span>
          <span className="block">
            ALGO <span className="text-[#ffd600]">JUNTOS?</span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-white text-xl max-w-xl mx-auto mt-8"
        >
          Agende uma consultoria gratuita e descubra o que a Yellow Lab pode fazer pela sua marca.
        </motion.p>

        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-3 mt-12 font-mono font-semibold text-lg bg-[#ffd600] text-[#000000] rounded-full py-5 px-12 hover:brightness-110 hover:scale-105 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          {"FALAR COM O LAB →"}
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-sm font-mono text-white/50 uppercase tracking-widest"
        >
          {"VIA WHATSAPP · SEM FORMULÁRIO · SEM ENROLAÇÃO"}
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
