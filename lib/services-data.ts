import {
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
} from "lucide-react"
import type { ServiceData } from "@/lib/types"

export const SERVICES: ServiceData[] = [
  {
    icon: Target,
    name: "AGENDA MAIS CHEIA DURANTE A SEMANA",
    description:
      "Pacientes novos a chegar por pesquisa, não só por recomendação. A segunda-feira deixa de ser o dia mais fraco.",
    category: "O QUE CONQUISTAS",
    whatsappMessage:
      "Olá! Quero saber como a Blue Bolt pode ajudar a encher a agenda da minha clínica.",
    longDescription:
      "Construímos um sistema de captação que traz pacientes novos de forma consistente ao longo de toda a semana. Deixas de depender de recomendações esporádicas e passas a ter um fluxo previsível de marcações. A segunda-feira deixa de ser o dia mais fraco e passa a ser mais um dia com agenda preenchida.",
    deliverables: [
      "Análise do perfil de paciente ideal",
      "Sistema de captação digital activo",
      "Optimização para pesquisa local",
      "Acompanhamento semanal de resultados",
      "Ajuste contínuo para maximizar marcações",
      "Relatório mensal de novos pacientes",
    ],
  },
  {
    icon: TrendingUp,
    name: "CLÍNICA NO TOPO QUANDO PESQUISAM NA ZONA",
    description:
      "Quando alguém pesquisa a tua especialidade perto da clínica, és tu que apareces. Antes de qualquer concorrente.",
    category: "O QUE CONQUISTAS",
    whatsappMessage:
      "Olá! Quero que a minha clínica apareça no topo das pesquisas na minha zona.",
    longDescription:
      "Posicionamos a tua clínica para aparecer em primeiro lugar quando alguém pesquisa a tua especialidade na tua área. Trabalhamos visibilidade local de forma consistente para que os pacientes certos te encontrem no momento em que estão prontos para marcar consulta.",
    deliverables: [
      "Optimização de perfil local completo",
      "Estratégia de visibilidade na zona",
      "Gestão de avaliações e reputação",
      "Posicionamento para especialidade e localização",
      "Monitorização de posições de pesquisa",
      "Relatório mensal de visibilidade",
    ],
  },
  {
    icon: Users,
    name: "PACIENTES QUE VOLTAM E RECOMENDAM",
    description:
      "A relação não acaba na primeira consulta. A comunicação mantém a clínica presente e transforma pacientes em embaixadores.",
    category: "O QUE CONQUISTAS",
    whatsappMessage:
      "Olá! Quero criar uma relação mais duradoura com os pacientes da minha clínica.",
    longDescription:
      "A fidelização vale mais do que a captação. Mantemos a tua clínica presente na vida dos pacientes entre consultas através de comunicação relevante e personalizada. O resultado são pacientes que voltam, que recomendam e que se tornam a melhor fonte de novos pacientes que podes ter.",
    deliverables: [
      "Programa de comunicação pós-consulta",
      "Sequências de mensagem personalizadas",
      "Campanhas de reactivação de pacientes inativos",
      "Incentivos à recomendação",
      "Gestão de avaliações e testemunhos",
      "Relatório de taxa de retenção",
    ],
  },
  {
    icon: Zap,
    name: "CRESCIMENTO SEM DEPENDER DE TI",
    description:
      "O funil trabalha enquanto estás nas consultas. Pacientes a entrar, follow-up automático, reuniões a agendar.",
    category: "O QUE CONQUISTAS",
    whatsappMessage:
      "Olá! Quero saber como fazer a minha clínica crescer sem eu ter de gerir tudo.",
    longDescription:
      "Construímos um funil de captação que funciona de forma autónoma enquanto te concentras nas consultas. Desde a primeira pesquisa até à marcação confirmada, cada passo está automatizado. O resultado é crescimento que não depende da tua atenção diária para acontecer.",
    deliverables: [
      "Mapeamento do funil de captação",
      "Automação de follow-up com leads",
      "Sistema de agendamento integrado",
      "Notificações e lembretes automáticos",
      "Painel de controlo com métricas",
      "Optimização contínua do funil",
    ],
  },
  {
    icon: BarChart3,
    name: "CLAREZA SOBRE O QUE ESTÁ A FUNCIONAR",
    description:
      "Sabes exactamente de onde vêm os pacientes, quanto custa cada um e o que mudar para crescer mais rápido.",
    category: "O QUE CONQUISTAS",
    whatsappMessage:
      "Olá! Quero perceber melhor de onde vêm os pacientes da minha clínica.",
    longDescription:
      "Acabam os investimentos às cegas. Implementamos um sistema de rastreio e análise que te mostra exactamente de onde vêm os teus pacientes, qual o custo de cada um e quais as acções com maior retorno. Tomas decisões com base em dados, não em achismos.",
    deliverables: [
      "Setup de tracking e análise completo",
      "Painel de métricas em tempo real",
      "Rastreio de origem de cada paciente",
      "Cálculo de custo por consulta",
      "Relatório mensal com insights accionáveis",
      "Reunião de análise e estratégia mensal",
    ],
  },
]

// Keep backwards compatibility
export const SERVICES_COMUNICACAO = SERVICES
export const SERVICES_TECH: ServiceData[] = []
