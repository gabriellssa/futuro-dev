import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const ROLES = ["Front-End", "Back-End", "Full Stack", "UX/UI"];

const SNIPPETS = [
  { code: `<div class="hero">\n  <h1>Hello</h1>\n</div>`, top: "12%", left: "6%", delay: "0s" },
  { code: `const dev = () => {\n  return <Future />;\n};`, top: "22%", right: "8%", delay: "1.2s" },
  { code: `body {\n  display: grid;\n  gap: 2rem;\n}`, bottom: "18%", left: "10%", delay: "2.4s" },
  { code: `app.get('/api', (req, res) => {\n  res.json({ ok: true });\n});`, bottom: "10%", right: "6%", delay: "0.6s" },
  { code: `import React\nfrom 'react';`, top: "55%", left: "45%", delay: "1.8s" },
];

function useTyping() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setIdx((i) => (i + 1) % ROLES.length);
          }
        }
      },
      del ? 50 : 110
    );
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      {/* Floating snippets */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {SNIPPETS.map((s, i) => (
          <pre
            key={i}
            style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, animationDelay: s.delay }}
            className="absolute hidden md:block max-w-[220px] rounded-lg glass p-3 text-[10px] leading-relaxed text-primary/70 animate-float font-mono"
          >
            {s.code}
          </pre>
        ))}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="reveal flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Tema Integrador I — UNIG-EAD 2025
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Desenvolvimento Web: <br />
            <span className="text-gradient">Construindo o Futuro Digital</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A profissão que move a economia digital, conecta pessoas e transforma ideias em
            experiências interativas que moldam o mundo moderno.
          </p>

          <div className="mt-8 flex h-10 items-center gap-3 text-lg font-medium">
            <span className="text-muted-foreground">Atue como</span>
            <span className="font-display text-2xl font-bold text-gradient sm:text-3xl">
              {typed}
              <span className="ml-1 inline-block h-7 w-[3px] translate-y-1 bg-primary animate-blink" />
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#sobre" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold">
              Explorar a Carreira <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tendencias" className="btn-outline inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold">
              Ver Tendências
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
