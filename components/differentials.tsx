"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

const PROCESS_DATA = [
  {
    title: "01",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#ffd600] mb-3">
          CONSULTORIA
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          VAMOS NOS CONHECER
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Tudo começa com uma conversa honesta. Entendemos o seu negócio,
          mapeamos oportunidades e definimos juntos o melhor caminho.
          A Yellow Lab pode atuar como seu departamento de marketing completo
          ou em projetos específicos. Você escolhe o formato que faz sentido.
        </p>
      </div>
    ),
  },
  {
    title: "02",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#ffd600] mb-3">
          PLANEJAMENTO
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          180 DIAS DE ESTRATÉGIA
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          A etapa mais importante e a que mais gente pula. Pesquisamos
          o mercado, estudamos a concorrência e construímos uma estratégia
          sólida para os próximos 180 dias. Sem achismo, sem improvisar.
        </p>
      </div>
    ),
  },
  {
    title: "03",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#ffd600] mb-3">
          EXECUÇÃO
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          ESTRATÉGIA VIRANDO REALIDADE
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Aqui a estratégia vira realidade. Criação, tecnologia e distribuição
          trabalhando juntas para entregar o que foi planejado, com qualidade
          e no prazo.
        </p>
      </div>
    ),
  },
  {
    title: "04",
    content: (
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#ffd600] mb-3">
          ANÁLISE E AJUSTE
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-[#ffffff] mb-4">
          DADOS QUE DIRECIONAM
        </h3>
        <p className="font-sans text-white text-base leading-relaxed max-w-xl">
          Todo fim de mês, um relatório completo. Métricas não mentem:
          elas mostram o que funciona e onde melhorar. O marketing muda
          rápido e nós mudamos junto, sempre com os dados na frente.
        </p>
      </div>
    ),
  },
]

export function Differentials() {
  return (
    <section className="bg-[#000000] pt-24 px-6 md:px-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-widest text-[#ffffff]/40 mb-4"
      >
        (04) COMO FUNCIONA
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl md:text-7xl leading-tight text-[#ffffff] mb-4"
      >
        <span className="block">O PROCESSO</span>
        <span className="block">
          QUE <span className="text-[#ffd600]">ENTREGA</span>
        </span>
        <span className="block">RESULTADO.</span>
      </motion.h2>

      <Timeline data={PROCESS_DATA} />
    </section>
  )
}
