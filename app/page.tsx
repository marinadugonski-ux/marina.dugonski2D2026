"use client"

import { useEffect, useRef, useState } from "react"
import { MenuHeader } from "@/components/menu-header"
import { CategoryNav } from "@/components/category-nav"
import { MenuItemCard } from "@/components/menu-item-card"
import { CartBar } from "@/components/cart-bar"
import { menu, type MenuItem } from "@/lib/menu-data"

export default function Page() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(menu[0].id)
  const [carrinho, setCarrinho] = useState<MenuItem[]>([])
  const secoesRef = useRef<Record<string, HTMLElement | null>>({})
  const cliqueRef = useRef(false)

  function adicionarItem(item: MenuItem) {
    setCarrinho((atual) => [...atual, item])
  }

  function irParaCategoria(id: string) {
    setCategoriaAtiva(id)
    cliqueRef.current = true
    secoesRef.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" })
    setTimeout(() => {
      cliqueRef.current = false
    }, 700)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (cliqueRef.current) return
        const visivel = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visivel) setCategoriaAtiva(visivel.target.id)
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0.1, 0.5, 1] },
    )
    const nodes = Object.values(secoesRef.current).filter(Boolean) as HTMLElement[]
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <main className="min-h-dvh pb-28">
      <MenuHeader />
      <CategoryNav categorias={menu} ativa={categoriaAtiva} onSelect={irParaCategoria} />

      <div className="mx-auto max-w-3xl px-4 py-8">
        {menu.map((categoria) => (
          <section
            key={categoria.id}
            id={categoria.id}
            ref={(el) => {
              secoesRef.current[categoria.id] = el
            }}
            className="scroll-mt-24 pb-10"
          >
            <h2 className="mb-5 border-l-4 border-primary pl-3 font-serif text-xl font-bold text-primary">
              {categoria.nome}
            </h2>
            <div className="flex flex-col gap-5">
              {categoria.itens.map((item) => (
                <MenuItemCard key={item.id} item={item} onAdd={adicionarItem} />
              ))}
            </div>
          </section>
        ))}

        <footer className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Pink &amp; Sweet Bistrô • Todos os direitos reservados a Marina Dugonski.</p>
          <p className="mt-1">Sabores artesanais feitos com amor.</p>
        </footer>
      </div>

      <CartBar quantidade={carrinho.length} total={total} />
    </main>
  )
}
