import {
  Target,
  Palette,
  FileText,
  Users,
  TrendingUp,
  Monitor,
  Code2,
  Zap,
  Bot,
  GitBranch,
} from "lucide-react"
import type { ServiceData } from "@/lib/types"

export const SERVICES_COMUNICACAO: ServiceData[] = [
  {
    icon: Target,
    name: "PLANEJAMENTO ESTRATÉGICO",
    description:
      "Direção clara pra marca: posicionamento, tom de voz, pauta e campanha. Menos achismo, mais rota.",
    category: "COMUNICAÇÃO & MARCA",
    whatsappMessage:
      "Olá! Tenho interesse em Planejamento Estratégico para minha marca.",
    longDescription:
      "Na Yellow Lab, o planejamento estratégico é o alicerce de tudo. Mergulhamos no universo da sua marca para definir posicionamento, tom de voz, personas e pilares de conteúdo. Criamos roadmaps claros que alinham comunicação e negócio, garantindo que cada ação tenha propósito. O resultado é uma marca que sabe exatamente pra onde vai: e como chegar lá.",
    deliverables: [
      "Análise de mercado e concorrência",
      "Definição de posicionamento e tom de voz",
      "Mapeamento de personas e jornada",
      "Roadmap estratégico trimestral",
      "Planejamento de campanhas e pautas",
      "Relatório de métricas e KPIs",
    ],
  },
  {
    icon: Palette,
    name: "BRANDING & IDENTIDADE",
    description:
      "Marca com personalidade: identidade visual, narrativa e consistência em cada ponto de contato.",
    category: "COMUNICAÇÃO & MARCA",
    whatsappMessage:
      "Olá! Quero saber mais sobre Branding e Identidade Visual.",
    longDescription:
      "Construímos marcas que deixam marca. Do naming ao manual completo, cada detalhe visual e verbal é pensado para criar conexão e reconhecimento. Trabalhamos identidade visual, tipografia, paleta, aplicações e guidelines que garantem consistência em todos os pontos de contato. Sua marca ganha personalidade e presença inconfundível.",
    deliverables: [
      "Naming e tagline",
      "Logotipo e variações",
      "Paleta de cores e tipografia",
      "Manual de identidade visual",
      "Aplicações em papelaria e digital",
      "Brand guidelines completo",
    ],
  },
  {
    icon: FileText,
    name: "CONTEÚDO QUE GRUDA",
    description:
      "Conteúdo com a cara da marca. Do conceito ao criativo final. Original e estratégico.",
    category: "COMUNICAÇÃO & MARCA",
    whatsappMessage:
      "Olá! Tenho interesse nos serviços de Conteúdo da Yellow Lab.",
    longDescription:
      "Conteúdo não é só post bonito: é estratégia viva. Criamos narrativas originais que traduzem o DNA da sua marca em peças que engajam, educam e convertem. Do roteiro ao design final, cada criativo é pensado para gerar impacto real nas plataformas onde sua audiência está. Conteúdo que gruda na memória e no feed.",
    deliverables: [
      "Planejamento editorial mensal",
      "Criação de roteiros e copies",
      "Design de posts e stories",
      "Produção de vídeos curtos",
      "Adaptação para múltiplas plataformas",
      "Calendário de publicação",
    ],
  },
  {
    icon: Users,
    name: "SOCIAL MEDIA & COMUNIDADE",
    description:
      "Presença viva: calendário, publicação, interação e construção de comunidade real.",
    category: "COMUNICAÇÃO & MARCA",
    whatsappMessage:
      "Olá! Quero conversar sobre Social Media e Gestão de Comunidade.",
    longDescription:
      "Gerenciamos a presença digital da sua marca com estratégia e consistência. Do calendário editorial à interação diária com seguidores, construímos comunidade de verdade. Monitoramos métricas, ajustamos rota e garantimos que cada publicação trabalhe a favor do seu crescimento. Sua marca viva, ativa e relevante nas redes.",
    deliverables: [
      "Gestão completa de redes sociais",
      "Calendário editorial estratégico",
      "Publicação e agendamento",
      "Interação e community management",
      "Relatórios mensais de performance",
      "Análise de tendências e oportunidades",
    ],
  },
  {
    icon: TrendingUp,
    name: "TRÁFEGO PAGO & PERFORMANCE",
    description:
      "Anúncios com estratégia: testes, otimização e escala com foco em resultado real.",
    category: "COMUNICAÇÃO & MARCA",
    whatsappMessage:
      "Olá! Tenho interesse em Tráfego Pago e Performance.",
    longDescription:
      "Investimento inteligente gera resultado real. Estruturamos campanhas de tráfego pago com foco em performance: segmentação precisa, criativos testados e otimização contínua. Trabalhamos Meta Ads, Google Ads e outras plataformas para escalar seu resultado com o melhor custo-benefício. Dados orientam cada decisão.",
    deliverables: [
      "Estruturação de campanhas (Meta/Google)",
      "Criação de públicos e segmentações",
      "Testes A/B de criativos e copies",
      "Otimização contínua de campanhas",
      "Dashboard de resultados em tempo real",
      "Relatório mensal com insights",
    ],
  },
]

export const SERVICES_TECH: ServiceData[] = [
  {
    icon: Monitor,
    name: "WEB DESIGN & EXPERIÊNCIA",
    description:
      "Sites bonitos, rápidos e com objetivo: estrutura, copy, UX e design pra converter.",
    category: "TECNOLOGIA & CRESCIMENTO",
    whatsappMessage:
      "Olá! Quero saber mais sobre Web Design e criação de sites.",
    longDescription:
      "Criamos sites que não são só bonitos: são máquinas de conversão. Da arquitetura da informação ao pixel final, cada elemento é pensado para guiar o visitante até a ação. Design responsivo, performance otimizada e copywriting estratégico se unem para entregar uma experiência digital que impressiona e converte.",
    deliverables: [
      "Wireframe e arquitetura de informação",
      "Design UI/UX responsivo",
      "Desenvolvimento front-end otimizado",
      "Copywriting estratégico para web",
      "Otimização de performance (Core Web Vitals)",
      "Setup de analytics e tracking",
    ],
  },
  {
    icon: Code2,
    name: "SAAS & DESENVOLVIMENTO",
    description:
      "Produtos digitais do zero: plataformas web, apps e sistemas sob medida para empresas.",
    category: "TECNOLOGIA & CRESCIMENTO",
    whatsappMessage:
      "Olá! Tenho interesse em desenvolvimento de SaaS ou App.",
    longDescription:
      "Transformamos ideias em produtos digitais robustos. Desenvolvemos plataformas SaaS, aplicativos e sistemas sob medida com tecnologias modernas e escaláveis. Do MVP ao produto completo, acompanhamos cada fase com foco em usabilidade, performance e crescimento. Seu produto digital nasce pronto para o mercado.",
    deliverables: [
      "Discovery e validação de produto",
      "Arquitetura técnica e prototipação",
      "Desenvolvimento full-stack",
      "Integrações com APIs e serviços",
      "Deploy e infraestrutura cloud",
      "Suporte e evolução contínua",
    ],
  },
  {
    icon: Zap,
    name: "AUTOMAÇÃO COM IA",
    description:
      "Automatize processos repetitivos com inteligência artificial. Ganhe tempo, escale resultado.",
    category: "TECNOLOGIA & CRESCIMENTO",
    whatsappMessage:
      "Olá! Quero saber mais sobre Automação com IA para minha empresa.",
    longDescription:
      "Eliminamos gargalos com automação inteligente. Mapeamos processos repetitivos e criamos fluxos automatizados com IA que economizam horas da sua equipe. De chatbots a pipelines de dados, implementamos soluções que rodam sozinhas e escalam seu resultado sem aumentar a equipe. Tecnologia trabalhando por você.",
    deliverables: [
      "Mapeamento de processos automatizáveis",
      "Criação de fluxos com IA integrada",
      "Chatbots inteligentes personalizados",
      "Automação de e-mails e notificações",
      "Integração com ferramentas existentes",
      "Monitoramento e otimização contínua",
    ],
  },
  {
    icon: Bot,
    name: "AGENTES DE IA",
    description:
      "Agentes inteligentes que trabalham pela sua empresa 24 horas por dia, 7 dias por semana.",
    category: "TECNOLOGIA & CRESCIMENTO",
    whatsappMessage:
      "Olá! Tenho interesse em criar Agentes de IA para minha empresa.",
    longDescription:
      "Criamos agentes de IA customizados que operam 24/7 pela sua empresa. Desde atendimento ao cliente até análise de dados e geração de relatórios, nossos agentes são treinados com o contexto do seu negócio. Eles aprendem, se adaptam e entregam resultado consistente: sem férias, sem pausa, sem erro humano.",
    deliverables: [
      "Análise de casos de uso ideais",
      "Desenvolvimento de agente customizado",
      "Treinamento com dados do negócio",
      "Integração com canais de atendimento",
      "Dashboard de métricas do agente",
      "Evolução e refinamento contínuo",
    ],
  },
  {
    icon: GitBranch,
    name: "INTEGRAÇÕES & SISTEMAS",
    description:
      "Conectamos suas ferramentas e sistemas em um fluxo único, eficiente e automatizado.",
    category: "TECNOLOGIA & CRESCIMENTO",
    whatsappMessage:
      "Olá! Quero saber mais sobre Integrações e Sistemas.",
    longDescription:
      "Conectamos todas as peças do seu ecossistema digital. De CRMs a ERPs, de plataformas de pagamento a ferramentas de marketing: criamos integrações que fazem seus sistemas conversarem entre si. O resultado é um fluxo de trabalho unificado, eficiente e sem retrabalho. Seus dados fluem, sua operação escala.",
    deliverables: [
      "Auditoria de sistemas e ferramentas",
      "Arquitetura de integração",
      "Desenvolvimento de APIs e webhooks",
      "Conexão entre CRM, ERP e marketing",
      "Migração e sincronização de dados",
      "Documentação técnica completa",
    ],
  },
]
