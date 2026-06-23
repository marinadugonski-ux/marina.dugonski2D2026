import { Heart } from "lucide-react"

export function MenuHeader() {
  return (
    <header className="border-b border-border bg-background px-6 py-10 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
          <Heart className="h-6 w-6 fill-primary" aria-hidden="true" />
        </span>
        <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Pink &amp; Sweet Bistrô
        </h1>
        <p className="text-sm text-muted-foreground">Sabores artesanais feitos com amor</p>
      </div>
    </header>
  )
}
