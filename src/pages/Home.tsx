import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon } from "lucide-react";
import { StepCard } from "@/components/ui/step-card";
import { WaitlistDialog } from "@/components/ui/waitlist-dialog";
import { Navbar } from "@/components/Navbar";

export function Home() {
  const handleJoinWaitlist = (email: string) => {
    console.log("Joined with:", email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground selection:bg-green-medium/30">
      <Navbar />

      <section
        id="home"
        className="w-full px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url('/imgs/pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            zIndex: 1,
          }}
        />

        <div
          className="absolute bottom-0 -right-2/3 w-[120vw] h-[120vh] blur-[200px] pointer-events-none"
          style={{
            transform: "translate(30%, 20%)",
            borderRadius: "35% 65% 70% 30% / 30% 50% 70% 60%",
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(74, 222, 128, 0.2) 70%, rgba(74, 222, 128, 0.3) 100%)",
            zIndex: 0,
          }}
        />

        <div
          className="absolute -bottom-64 left-0 w-[80vw] h-[80vh] blur-[180px] pointer-events-none"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 35%, rgba(74, 222, 128, 0.15) 65%, rgba(74, 222, 128, 0.25) 100%)",
            zIndex: 0,
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-medium/10 border border-green-medium/20 w-fit mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-medium animate-pulse" />
              <span className="text-xs font-semibold text-green-medium uppercase tracking-wider">
                Acesso Antecipado
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl tracking-tight leading-tight">
              Encontre as melhores{" "}
              <span className="text-green-medium">Surebets</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Aumente seus lucros com a tecnologia de ponta do Vision.
              Arbitragem esportiva automatizada, segura e simples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <WaitlistDialog
                trigger={
                  <AnimatedButton
                    borderRadius="9999px"
                    className="text-white font-medium text-sm h-12 px-8 cursor-pointer"
                    containerClassName="h-12"
                  >
                    Entrar na lista de espera
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </AnimatedButton>
                }
                onSubmit={handleJoinWaitlist}
              />
              <Button
                size="lg"
                className="bg-green-light hover:bg-green-light/90 text-black font-medium text-sm h-12 px-8 pill transition-all border-none"
              >
                Ver demonstração
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square flex items-center justify-center"></div>
        </div>
      </section>

      <div className="w-full py-12 bg-background border-y border-white/5 overflow-hidden relative z-20">
        <div className="flex w-[200%] animate-infinite-scroll">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-48 mx-8 flex items-center justify-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              <div className="w-32 h-8 bg-white/10 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      <section
        id="como-funciona"
        className="w-full max-w-7xl px-6 py-24 md:py-40"
      >
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-medium/5 blur-[120px] -z-10" />

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <img
                src="/logo/vision-icon.svg"
                alt="Vision"
                className="w-15 h-15"
              />
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                Como o Vision funciona
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Nós monitoramos milhares de mercados em tempo real para
                encontrar oportunidades de lucro garantido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Escolha as casas de aposta que gostaria de operar",
                  description:
                    "Selecione suas casas favoritas e deixe que nosso algoritmo faça o trabalho pesado de comparação de odds.",
                },
                {
                  step: 2,
                  title: "Monitore oportunidades em tempo real",
                  description:
                    "Nossa plataforma analisa milhares de mercados simultaneamente para identificar as melhores oportunidades de arbitragem.",
                },
                {
                  step: 3,
                  title: "Execute suas apostas com lucro garantido",
                  description:
                    "Receba alertas instantâneos e execute suas apostas com segurança, garantindo lucro independente do resultado.",
                },
              ].map((item) => (
                <StepCard
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-6 py-20 relative">
        <div className="relative mb-16">
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-8 w-[80%] h-32 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(74, 222, 128, 0.4) 0%, rgba(74, 222, 128, 0.2) 30%, rgba(74, 222, 128, 0.05) 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center relative">
          <div className="flex flex-col gap-6 text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Não perca mais tempo. Entre na lista de espera agora.
            </h2>
            <p className="text-muted-foreground text-lg">
              Seja um dos primeiros a experimentar a revolução das surebets.
            </p>
            <WaitlistDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-green-medium hover:bg-green-light text-black h-12 font-bold px-8 w-fit mx-auto md:mx-0"
                >
                  Garantir meu acesso
                </Button>
              }
              onSubmit={handleJoinWaitlist}
              dialogContentClassName="bg-background border-none sm:max-w-md"
              titleClassName="text-2xl font-medium"
            />
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="aspect-4/3 bg-white/5 rounded-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full max-w-7xl px-6 py-24 md:py-40">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center mb-12">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto flex flex-col gap-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-md px-6 py-2"
              style={{ backgroundColor: "#18181A" }}
            >
              <AccordionTrigger className="text-left font-normal text-lg hover:no-underline cursor-pointer">
                O que é o Vision e como ele me ajuda?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                O Vision é uma plataforma avançada de surebets que utiliza
                algoritmos sofisticados para identificar oportunidades de
                arbitragem em centenas de casas de apostas. Com ele, você pode
                garantir lucro independentemente do resultado final do evento.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="w-full max-w-7xl px-6 pt-24 pb-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo/vision-icon.svg"
                alt="Vision"
                className="w-8 h-8"
              />
              <span className="font-bold text-2xl tracking-tight">Vision</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Transformando a forma como você opera no mercado esportivo através
              de tecnologia e inteligência.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Navegação</span>
              <a
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Início
              </a>
              <a
                href="/#como-funciona"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Como funciona
              </a>
              <a
                href="/#faq"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                FAQ
              </a>
              <a
                href="/preços"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Preços
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Suporte</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Central de Ajuda
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Contato
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Status do Sistema
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Comunidade
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Legal</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Política de Cookies
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Jogo Responsável
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <span>© 2026 Vision — Todos os direitos reservados</span>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-foreground transition-colors underline"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors underline"
            >
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
