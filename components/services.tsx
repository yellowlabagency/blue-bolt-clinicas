"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import type { ServiceData } from "@/lib/types"
import { SERVICES_COMUNICACAO, SERVICES_TECH } from "@/lib/services-data"
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="relative h-full flex flex-col justify-between rounded-2xl border border-[#1a1a1a] bg-[#0d0d0d] p-8 cursor-pointer group transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#ffd600]/40 hover:bg-[#0e0e0b] hover:shadow-[0_0_40px_rgba(255,214,0,0.07)]"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-[#ffffff]" />
      </div>

      {/* Name */}
      <h3 className="font-display text-2xl text-[#ffffff] leading-tight mb-3">
        {service.name}
      </h3>

      {/* Description */}
      <p className="font-sans text-white text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Link */}
      <span className="font-mono text-xs uppercase tracking-widest text-[#ffd600] group-hover:tracking-[0.2em] transition-all">
        {"SAIBA MAIS →"}
      </span>
    </motion.div>
  )
}

export function Services() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null)

  return (
    <>
      <section id="servicos" className="py-32 px-6 md:px-16 bg-[#000000]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
        >
          (02) O QUE O LAB FAZ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl leading-tight text-[#ffffff]"
        >
          <span className="block">{"ESTRATÉGIA +"}</span>
          <span className="block">
            <span className="text-[#ffd600]">{"CRIAÇÃO"}</span>{" +"}
          </span>
          <span className="block">{"TECNOLOGIA."}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-white text-lg max-w-2xl mt-6 mb-20"
        >
          {"Duas frentes. Um objetivo. Fazer sua marca crescer de verdade, com criatividade e inteligência."}
        </motion.p>

        {/* MOBILE: categorias separadas */}
        <div className="md:hidden flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-widest text-[#ffd600] border-b border-[#ffd600]/30 pb-3">
              {"COMUNICAÇÃO & MARCA"}
            </p>
            {SERVICES_COMUNICACAO.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} onClick={() => setActiveService(service)} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-widest text-[#ffd600] border-b border-[#ffd600]/30 pb-3">
              {"TECNOLOGIA & CRESCIMENTO"}
            </p>
            {SERVICES_TECH.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} onClick={() => setActiveService(service)} />
            ))}
          </div>
        </div>

        {/* DESKTOP: grid intercalado */}
        <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-6">
          <p className="font-mono text-sm uppercase tracking-widest text-[#ffd600] border-b border-[#ffd600]/30 pb-3 mb-4">
            {"COMUNICAÇÃO & MARCA"}
          </p>
          <p className="font-mono text-sm uppercase tracking-widest text-[#ffd600] border-b border-[#ffd600]/30 pb-3 mb-4">
            {"TECNOLOGIA & CRESCIMENTO"}
          </p>
          {Array.from({ length: Math.max(SERVICES_COMUNICACAO.length, SERVICES_TECH.length) }).map((_, i) => (
            <React.Fragment key={i}>
              {SERVICES_COMUNICACAO[i] ? (
                <div className="h-full">
                  <ServiceCard service={SERVICES_COMUNICACAO[i]} index={i} onClick={() => setActiveService(SERVICES_COMUNICACAO[i])} />
                </div>
              ) : <div />}
              {SERVICES_TECH[i] ? (
                <div className="h-full">
                  <ServiceCard service={SERVICES_TECH[i]} index={i} onClick={() => setActiveService(SERVICES_TECH[i])} />
                </div>
              ) : <div />}
            </React.Fragment>
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
