"use client"

import Image from "next/image"
import { Plus, Star, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { formatarPreco, type MenuItem } from "@/lib/menu-data"

export function MenuItemCard({
  item,
  onAdd,
}: {
  item: MenuItem
  onAdd: (item: MenuItem) => void
}) {
  const [adicionado, setAdicionado] = useState(false)

  function handleAdd() {
    onAdd(item)
    setAdicionado(true)
    setTimeout(() => setAdicionado(false), 1200)
  }

  return (
    <article
      className={cn(
        "relative flex items-center gap-4 rounded-2xl bg-card p-4 transition-transform active:scale-[0.98]",
        item.estrela
          ? "border-2 border-primary shadow-lg shadow-primary/15"
          : "border border-border",
      )}
    >
      {item.estrela && (
        <span className="absolute -top-3 left-4 flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
          <Star className="h-3 w-3 fill-primary-foreground" aria-hidden="true" />
          Mais pedido
        </span>
      )}

      <div className="flex-1">
        <h3 className="text-base font-bold text-foreground">{item.nome}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.descricao}</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-bold text-primary">{formatarPreco(item.preco)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary-foreground"
          >
            {adicionado ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Adicionado
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Adicionar
              </>
            )}
          </button>
        </div>
      </div>

      <Image
        src={item.imagem || "/placeholder.svg"}
        alt={item.nome}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-xl object-cover"
      />
    </article>
  )
}
