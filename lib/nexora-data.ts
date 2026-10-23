export const NEXORA_CONTACT = {
  whatsappPhoneDisplay: '+55 (88) 99720-4035',
  whatsappPhoneRaw: '5588997204035',
  defaultWhatsappMessage:
    'Olá! Conheci a NEXORA pelo site e gostaria de solicitar um orçamento para meu projeto.',
  instagramUrl: 'https://www.instagram.com/nexora_dev_/',
  instagramHandle: '@nexora_dev_',
  foundedYear: 2022,
} as const;

export function buildWhatsAppUrl(serviceName?: string): string {
  const base = `https://wa.me/${NEXORA_CONTACT.whatsappPhoneRaw}`;
  const message = serviceName
    ? `${NEXORA_CONTACT.defaultWhatsappMessage} Tenho interesse em: ${serviceName}.`
    : NEXORA_CONTACT.defaultWhatsappMessage;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function calculateParallaxOffset(params: {
  rectTop: number;
  rectHeight: number;
  viewportHeight: number;
  speed: number;
  isMobile: boolean;
  reducedMotion: boolean;
}): number {
  const { rectTop, rectHeight, viewportHeight, speed, isMobile, reducedMotion } = params;
  if (reducedMotion || viewportHeight <= 0) {
    return 0;
  }
  const elementCenter = rectTop + rectHeight / 2;
  const viewportCenter = viewportHeight / 2;
  // Normalized distance from center in [-1, 1]
  const normalized = (viewportCenter - elementCenter) / (viewportHeight * 0.65);
  const clampedNorm = Math.max(-1, Math.min(1, normalized));
  const maxPx = isMobile ? 8 : 26;
  const rawOffset = clampedNorm * maxPx * speed;
  const limit = isMobile ? 10 : 30;
  return Math.round(Math.max(-limit, Math.min(limit, rawOffset)) * 10) / 10;
}

export function getCommercialTermsSummary() {
  return {
    entryPercentage: 50,
    remainingOnApprovalPercentage: 50,
    includedFreeRevisions: 3,
    extraRevisionFeePercentage: 5,
    deliveryTimelineRule: 'Prazo definido de acordo com a demanda do projeto',
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export interface HighlightItem {
  badge: string;
  label: string;
  detail: string;
}

export const HIGHLIGHT_STRIP_ITEMS: HighlightItem[] = [
  {
    badge: 'Desde 2022',
    label: 'Atuação no Mercado',
    detail: 'Desenvolvimento web focado em design, funcionalidade e resultado.',
  },
  {
    badge: 'UX/UI & Performance',
    label: 'Foco em Experiência',
    detail: 'Interfaces pensadas para conectar marcas ao seu público com eficiência.',
  },
  {
    badge: '4 Frentes Web',
    label: 'Soluções Especializadas',
    detail: 'Landing Pages, Redesign, Aplicações Web e E-commerce Interativo.',
  },
  {
    badge: 'Até 3 Ajustes',
    label: 'Acompanhamento Real',
    detail: 'Participação ativa na criação com até 3 alterações sem custo adicional.',
  },
];

export interface WebSolution {
  id: string;
  title: string;
  shortSubtitle: string;
  description: string;
  tierStars: number;
  accentTone: 'blue' | 'cyan' | 'green' | 'petrol';
  deliverables: string[];
}

export const WEB_SOLUTIONS: WebSolution[] = [
  {
    id: 'landing-page',
    title: 'Landing Pages',
    shortSubtitle: 'Páginas de alta conversão',
    description:
      'Páginas estratégicas pensadas para transformar visitantes em clientes, com leitura fluida, carregamento ágil e apresentação clara da sua oferta.',
    tierStars: 1,
    accentTone: 'blue',
    deliverables: [
      'Clean Design',
      'Hierarquia Visual Clara',
      'Tipografia Legível',
      'Paleta de Cores Estratégica',
      'Responsividade (Mobile First)',
      'Velocidade de Carregamento',
      'Consistência Visual',
      'Visuais de Apoio',
    ],
  },
  {
    id: 'redesign-site',
    title: 'Redesign de Sites',
    shortSubtitle: 'Renovação visual e técnica',
    description:
      'Renovamos sites existentes com visual moderno, performance otimizada e melhor experiência de navegação, alinhados ao posicionamento da sua marca.',
    tierStars: 2,
    accentTone: 'cyan',
    deliverables: [
      'Diagnóstico Completo',
      'Pesquisa de Usuário',
      'Nova Hierarquia Visual',
      'Melhorias na Experiência (UX)',
      'Melhorias na Interface (UI)',
      'Consistência com Branding',
      'Design Responsivo e Acessível',
      'Teste e Validação',
    ],
  },
  {
    id: 'aplicacao-web',
    title: 'Aplicações Web',
    shortSubtitle: 'Sistemas e plataformas sob medida',
    description:
      'Desenvolvemos sistemas e plataformas sob medida, funcionais e escaláveis para a operação e o crescimento do seu negócio.',
    tierStars: 3,
    accentTone: 'green',
    deliverables: [
      'Interface do Usuário (UI) Intuitiva',
      'Experiência do Usuário (UX) Otimizada',
      'Funcionalidades Essenciais Sob Medida',
      'Back-end Robusto',
      'Front-end Reativo',
      'Banco de Dados Estruturado',
      'Segurança Aplicada',
      'Testes e Manutenção',
    ],
  },
  {
    id: 'ecommerce-interativo',
    title: 'E-commerce Interativo',
    shortSubtitle: 'Lojas online completas',
    description:
      'Lojas virtuais completas com foco em usabilidade, administração intuitiva e jornada de compra fluida para o cliente final.',
    tierStars: 4,
    accentTone: 'petrol',
    deliverables: [
      'Experiência (UX) Interativa',
      'Interface (UI) Atraente e Intuitiva',
      'Interatividade no Produto',
      'Confiança e Segurança',
      'Integrações Inteligentes',
      'Dashboard Admin Interativo',
      'Funcionalidades Mobile',
      'Carrinho e Checkout Interativo',
    ],
  },
];

export interface WebAppPillar {
  title: string;
  description: string;
  tag: string;
}

export const WEB_APP_PILLARS: WebAppPillar[] = [
  {
    title: 'UI Intuitiva & UX Otimizada',
    description:
      'Fluxos claros e interfaces reativas projetadas para reduzir atritos no uso diário da plataforma.',
    tag: 'Front-end Reativo',
  },
  {
    title: 'Arquitetura & Banco de Dados',
    description:
      'Back-end robusto e modelagem de dados estruturada para suportar regras de negócio específicas sob medida.',
    tag: 'Back-end Robusto',
  },
  {
    title: 'Segurança, Testes e Manutenção',
    description:
      'Validação técnica contínua, proteção de dados e estabilidade operacional para sistemas escaláveis.',
    tag: 'Segurança & Qualidade',
  },
];

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'comunicacao',
    title: 'Comunicação clara',
    description:
      'Diálogo direto e acessível em todas as etapas, do alinhamento inicial à apresentação do projeto.',
  },
  {
    id: 'criatividade',
    title: 'Criatividade aplicada',
    description:
      'Soluções visuais originais que destacam a identidade da sua marca sem abrir mão da usabilidade.',
  },
  {
    id: 'profissionalismo',
    title: 'Profissionalismo e ética',
    description:
      'Compromisso formal por contrato, cumprimento do escopo combinado e transparência comercial.',
  },
  {
    id: 'agilidade',
    title: 'Agilidade na execução',
    description:
      'Processo organizado em etapas bem definidas para manter o ritmo de produção conforme a demanda.',
  },
  {
    id: 'atratividade',
    title: 'Atratividade da marca',
    description:
      'Design consistente, tipografia legível e paleta estratégica que valorizam a percepção do seu negócio.',
  },
  {
    id: 'visibilidade',
    title: 'Presença e visibilidade',
    description:
      'Estrutura responsiva e performance otimizada para posicionar sua marca com solidez no ambiente digital.',
  },
];

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Contato inicial',
    subtitle: 'Conversa informal',
    description:
      'Primeiro contato para conhecer seu negócio, entender os objetivos do projeto e identificar a solução mais adequada.',
  },
  {
    stepNumber: '02',
    title: 'Contrato',
    subtitle: 'Termo de responsabilidade',
    description:
      'Formalização da parceria com definição clara de escopo, responsabilidades e condições comerciais.',
  },
  {
    stepNumber: '03',
    title: 'Entrada e briefing',
    subtitle: '50% de entrada e envio de briefing',
    description:
      'Início oficial mediante pagamento de 50% de entrada e coleta das informações estratégicas e referências da marca.',
  },
  {
    stepNumber: '04',
    title: 'Alinhamento',
    subtitle: 'Esclarecimento de dúvidas',
    description:
      'Momento dedicado a tirar quaisquer dúvidas sobre a estrutura, funcionalidades e direção visual do projeto.',
  },
  {
    stepNumber: '05',
    title: 'Produção',
    subtitle: 'Prazo conforme a demanda',
    description:
      'Desenvolvimento técnico e visual da solução, com tempo de entrega planejado de acordo com a demanda do projeto.',
  },
  {
    stepNumber: '06',
    title: 'Apresentação e ajustes',
    subtitle: 'Até 3 alterações sem custo adicional',
    description:
      'Você acompanha o processo de criação e pode solicitar até três alterações sem custos adicionais (alterações extras têm taxa de 5% do valor total).',
  },
  {
    stepNumber: '07',
    title: 'Aprovação, quitação e entrega',
    subtitle: 'Entrega definitiva',
    description:
      'Após a aprovação final do cliente e o pagamento dos 50% restantes, o projeto é entregue definitivamente.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Wemerson B. Evangelista',
    role: 'Desenvolvedor',
    image: '/assets/nexora/team-wemerson.png',
  },
  {
    name: 'Gusttavo B. de Sousa',
    role: 'Desenvolvedor',
    image: '/assets/nexora/team-gusttavo.png',
  },
  {
    name: 'Cícero Lucas Soares Alves',
    role: 'Desenvolvedor',
    image: '/assets/nexora/team-cicero.png',
  },
];

export interface IdealItem {
  id: 'missao' | 'valores' | 'visao';
  title: string;
  summary: string;
}

export const NEXORA_IDEALS: IdealItem[] = [
  {
    id: 'missao',
    title: 'Missão',
    summary:
      'Impulsionar sua marca no ambiente digital por meio de soluções web estratégicas, modernas e eficazes — criando sites e plataformas que geram valor, melhoram a experiência do usuário e fortalecem sua presença online, sempre respeitando os princípios e objetivos do seu negócio.',
  },
  {
    id: 'valores',
    title: 'Valores',
    summary:
      'Comprometimento, inovação e ética profissional são a base do nosso trabalho. Buscamos constantemente a superação, a criatividade e a melhoria contínua para entregar resultados de excelência aos nossos clientes.',
  },
  {
    id: 'visao',
    title: 'Visão',
    summary:
      'Ser reconhecida nacionalmente como uma empresa parceira, inovadora e criativa, oferecendo as melhores soluções e serviços para todos que se relacionam conosco, direta ou indiretamente.',
  },
];

export const COMPLEMENTARY_SERVICES: string[] = [
  'Organização da rede',
  'Logo',
  'Post Feed / Story Unitário',
  'Story Animado',
  'Apresentação Comercial',
  'Copy para Redes Sociais',
  'Papel Timbrado',
  'QR Code',
  'Panfleto',
  'Cardápios',
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-pagamento',
    question: 'Como funciona a forma de pagamento e início do projeto?',
    answer:
      'Após a conversa inicial e assinatura do contrato (termo de responsabilidade), o projeto é iniciado mediante o pagamento de 50% de entrada e o envio do briefing. Os 50% restantes são quitados na etapa de encerramento, junto à aprovação final para a entrega definitiva.',
  },
  {
    id: 'faq-alteracoes',
    question: 'Quantas alterações estão inclusas durante a criação?',
    answer:
      'O cliente pode acompanhar todo o processo de criação e solicitar até 3 (três) alterações no projeto sem custos adicionais. Caso sejam necessárias alterações adicionais além das três inclusas, aplica-se uma taxa correspondente a 5% do valor total do projeto.',
  },
  {
    id: 'faq-prazos',
    question: 'Qual é o prazo de entrega de um site ou aplicação web?',
    answer:
      'O tempo de entrega na etapa de produção é definido de acordo com a demanda e a complexidade de cada projeto (Landing Page, Redesign, Aplicação Web ou E-commerce Interativo), sendo alinhado previamente com o cliente.',
  },
  {
    id: 'faq-solucoes',
    question: 'Como saber qual pacote de desenvolvimento web é ideal para minha necessidade?',
    answer:
      'Atuamos em quatro frentes principais: Landing Pages (foco em conversão de visitantes), Redesign de Sites (renovação visual, UX/UI e performance de sites existentes), Aplicações Web (sistemas sob medida com banco de dados e back-end robusto) e E-commerce Interativo (lojas online completas com dashboard admin e checkout interativo). No contato inicial ajudamos a identificar o formato ideal.',
  },
  {
    id: 'faq-outros-servicos',
    question: 'Além do desenvolvimento web, a NEXORA oferece materiais de apoio visual?',
    answer:
      'Sim. Como serviços complementares, também desenvolvemos identidade visual e materiais digitais ou gráficos, como Logo, Apresentação Comercial, Organização da rede, Post Feed/Story Unitário, Story Animado, Copy para Redes Sociais, Papel Timbrado, QR Code, Panfleto e Cardápios.',
  },
];
