import { WhatsAppIcon } from "./whatsapp-icon";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  LayoutTemplate,
  RefreshCw,
  Code2,
  ShoppingBag,
} from "lucide-react";
import {
  WEB_SOLUTIONS,
  WEB_APP_PILLARS,
  buildWhatsAppUrl,
} from "@/lib/nexora-data";
import { RevealOnScroll, ParallaxLayer } from "./motion-primitives";
import { ArchitectureDemo } from "./architecture-demo";
export function NexoraSolutionsSection() {
  return (
    <div>
      <section
        id="solucoes"
        aria-labelledby="heading-solucoes"
        className="nx-services nx-container"
      >
        <div className="nx-section-intro">
          <h2 id="heading-solucoes">
            O que nós
            <br />
            <span>desenvolvemos?</span>
          </h2>
          <p>
            Soluções web planejadas para diferentes momentos do seu negócio,
            combinando identidade visual estratégica, usabilidade e performance.
          </p>
        </div>
        <div className="nx-service-grid">
          {WEB_SOLUTIONS.map((s, i) => (
            <article key={s.id} className="nx-service">
              <span className="nx-service-number" aria-hidden="true">
                {i === 0 ? (
                  <LayoutTemplate />
                ) : i === 1 ? (
                  <RefreshCw />
                ) : i === 2 ? (
                  <Code2 />
                ) : (
                  <ShoppingBag />
                )}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p className="nx-service-subtitle">{s.shortSubtitle}</p>
                <p>{s.description}</p>
                <details>
                  <summary>O que está incluso</summary>
                  <ul>
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <Check size={16} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </details>
                <a
                  className="nx-service-link"
                  href={buildWhatsAppUrl(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Solicitar orçamento para " + s.title}
                >
                  <WhatsAppIcon />
                  Solicitar orçamento <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="nx-app-section"
        aria-labelledby="heading-webapp-spotlight"
      >
        <div className="nx-container">
          <div className="nx-section-intro">
            <h2 id="heading-webapp-spotlight">
              Evolua sua operação com <span>aplicações web</span> sob medida.
            </h2>
            <p>
              Desenvolvemos sistemas e plataformas funcionais e escaláveis para
              o seu negócio, unindo interface intuitiva, experiência do usuário
              otimizada, banco de dados estruturado e segurança.
            </p>
          </div>
          <ArchitectureDemo />
          <div className="nx-pillars">
            {WEB_APP_PILLARS.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>{p.tag}</span>
              </div>
            ))}
          </div>
          <div className="nx-app-actions">
            <a
              className="nx-action"
              href={buildWhatsAppUrl("Aplicação Web Sob Medida")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Conversar sobre uma Aplicação Web <ArrowUpRight size={20} />
            </a>
            <a href="#processo" className="nx-text-link">
              Conhecer etapas de desenvolvimento <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="heading-dark-conversion"
        className="relative py-10 sm:py-16"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="card">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A1833] via-[#11244A] to-[#0E2247] p-6 sm:p-10 lg:p-14 ">
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
                        <p className="mt-0.5 text-lg sm:text-xl font-medium tracking-tight text-[#0B1933]">
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
                      <div className="relative z-10 mt-3 sm:-mt-6 ml-0 sm:ml-10 rounded-2xl border border-[#2ED8BE]/30 bg-gradient-to-r from-[#214594] to-[#1D688A] p-4 sm:p-5 text-white shadow-2xl sm:-rotate-[5deg]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#31FA8C]">
                            Dashboard & Conversão
                          </span>
                          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold">
                            NEXORA Web
                          </span>
                        </div>
                        <p className="mt-2 text-sm sm:text-base font-medium">
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
                    className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.15] [text-wrap:balance]"
                  >
                    Vamos transformar a{" "}
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
                      className="nx-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#16E07B] px-6 py-3.5 text-sm font-medium text-[#0B1933] shadow-lg hover:bg-[#31FA8C] text-center"
                    >
                      <WhatsAppIcon />
                      <span>Solicitar orçamento</span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
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
