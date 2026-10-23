'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Compass,
  Flag,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import {
  COMPLEMENTARY_SERVICES,
  FAQ_ITEMS,
   NAV_ITEMS,
  NEXORA_CONTACT,
  NEXORA_IDEALS,
  TEAM_MEMBERS,
  buildWhatsAppUrl,
} from '@/lib/nexora-data';
import {
  DecorativeSparkle,
  DecorativeWave,
  ParallaxLayer,
  RevealOnScroll,
} from './motion-primitives';

export function NexoraAboutFaqFooterSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* SECTION: SOBRE A NEXORA, IDEAIS (MISSÃO, VISÃO, VALORES) & EQUIPE */}
      <section
        id="sobre"
        aria-labelledby="heading-sobre"
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Top Institutional Intro */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <RevealOnScroll variant="heading" className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
                Quem Somos · Desde 2022
              </p>
              <h2
                id="heading-sobre"
                className="mt-2 text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
              >
                Uma equipe apaixonada por unir{' '}
                <span className="text-[#214594]">design, funcionalidade</span> e
                resultado
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3B4E6B]">
                Trabalhamos com desenvolvimento web desde 2022. Com foco em
                UX/UI e performance, nossa equipe entrega soluções estratégicas
                que conectam marcas ao seu público de forma eficiente e
                memorável.
              </p>
            </RevealOnScroll>

            {/* Team Members from Page 2 of the PDF */}
            <RevealOnScroll variant="card" delayMs={90} className="lg:col-span-6">
              <div className="rounded-[32px] border border-[#DCE6F2] bg-white p-6 sm:p-8 shadow-[0_20px_50px_-14px_rgba(11,25,51,0.08)]">
                <div className="flex items-center justify-between border-b border-[#EEF5FB] pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1D688A]">
                      Equipe NEXORA
                    </p>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1933]">
                      Quem serão seus profissionais?
                    </h3>
                  </div>
                  <DecorativeSparkle className="h-5 w-5 text-[#16E07B]" />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center text-center rounded-2xl bg-[#F7FAFC] p-4 border border-[#DCE6F2]/70"
                    >
                      <div className="relative h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={`Foto de ${member.name}, ${member.role} na NEXORA`}
                          fill
                          sizes="96px"
                          referrerPolicy="no-referrer"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="mt-3.5 text-sm font-extrabold text-[#0B1933] leading-snug">
                        {member.name}
                      </h4>
                      <span className="mt-1 text-xs font-semibold text-[#1D688A]">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Missão, Valores e Visão (From Page 3 of the PDF) */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {NEXORA_IDEALS.map((ideal, idx) => {
              const Icon =
                ideal.id === 'missao'
                  ? Flag
                  : ideal.id === 'valores'
                  ? HeartHandshake
                  : Compass;
              return (
                <RevealOnScroll
                  key={ideal.id}
                  as="article"
                  variant="card"
                  delayMs={idx * 85}
                  className="rounded-[28px] border border-[#DCE6F2] bg-white p-6 sm:p-7 shadow-[0_16px_40px_-14px_rgba(11,25,51,0.07)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#214594] to-[#15B8A6] text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0B1933]">
                      {ideal.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3B4E6B]">
                    {ideal.summary}
                  </p>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* OUTROS SERVIÇOS (Secondary & Compact Area preserving Web Protagonism) */}
          <RevealOnScroll className="mt-12">
            <div className="rounded-[28px] border border-[#DCE6F2] bg-[#EEF5FB]/80 p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1D688A]">
                    Serviços Complementares
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0B1933]">
                    Outros serviços para fortalecer a identidade da sua marca
                  </h3>
                  <p className="mt-1.5 text-sm text-[#3B4E6B]">
                    Além do desenvolvimento web, apoiamos sua comunicação visual
                    com peças digitais e materiais gráficos sob demanda.
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl('Outros Serviços de Design e Rede')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-btn inline-flex items-center justify-center gap-2 self-start lg:self-center rounded-full border border-[#214594] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#214594] hover:bg-[#214594] hover:text-white whitespace-nowrap shrink-0"
                >
                  <span>Consultar serviços complementares</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              <ul
                aria-label="Lista de outros serviços oferecidos pela NEXORA"
                className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              >
                {COMPLEMENTARY_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 rounded-xl border border-[#DCE6F2] bg-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1933]"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#098A4B]"
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION: FAQ (Perguntas Frequentes sustentadas pelo documento) */}
      <section
        id="faq"
        aria-labelledby="heading-faq"
        className="relative py-16 sm:py-24 bg-white border-t border-[#DCE6F2]"
      >
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="relative text-center">
            <DecorativeSparkle className="hidden sm:block absolute left-4 top-2 h-5 w-5 text-[#0B1933]" />
            <DecorativeSparkle className="hidden sm:block absolute right-4 top-6 h-5 w-5 text-[#16E07B]" />
            <DecorativeWave className="mx-auto mb-3 w-16 h-4 text-[#214594]" />

            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D688A]">
              Tire suas dúvidas
            </p>
            <h2
              id="heading-faq"
              className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1933] leading-[1.12] [text-wrap:balance]"
            >
              Perguntas <span className="text-[#214594]">frequentes</span>
            </h2>
            <p className="mt-3 text-base text-[#3B4E6B]">
              Informações claras sobre nossos pacotes, etapas de produção e
              condições comerciais.
            </p>
          </RevealOnScroll>

          <div className="mt-10 space-y-3.5">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <RevealOnScroll
                  key={faq.id}
                  variant="card"
                  delayMs={idx * 55}
                  className="rounded-2xl border border-[#DCE6F2] bg-[#F7FAFC] overflow-hidden transition-colors hover:border-[#214594]/40"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      id={`faq-trigger-${faq.id}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4.5 sm:px-6 sm:py-5 text-left text-base sm:text-lg font-extrabold text-[#0B1933]"
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-[#DCE6F2] text-[#214594] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-[#214594] text-white' : ''
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${faq.id}`}
                    hidden={!isOpen}
                    className="border-t border-[#DCE6F2] bg-white px-5 py-4 sm:px-6 sm:py-5 text-sm sm:text-base leading-relaxed text-[#3B4E6B]"
                  >
                    {faq.answer}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: CTA FINAL & RODAPÉ ESCURO (Inspired by Kard reference footer) */}
      <footer
        id="contato"
        aria-labelledby="heading-contato-final"
        className="relative bg-[#0A1833] text-white pt-16 pb-12 sm:pt-20 sm:pb-14 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Final CTA Banner */}
          <RevealOnScroll variant="card" className="rounded-[32px] border border-white/12 bg-gradient-to-br from-[#11244A] to-[#0D1E3D] p-7 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#31FA8C]">
                  Nós abraçamos sua causa
                </p>
                <h2
                  id="heading-contato-final"
                  className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] [text-wrap:balance]"
                >
                  “Uma parceria de sucesso nasce com{' '}
                  <span className="text-[#31FA8C]">comprometimento</span>.”
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#B8C7DF]">
                  Estamos prontos para estabelecer uma parceria estratégica que
                  impulsione resultados concretos e gere valor duradouro para o
                  seu negócio. Fale conosco ou siga nosso perfil oficial.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3.5 sm:gap-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar pelo WhatsApp ${NEXORA_CONTACT.whatsappPhoneDisplay} (abre em nova aba)`}
                  className="nx-btn inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-[#16E07B] px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm lg:text-base font-extrabold text-[#0B1933] shadow-lg hover:bg-[#31FA8C] text-center"
                >
                  <MessageCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
                  <span>{NEXORA_CONTACT.whatsappPhoneDisplay}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={NEXORA_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir @nexora_dev_ no Instagram (abre em nova aba)"
                  className="nx-btn inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-full border border-white/25 bg-white/5 px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm lg:text-base font-bold text-white hover:bg-white/15 text-center"
                >
                  <Instagram className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-[#2ED8BE]" aria-hidden="true" />
                  <span>{NEXORA_CONTACT.instagramHandle}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bottom Institutional Footer Bar (Matching Kard reference structure) */}
          <div className="mt-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
            <div className="max-w-sm">
              <a
                href="#topo"
                aria-label="NEXORA — Voltar ao topo"
                className="inline-flex items-center transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/nexora/nexora-logo-white.png"
                  alt="Logo NEXORA"
                  width={154}
                  height={40}
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#B8C7DF]">
                Desenvolvimento de experiências digitais desde 2022: Landing
                Pages, Redesign de Sites, Aplicações Web sob medida e
                E-commerce Interativo.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 md:items-end">
              {/* Internal Anchor Navigation */}
              <nav
                aria-label="Navegação do rodapé"
                className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#B8C7DF]"
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </nav>

              {/* External Official Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp comercial da NEXORA (abre em nova aba)"
                  className="nx-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:border-[#31FA8C] hover:text-[#31FA8C]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Comercial</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={NEXORA_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram oficial da NEXORA (abre em nova aba)"
                  className="nx-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:border-[#2ED8BE] hover:text-[#2ED8BE]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Bottom Line */}
          <div className="mt-7 flex flex-col justify-between gap-4 text-xs text-[#B8C7DF]/80 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} NEXORA — Desenvolvimento Web. Atuação
              desde 2022.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#processo"
                className="hover:text-white transition-colors"
              >
                Condições Comerciais
              </a>
              <a
                href="#solucoes"
                className="hover:text-white transition-colors"
              >
                Pacotes de Investimento
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
