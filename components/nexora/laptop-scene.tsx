import {
  Code2,
  Database,
  MousePointer2,
  ArrowUpRight,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import { DepthScene } from "./depth-scene";
export function LaptopScene() {
  return (
    <DepthScene className="nx-laptop-scene">
      <div className="nx-orbit" aria-hidden="true" />
      <div
        className="nx-laptop"
        role="img"
        aria-label="Notebook tridimensional com demonstração conceitual de uma interface NEXORA"
      >
        <div className="nx-laptop-lid">
          <div className="nx-camera" />
          <div className="nx-laptop-display">
            <div className="nx-screen-nav">
              <strong>NEXORA</strong>
              <span>Design / Desenvolvimento</span>
              <ArrowUpRight size={14} />
            </div>
            <div className="nx-screen-main">
              <span>DO CONCEITO À EXPERIÊNCIA</span>
              <h2>
                Ideias que
                <br />
                <em>ganham vida.</em>
              </h2>
              <div className="nx-screen-chip">
                Seu próximo projeto <ArrowUpRight size={12} />
              </div>
            </div>
            <div className="nx-screen-services">
              <div>
                <LayoutTemplate size={16} />
                Interface
              </div>
              <div>
                <Database size={16} />
                Dados
              </div>
              <div>
                <ShieldCheck size={16} />
                Segurança
              </div>
            </div>
          </div>
        </div>
        <div className="nx-laptop-deck">
          <div className="nx-keyboard">
            {Array.from({ length: 48 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="nx-trackpad" />
        </div>
        <div className="nx-laptop-edge" />
      </div>
      <div className="nx-code-object" aria-hidden="true">
        <Code2 strokeWidth={1.5} />
        <span>Desenvolvimento</span>
      </div>
      <div className="nx-cursor-object" aria-hidden="true">
        <MousePointer2 strokeWidth={1.5} />
      </div>
      <div className="nx-scene-caption">
        Interface conceitual NEXORA · Desenvolvimento sob medida
      </div>
    </DepthScene>
  );
}
