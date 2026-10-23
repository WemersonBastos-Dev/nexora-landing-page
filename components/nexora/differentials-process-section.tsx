'use client';

import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Eye,
  FileCheck2,
  MessageSquare,
  Palette,
  RefreshCcw,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react';
import {
  DIFFERENTIALS,
  PROCESS_STEPS,
  buildWhatsAppUrl,
} from '@/lib/nexora-data';
import {
  DecorativeSparkle,
  DecorativeWave,
  ParallaxLayer,
  RevealOnScroll,
} from './motion-primitives';

const DIFFERENTIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  comunicacao: MessageSquare,
  criatividade: Sparkles,
  profissionalismo: Shield,
  agilidade: Zap,
  atratividade: Palette,
  visibilidade: Eye,
};

export function NexoraDifferentialsAndProcessSection() {
  return (
    <div>
      {/* SECTION: DIFERENCIAIS */}
      <section
        id="diferenciais"
        aria-labelledby="heading-diferenciais"
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="heading" className="relative mx-auto max-w-2xl text-center">
            <DecorativeSparkle className="hidden sm:block absolute -left-6 top-3 h-5 w-5 text-[#0B1933]" />
            <DecorativeSparkle className="hidden sm:block absolute -right-4 top-8 h-5 w-5 text-[#16E07B]" />

            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
              Vantagens de Trabalhar Conosco
            </p>
            <h2
              id="heading-diferenciais"
              className="mt-2 text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
            >
              Por que construir seu projeto com a{' '}
              <span className="text-[#214594]">NEXORA?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3B4E6B] leading-relaxed">
              Unimos organização técnica, direção visual moderna e diálogo
              próximo para entregar soluções eficientes e alinhadas aos
              objetivos do seu negócio.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIALS.map((item, idx) => {
              const Icon = DIFFERENTIAL_ICONS[item.id] || Sparkles;
              return (
                <RevealOnScroll
                  key={item.id}
                  as="article"
                  variant="card"
                  delayMs={(idx % 3) * 85}
                  className="rounded-[28px] border border-[#DCE6F2] bg-white p-6 sm:p-7 shadow-[0_18px_40px_-14px_rgba(11,25,51,0.07)] hover:border-[#214594]/35 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF5FB] text-[#214594]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-[#0B1933]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#3B4E6B]">
                    {item.description}
                  </p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: PROCESSO DE TRABALHO & CONDIÇÕES COMERCIAIS */}
      <section
        id="processo"
        aria-labelledby="heading-processo"
        className="relative py-16 sm:py-24 bg-[#EEF5FB]/70 border-y border-[#DCE6F2] overflow-hidden"
      >
        {/* Subtle decorative wave */}
        <ParallaxLayer
          speed={0.4}
          className="pointer-events-none absolute top-10 right-10 hidden lg:block"
        >
          <DecorativeWave className="w-24 h-5 text-[#214594]/40" />
        </ParallaxLayer>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Sticky / Summary Header + Quote + Commercial Terms Card */}
            <RevealOnScroll variant="heading" className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
                  Processo de Criação
                </p>
                <h2
                  id="heading-processo"
                  className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
                >
                  Do primeiro contato à{' '}
                  <span className="text-[#214594]">entrega definitiva</span>
                </h2>
                <p className="mt-4 text-base text-[#3B4E6B] leading-relaxed">
                  Trabalhamos em 7 etapas transparentes para que você acompanhe
                  a evolução do projeto com clareza e segurança contratual.
                </p>
              </div>

              {/* Condições Comerciais Card (Strictly faithful to the PDF) */}
              <div className="rounded-[28px] bg-[#0A1833] p-6 sm:p-7 text-white shadow-[0_24px_50px_-14px_rgba(10,24,51,0.3)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#31FA8C]">
                      Transparência Comercial
                    </span>
                    <h3 className="mt-0.5 text-lg font-extrabold">
                      Condições da Proposta
                    </h3>
                  </div>
                  <FileCheck2
                    className="h-6 w-6 text-[#2ED8BE] shrink-0"
                    aria-hidden="true"
                  />
                </div>

                <ul className="mt-4 space-y-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#31FA8C]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-white">
                        Entrada de 50%:
                      </strong>{' '}
                      <span className="text-[#B8C7DF]">
                        início da produção mediante 50% de entrada e envio do
                        briefing.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#2ED8BE]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-white">
                        Prazo conforme a demanda:
                      </strong>{' '}
                      <span className="text-[#B8C7DF]">
                        tempo de entrega definido de acordo com a demanda do
                        projeto.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RefreshCcw
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#31FA8C]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-white">
                        Até 3 alterações sem custo:
                      </strong>{' '}
                      <span className="text-[#B8C7DF]">
                        acompanhe a criação e sugira até três ajustes sem custos
                        adicionais.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#2ED8BE]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-white">
                        Alterações adicionais (5%):
                      </strong>{' '}
                      <span className="text-[#B8C7DF]">
                        ajustes além dos três inclusos estão sujeitos à taxa de
                        5% do valor total do projeto.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#31FA8C]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-white">
                        Entrega definitiva:
                      </strong>{' '}
                      <span className="text-[#B8C7DF]">
                        realizada após a aprovação final do cliente e quitação
                        dos 50% restantes.
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nx-btn flex w-full items-center justify-center gap-2 rounded-full bg-[#16E07B] px-5 py-3 text-sm font-extrabold text-[#0B1933] hover:bg-[#31FA8C]"
                  >
                    <span>Iniciar contato pelo WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Quote from Page 5 of the PDF */}
              <blockquote className="rounded-2xl border border-[#DCE6F2] bg-white p-5 sm:p-6 shadow-xs">
                <p className="text-base font-bold text-[#0B1933] leading-relaxed">
                  “Com{' '}
                  <span className="text-[#098A4B]">organização</span> e tempo,
                  acha-se o segredo de fazer tudo e{' '}
                  <span className="text-[#098A4B]">bem feito</span>.”
                </p>
                <footer className="mt-2 text-xs font-semibold text-[#5A6E8C]">
                  — Pitágoras
                </footer>
              </blockquote>
            </RevealOnScroll>

            {/* Right Column: 7 Process Steps Timeline */}
            <div className="lg:col-span-7">
              <ol
                aria-label="Etapas do processo de criação NEXORA"
                className="space-y-4"
              >
                {PROCESS_STEPS.map((step, idx) => (
                  <RevealOnScroll
                    key={step.stepNumber}
                    as="li"
                    variant="card"
                    delayMs={(idx % 4) * 80}
                    className="group relative rounded-[24px] border border-[#DCE6F2] bg-white p-5 sm:p-6 shadow-[0_12px_30px_-12px_rgba(11,25,51,0.06)] hover:border-[#214594]/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#214594] to-[#1D688A] text-sm font-extrabold text-white tabular-nums shadow-xs">
                        {step.stepNumber}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-lg font-extrabold text-[#0B1933]">
                            {step.title}
                          </h3>
                          <span className="text-xs font-bold text-[#1D688A]">
                            {step.subtitle}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#3B4E6B]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
