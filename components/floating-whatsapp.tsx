"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import { getWhatsAppLink } from "@/lib/whatsapp"

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
)

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs bg-[#0d0d0d] text-[#ffffff] px-3 py-1 rounded-full whitespace-nowrap"
              >
                Falar com o Lab
              </motion.span>
            )}
          </AnimatePresence>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com o Lab via WhatsApp"
            className="w-14 h-14 rounded-full bg-[#ffd600] flex items-center justify-center shadow-lg shadow-[#ffd600]/30 hover:scale-110 hover:shadow-xl transition-all"
          >
            <Player
              autoplay
              loop
              src="/whatsapp-icon.json"
              style={{ width: 32, height: 32 }}
            />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
