import { RiArrowRightUpLine, RiFileTextLine } from "@remixicon/react"

import { cn } from "@/lib/utils"
import type { WebsiteShowcasePage } from "@/lib/content/portfolio"

type WebsiteShowcaseFrameProps = WebsiteShowcasePage & {
  className?: string
}

export function WebsiteShowcaseFrame({
  title,
  image,
  imageAlt,
  openHref,
  placeholderGradient = "from-primary/15 via-background to-secondary/10",
  className,
}: WebsiteShowcaseFrameProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/95 shadow-[0_24px_70px_-40px_rgba(74,56,40,0.28)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-primary to-secondary px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <RiFileTextLine className="size-4 shrink-0 text-primary-foreground/90" />
          <p className="truncate text-sm font-medium text-primary-foreground sm:text-[0.9375rem]">
            {title}
          </p>
        </div>
        {openHref ? (
          <a
            href={openHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:text-sm"
          >
            Open
            <RiArrowRightUpLine className="size-3.5" />
          </a>
        ) : null}
      </div>

      <div className="relative bg-[#f7f4f8]">
        <div
          className="showcase-scroll max-h-[min(32rem,70vh)] overflow-y-auto overscroll-contain scroll-smooth"
          tabIndex={0}
          role="region"
          aria-label={`Scrollable preview: ${imageAlt}`}
        >
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={imageAlt}
              className="mx-auto block h-auto w-auto max-w-full"
              loading="lazy"
              draggable={false}
            />
          ) : (
            <div
              className={cn(
                "flex min-h-[20rem] items-end bg-gradient-to-br p-5 sm:min-h-[24rem]",
                placeholderGradient
              )}
            >
              <p className="text-sm leading-6 text-muted-foreground">
                Add full-page screenshot: {imageAlt}
              </p>
            </div>
          )}
        </div>
        {image ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#f7f4f8] to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      <p className="py-3 text-center font-heading text-sm italic tracking-[0.02em] text-muted-foreground">
        scroll to explore ↓
      </p>
    </article>
  )
}
