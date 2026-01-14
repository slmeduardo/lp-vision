import { Navbar } from "@/components/Navbar";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Monitor, Code, Bot, Check } from "lucide-react";

export function Precos() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground selection:bg-green-medium/30">
      <Navbar />

      <div
        className="absolute inset-0 size-full w-full h-screen [mask-image:linear-gradient(to_bottom,var(--background),transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(37, 37, 37) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="w-full px-6 pt-32 pb-10 md:pt-48 md:pb-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <Badge
              variant="outline"
              className="w-fit text-muted-foreground border-muted-foreground/20 bg-background rounded tracking-widest font-light"
            >
              PREÇOS
            </Badge>
            <h1 className="text-3xl md:text-6xl tracking-tight leading-tight text-muted-foreground max-w-3xl">
              Escolha o <span className="text-[#FAFAFAFA]">plano</span> ideal
              para você e comece a lucrar com{" "}
              <span className="inline-flex items-center gap-5">
                <span className="relative inline-flex items-center">
                  <div className="absolute left-3 top-6 -translate-y-1/2 flex flex-col gap-1">
                    <div className="bg-[#262626] h-px w-3" />
                    <div className="bg-[#262626] h-px w-3" />
                  </div>
                  <Switch
                    checked={true}
                    id="surebets-switch"
                    className="h-12 w-22 cursor-pointer border-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] data-[state=unchecked]:bg-input data-[state=checked]:bg-[linear-gradient(to_right,var(--green-light)_0%,var(--green-medium)_25%,var(--green-dark)_60%)] [&_span]:h-9 [&_span]:w-9 data-[state=checked]:[&_span]:translate-x-11 data-[state=unchecked]:[&_span]:translate-x-2"
                  />
                </span>
                <span className="text-[#FAFAFAFA] font-['Birthstone'] text-9xl inline-flex items-end">
                  Surebets
                  <span className="text-muted-foreground font-['Geist'] text-3xl md:text-6xl leading-relaxed ml-3">
                    .
                  </span>
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full px-6 pb-10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative border-neutral-700 bg-[#0f0f10] z-10">
              <CardHeader className="text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="border border-neutral-600 p-2 rounded-lg">
                      <div className="bg-white p-3 rounded-lg">
                        <Code className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-semibold text-white">
                      Software Pré
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Identificação de oportunidades em jogos pré-live com interface
                  intuitiva
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-white">
                    R$ 147,90
                  </span>
                  <span className="text-gray-400 ml-1">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 font-semibold py-5">
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Code className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Análise de jogos pré-live
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Code className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Identificação de oportunidades
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Code className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Interface intuitiva
                    </span>
                  </li>
                </ul>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base text-white mb-3">
                    Inclui:
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    <li className="flex items-center">
                      <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Suporte via email
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Atualizações regulares
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full mt-6 p-4 text-xl rounded-xl bg-gradient-to-t from-neutral-700 to-neutral-500 shadow-lg shadow-neutral-700 border border-neutral-600 text-white hover:from-neutral-600 hover:to-neutral-400 cursor-pointer transition-all">
                  Começe já
                </button>
              </CardContent>
            </Card>

            <div className="relative">
              {/* Green flare background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full max-w-[600px] max-h-[600px] bg-green-500/20 rounded-full blur-3xl"></div>
              </div>
              <Card className="relative border-green-500 bg-[#0f0f10] z-10">
                <CardHeader className="text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="border border-neutral-600 p-2 rounded-lg">
                        <div className="bg-white p-3 rounded-lg">
                          <Monitor className="w-4 h-4 text-gray-900" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-semibold text-white">
                        Software Pré + Live
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Análise de jogos pré-live e ao vivo com alertas em tempo
                    real
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold text-white">
                      R$ 347,90
                    </span>
                    <span className="text-gray-400 ml-1">/mês</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 font-semibold py-5">
                    <li className="flex items-center">
                      <span className="text-white grid place-content-center mt-0.5 mr-3">
                        <Monitor className="w-5 h-5" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Análise de jogos pré-live
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-white grid place-content-center mt-0.5 mr-3">
                        <Monitor className="w-5 h-5" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Análise de jogos ao vivo
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-white grid place-content-center mt-0.5 mr-3">
                        <Monitor className="w-5 h-5" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Alertas em tempo real
                      </span>
                    </li>
                  </ul>

                  <div className="space-y-3 pt-4 border-t border-neutral-700">
                    <h4 className="font-medium text-base text-white mb-3">
                      Inclui:
                    </h4>
                    <ul className="space-y-2 font-semibold">
                      <li className="flex items-center">
                        <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-green-500" />
                        </span>
                        <span className="text-sm text-gray-400">
                          Suporte completo 24/7
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-green-500" />
                        </span>
                        <span className="text-sm text-gray-400">
                          Atualizações automáticas
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full mt-6 p-4 text-xl rounded-xl bg-gradient-to-t from-green-500 to-green-600 shadow-lg shadow-green-500 border border-green-400 text-white hover:from-green-600 hover:to-green-700 cursor-pointer transition-all">
                    Começe já
                  </button>
                </CardContent>
              </Card>
            </div>

            <Card className="relative border-neutral-700 bg-[#0f0f10] z-10">
              <CardHeader className="text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="border border-neutral-600 p-2 rounded-lg">
                      <div className="bg-white p-3 rounded-lg">
                        <Bot className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-semibold text-white">
                      Telegram BOT
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Notificações instantâneas no Telegram com acesso via celular
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-white">
                    R$ 97,90
                  </span>
                  <span className="text-gray-400 ml-1">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 font-semibold py-5">
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Bot className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Notificações no Telegram
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Bot className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Alertas instantâneos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-white grid place-content-center mt-0.5 mr-3">
                      <Bot className="w-5 h-5" />
                    </span>
                    <span className="text-sm text-gray-400">
                      Acesso via celular
                    </span>
                  </li>
                </ul>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base text-white mb-3">
                    Inclui:
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    <li className="flex items-center">
                      <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Fácil configuração
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 bg-green-900/30 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span className="text-sm text-gray-400">
                        Suporte básico
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full mt-6 p-4 text-xl rounded-xl bg-gradient-to-t from-neutral-700 to-neutral-500 shadow-lg shadow-neutral-700 border border-neutral-600 text-white hover:from-neutral-600 hover:to-neutral-400 cursor-pointer transition-all">
                  Começe já
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
