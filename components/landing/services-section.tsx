"use client"

import { Scale, FileText, Gavel, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, direito de família e sucessões com acompanhamento completo.",
  },
  {
    icon: Gavel,
    title: "Direito Penal",
    description: "Defesa criminal especializada com estratégias eficazes para proteger os seus direitos.",
  },
  {
    icon: FileText,
    title: "Direito Empresarial",
    description: "Consultoria jurídica para empresas, contratos comerciais e recuperação de créditos.",
  },
  {
    icon: Shield,
    title: "Direito do Trabalho",
    description: "Proteção dos seus direitos trabalhistas com experiência em processos complexos.",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div 
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-foreground text-balance">
            Áreas de Atuação
          </h2>
          <p className="mt-4 font-sans text-lg text-muted-foreground leading-relaxed">
            Soluções jurídicas completas para todas as suas necessidades
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 * (index + 1)}ms` }}
            >
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
