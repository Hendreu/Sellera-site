import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Facebook, Twitter, DribbbleIcon as Behance } from "lucide-react"

export default function SelleraLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <div className="w-full">
        <img src="..\..\imgs\HOMEheader.png" alt="Sellera Header" className="w-full h-auto" />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <img src="/imgs/1140X843.png" alt="Acelere suas vendas - Sellera" className="w-full h-auto" />
      </section>

      {/* Second Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-black mb-6">
                Venda mais. Com tecnologia, dados e zero dor de cabeça
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A SELLERA É O SEU NOVO CANAL DE VENDAS INDEPENDENTE. ASSUMIMOS O RISCO, GERAMOS LEADS, VENDEMOS PARA
                VOCÊ — E SÓ COBRAMOS QUANDO A VENDA ACONTECE.
              </p>
              <Button className="gradient-lime text-black px-8 py-3 font-semibold btn-sellera">COMECE AGORA</Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-600 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="w-64 h-32 bg-pink-500/80 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-black mb-6">
                CRM é difícil. Vender exige tempo. A Sellera resolve os dois.
              </h2>
              <p className="text-gray-600 mb-6">A maioria dos negócios não consegue escalar vendas porque:</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Falta equipe ou estrutura de vendas</li>
                <li>• Campanhas de marketing geram leads que ninguém atende</li>
                <li>• Operar CRM é burocrático e exige disciplina</li>
              </ul>
              <div className="mb-8">
                <p className="text-xl font-semibold text-black mb-2">
                  A Gente Resolve Tudo Isso — E Só Ganhamos Se Você Vender.
                </p>
              </div>
              <Button className="gradient-pink text-white px-8 py-3 btn-sellera">SAIBA MAIS</Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-lime-400 relative overflow-hidden">
                {/* Geometric Pattern */}
                <div className="absolute inset-0 geometric-bg">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-16 h-full bg-lime-300 skew-pattern"></div>
                    <div className="absolute top-0 left-8 w-16 h-full bg-lime-500 skew-pattern"></div>
                    <div className="absolute top-0 left-16 w-16 h-full bg-lime-300 skew-pattern"></div>
                    <div className="absolute top-0 left-24 w-16 h-full bg-lime-500 skew-pattern"></div>
                  </div>
                </div>
                {/* Logo/Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-black flex items-center justify-center">
                    <div className="w-20 h-20 bg-lime-400 flex items-center justify-center">
                      <span className="text-4xl font-bold text-black">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sellera Section */}
      <section className="section-padding bg-black text-white relative" style={{backgroundImage: 'url(/imgs/homeimage3.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Por que escolher a Sellera?</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <p className="text-lg">SEM CUSTO FIXO: SÓ GANHAMOS SE VOCÊ VENDER</p>
              <div className="w-24 h-1 bg-lime-400 mx-auto mt-2"></div>
            </div>
            <div>
              <p className="text-lg">OPERAMOS O FUNIL COMPLETO: CAPTAÇÃO, NURTURING E CONVERSÃO</p>
              <div className="w-24 h-1 bg-lime-400 mx-auto mt-2"></div>
            </div>
            <div>
              <p className="text-lg">ATENDIMENTO AUTOMATIZADO COM IA + SDRS HUMANOS</p>
            </div>
            <div>
              <p className="text-lg">TIME DE ESPECIALISTAS EM VENDAS E TECNOLOGIA</p>
            </div>
            <div>
              <p className="text-lg">DASHBOARD DE PERFORMANCE E VISIBILIDADE TOTAL</p>
              <div className="w-24 h-1 bg-lime-400 mx-auto mt-2"></div>
            </div>
            <div>
              <p className="text-lg">ANTECIPAÇÃO DE RECEBÍVEIS PARA ACELERAR SEU CAIXA</p>
            </div>
          </div>
          <Button className="gradient-lime text-black px-8 py-3 mt-12 font-semibold btn-sellera">SAIBA MAIS</Button>
        </div>
      </section>

      {/* Sales Force Section */}
      <section className="section-padding gradient-pink text-white relative" style={{backgroundImage: 'url(/imgs/homeimg4.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Sua nova força de vendas.</h2>
          <p className="text-xl mb-12">INTELIGENTE, TERCEIRIZADA E COM FOCO EM RESULTADO.</p>

          <Card className="max-w-2xl mx-auto bg-white text-black">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                A Sellera assume toda a sua operação comercial: do investimento em mídia ao fechamento da venda.
              </h3>
              <p className="text-lime-500 font-semibold mb-4">Sem contratar. Sem complicar. Sem arriscar.</p>
              <div className="space-y-2 text-gray-600">
                <p>Você foca no seu core.</p>
                <p>A gente vende por você.</p>
                <p>E só cobra se vender.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Finance Business */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Finance Business</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vivamus tellus mi. Nulla ne cursus elit vulputate. Sed ne cursus augue hasellus lacinia sapien vitae.
              </p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors">
                  <Facebook className="w-4 h-4 text-black" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors">
                  <Twitter className="w-4 h-4 text-black" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors">
                  <Linkedin className="w-4 h-4 text-black" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors">
                  <Behance className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Vivamus ut tellus mi</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Nulla nec cursus elit</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Vulputate sed nec</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Cursus augue hasellus</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Lacinia ac sapien</li>
              </ul>
            </div>

            {/* Additional Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-lime-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">How We Work</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Quick Support</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-lime-400 transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Full Name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-lime-400"
                />
                <Input
                  placeholder="E-Mail Address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-lime-400"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[100px] focus:border-lime-400"
                />
                <Button className="w-full gradient-lime text-black font-semibold btn-sellera">SEND MESSAGE</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Copyright © 2020 Financial Business Co., Ltd. - Design: TemplateMo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
