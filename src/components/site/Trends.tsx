import {
  Brain, Cpu, Smartphone, Globe, Boxes, Accessibility,
  Code, Paintbrush, FileCode, Component, Database, Cloud, Trophy, FolderGit2, GitFork,
} from "lucide-react";

const trends = [
  { i: Brain, t: "IA no Desenvolvimento", d: "GitHub Copilot, ChatGPT e ferramentas de IA estão acelerando a produção de código e revisões." },
  { i: Cpu, t: "WebAssembly", d: "Performance próxima ao nativo no navegador, abrindo espaço para jogos e aplicações pesadas." },
  { i: Smartphone, t: "Progressive Web Apps", d: "Aplicações instaláveis, offline-first e com experiência próxima de apps nativos." },
  { i: Globe, t: "Edge Computing", d: "Servidores espalhados pelo mundo entregando respostas rápidas perto do usuário." },
  { i: Boxes, t: "Web3", d: "Blockchain, contratos inteligentes e novas formas de autenticação descentralizada." },
  { i: Accessibility, t: "Acessibilidade Digital", d: "Web para todos: WCAG, leitores de tela e design inclusivo no centro do produto." },
];

const roadmap = [
  { i: FileCode, t: "HTML" },
  { i: Paintbrush, t: "CSS" },
  { i: Code, t: "JavaScript" },
  { i: Component, t: "Framework" },
  { i: Database, t: "Back-End" },
  { i: GitFork, t: "DevOps" },
  { i: Cloud, t: "Cloud" },
];

const tips = [
  { t: "Como se destacar no mercado", d: "Construa projetos reais, escreva sobre o que aprende e participe de comunidades.", i: Trophy },
  { t: "Portfólio que impressiona", d: "Mostre processo, decisões técnicas e resultados — não apenas screenshots.", i: FolderGit2 },
  { t: "Open Source contribuindo", d: "Colaborar em projetos abertos acelera seu aprendizado e amplia sua rede.", i: GitFork },
];

export function Trends() {
  return (
    <section id="tendencias" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Dicas e Tendências</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            O Futuro do <span className="text-gradient">Desenvolvimento Web</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            As forças que estão moldando o próximo ciclo da web — e como se preparar para elas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trends.map((t) => (
            <div key={t.t} className="reveal glass glass-hover rounded-2xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                <t.i className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="reveal mt-20">
          <h3 className="text-center font-display text-2xl font-bold sm:text-3xl">
            Roadmap do <span className="text-gradient">Dev Web</span>
          </h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">Um caminho de aprendizado claro e progressivo.</p>

          <div className="relative mt-10">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
            <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              {roadmap.map((r, i) => (
                <li key={r.t} className="relative">
                  <div className="glass glass-hover flex flex-col items-center rounded-2xl p-4 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full btn-primary text-primary-foreground">
                      <r.i className="h-5 w-5" />
                    </span>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Etapa {i + 1}
                    </span>
                    <span className="mt-1 font-display font-semibold">{r.t}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {tips.map((t) => (
            <div key={t.t} className="reveal glass glass-hover rounded-2xl p-6">
              <t.i className="h-7 w-7 text-primary" />
              <h4 className="mt-4 font-display text-lg font-semibold">{t.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
