"use client"

import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import dynamic from "next/dynamic"

const WebGLShader = dynamic(
  () => import("@/components/ui/web-gl-shader").then(m => ({ default: m.WebGLShader })),
  { ssr: false }
)

const HERO_LINES = [
  { text: "A SEGUNDA-FEIRA", accent: false },
  { text: "COM A ", accentText: "AGENDA", accent: true },
  { text: "CHEIA COMEÇA AQUI.", accent: false },
]

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000]">
      {/* WEBGL SHADER - z-index 0, atrás de tudo */}
      <WebGLShader />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/50 whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] shrink-0 inline-block" />
          <span>+400 negócios</span>
          <span className="text-white/20">·</span>
          <span>Google Partner</span>
        </motion.div>

        <h1 className="font-display leading-none text-center text-5xl sm:text-6xl md:text-8xl xl:text-[120px]">
          {HERO_LINES.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: "easeOut" }}
            >
              {line.accent ? (
                <>
                  <span className="text-[#ffffff]">{line.text}</span>
                  <span className="text-[#1A56DB]">{line.accentText}</span>
                </>
              ) : (
                <span className="text-[#ffffff]">{line.text}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans font-light text-white text-base md:text-xl max-w-2xl mx-auto mt-6 drop-shadow-lg"
        >
          Mais pacientes novos por semana. Menos dependência do passa-a-palavra. Sem precisares de perceber de marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-8 w-full"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-xs sm:text-sm bg-[#1A56DB] text-[#ffffff] rounded-full px-6 py-4 hover:bg-[#0A2A6E] hover:scale-105 transition-all text-center"
          >
            {"VER COMO FUNCIONA PARA A MINHA CLÍNICA →"}
          </a>
          <a
            href="#servicos"
            className="font-mono text-sm border border-[#ffffff]/30 text-[#ffffff] rounded-full px-8 py-4 hover:bg-[#ffffff]/10 hover:border-[#ffffff] transition-all text-center"
          >
            COMO FUNCIONA
          </a>
        </motion.div>
      </div>

    </section>
  )
}
