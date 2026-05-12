import { Github, Linkedin, Mail, Send, User } from "lucide-react";
import { useState } from "react";

const members = [1, 2, 3];

export function Team() {
  const [sent, setSent] = useState(false);

  return (
    <section id="equipe" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Redes e Contatos</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Os integrantes responsáveis por este projeto e formas de entrar em contato.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <div key={m} className="reveal glass glass-hover rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ring-1 ring-primary/30">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Nome do Integrante</h3>
              <p className="text-sm text-muted-foreground">ADS – 1º Período</p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full glass glass-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full glass glass-hover"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold">Fale com a equipe</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tem dúvidas, sugestões ou quer trocar uma ideia sobre desenvolvimento web? Envie uma mensagem.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                contato@devweb-unig.dev
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-primary" />
                github.com/devweb-unig
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-primary" />
                linkedin.com/in/devweb-unig
              </div>
            </div>
            <p className="mt-8 rounded-xl border border-border/60 bg-background/40 p-4 text-xs text-muted-foreground">
              Projeto desenvolvido para o <strong className="text-foreground">Tema Integrador I – Gestão de Carreiras</strong>
              {" | "}UNIG-EAD 2025
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass rounded-2xl p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="msg">Mensagem</label>
                <textarea
                  id="msg"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-input bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Conte para nós como podemos ajudar..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold"
              >
                {sent ? "Mensagem enviada!" : (<>Enviar mensagem <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
