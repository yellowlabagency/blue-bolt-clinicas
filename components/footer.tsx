"use client"

import { ArrowUpRight } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

const ITEMS = Array(8).fill("BLUE BOLT")

function MarqueeRow({ direction }: { direction: "left" | "right" }) {
  const animation =
    direction === "left"
      ? "footer-marquee-left 20s linear infinite"
      : "footer-marquee-right 20s linear infinite"

  return (
    <div className="overflow-hidden py-4">
      <div style={{ display: "flex", whiteSpace: "nowrap", animation }}>
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span
            key={i}
            className="font-display text-[120px] md:text-[160px] leading-none text-[#ffffff] px-8 select-none"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

function RotatingCircle() {
  const text = "DIAGNÓSTICO GRATUITO • DIAGNÓSTICO GRATUITO • "

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 md:w-72 md:h-72 flex items-center justify-center group cursor-pointer"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        style={{ animation: "footer-spin 14s linear infinite" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,32 A 68,68 0 0,0 100,168 A 68,68 0 0,0 100,32"
          />
        </defs>
        <circle
          cx={100}
          cy={100}
          r={82}
          fill="#000000"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        <text fill="white" style={{ fontSize: "12px", letterSpacing: "2.5px" }}>
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        <ArrowUpRight className="w-8 h-8 text-[#ffffff] group-hover:text-[#1A56DB] transition-colors" />
      </div>
    </a>
  )
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-[#000000] border-t border-[#1a1a1a] w-full">

      {/* BARRA SUPERIOR */}
      <div className="px-6 md:px-16 py-8 md:py-10 border-b border-[#1a1a1a]">

        {/* Mobile layout */}
        <div className="flex flex-col gap-8 md:hidden">
          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">
              PRONTO PARA ENCHER A AGENDA?
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center font-mono text-xs uppercase tracking-widest text-white border border-white/40 rounded-full px-5 py-2 hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors"
            >
              DIAGNÓSTICO GRATUITO
            </a>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/bluebolt.agency" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors">INSTAGRAM</a>
              <a href="https://linkedin.com/company/bluebolt" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors">LINKEDIN</a>
            </div>
            <button onClick={scrollToTop} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors">
              VOLTAR AO TOPO
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-3 items-center">
          <div className="flex flex-row items-center gap-4">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">PRONTO PARA ENCHER A AGENDA?</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center font-mono text-xs uppercase tracking-widest text-white border border-white/40 rounded-full px-5 py-2 hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors">
              DIAGNÓSTICO GRATUITO
            </a>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a href="https://instagram.com/bluebolt.agency" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors">INSTAGRAM</a>
            <a href="https://linkedin.com/company/bluebolt" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors">LINKEDIN</a>
          </div>
          <div className="flex justify-end">
            <button onClick={scrollToTop} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-[#1A56DB] transition-colors group">
              VOLTAR AO TOPO
              <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* MARQUEE COM CÍRCULO */}
      <div className="relative py-24">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="right" />
        <RotatingCircle />
      </div>

      {/* BARRA INFERIOR */}
      <div className="px-6 md:px-16 py-6 flex items-center justify-center gap-6 border-t border-[#1a1a1a]">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          © 2026 BLUE BOLT
        </p>
        <span className="text-white/20">·</span>
        <a
          href="tel:+351927135702"
          className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-[#1A56DB] transition-colors"
        >
          +351 927 135 702
        </a>
      </div>

    </footer>
  )
}
