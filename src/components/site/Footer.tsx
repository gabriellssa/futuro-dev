import { Code2 } from "lucide-react";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Profissão" },
  { id: "tendencias", label: "Tendências" },
  { id: "equipe", label: "Equipe" },
  { id: "ods", label: "ODS 9" },
];

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="gradient-border-top h-px w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg btn-primary">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="text-gradient">DevWeb</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Construindo o futuro digital, uma linha de código por vez.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navegação</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-sm text-foreground/80 transition hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Projeto</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Tema Integrador I – Gestão de Carreiras<br />
            Curso ADS — UNIG-EAD 2025
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground">
        Desenvolvido com <span className="text-gradient font-semibold">Lovable</span> | Tema Integrador I — UNIG-EAD 2025
      </div>
    </footer>
  );
}
