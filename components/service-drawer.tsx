"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import type { ServiceData } from "@/lib/types"
import { getWhatsAppLink } from "@/lib/whatsapp"

interface ServiceDrawerProps {
  service: ServiceData | null
  onClose: () => void
}

// Aproximação de power4.out em cubic-bezier
const EASE_POWER4_OUT = [0.16, 1, 0.3, 1] as const

export function ServiceDrawer({ service, onClose }: ServiceDrawerProps) {
  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#000000]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: EASE_POWER4_OUT }}
            className="fixed right-0 top-0 h-full w-full md:w-[680px] bg-[#0d0d0d] border-l border-[#1a1a1a] overflow-y-auto p-10 md:p-12 z-50"
          >
            {/* Top row */}
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] border border-[#1A56DB]/30 rounded-full px-4 py-1">
                {service.category}
              </span>
              <button
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-widest text-white hover:text-[#1A56DB] transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                ESC
              </button>
            </div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: EASE_POWER4_OUT }}
              className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-8"
            >
              <service.icon className="w-8 h-8 text-[#1A56DB]" />
            </motion.div>

            {/* Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.4, ease: EASE_POWER4_OUT }}
              className="font-display text-4xl md:text-5xl text-[#ffffff] leading-tight mb-6"
            >
              {service.name}
            </motion.h3>

            <div className="border-b border-[#1a1a1a] my-8" />

            {/* Long description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4, ease: EASE_POWER4_OUT }}
              className="font-sans text-white text-base leading-relaxed mb-8"
            >
              {service.longDescription}
            </motion.p>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: EASE_POWER4_OUT }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-white mb-4">
                {"O QUE ESTÁ INCLUÍDO"}
              </p>
              <div className="flex flex-col gap-3">
                {service.deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38 + i * 0.06, duration: 0.35, ease: EASE_POWER4_OUT }}
                  >
                    <span className="text-[#1A56DB] text-sm shrink-0">{"◆"}</span>
                    <span className="font-sans text-white text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="border-b border-[#1a1a1a] my-8" />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.4, ease: EASE_POWER4_OUT }}
              className="pt-8"
            >
              <p className="font-sans text-white text-sm mb-6">
                {"Pronto para começar? Fala directamente com a equipa."}
              </p>
              <a
                href={getWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 font-mono font-semibold text-lg bg-[#1A56DB] text-[#ffffff] rounded-full py-5 hover:bg-[#0A2A6E] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                {"DIAGNÓSTICO GRATUITO →"}
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
