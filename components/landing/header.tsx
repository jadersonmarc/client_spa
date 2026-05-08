"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"

const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MESSAGE = "Olá, vi o site e gostaria de agendar uma consulta."

export function Header() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Scale className="size-7 text-primary transition-transform group-hover:scale-105" />
            <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
              Advocacia Elite
            </span>
          </Link>

          {/* CTA Button */}
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
