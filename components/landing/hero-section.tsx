"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MESSAGE = "Olá, vi o site e gostaria de agendar uma consulta."

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div 
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Atendimento 24 horas
          </div>

          {/* Headline - Serif */}
          <h1 
            className={`font-serif text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Advocacia de{" "}
            <span className="text-primary">Excelência</span>
            <br />
            ao Seu Alcance
          </h1>

          {/* Subheadline - Sans-serif */}
          <p 
            className={`mt-8 font-sans text-pretty text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Mais de 20 anos de experiência em defender os seus direitos. 
            Atendimento personalizado e resultados comprovados em todas as áreas do Direito.
          </p>

          {/* CTA Button */}
          <div 
            className={`mt-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-5 transition-transform group-hover:scale-110" />
                Fale Connosco Agora
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-12 border-t border-border transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Casos Resolvidos</p>
            </div>
            <div className="hidden md:block w-px h-14 bg-border" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
            </div>
            <div className="hidden md:block w-px h-14 bg-border" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
