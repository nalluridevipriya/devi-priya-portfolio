"use client"

import { useMemo, useRef, useState } from "react"
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiFileTextLine,
  RiGlobalLine,
} from "@remixicon/react"

import { cn } from "@/lib/utils"
import type { WebsiteShowcasePage } from "@/lib/content/portfolio"

type WebsiteShowcaseFrameProps = WebsiteShowcasePage & {
  className?: string
  openLabel?: string
}

export function WebsiteShowcaseFrame({
  title,
  image,
  images,
  imageAlt,
  imageWidth,
  imageHeight,
  openHref,
  openLabel = "Open",
  placeholderGradient = "from-primary/15 via-background to-secondary/10",
  className,
}: WebsiteShowcaseFrameProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const isFigmaLink = openLabel.toLowerCase().includes("figma")
  const isIconOnlyLink = isFigmaLink || openLabel.toLowerCase().includes("website") || openLabel.toLowerCase().includes("exhibitions") || openLabel.toLowerCase().includes("tickets")
  const slides = useMemo(
    () =>
      image
        ? [
            {
              src: image,
              alt: imageAlt,
              width: imageWidth,
              height: imageHeight,
            },
            ...(images ?? []).filter((slide) => slide.src !== image),
          ]
        : (images ?? []),
    [image, imageAlt, imageHeight, imageWidth, images]
  )
  const hasCarousel = slides.length > 1

  const scrollToSlide = (index: number) => {
    const scrollArea = scrollAreaRef.current
    if (!scrollArea) {
      return
    }

    const nextIndex = (index + slides.length) % slides.length
    scrollArea.scrollTo({
      left: scrollArea.clientWidth * nextIndex,
      behavior: "smooth",
    })
    setActiveSlide(nextIndex)
  }

  const updateActiveSlide = () => {
    const scrollArea = scrollAreaRef.current
    if (!scrollArea || !hasCarousel) {
      return
    }

    setActiveSlide(Math.round(scrollArea.scrollLeft / scrollArea.clientWidth))
  }

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
            aria-label={openLabel}
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary-foreground/25 text-xs font-medium text-primary-foreground shadow-[0_2px_12px_-4px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-colors hover:border-primary-foreground/70 hover:bg-primary-foreground/40 sm:text-sm",
              isIconOnlyLink ? "gap-1.5 px-2.5 py-2" : "gap-1.5 px-3 py-1.5"
            )}
          >
            {isFigmaLink ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/skills/figma.svg" alt="" className="h-5 w-auto" aria-hidden="true" />
                <RiArrowRightUpLine className="size-3" aria-hidden="true" />
                <span className="sr-only">{openLabel}</span>
              </>
            ) : isIconOnlyLink ? (
              <>
                <RiGlobalLine className="size-5" aria-hidden="true" />
                <RiArrowRightUpLine className="size-3" aria-hidden="true" />
                <span className="sr-only">{openLabel}</span>
              </>
            ) : (
              <>
                {openLabel}
                <RiArrowRightUpLine className="size-3.5" />
              </>
            )}
          </a>
        ) : null}
      </div>

      <div className="relative bg-[#f7f4f8]">
        <div
          ref={scrollAreaRef}
          className={cn(
            "showcase-scroll max-h-[min(32rem,70vh)] overscroll-contain scroll-smooth",
            hasCarousel
              ? "snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
              : "overflow-y-auto"
          )}
          tabIndex={0}
          role="region"
          aria-label={`Scrollable preview: ${imageAlt}`}
          onScroll={updateActiveSlide}
        >
          {slides.length ? (
            <div className={cn(hasCarousel ? "flex" : "")}>
              {slides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={cn(
                    "w-full",
                    hasCarousel
                      ? "max-h-[min(32rem,70vh)] min-w-full shrink-0 snap-start overflow-y-auto overscroll-contain"
                      : ""
                  )}
                  aria-label={
                    hasCarousel ? `Slide ${index + 1} of ${slides.length}` : undefined
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    className="mx-auto block h-auto w-full max-w-full"
                    loading={slide.width && slide.width > 2000 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
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
        {hasCarousel ? (
          <>
            <button
              type="button"
              aria-label="Previous preview"
              className="absolute left-3 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-background/85 text-primary shadow-[0_10px_24px_-16px_rgba(45,40,36,0.45)] backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background"
              onClick={() => scrollToSlide(activeSlide - 1)}
            >
              <RiArrowLeftSLine className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next preview"
              className="absolute right-3 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-background/85 text-primary shadow-[0_10px_24px_-16px_rgba(45,40,36,0.45)] backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background"
              onClick={() => scrollToSlide(activeSlide + 1)}
            >
              <RiArrowRightSLine className="size-5" />
            </button>
            <div
              className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1.5"
              aria-hidden="true"
            >
              {slides.map((slide, index) => (
                <span
                  key={slide.src}
                  className={cn(
                    "block size-1.5 rounded-full transition-colors",
                    activeSlide === index ? "bg-primary" : "bg-primary/30"
                  )}
                />
              ))}
            </div>
          </>
        ) : null}
        {slides.length ? (
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
