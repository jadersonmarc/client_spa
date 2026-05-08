"use client"

import { Bot, Clock, MessageSquare, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Atendimento a qualquer hora do dia ou da noite",
  },
  {
    icon: Zap,
    title: "Respostas Imediatas",
    description: "Esclarecimento de dúvidas em tempo real",
  },
  {
    icon: MessageSquare,
    title: "Pré-Análise do Caso",
    description: "Avaliação inicial automatizada e eficiente",
  },
]

export function AISection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6">
                  <Bot className="size-4" />
                  Tecnologia Jurídica
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 text-balance">
                  Atendimento Inteligente Integrado
                </h2>
                
                <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                  Combinamos a experiência dos nossos advogados com tecnologia de ponta 
                  para oferecer um atendimento ágil e eficiente, disponível 24 horas por dia.
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className={`flex items-start gap-4 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${200 * (index + 1)}ms` }}
                    >
                      <div className="size-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <feature.icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/10 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-auto">
                <div className="relative">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 -m-8 border border-primary/10 rounded-full animate-pulse" />
                  <div className="absolute inset-0 -m-16 border border-primary/5 rounded-full" />
                  <div className="absolute inset-0 -m-24 border border-primary/5 rounded-full" />
                  
                  {/* Center icon */}
                  <div className="size-24 md:size-32 rounded-full bg-card border border-border shadow-lg flex items-center justify-center">
                    <Bot className="size-12 md:size-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
