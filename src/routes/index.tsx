import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Trends } from "@/components/site/Trends";
import { Team } from "@/components/site/Team";
import { ODS } from "@/components/site/ODS";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevWeb — Desenvolvimento Web: Construindo o Futuro Digital" },
      { name: "description", content: "Portfólio de carreira sobre Desenvolvimento Web: profissão, tendências, ODS 9 e equipe. Tema Integrador I — UNIG-EAD 2025." },
      { property: "og:title", content: "DevWeb — Construindo o Futuro Digital" },
      { property: "og:description", content: "Conheça a carreira de Desenvolvimento Web e como ela transforma o mundo." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Trends />
        <Team />
        <ODS />
      </main>
      <Footer />
    </div>
  );
}
