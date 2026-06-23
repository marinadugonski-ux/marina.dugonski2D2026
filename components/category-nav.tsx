"use client"

import { Cake, Coffee, Sandwich, CupSoda } from "lucide-react"
import { cn } from "@/lib/utils"
import type { MenuCategory } from "@/lib/menu-data"

const icones = {
  cake: Cake,
  coffee: Coffee,
  sandwich: Sandwich,
  cup: CupSoda,
} as const

export function CategoryNav({
  categorias,
  ativa,
  onSelect,
}: {
  categorias: MenuCategory[]
  ativa: string
  onSelect: (id: string) => void
}) {
  return (
    <nav
      aria-label="Categorias do cardápio"
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
    >
      <ul className="no-scrollbar mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3">
        {categorias.map((cat) => {
          const Icone = icones[cat.icone as keyof typeof icones]
          const isAtiva = ativa === cat.id
          return (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => onSelect(cat.id)}
                aria-current={isAtiva ? "true" : undefined}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isAtiva
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-secondary",
                )}
              >
                <Icone className="h-4 w-4" aria-hidden="true" />
                {cat.nome}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
