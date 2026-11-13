import { WhatsAppIcon } from "./whatsapp-icon";
import { LaptopScene } from "./laptop-scene";
import { Code2, Gauge, ShieldCheck, Smartphone } from "lucide-react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import {
  HIGHLIGHT_STRIP_ITEMS,
  WEB_SOLUTIONS,
  buildWhatsAppUrl,
} from "@/lib/nexora-data";
export function NexoraHeroSection() {
  return (
    <section id="topo" className="nx-editorial-hero">
      <div className="nx-container">
        <div className="nx-future-hero-grid">
          <div className="nx-future-copy">
            <p className="nx-hero-label">Design, código e possibilidades.</p>
            <h1>
              Vamos tornar a sua <span>marca</span> conhecida?
            </h1>
            <div className="nx-hero-bottom">
              <p>
                A NEXORA desenvolve experiências digitais que unem design,
                funcionalidade e resultado. Criamos Landing Pages, Redesign de
                Sites, Aplicações Web sob medida e E-commerce Interativo com
                foco em UX/UI e performance.
              </p>
              <div className="nx-hero-actions">
                <a
                  className="nx-action"
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Solicitar orçamento <ArrowUpRight size={20} />
                </a>
                <a className="nx-text-link" href="#solucoes">
                  Conhecer soluções <ArrowDown size={18} />
                </a>
              </div>
            </div>
          </div>
          <LaptopScene />
        </div>
        <ul className="nx-specialties" aria-label="Áreas de atuação da NEXORA">
          {WEB_SOLUTIONS.map((s) => (
            <li key={s.id}>
              <a href="#solucoes">
                {s.title}
                <ArrowUpRight size={16} />
              </a>
            </li>
          ))}
        </ul>
        <div className="nx-proof">
          {HIGHLIGHT_STRIP_ITEMS.map((x, i) => (
            <div key={x.badge}>
              <div className="nx-proof-icon">
                {i === 0 ? (
                  <Code2 />
                ) : i === 1 ? (
                  <Gauge />
                ) : i === 2 ? (
                  <Smartphone />
                ) : (
                  <ShieldCheck />
                )}
              </div>
              <strong>{x.badge}</strong>
              <p>{x.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
