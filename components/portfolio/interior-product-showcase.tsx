import Image from "next/image"

import { cn } from "@/lib/utils"
import type { InteriorProduct, InteriorProductLayout } from "@/lib/content/portfolio"

const layoutGridClass: Record<InteriorProductLayout, string> = {
  featured:
    "min-h-[20rem] sm:min-h-[22rem] lg:col-span-7 lg:row-span-2 lg:min-h-0",
  tall: "min-h-[18rem] sm:min-h-[20rem] lg:col-span-5 lg:row-span-2 lg:min-h-0",
  wide: "min-h-[14rem] lg:col-span-8",
  standard: "min-h-[14rem] lg:col-span-4",
}

type InteriorProductShowcaseProps = {
  products: InteriorProduct[]
  title?: string
  description?: string
  className?: string
}

function InteriorProductCard({
  product,
  index,
}: {
  product: InteriorProduct
  index: number
}) {
  const placeholderGradient =
    product.placeholderGradient ?? "from-primary/20 via-muted to-secondary/15"

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-[0_28px_80px_-48px_rgba(45,40,36,0.35)]",
        layoutGridClass[product.layout]
      )}
    >
      <div className="absolute inset-0">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={cn(
              "size-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.03]",
              placeholderGradient
            )}
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#2d2824]/78 via-[#2d2824]/20 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground backdrop-blur-sm">
            {product.category}
          </span>
          <span className="font-heading text-sm tabular-nums tracking-[0.12em] text-primary-foreground/75">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-3">
          <div className="space-y-1.5">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-primary-foreground/70">
              {product.material}
            </p>
            <h3 className="font-heading text-xl leading-tight tracking-[-0.03em] text-primary-foreground sm:text-2xl">
              {product.name}
            </h3>
            {product.dimensions ? (
              <p className="text-xs tracking-[0.06em] text-primary-foreground/65">
                {product.dimensions}
              </p>
            ) : null}
          </div>

          <p className="max-w-md text-sm leading-6 text-primary-foreground/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:leading-7">
            {product.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export function InteriorProductShowcase({
  products,
  title = "Interior products & objects",
  description = "Furniture, fixtures, and material selections developed alongside spatial layouts—each piece chosen for use, maintenance, and how it reads in the room.",
  className,
}: InteriorProductShowcaseProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className={cn("space-y-8 sm:space-y-10", className)}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,11rem)_1fr] lg:items-end lg:gap-10">
        <p className="hidden text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-secondary lg:block lg:justify-self-start lg:[writing-mode:vertical-rl] lg:rotate-180">
          Product study
        </p>
        <div className="max-w-2xl space-y-3">
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.25rem)] font-light leading-tight tracking-[-0.03em] text-foreground">
            {title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-[0.9375rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[minmax(11rem,auto)]">
        {products.map((product, index) => (
          <InteriorProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
