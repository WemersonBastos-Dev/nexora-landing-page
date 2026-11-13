"use client";
import { useState } from "react";
import {
  Layers,
  LayoutPanelTop,
  Database,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
const layers = [
  {
    name: "Interface",
    icon: LayoutPanelTop,
    title: "Uma experiência clara.",
    description: "Navegação, componentes e fluxos organizados para quem usa.",
    items: ["Navegação", "Componentes", "Experiência do usuário"],
  },
  {
    name: "Dados",
    icon: Database,
    title: "Estrutura para sua operação.",
    description: "Regras de negócio e dados conectados à interface.",
    items: ["Regras de negócio", "Banco de dados", "Integrações"],
  },
  {
    name: "Segurança",
    icon: ShieldCheck,
    title: "Confiança em cada camada.",
    description: "Proteção, validação e testes ao longo do desenvolvimento.",
    items: ["Controle de acesso", "Validação", "Testes e manutenção"],
  },
];
export function ArchitectureDemo() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="nx-architecture">
      <div className="nx-demo-toolbar">
        <span>Demonstração conceitual · Plataforma NEXORA</span>
        <button
          type="button"
          aria-pressed={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <Layers size={18} />
          {expanded ? "Recompor aplicação" : "Explorar arquitetura"}
        </button>
      </div>
      <div className={"nx-demo-stage " + (expanded ? "is-expanded" : "")}>
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.name}
              className={
                "nx-demo-layer layer-" + i + (active === i ? " is-active" : "")
              }
              aria-hidden={active !== i}
            >
              <div className="nx-layer-title">
                <Icon size={22} />
                <span>{layer.name}</span>
                <span>NEXORA / {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="nx-layer-content">
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
                <div className="nx-demo-modules">
                  {layer.items.map((item) => (
                    <div key={item}>
                      <span>{item}</span>
                      <ArrowUpRight size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="nx-demo-controls"
        role="group"
        aria-label="Camadas da aplicação"
      >
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            type="button"
            aria-pressed={active === i}
            onClick={() => {
              setActive(i);
              setExpanded(true);
            }}
          >
            {String(i + 1).padStart(2, "0")} <span>{layer.name}</span>
          </button>
        ))}
      </div>
      <p className="nx-demo-caption" aria-live="polite">
        {layers[active].description} Ilustração de arquitetura, sem dados de
        clientes.
      </p>
    </div>
  );
}
