import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Profissão" },
  { id: "tendencias", label: "Tendências" },
  { id: "equipe", label: "Equipe" },
  { id: "ods", label: "ODS 9" },
];

export function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg btn-primary">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="text-gradient">DevWeb</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === l.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#equipe" className="hidden rounded-full btn-primary px-5 py-2 text-sm font-semibold md:inline-flex">
          Contato
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/40 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                    active === l.id ? "bg-primary/15 text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
