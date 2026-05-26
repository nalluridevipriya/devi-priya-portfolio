import { cn } from "@/lib/utils"
import type { SiteProfile } from "@/lib/content/portfolio"

type HomeHeroProps = {
  profile: Pick<
    SiteProfile,
    "name" | "heroPills" | "heroOpenToLabel" | "heroHeadline"
  >
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
          ? "border-primary/45 bg-primary/30 text-primary-foreground shadow-[0_10px_28px_-14px_rgba(89,62,95,0.75)]"
          : "border-secondary/50 bg-secondary/35 text-secondary-foreground shadow-[0_10px_28px_-14px_rgba(69,69,93,0.65)]",
        className
      )}
      style={{ animationDelay }}
    >
      <span
        className={cn(
          "hero-pill-plus",
          variant === "primary" ? "text-primary-foreground/80" : "text-secondary-foreground/80"
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
      className={cn("hero-name-segment inline-block", className)}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </span>
  )
}

function HeroNameAccentLines({ delayMs }: { delayMs: number }) {
  return (
    <span
      className="pointer-events-none absolute -right-5 -top-9 h-10 w-12 sm:-right-6 sm:-top-11 sm:h-11 sm:w-14"
      aria-hidden
    >
      <svg
        viewBox="0 0 56 44"
        fill="none"
        className="hero-name-accent h-full w-full text-primary"
        style={{ animationDelay: `${delayMs}ms` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 38 C22 6 34 4 48 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="hero-name-accent-line"
          style={{
            animationDelay: `${delayMs + 80}ms, ${delayMs + 900}ms`,
          }}
        />
        <path
          d="M14 40 L40 10"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="hero-name-accent-line"
          style={{
            animationDelay: `${delayMs + 180}ms, ${delayMs + 1035}ms`,
          }}
        />
        <path
          d="M20 42 L48 18"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="hero-name-accent-line opacity-80"
          style={{
            animationDelay: `${delayMs + 280}ms, ${delayMs + 1170}ms`,
          }}
        />
      </svg>
    </span>
  )
}

function heroNameNodes(fullName: string) {
  const wordStaggerMs = 120
  const parts = fullName.trim().split(/\s+/)

  if (parts.length >= 3) {
    const [first, second, ...rest] = parts
    const lastWord = rest[rest.length - 1] ?? ""
    const restPrefix = rest.slice(0, -1).join(" ")
    const lastChar = lastWord.slice(-1)
    const lastWordPrefix = lastWord.slice(0, -1)
    const accentDelayMs = parts.length * wordStaggerMs + 180

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
          {lastWordPrefix}
          <span className="relative inline-block">
            {lastChar}
            <HeroNameAccentLines delayMs={accentDelayMs} />
          </span>
        </AnimatedNameSegment>
      </>
    )
  }

  if (parts.length === 2) {
    const lastChar = parts[1].slice(-1)
    const lastWordPrefix = parts[1].slice(0, -1)

    return (
      <>
        <AnimatedNameSegment delayMs={0} className="text-foreground">
          {parts[0]}{" "}
        </AnimatedNameSegment>
        <AnimatedNameSegment delayMs={wordStaggerMs} className="italic text-foreground">
          {lastWordPrefix}
          <span className="relative inline-block">
            {lastChar}
            <HeroNameAccentLines delayMs={wordStaggerMs * 2 + 180} />
          </span>
        </AnimatedNameSegment>
      </>
    )
  }

  const word = parts[0] ?? fullName
  const lastChar = word.slice(-1)
  const wordPrefix = word.slice(0, -1)

  return (
    <AnimatedNameSegment delayMs={0} className="text-foreground">
      {wordPrefix}
      <span className="relative inline-block">
        {lastChar}
        <HeroNameAccentLines delayMs={300} />
      </span>
    </AnimatedNameSegment>
  )
}

export function HomeHero({ profile }: HomeHeroProps) {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-2 pt-2 sm:px-4">
      <div className="pointer-events-none absolute left-0 top-2 z-10 max-w-[11rem] sm:left-0 sm:top-4 sm:max-w-none md:-left-2 md:top-6">
        <HeroPill
          label={profile.heroPills[0]}
          variant="primary"
          animationDelay="0s"
          plusDelay="0.15s"
        />
      </div>

      <div className="pointer-events-none absolute bottom-[34%] right-0 z-10 max-w-[10rem] sm:bottom-[30%] sm:right-2 sm:max-w-none md:right-4">
        <HeroPill
          label={profile.heroPills[1]}
          variant="secondary"
          motion="alt"
          animationDelay="0.6s"
          plusDelay="0.9s"
        />
      </div>

      <div className="flex flex-col items-center px-4 pb-2 pt-10 text-center sm:px-10 sm:pt-14 md:pt-16">
        <h1 className="hero-name max-w-[min(100%,20rem)] font-heading text-[2.75rem] font-medium leading-[0.98] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-6xl sm:leading-[0.96] md:text-7xl md:leading-[0.95] lg:text-[4.5rem] lg:leading-[0.93]">
          {heroNameNodes(profile.name)}
        </h1>
      </div>

      <div className="hero-name-footer mx-auto mt-8 flex w-full max-w-3xl flex-col items-stretch gap-4 px-1 sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:mt-12 md:max-w-4xl">
        <div className="flex items-center justify-center gap-2.5 sm:justify-start">
          <span className="hero-status-dot inline-block size-2 shrink-0 rounded-full bg-emerald-500" />
          <span className="hero-status-label text-sm text-muted-foreground">
            {profile.heroOpenToLabel}
          </span>
        </div>
        <p className="text-center text-sm leading-relaxed text-muted-foreground sm:max-w-[min(100%,26rem)] sm:text-right sm:text-sm md:max-w-md md:leading-7">
          {profile.heroHeadline}
        </p>
      </div>
    </div>
  )
}
