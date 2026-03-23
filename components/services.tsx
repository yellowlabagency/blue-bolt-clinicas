"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ServiceData } from "@/lib/types"
import { SERVICES } from "@/lib/services-data"
import { ServiceDrawer } from "./service-drawer"

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: ServiceData
  index: number
  onClick: () => void
}) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="flex items-start gap-4 md:gap-6 rounded-2xl border border-[#1a1a1a] bg-[#0d0d0d] p-5 md:p-8 cursor-pointer group transition-[border-color,box-shadow] duration-300 hover:border-[#1A56DB]/40 hover:shadow-[0_0_40px_rgba(26,86,219,0.07)]"
    >
      {/* Icon */}
      <div className="w-10 h-10 shrink-0 rounded-lg bg-[#1a1a1a] flex items-center justify-center mt-1">
        <Icon className="w-5 h-5 text-[#1A56DB]" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl md:text-3xl text-[#ffffff] leading-tight mb-2">
          {service.name}
        </h3>
        <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed mb-3">
          {service.description}
        </p>
        <span className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] group-hover:tracking-[0.2em] transition-all">
          {"VER MAIS →"}
        </span>
      </div>
    </motion.div>
  )
}

export function Services() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null)

  return (
    <>
      <section id="servicos" className="py-20 md:py-32 px-6 md:px-16 bg-[#000000]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
        >
          (02) O QUE MUDA
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-7xl leading-tight text-[#ffffff] mb-12 md:mb-20"
        >
          <span className="block">O QUE CONQUISTAS</span>
          <span className="block">
            QUANDO <span className="text-[#1A56DB]">TRABALHAMOS JUNTOS.</span>
          </span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={i}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>
      </section>

      <ServiceDrawer
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}
