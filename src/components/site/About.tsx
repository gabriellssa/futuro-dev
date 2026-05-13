import {
  Layers, Server, Layout, Award, Wallet, Building2, AlertTriangle, Rocket,
} from "lucide-react";

const techs = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Git",
];

const certs = [
  { name: "AWS Certified Developer", color: "from-orange-400 to-yellow-500" },
  { name: "Google Cloud Developer", color: "from-blue-400 to-cyan-400" },
  { name: "Meta Front-End Developer", color: "from-blue-500 to-indigo-500" },
  { name: "freeCodeCamp", color: "from-emerald-400 to-teal-500" },
  { name: "Alura - Formação Dev", color: "from-fuchsia-400 to-purple-500" },
];

const salaries = [
  { lvl: "Júnior", range: "R$ 2.500 – R$ 4.500", pct: 35 },
  { lvl: "Pleno", range: "R$ 5.000 – R$ 9.000", pct: 65 },
  { lvl: "Sênior", range: "R$ 10.000 – R$ 20.000+", pct: 100 },
];

const companies = ["Google", "Nubank", "iFood", "Mercado Livre", "Totvs", "CI&T", "Accenture"];

const challenges = [
  "Aprendizado contínuo em um ecossistema em rápida mudança",
  "Pressão por entregas com qualidade e prazos curtos",
  "Lidar com legado, débito técnico e múltiplos stakeholders",
  "Acompanhar novas linguagens, frameworks e padrões",
];

const opportunities = [
  "Trabalho remoto e oportunidades internacionais",
  "Salários competitivos e plano de carreira sólido",
  "Atuar em produtos que impactam milhões de pessoas",
  "Comunidade ativa, open source e crescimento exponencial",
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`reveal glass glass-hover rounded-2xl p-6 ${className}`}>{children}</div>
  );
}

function CardTitle({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display text-xl font-semibold">{children}</h3>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sobre a Profissão</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            A engrenagem da <span className="text-gradient">era digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conheça as áreas, ferramentas e o cenário do desenvolvedor web no Brasil.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* O que faz */}
          <Card className="lg:col-span-2">
            <CardTitle icon={Layers}>O que faz um Desenvolvedor Web?</CardTitle>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { i: Layout, t: "Front-End", d: "Cria interfaces interativas, acessíveis e responsivas com HTML, CSS, JavaScript e frameworks como React." },
                { i: Server, t: "Back-End", d: "Constrói APIs, lida com banco de dados, autenticação e a lógica que sustenta o produto." },
                { i: Layers, t: "Full Stack", d: "Atua nas duas pontas, integrando experiência do usuário com infraestrutura e dados." },
              ].map((c) => (
                <div key={c.t} className="rounded-xl border border-border bg-background/40 p-4">
                  <c.i className="h-5 w-5 text-primary" />
                  <h4 className="mt-3 font-semibold">{c.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Salários */}
          <Card>
            <CardTitle icon={Wallet}>Salários no Brasil</CardTitle>
            <div className="space-y-4">
              {salaries.map((s) => (
                <div key={s.lvl}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{s.lvl}</span>
                    <span className="text-muted-foreground">{s.range}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.pct}%`, background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tecnologias */}
          <Card className="lg:col-span-2">
            <CardTitle icon={Layout}>Tecnologias e Ferramentas</CardTitle>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {techs.map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-background/40 px-3 py-4 text-center text-sm font-medium transition hover:border-primary/50 hover:text-primary"
                >
                  {t}
                </div>
              ))}
            </div>
          </Card>

          {/* Certificações */}
          <Card>
            <CardTitle icon={Award}>Certificações valorizadas</CardTitle>
            <ul className="space-y-2">
              {certs.map((c) => (
                <li key={c.name} className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3">
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${c.color}`} />
                  <span className="text-sm">{c.name}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Empresas */}
          <Card className="lg:col-span-3">
            <CardTitle icon={Building2}>Principais empresas contratantes</CardTitle>
            <div className="flex flex-wrap gap-3">
              {companies.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </Card>

          {/* Desafios x Oportunidades */}
          <Card className="lg:col-span-3">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <CardTitle icon={AlertTriangle}>Desafios</CardTitle>
                <ul className="space-y-3">
                  {challenges.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/80" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <CardTitle icon={Rocket}>Oportunidades</CardTitle>
                <ul className="space-y-3">
                  {opportunities.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
