"use client"

import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { WebGLShader } from "@/components/ui/web-gl-shader"

const HERO_LINES = [
  { text: "A VOZ DA", accent: false },
  { text: "SUA ", accentText: "MARCA.", accent: true },
  { text: "MAIS ALTA.", accent: false },
  { text: "MAIS LONGE.", accent: false },
]

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000]">
      {/* WEBGL SHADER — z-index 0, atrás de tudo */}
      <WebGLShader />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
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
                  <span className="text-[#ffd600]">{line.accentText}</span>
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
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-sans font-light text-white text-lg md:text-xl max-w-2xl mx-auto mt-8 drop-shadow-lg"
        >
          Estratégia, criação e tecnologia trabalhando juntas para transformar marcas em presença real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-sm bg-[#ffd600] text-[#000000] rounded-full px-8 py-4 hover:brightness-110 hover:scale-105 transition-all"
          >
            {"FALAR COM O LAB →"}
          </a>
          <a
            href="#servicos"
            className="font-mono text-sm border border-[#ffffff]/30 text-[#ffffff] rounded-full px-8 py-4 hover:bg-[#ffffff]/10 hover:border-[#ffffff] transition-all"
          >
            NOSSOS SERVIÇOS
          </a>
        </motion.div>
      </div>

    </section>
  )
}
