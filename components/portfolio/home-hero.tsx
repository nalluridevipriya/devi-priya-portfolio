import Image from "next/image"

import { cn } from "@/lib/utils"
import type { HeroPhoto, SiteProfile } from "@/lib/content/portfolio"

type HomeHeroProps = {
  profile: Pick<
    SiteProfile,
    "name" | "heroPills" | "heroOpenToLabel" | "heroHeadline"
  >
  photos?: HeroPhoto[]
}

type HeroPillProps = {
  label: string
  variant: "primary" | "secondary"
  motion?: "default" | "alt"
  className?: string
  animationDelay?: string
  plusDelay?: string
}

function HeroPill({
  label,
  variant,
  motion = "default",
  className,
  animationDelay = "0s",
  plusDelay = "0s",
}: HeroPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.6875rem] font-medium leading-none shadow-sm backdrop-blur-sm sm:px-3.5 sm:text-xs",
        motion === "alt" ? "hero-pill-float-alt" : "hero-pill-float",
        variant === "primary"
          ? "border-primary/45 bg-primary/15 text-primary shadow-[0_10px_28px_-14px_rgba(89,62,95,0.35)]"
          : "border-secondary/50 bg-secondary/15 text-secondary shadow-[0_10px_28px_-14px_rgba(69,69,93,0.3)]",
        className
      )}
      style={{ animationDelay }}
    >
      <span
        className={cn(
          "hero-pill-plus",
          variant === "primary" ? "text-primary/75" : "text-secondary/75"
        )}
        style={{ animationDelay: plusDelay }}
      >
        +
      </span>
      {label}
    </span>
  )
}

function AnimatedNameSegment({
  children,
  className,
  delayMs,
}: {
  children: React.ReactNode
  className?: string
  delayMs: number
}) {
  return (
    <span
      className={cn("hero-name-segment inline text-[60px]", className)}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </span>
  )
}

function heroNameNodes(fullName: string) {
  const wordStaggerMs = 120
  const parts = fullName.trim().split(/\s+/)

  if (parts.length >= 3) {
    const [first, second, ...rest] = parts
    const restPrefix = rest.slice(0, -1).join(" ")
    const lastWord = rest[rest.length - 1] ?? ""

    return (
      <>
        <AnimatedNameSegment delayMs={0} className="text-foreground">
          {first}{" "}
        </AnimatedNameSegment>
        <AnimatedNameSegment delayMs={wordStaggerMs} className="italic text-foreground">
          {second}{" "}
        </AnimatedNameSegment>
        {restPrefix ? (
          <AnimatedNameSegment delayMs={wordStaggerMs * 2} className="text-foreground">
            {restPrefix}{" "}
          </AnimatedNameSegment>
        ) : null}
        <AnimatedNameSegment
          delayMs={wordStaggerMs * (restPrefix ? 3 : 2)}
          className="text-foreground"
        >
          {lastWord}
        </AnimatedNameSegment>
      </>
    )
  }

  if (parts.length === 2) {
    return (
      <>
        <AnimatedNameSegment delayMs={0} className="text-foreground">
          {parts[0]}{" "}
        </AnimatedNameSegment>
        <AnimatedNameSegment delayMs={wordStaggerMs} className="italic text-foreground">
          {parts[1]}
        </AnimatedNameSegment>
      </>
    )
  }

  return (
    <AnimatedNameSegment delayMs={0} className="text-foreground">
      {parts[0] ?? fullName}
    </AnimatedNameSegment>
  )
}

const heroGridCells = [
  {
    className: "col-start-1 row-start-1 justify-self-start",
    frameClassName: "h-[4.75rem] w-[3.75rem] -rotate-8 sm:h-[6.75rem] sm:w-[5.25rem]",
    offsetClassName: "-translate-x-1 translate-y-2 sm:-translate-x-2 sm:translate-y-3",
    motion: "hero-photo-float",
    enterDelay: "320ms",
    floatDelay: "0s",
  },
  {
    className: "col-start-2 row-start-1 justify-self-center",
    frameClassName: "h-[4.5rem] w-[3.5rem] rotate-4 sm:h-[6.5rem] sm:w-[4.75rem]",
    offsetClassName: "-translate-y-1 sm:-translate-y-2",
    motion: "hero-photo-float-alt",
    enterDelay: "480ms",
    floatDelay: "0.5s",
  },
  {
    className: "col-start-3 row-start-1 justify-self-end",
    frameClassName: "h-[5rem] w-[3.875rem] -rotate-5 sm:h-[7rem] sm:w-[5.375rem]",
    offsetClassName: "translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2",
    motion: "hero-photo-float-slow",
    enterDelay: "640ms",
    floatDelay: "1s",
  },
  {
    className: "col-start-1 row-start-1 justify-self-start",
    frameClassName: "h-[4.625rem] w-[3.75rem] rotate-6 sm:h-[6.5rem] sm:w-[5.125rem]",
    offsetClassName: "translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3",
    motion: "hero-photo-float-alt",
    enterDelay: "800ms",
    floatDelay: "1.4s",
  },
  {
    className: "col-start-2 row-start-1 justify-self-center",
    frameClassName: "h-[4.75rem] w-[3.625rem] -rotate-3 sm:h-[6.75rem] sm:w-[5rem]",
    offsetClassName: "translate-y-1 sm:translate-y-2",
    motion: "hero-photo-float",
    enterDelay: "960ms",
    floatDelay: "1.8s",
  },
  {
    className: "col-start-3 row-start-1 justify-self-end",
    frameClassName: "h-[4.5rem] w-[3.5rem] rotate-7 sm:h-[6.5rem] sm:w-[4.875rem]",
    offsetClassName: "-translate-x-2 translate-y-2 sm:-translate-x-3 sm:translate-y-3",
    motion: "hero-photo-float-slow",
    enterDelay: "1120ms",
    floatDelay: "2.2s",
  },
] as const

const heroAccentLayouts = [
  {
    className: "left-[16%] top-[10%] sm:left-[18%] sm:top-[9%]",
    frameClassName: "h-[4.25rem] w-[3.375rem] rotate-4 sm:h-[6rem] sm:w-[4.625rem]",
    motion: "hero-photo-float-alt",
    enterDelay: "560ms",
    floatDelay: "0.7s",
  },
  {
    className: "right-[16%] bottom-[16%] sm:right-[18%] sm:bottom-[14%]",
    frameClassName: "h-[4.25rem] w-[3.375rem] -rotate-4 sm:h-[6rem] sm:w-[4.625rem]",
    motion: "hero-photo-float",
    enterDelay: "1040ms",
    floatDelay: "2s",
  },
  {
    className: "left-[7%] top-[34%] sm:left-[9%] sm:top-[32%]",
    frameClassName: "h-[4.25rem] w-[3.375rem] -rotate-4 sm:h-[6rem] sm:w-[4.625rem]",
    motion: "hero-photo-float-alt",
    enterDelay: "1280ms",
    floatDelay: "2.6s",
  },
  {
    className: "right-[7%] top-[36%] sm:right-[9%] sm:top-[34%]",
    frameClassName: "h-[4.25rem] w-[3.375rem] rotate-5 sm:h-[6rem] sm:w-[4.625rem]",
    motion: "hero-photo-float",
    enterDelay: "1440ms",
    floatDelay: "3s",
  },
] as const

type HeroPhotoLayout = {
  className: string
  frameClassName: string
  motion: (typeof heroGridCells)[number]["motion"]
  enterDelay: string
  floatDelay: string
  offsetClassName?: string
}

function HeroPhotoFrame({
  photo,
  layout,
}: {
  photo: HeroPhoto
  layout: HeroPhotoLayout
}) {
  return (
    <div className={cn(layout.motion, layout.offsetClassName)} style={{ animationDelay: layout.floatDelay }}>
      <div
        className={cn(
          "hero-photo-enter relative overflow-hidden rounded-[1rem] border border-border/70 bg-background/40 shadow-[0_16px_40px_-24px_rgba(74,56,40,0.55)] backdrop-blur-[2px] sm:rounded-[1.25rem]",
          layout.frameClassName
        )}
        style={{ animationDelay: layout.enterDelay }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 84px, 128px"
        />
        <div className="absolute inset-0 bg-foreground/5" />
      </div>
    </div>
  )
}

function HeroScatterPhoto({
  photo,
  layout,
}: {
  photo: HeroPhoto
  layout: HeroPhotoLayout
}) {
  return (
    <div className={cn("pointer-events-none absolute z-[1]", layout.className)}>
      <HeroPhotoFrame photo={photo} layout={layout} />
    </div>
  )
}

function HeroScatteredGrid({ photos }: { photos: HeroPhoto[] }) {
  const topLeft = photos[0]
  const topRight = photos[2]
  const bottomLeft = photos[3]
  const bottomRight = photos[5]

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-[2%] z-[1] grid grid-cols-[1fr_auto_1fr] gap-x-3 px-3 sm:gap-x-5 sm:px-6 md:gap-x-6 md:px-8">
        {topLeft ? (
          <div className="pointer-events-none justify-self-start">
            <HeroPhotoFrame photo={topLeft} layout={heroGridCells[0]} />
          </div>
        ) : (
          <div aria-hidden />
        )}
        <div aria-hidden className="pointer-events-none min-w-[7.5rem] sm:min-w-[9.5rem] md:min-w-[10.5rem]" />
        {topRight ? (
          <div className="pointer-events-none justify-self-end">
            <HeroPhotoFrame photo={topRight} layout={heroGridCells[2]} />
          </div>
        ) : (
          <div aria-hidden />
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[14%] z-[1] grid grid-cols-[1fr_auto_1fr] gap-x-3 px-3 sm:bottom-[12%] sm:gap-x-5 sm:px-6 md:gap-x-6 md:px-8">
        {bottomLeft ? (
          <div className="pointer-events-none justify-self-start">
            <HeroPhotoFrame photo={bottomLeft} layout={heroGridCells[3]} />
          </div>
        ) : (
          <div aria-hidden />
        )}
        <div aria-hidden className="pointer-events-none min-w-[7.5rem] sm:min-w-[9.5rem] md:min-w-[10.5rem]" />
        {bottomRight ? (
          <div className="pointer-events-none justify-self-end">
            <HeroPhotoFrame photo={bottomRight} layout={heroGridCells[5]} />
          </div>
        ) : (
          <div aria-hidden />
        )}
      </div>
    </>
  )
}

export function HomeHero({ profile, photos = [] }: HomeHeroProps) {
  const gridPhotos = photos.slice(0, heroGridCells.length)
  const accentPhotoIndexes = [1, 4, 6, 7] as const
  const accentPhotos = accentPhotoIndexes
    .map((index) => photos[index])
    .filter((photo): photo is HeroPhoto => Boolean(photo))

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-visible px-2 pt-1 sm:min-h-[26rem] sm:px-4 md:min-h-[28rem]">
      <HeroScatteredGrid photos={gridPhotos} />

      <div className="pointer-events-none absolute inset-0 overflow-visible">
        {accentPhotos.map((photo, index) => (
          <HeroScatterPhoto key={photo.src} photo={photo} layout={heroAccentLayouts[index]} />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 sm:px-6">
        <div className="flex w-full justify-end pt-6 pr-2 sm:pt-8 sm:pr-6 md:pt-9 md:pr-8">
          <HeroPill
            label={profile.heroPills[0]}
            variant="primary"
            animationDelay="0s"
            plusDelay="0.15s"
          />
        </div>

        <div className="mt-3 flex w-full justify-center sm:mt-4">
          <h1 className="hero-name whitespace-nowrap text-center font-heading text-[clamp(1.625rem,4.2vw,3.25rem)] font-medium leading-none tracking-[-0.03em] text-foreground">
            {heroNameNodes(profile.name)}
          </h1>
        </div>

        <div className="mt-3 flex w-full justify-start pl-2 sm:mt-4 sm:pl-6 md:pl-8">
          <HeroPill
            label={profile.heroPills[1]}
            variant="secondary"
            motion="alt"
            animationDelay="0.6s"
            plusDelay="0.9s"
          />
        </div>

      <div className="hero-name-footer mx-auto mt-5 flex w-full max-w-2xl flex-col gap-4 px-1 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:mt-7">
        <div className="flex shrink-0 items-center gap-2.5 self-start">
          <span className="hero-status-dot inline-block size-2 shrink-0 rounded-full bg-emerald-500" />
          <span className="hero-status-label text-sm text-muted-foreground">
            {profile.heroOpenToLabel}
          </span>
        </div>
        <div className="hero-sticky-note-wrap shrink-0 self-end -translate-x-4 -translate-y-2 sm:-translate-x-12 sm:-translate-y-4 md:-translate-x-[4.75rem] md:-translate-y-5 lg:-translate-x-[5.5rem] lg:-translate-y-6">
          <div className="hero-sticky-note">
            <p className="hero-sticky-note-text">{profile.heroHeadline}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
