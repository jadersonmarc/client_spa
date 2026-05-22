import Link from "next/link"
import { Scale, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@advocaciaelite.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="/" className="flex items-center gap-2 group">
              <Scale className="size-6 text-primary transition-transform group-hover:scale-105" />
              <span className="font-serif text-lg font-semibold text-foreground">
                Camargo e D`Paula
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link 
              href="/politica-de-privacidade" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/termos-de-uso" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
