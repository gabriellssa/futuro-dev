import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import gabrielPhoto from "@/assets/gabriel-ricardo.jpg";

export function Team() {
  const [sent, setSent] = useState(false);

  return (
    <section id="equipe" className="relative py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Representante do Trabalho</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Representante do <span className="text-gradient">Projeto</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conheça o responsável por este projeto e as formas de entrar em contato.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="reveal glass glass-hover mx-auto w-full max-w-md rounded-2xl p-10 text-center">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ring-1 ring-primary/30">
              <img src={gabrielPhoto} alt="Gabriel Ricardo" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">Gabriel Ricardo</h3>
            <p className="mt-1 text-sm text-muted-foreground">ADS – 1º Período – UNIG-EAD</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/gabriel-lessa-3539693a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full glass glass-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://github.com/gabriellssa"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full glass glass-hover"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold">Contato</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tem dúvidas, sugestões ou quer trocar uma ideia sobre desenvolvimento web? Envie uma mensagem.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                lessagabriel2105@gmail.com
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
