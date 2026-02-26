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

      {/* LAMP EFFECT — opacity reduzida para não competir com o shader */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Beams */}
        <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden">
          {/* Left beam */}
          <motion.div
            initial={{ width: "10rem" }}
            animate={{ width: "28rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-1/2 h-64"
            style={{
              background: "conic-gradient(from 285deg, transparent 0deg, rgba(255,214,0,0.6) 30deg, transparent 60deg)",
              transformOrigin: "right top",
            }}
          />
          {/* Right beam */}
          <motion.div
            initial={{ width: "10rem" }}
            animate={{ width: "28rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-1/2 h-64"
            style={{
              background: "conic-gradient(from 75deg, transparent 0deg, rgba(255,214,0,0.6) 30deg, transparent 60deg)",
              transformOrigin: "left top",
            }}
          />
          {/* Edge masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#000000]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent" />
        </div>

        {/* Center glow */}
        <div className="absolute top-0 left-0 right-0">
          {/* Glow blob */}
          <motion.div
            initial={{ opacity: 0, width: "8rem" }}
            animate={{ opacity: 0.35, width: "24rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 rounded-full bg-[#ffd600] blur-3xl"
          />
          {/* Black bleed to hide overflow */}
          <div className="absolute top-16 left-0 right-0 h-40 bg-gradient-to-b from-[#000000]/80 to-transparent blur-xl" />
        </div>
      </div>

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
