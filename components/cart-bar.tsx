"use client"

import { ShoppingBag } from "lucide-react"
import { formatarPreco } from "@/lib/menu-data"

export function CartBar({ quantidade, total }: { quantidade: number; total: number }) {
  if (quantidade === 0) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl bg-primary px-5 py-3.5 text-primary-foreground shadow-xl shadow-primary/25">
        <span className="flex items-center gap-2 text-sm font-medium">
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          {quantidade} {quantidade === 1 ? "item" : "itens"}
        </span>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-primary-foreground px-4 py-1.5 text-sm font-bold text-primary"
        >
          Ver pedido • {formatarPreco(total)}
        </button>
      </div>
    </div>
  )
}
