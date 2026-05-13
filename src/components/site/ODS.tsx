import { GraduationCap, ShoppingBag, Stethoscope, Building, Quote } from "lucide-react";

const examples = [
  {
    i: GraduationCap,
    t: "Educação democratizada",
    d: "Plataformas como Coursera e Khan Academy levam conhecimento de qualidade a milhões de pessoas em qualquer lugar do mundo.",
  },
  {
    i: ShoppingBag,
    t: "E-commerce para pequenos negócios",
    d: "Soluções como Shopify e Mercado Livre permitem que micro e pequenos empreendedores acessem mercados globais.",
  },
  {
    i: Stethoscope,
    t: "Saúde digital",
    d: "Telemedicina, prontuários eletrônicos e apps de monitoramento ampliam o acesso a cuidados de saúde com mais eficiência.",
  },
  {
    i: Building,
    t: "Cidades inteligentes",
    d: "Infraestrutura web alimenta sensores urbanos, transporte conectado e serviços públicos digitais e acessíveis.",
  },
];

export function ODS() {
  return (
    <section id="ods" className="relative py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contribuição para os ODS</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Tecnologia para um <span className="text-gradient">Mundo Melhor</span>
            <span className="block text-2xl text-muted-foreground sm:text-3xl">— ODS 9</span>
          </h2>
        </div>

        <div className="reveal mt-12 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 text-center sm:p-8">
              <div
                className="mx-auto grid h-24 w-24 place-items-center rounded-2xl text-3xl font-bold text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #F26A2E, #E8531B)" }}
              >
                9
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">Indústria, Inovação e Infraestrutura</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Construir infraestruturas resilientes, promover a industrialização inclusiva e
                sustentável e fomentar a inovação. O desenvolvimento web é a infraestrutura
                invisível que conecta serviços, pessoas e oportunidades.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {examples.map((e) => (
              <div key={e.t} className="glass glass-hover rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <e.i className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold">{e.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-16">
          <div className="relative overflow-hidden rounded-3xl glass p-6 text-center sm:p-10">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
            <Quote className="mx-auto h-8 w-8 text-primary" />
            <p className="mx-auto mt-4 max-w-3xl font-display text-xl font-semibold leading-relaxed sm:text-2xl md:text-3xl">
              "A inovação tecnológica é o motor do <span className="text-gradient">desenvolvimento sustentável</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
