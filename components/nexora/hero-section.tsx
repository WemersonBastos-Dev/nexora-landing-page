'use client';

import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers,
  Layout,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import {
  HIGHLIGHT_STRIP_ITEMS,
  WEB_SOLUTIONS,
  buildWhatsAppUrl,
} from '@/lib/nexora-data';
import {
  DecorativeSparkle,
  DecorativeWave,
  HeroVisualLayer,
  ParallaxLayer,
  RevealOnScroll,
} from './motion-primitives';

export function NexoraHeroSection() {
  const whatsappHref = buildWhatsAppUrl();

  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero layout: Message on left, layered visual composition on right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Immediate availability for text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6">
            <h1 className="text-[2.35rem] font-extrabold tracking-tight text-[#0B1933] sm:text-5xl lg:text-[3.5rem] leading-[1.08] [text-wrap:balance]">
              Vamos tornar a sua{' '}
              <span className="relative inline-block align-baseline mx-1 my-1">
                {/* Green offset accent layer behind the primary blue pill block */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-2xl bg-[#16E07B] -rotate-2"
                />
                <span className="relative inline-block rounded-2xl bg-[#214594] px-4 py-1 text-white shadow-md -rotate-1">
                  marca
                </span>
              </span>{' '}
              conhecida?
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#3B4E6B] font-normal">
              A NEXORA desenvolve experiências digitais que unem design,
              funcionalidade e resultado. Criamos Landing Pages, Redesign de
              Sites, Aplicações Web sob medida e E-commerce Interativo com foco
              em UX/UI e performance.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-btn inline-flex items-center justify-center gap-2.5 rounded-full bg-[#214594] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-[0_14px_30px_-8px_rgba(33,69,148,0.45)] hover:bg-[#152E69] whitespace-nowrap shrink-0"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 py-2.5 text-sm sm:text-base font-bold text-[#0B1933] hover:text-[#214594] transition-colors whitespace-nowrap shrink-0"
              >
                <span className="border-b-2 border-[#0B1933]/30 pb-0.5 group-hover:border-[#214594] transition-colors">
                  Conhecer soluções
                </span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Layered conceptual web interfaces composition */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-[540px] py-4 sm:py-8">
              {/* Layer 1: Primary Tilted Conceptual Web Interface Window */}
              <HeroVisualLayer delayMs={60}>
                <ParallaxLayer speed={0.85}>
                  <div
                    role="img"
                    aria-label="Conceito ilustrativo de interface web moderna desenvolvida pela NEXORA"
                    className="relative z-10 rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-[#F5FAFF] to-[#E6F4F8] p-5 sm:p-6 shadow-[0_28px_65px_-15px_rgba(11,25,51,0.18)] sm:rotate-[4deg]"
                  >
                    {/* Browser Window Top Bar */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#DCE6F2] pb-3.5">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#214594]" />
                        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#2ED8BE]" />
                        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#16E07B]" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-[#EEF5FB] px-2.5 sm:px-3 py-1 text-[11px] font-semibold text-[#3B4E6B] truncate">
                        <Globe className="h-3 w-3 text-[#214594] shrink-0" aria-hidden="true" />
                        <span className="truncate">Conceito · Experiência UX/UI</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-[#214594] whitespace-nowrap shrink-0">
                        Mobile First
                      </span>
                    </div>

                    {/* Conceptual Web Layout Inside Window */}
                    <div className="mt-4 grid grid-cols-12 gap-3.5">
                      {/* Left Hero Mockup Block */}
                      <div className="col-span-12 sm:col-span-7 rounded-2xl bg-[#0B1933] p-4 text-white">
                        <span className="text-[11px] font-semibold text-[#2ED8BE]">
                          Arquitetura & Design
                        </span>
                        <p className="mt-1 text-base font-extrabold leading-snug">
                          Interface responsiva de alta conversão
                        </p>
                        <div className="mt-3 space-y-1.5">
                          <div className="h-2 w-4/5 rounded-full bg-white/25" />
                          <div className="h-2 w-3/5 rounded-full bg-white/15" />
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-block rounded-full bg-[#16E07B] px-3 py-1 text-[11px] font-extrabold text-[#0B1933]">
                            Clean Design
                          </span>
                          <span className="text-[11px] text-[#B8C7DF]">
                            UX/UI Otimizada
                          </span>
                        </div>
                      </div>

                      {/* Right Modular Stack */}
                      <div className="col-span-12 sm:col-span-5 flex flex-col justify-between gap-3">
                        <div className="rounded-2xl border border-[#DCE6F2] bg-white p-3.5 shadow-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0B1933]">
                              Performance
                            </span>
                            <Zap
                              className="h-4 w-4 text-[#098A4B]"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="mt-1 text-[11px] text-[#3B4E6B]">
                            Carregamento ágil e código escalável
                          </p>
                          <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#EEF5FB]">
                            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#214594] via-[#15B8A6] to-[#16E07B]" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-[#DCE6F2] bg-white p-3.5 shadow-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0B1933]">
                              Consistência
                            </span>
                            <Layers
                              className="h-4 w-4 text-[#214594]"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="mt-1 text-[11px] text-[#3B4E6B]">
                            Paleta estratégica e tipografia legível
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxLayer>
              </HeroVisualLayer>

              {/* Layer 2: Overlapping Secondary Conceptual Card (Bottom-Right / Left offset) */}
              <HeroVisualLayer delayMs={160}>
                <ParallaxLayer speed={1.05}>
                  <div className="relative z-20 -mt-5 ml-auto max-w-[330px] rounded-2xl border border-[#DCE6F2] bg-white p-4 shadow-[0_20px_45px_-12px_rgba(11,25,51,0.18)] sm:-rotate-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#214594] to-[#15B8A6] text-white">
                        <Layout className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-[#0B1933]">
                          Sistemas, Lojas & Sites
                        </p>
                        <p className="text-[11px] text-[#3B4E6B]">
                          Conceito sob medida para o seu negócio
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-[#EEF5FB] pt-2.5 text-[11px] font-semibold text-[#1D688A]">
                      <span>Front-end Reativo</span>
                      <span aria-hidden="true">·</span>
                      <span>Back-end Robusto</span>
                    </div>
                  </div>
                </ParallaxLayer>
              </HeroVisualLayer>
            </div>
          </div>
        </div>

        {/* FAIXA DE DESTAQUES */}
        <RevealOnScroll className="mt-14 sm:mt-20">
          <div className="relative">
            <div className="relative rounded-[28px] bg-[#0A1833] p-6 sm:p-8 lg:p-8 shadow-[0_24px_60px_-15px_rgba(10,24,51,0.35)]">
              {/* Top row inside dark bar: Proven Areas of Action from PDF */}
              <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                <div className="flex items-center gap-3">
                  <DecorativeSparkle className="h-5 w-5 text-[#16E07B] shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    Especialidades NEXORA
                  </span>
                  <ArrowRight
                    className="hidden sm:inline-block h-4 w-4 text-[#2ED8BE]"
                    aria-hidden="true"
                  />
                </div>

                <ul
                  aria-label="Áreas de atuação da NEXORA"
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#B8C7DF]"
                >
                  {WEB_SOLUTIONS.map((sol, idx) => (
                    <li key={sol.id} className="flex items-center gap-2">
                      {idx > 0 && (
                        <span
                          aria-hidden="true"
                          className="text-[#2ED8BE]/50 hidden sm:inline"
                        >
                          ·
                        </span>
                      )}
                      <a
                        href="#solucoes"
                        className="hover:text-white transition-colors"
                      >
                        {sol.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4 White Highlight Cards enclosed cleanly inside the container */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {HIGHLIGHT_STRIP_ITEMS.map((item) => (
                  <div
                    key={item.badge}
                    className="rounded-2xl border border-[#DCE6F2] bg-white p-4 sm:p-5 shadow-[0_14px_34px_-10px_rgba(11,25,51,0.12)]"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0B1933] tabular-nums">
                        {item.badge}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D688A]">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#3B4E6B]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
