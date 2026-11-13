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
        <h1>
          Vamos tornar a sua
          <br />
          <span>marca</span> conhecida?
        </h1>
        <div className="nx-hero-bottom">
          <p>
            A NEXORA desenvolve experiências digitais que unem design,
            funcionalidade e resultado. Criamos Landing Pages, Redesign de
            Sites, Aplicações Web sob medida e E-commerce Interativo com foco em
            UX/UI e performance.
          </p>
          <div className="nx-hero-actions">
            <a
              className="nx-action"
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento <ArrowUpRight size={20} />
            </a>
            <a className="nx-text-link" href="#solucoes">
              Conhecer soluções <ArrowDown size={18} />
            </a>
          </div>
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
          {HIGHLIGHT_STRIP_ITEMS.map((x) => (
            <div key={x.badge}>
              <strong>{x.badge}</strong>
              <p>{x.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
