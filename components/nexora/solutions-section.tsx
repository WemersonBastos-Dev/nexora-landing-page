'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Lock,
  RefreshCw,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import {
  WEB_SOLUTIONS,
  WEB_APP_PILLARS,
  buildWhatsAppUrl,
  type WebSolution,
} from '@/lib/nexora-data';
import {
  DecorativeSparkle,
  DecorativeWave,
  ParallaxLayer,
  RevealOnScroll,
} from './motion-primitives';

function SolutionCapsuleIcon({ accentTone, id }: { accentTone: WebSolution['accentTone']; id: string }) {
  const toneStyles = {
    blue: 'from-[#214594] to-[#152E69] text-white shadow-[0_12px_25px_-6px_rgba(33,69,148,0.45)]',
    cyan: 'from-[#1D688A] to-[#15B8A6] text-white shadow-[0_12px_25px_-6px_rgba(21,184,166,0.4)]',
    green: 'from-[#098A4B] to-[#16E07B] text-[#0B1933] shadow-[0_12px_25px_-6px_rgba(22,224,123,0.4)]',
    petrol: 'from-[#152E69] to-[#2ED8BE] text-white shadow-[0_12px_25px_-6px_rgba(46,216,190,0.4)]',
  }[accentTone];

  const IconComponent =
    id === 'landing-page'
      ? Globe
      : id === 'redesign-site'
      ? RefreshCw
      : id === 'aplicacao-web'
      ? Code2
      : ShoppingBag;

  return (
    <div
      className={`mx-auto flex h-20 w-14 flex-col items-center justify-between rounded-full bg-gradient-to-b p-2.5 ${toneStyles}`}
      aria-hidden="true"
    >
      <span className="h-2 w-2 rounded-full bg-white/70" />
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B1933] shadow-xs">
        <IconComponent className="h-4 w-4" />
      </div>
      <span className="h-1.5 w-4 rounded-full bg-white/50" />
    </div>
  );
}

export function NexoraSolutionsSection() {
  const [activeAppTab, setActiveAppTab] = useState<'ui' | 'db' | 'sec'>('ui');

  return (
    <div className="relative pt-10 sm:pt-20">
      {/* SECTION 1: SOLUÇÕES (4 Rounded Cards connected by curved background ribbon) */}
      <section
        id="solucoes"
        aria-labelledby="heading-solucoes"
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <RevealOnScroll variant="heading" className="relative mx-auto max-w-2xl text-center">
            <DecorativeSparkle className="hidden sm:block absolute -left-8 top-6 h-5 w-5 text-[#0B1933]" />
            <DecorativeSparkle className="hidden sm:block absolute -right-6 top-2 h-5 w-5 text-[#16E07B]" />
            <DecorativeWave className="hidden sm:block absolute -bottom-5 right-4 w-16 h-4 text-[#214594]" />

            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
              Pacotes de Investimento
            </p>
            <h2
              id="heading-solucoes"
              className="mt-2 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
            >
              O que nós{' '}
              <span className="text-[#214594]">desenvolvemos?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3B4E6B] leading-relaxed">
              Soluções web planejadas para diferentes momentos do seu negócio,
              combinando identidade visual estratégica, usabilidade e
              performance.
            </p>
          </RevealOnScroll>
        </div>

        {/* Curved Connecting Ribbon + 4 Cards Grid */}
        <div className="relative mt-12 sm:mt-16 overflow-hidden py-2">
          {/* Decorative Curved Ribbon behind the 4 cards (inspired by Kard reference) */}
          <ParallaxLayer
            speed={0.45}
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
          >
            <svg
              viewBox="0 0 1440 260"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="h-52 w-full overflow-hidden"
            >
              <path
                d="M0 210 C 320 60, 560 220, 880 120 C 1140 40, 1320 90, 1440 20"
                stroke="url(#nexoraRibbonGradient)"
                strokeWidth="76"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="nexoraRibbonGradient"
                  x1="0"
                  y1="130"
                  x2="1440"
                  y2="130"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#214594" />
                  <stop offset="45%" stopColor="#15B8A6" />
                  <stop offset="75%" stopColor="#16E07B" />
                  <stop offset="100%" stopColor="#214594" />
                </linearGradient>
              </defs>
            </svg>
          </ParallaxLayer>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
              {WEB_SOLUTIONS.map((solution, idx) => (
                <RevealOnScroll
                  key={solution.id}
                  as="article"
                  variant="card"
                  delayMs={idx * 85}
                  className="flex flex-col justify-between rounded-[36px] border border-[#DCE6F2] bg-white/95 backdrop-blur-xs p-6 sm:p-7 shadow-[0_22px_50px_-14px_rgba(11,25,51,0.10)] hover:border-[#214594]/40 transition-colors"
                >
                  <div>
                    {/* Capsule Icon Header inspired by reference */}
                    <div className="text-center">
                      <SolutionCapsuleIcon
                        accentTone={solution.accentTone}
                        id={solution.id}
                      />
                      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#0B1933]">
                        {solution.title}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#1D688A]">
                        {solution.shortSubtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#3B4E6B]">
                        {solution.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px w-full bg-[#EEF5FB]" />

                    {/* Deliverables List from PDF */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5A6E8C]">
                        Incluso no pacote:
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {solution.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#0B1933]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#16E07B]/20 text-[#098A4B]"
                            >
                              <Check className="h-3 w-3 stroke-[3]" />
                            </span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-7 pt-4 border-t border-[#EEF5FB]">
                    <a
                      href={buildWhatsAppUrl(solution.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar orçamento para ${solution.title} pelo WhatsApp (abre em nova aba)`}
                      className="nx-btn flex w-full items-center justify-center gap-2 rounded-full bg-[#EEF5FB] px-5 py-3 text-xs sm:text-sm font-bold text-[#0B1933] hover:bg-[#214594] hover:text-white whitespace-nowrap"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEÇÃO DE DESTAQUE — APLICAÇÕES WEB (Inspired by the reference's App Spotlight section) */}
      <section
        aria-labelledby="heading-webapp-spotlight"
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Text & Architectural Highlights */}
            <RevealOnScroll variant="heading" className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
                Destaque Técnico · Sistemas Sob Medida
              </p>
              <h2
                id="heading-webapp-spotlight"
                className="mt-2 text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
              >
                Evolua sua operação com{' '}
                <span className="text-[#214594]">aplicações web</span> sob
                medida
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3B4E6B]">
                Desenvolvemos sistemas e plataformas funcionais e escaláveis
                para o seu negócio, unindo interface intuitiva, experiência do
                usuário otimizada, banco de dados estruturado e segurança.
              </p>

              {/* 3 Architectural Pillars from the PDF */}
              <div className="mt-7 space-y-4">
                {WEB_APP_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-[#DCE6F2] bg-white p-4 sm:p-5 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold text-[#0B1933]">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-bold text-[#1D688A]">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3B4E6B]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action buttons (Replacing App Store badges with authentic NEXORA actions) */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={buildWhatsAppUrl('Aplicação Web Sob Medida')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1933] px-5 sm:px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#214594] text-center"
                >
                  <span>Conversar sobre uma Aplicação Web</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2 text-sm font-bold text-[#214594] hover:text-[#0B1933] transition-colors text-center"
                >
                  <span>Conhecer etapas de desenvolvimento</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </RevealOnScroll>

            {/* Right Column: Interactive Conceptual Web App Showcase */}
            <RevealOnScroll variant="card" delayMs={90} className="lg:col-span-6">
              <div className="relative mx-auto max-w-[520px] py-4">
                {/* Interactive Concept Frame */}
                <ParallaxLayer speed={0.85}>
                  <div className="relative z-10 rounded-[30px] border-4 border-[#0B1933] bg-white p-5 sm:p-6 shadow-[0_28px_60px_-15px_rgba(11,25,51,0.22)]">
                    {/* Concept Top Bar + Interactive Layer Switcher */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE6F2] pb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D688A]">
                          Demonstração Conceitual
                        </span>
                        <h3 className="text-base font-extrabold text-[#0B1933]">
                          Plataforma Web NEXORA
                        </h3>
                      </div>

                      {/* Segmented interactive buttons to inspect Web App layers */}
                      <div
                        role="tablist"
                        aria-label="Camadas da Aplicação Web"
                        className="flex items-center gap-1 rounded-xl bg-[#EEF5FB] p-1"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeAppTab === 'ui'}
                          onClick={() => setActiveAppTab('ui')}
                          className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap ${
                            activeAppTab === 'ui'
                              ? 'bg-[#214594] text-white shadow-xs'
                              : 'text-[#3B4E6B] hover:text-[#0B1933]'
                          }`}
                        >
                          UI / UX
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeAppTab === 'db'}
                          onClick={() => setActiveAppTab('db')}
                          className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap ${
                            activeAppTab === 'db'
                              ? 'bg-[#214594] text-white shadow-xs'
                              : 'text-[#3B4E6B] hover:text-[#0B1933]'
                          }`}
                        >
                          Dados
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeAppTab === 'sec'}
                          onClick={() => setActiveAppTab('sec')}
                          className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap ${
                            activeAppTab === 'sec'
                              ? 'bg-[#214594] text-white shadow-xs'
                              : 'text-[#3B4E6B] hover:text-[#0B1933]'
                          }`}
                        >
                          Segurança
                        </button>
                      </div>
                    </div>

                    {/* Highlighted Module Banner inside Concept */}
                    <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#214594] to-[#1D688A] p-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#2ED8BE]">
                          {activeAppTab === 'ui'
                            ? 'Front-end Reativo & UX Otimizada'
                            : activeAppTab === 'db'
                            ? 'Back-end Robusto & Banco de Dados'
                            : 'Segurança, Testes e Manutenção'}
                        </span>
                        {activeAppTab === 'ui' && (
                          <LayoutDashboard className="h-4 w-4 text-[#16E07B]" aria-hidden="true" />
                        )}
                        {activeAppTab === 'db' && (
                          <Database className="h-4 w-4 text-[#16E07B]" aria-hidden="true" />
                        )}
                        {activeAppTab === 'sec' && (
                          <Lock className="h-4 w-4 text-[#16E07B]" aria-hidden="true" />
                        )}
                      </div>
                      <p className="mt-1 text-lg font-extrabold">
                        {activeAppTab === 'ui'
                          ? 'Painel Intuitivo e Fluxos Claros'
                          : activeAppTab === 'db'
                          ? 'Modelagem Escalável sob Medida'
                          : 'Proteção, Validação e Estabilidade'}
                      </p>
                      <p className="mt-1 text-xs text-white/85">
                        {activeAppTab === 'ui'
                          ? 'Interfaces responsivas que facilitam a rotina de equipes e usuários finais.'
                          : activeAppTab === 'db'
                          ? 'Estrutura de banco de dados planejada para armazenar e consultar processos com rapidez.'
                          : 'Boas práticas de segurança, testes funcionais e acompanhamento técnico.'}
                      </p>
                    </div>

                    {/* Conceptual Module Checklist */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-xl border border-[#DCE6F2] bg-[#F7FAFC] p-3.5">
                        <p className="text-xs font-bold text-[#0B1933]">
                          {activeAppTab === 'ui'
                            ? 'Navegação Fluida'
                            : activeAppTab === 'db'
                            ? 'Regras de Negócio'
                            : 'Controle e Confiabilidade'}
                        </p>
                        <p className="mt-1 text-xs text-[#3B4E6B]">
                          {activeAppTab === 'ui'
                            ? 'Componentes acessíveis em desktop e dispositivos móveis.'
                            : activeAppTab === 'db'
                            ? 'Funcionalidades essenciais construídas para sua demanda.'
                            : 'Validação de fluxos e manutenção preventiva do sistema.'}
                        </p>
                      </div>
                      <div className="rounded-xl border border-[#DCE6F2] bg-[#F7FAFC] p-3.5">
                        <p className="text-xs font-bold text-[#0B1933]">
                          {activeAppTab === 'ui'
                            ? 'Consistência Visual'
                            : activeAppTab === 'db'
                            ? 'Integrações & Rotas'
                            : 'Testes e Validação'}
                        </p>
                        <p className="mt-1 text-xs text-[#3B4E6B]">
                          {activeAppTab === 'ui'
                            ? 'Alinhamento total com a identidade da sua marca.'
                            : activeAppTab === 'db'
                            ? 'Comunicação eficiente entre front-end e back-end.'
                            : 'Verificação rigorosa antes da entrega definitiva.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </ParallaxLayer>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: BLOCO ESCURO DE CONVERSÃO (Inspired by the dark rounded banner with overlapping visuals in reference) */}
      <section
        aria-labelledby="heading-dark-conversion"
        className="relative py-10 sm:py-16"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="card">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0A1833] via-[#11244A] to-[#0E2247] p-6 sm:p-10 lg:p-14 shadow-[0_28px_64px_-16px_rgba(6,15,34,0.45)]">

              <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Left Side: Overlapping Conceptual Web Windows (Replacing reference's debit cards) */}
                <div className="lg:col-span-6">
                  <div className="relative mx-auto max-w-[460px] py-2">
                    {/* Top Tilted Light Interface Window */}
                    <ParallaxLayer speed={0.75}>
                      <div className="relative z-20 rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[#F3FAFF] to-[#DFF4F0] p-4 sm:p-5 text-[#0B1933] shadow-xl sm:rotate-[4deg]">
                        <div className="flex items-center justify-between border-b border-[#DCE6F2] pb-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#214594]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#16E07B]" />
                          </div>
                          <span className="text-[11px] font-bold text-[#1D688A]">
                            Conceito · E-commerce & Web
                          </span>
                        </div>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#5A6E8C]">
                          Experiência Digital Sob Medida
                        </p>
                        <p className="mt-0.5 text-lg sm:text-xl font-extrabold tracking-tight text-[#0B1933]">
                          DESIGN · UX/UI · PERFORMANCE
                        </p>
                        <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#214594]">
                          <span>Mobile First & Responsivo</span>
                          <span>Desde 2022</span>
                        </div>
                      </div>
                    </ParallaxLayer>

                    {/* Bottom Overlapping Deep Blue Interface Window */}
                    <ParallaxLayer speed={1.0}>
                      <div className="relative z-10 -mt-6 ml-4 sm:ml-10 rounded-2xl border border-[#2ED8BE]/30 bg-gradient-to-r from-[#214594] to-[#1D688A] p-4 sm:p-5 text-white shadow-2xl sm:-rotate-[5deg]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#31FA8C]">
                            Dashboard & Conversão
                          </span>
                          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold">
                            NEXORA Web
                          </span>
                        </div>
                        <p className="mt-2 text-sm sm:text-base font-extrabold">
                          Sites, Sistemas e Lojas Virtuais Interativas
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-[11px] text-white/80">
                          <span>Código Escalável</span>
                          <span aria-hidden="true">·</span>
                          <span>Identidade Estratégica</span>
                        </div>
                      </div>
                    </ParallaxLayer>
                  </div>
                </div>

                {/* Right Side: Conversion Text & CTAs */}
                <div className="lg:col-span-6 text-white">
                  <h2
                    id="heading-dark-conversion"
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] [text-wrap:balance]"
                  >
                    Vamos transformar a{' '}
                    <span className="text-[#31FA8C]">sua visão</span> em uma
                    presença digital memorável
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#B8C7DF]">
                    Conte para a nossa equipe o que o seu negócio precisa.
                    Planejamos e desenvolvemos o seu projeto com acompanhamento
                    próximo, organização e transparência em cada etapa.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nx-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#16E07B] px-6 py-3.5 text-sm font-extrabold text-[#0B1933] shadow-lg hover:bg-[#31FA8C] text-center"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>

                    <a
                      href="#processo"
                      className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-white hover:text-[#31FA8C] transition-colors py-1 text-center"
                    >
                      <span className="border-b border-white/40 pb-0.5 group-hover:border-[#31FA8C]">
                        Como funciona o processo
                      </span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
