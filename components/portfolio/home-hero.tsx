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

export function HomeHero({ profile }: HomeHeroProps) {
  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-visible px-2 pt-1 sm:px-4">
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
          <div className="hero-sticky-note-wrap shrink-0 self-end">
            <div className="hero-sticky-note">
              <p className="hero-sticky-note-text">{profile.heroHeadline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
