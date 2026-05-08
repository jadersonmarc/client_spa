"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "Como funciona a consulta inicial?",
    answer:
      "A consulta inicial pode ser realizada presencialmente ou por videoconferência. Durante esta sessão, analisamos o seu caso em detalhe, esclarecemos todas as suas dúvidas e apresentamos as melhores estratégias jurídicas para a sua situação.",
  },
  {
    question: "Quais são os honorários do escritório?",
    answer:
      "Os honorários variam conforme a complexidade do caso e o tipo de serviço requerido. Trabalhamos com transparência total e apresentamos uma proposta detalhada após a análise inicial do seu caso. Oferecemos diferentes modalidades de pagamento.",
  },
  {
    question: "O atendimento é realmente 24 horas?",
    answer:
      "Sim. O nosso sistema de atendimento inteligente está disponível 24 horas por dia, 7 dias por semana. Para questões urgentes fora do horário comercial, a nossa equipa de plantão está preparada para prestar apoio imediato.",
  },
  {
    question: "Quanto tempo demora um processo judicial?",
    answer:
      "O tempo varia significativamente dependendo do tipo de processo, da complexidade do caso e da comarca. Durante a consulta inicial, fornecemos uma estimativa realista baseada na nossa experiência com casos semelhantes.",
  },
  {
    question: "O escritório atua em todo o país?",
    answer:
      "Sim, atuamos em todo o território nacional através da nossa rede de correspondentes jurídicos e das ferramentas de processo eletrónico. Para casos que requerem presença física, coordenamos o acompanhamento adequado.",
  },
]

export function FAQSection() {
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
    <section ref={sectionRef} className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-foreground text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 font-sans text-lg text-muted-foreground">
            Esclarecemos as suas principais dúvidas
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`rounded-xl border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${100 * (index + 1)}ms` }}
            >
              <AccordionTrigger className="font-sans font-medium text-foreground hover:text-primary transition-colors py-5 text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
