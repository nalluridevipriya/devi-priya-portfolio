import Image from "next/image"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import type { ScreenDesign, ScreenDesignsLayout } from "@/lib/content/portfolio"

type ScreenDesignFlowProps = {
  screens: ScreenDesign[]
  layout?: ScreenDesignsLayout
}

export function ScreenDesignFlow({
  screens,
  layout = "flow",
}: ScreenDesignFlowProps) {
  if (!screens.length) {
    return null
  }

  const [first, second, third] = screens

  if (layout === "iphone-scroll") {
    return <IPhoneScreenShowcase screens={screens} />
  }

  if (screens.length === 1) {
    const isPortraitMockup = first.height > first.width * 1.45

    return (
      <Image
        src={first.src}
        alt={first.alt}
        width={first.width}
        height={first.height}
        sizes="100vw"
        priority
        className={cn(
          "mx-auto h-auto w-full",
          isPortraitMockup ? "max-w-[26rem]" : "max-w-[86rem]"
        )}
      />
    )
  }

  return (
    <div className="relative overflow-visible">
      {screens.length >= 3 ? (
        <div className="relative hidden min-h-[58rem] bg-black lg:block">
          <ScreenFrame
            screen={first}
            className="absolute top-0 left-0 w-[52%]"
            priority
            showLabel={false}
          />
          <ScreenFrame
            screen={second}
            className="absolute top-0 right-0 w-[51%]"
            showLabel={false}
          />
          <ScreenFrame
            screen={third}
            className="absolute bottom-0 left-[31%] w-[54%]"
            showLabel={false}
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-white/55"
            viewBox="0 0 1200 900"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="screen-design-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
              >
                <path d="M0 0L10 5L0 10V0Z" fill="currentColor" />
              </marker>
            </defs>
            <path
              d="M382 294 C520 296 620 244 690 170"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              markerEnd="url(#screen-design-arrow)"
            />
            <path
              d="M820 434 C806 560 700 622 600 724"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              markerEnd="url(#screen-design-arrow)"
            />
          </svg>
        </div>
      ) : null}

      <div className="grid gap-5 lg:hidden">
        {screens.map((screen, index) => (
          <ScreenFrame
            key={screen.src}
            screen={screen}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

function IPhoneScreenShowcase({ screens }: { screens: ScreenDesign[] }) {
  const phoneSizeClass = "mx-auto w-full max-w-[min(17.5rem,78vw)]"

  return (
    <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {screens.map((screen, index) => (
        <ProMaxFrame
          key={screen.src}
          ariaLabel={screen.alt}
          className={phoneSizeClass}
        >
          <ScrollablePhoneScreen screen={screen} priority={index === 0} />
        </ProMaxFrame>
      ))}
    </div>
  )
}

function ScrollablePhoneScreen({
  screen,
  priority = false,
}: {
  screen: ScreenDesign
  priority?: boolean
}) {
  return (
    <div
      className="showcase-scroll h-full overflow-x-hidden overflow-y-auto overscroll-contain scroll-smooth bg-white [scrollbar-color:rgba(89,62,95,0.42)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/35 [&::-webkit-scrollbar-track]:bg-transparent"
      tabIndex={0}
      role="region"
      aria-label={`Scrollable iPhone preview: ${screen.alt}`}
    >
      <figure className="bg-white">
        <Image
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          sizes="280px"
          priority={priority}
          className="block h-auto w-full select-none"
          draggable={false}
        />
        {screen.label ? (
          <figcaption className="sr-only">{screen.label}</figcaption>
        ) : null}
      </figure>
    </div>
  )
}

function ProMaxFrame({
  ariaLabel,
  children,
  className,
}: {
  ariaLabel: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute -inset-7 rounded-[4.6rem] bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] -left-1.5 h-12 w-1.5 rounded-l-full bg-gradient-to-b from-[#fafaf8] via-[#9d9d9c] to-[#e8e8e4]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[32%] -left-1.5 h-20 w-1.5 rounded-l-full bg-gradient-to-b from-[#fafaf8] via-[#9d9d9c] to-[#e8e8e4]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[43%] -left-1.5 h-20 w-1.5 rounded-l-full bg-gradient-to-b from-[#fafaf8] via-[#9d9d9c] to-[#e8e8e4]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[36%] -right-1.5 h-24 w-1.5 rounded-r-full bg-gradient-to-b from-[#fafaf8] via-[#9d9d9c] to-[#e8e8e4]"
        aria-hidden="true"
      />
      <div className="relative aspect-[430/932] rounded-[4.2rem] bg-gradient-to-br from-[#fbfbf8] via-[#9a9a99] to-[#eeeeea] p-[4px] shadow-[0_48px_110px_-54px_rgba(45,40,36,0.76),inset_0_0_0_1px_rgba(255,255,255,0.85)]">
        <div className="relative h-full rounded-[3.95rem] bg-[#050505] p-2.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
          <div
            className="relative h-full overflow-hidden rounded-[3.35rem] bg-white"
            role="img"
            aria-label={ariaLabel}
          >
            {children}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-3 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/70"
              aria-hidden="true"
            />
          </div>
          <div
            className="pointer-events-none absolute top-6 left-1/2 z-30 h-8 w-28 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)]"
            aria-hidden="true"
          >
            <span className="absolute top-1/2 right-4 size-2 -translate-y-1/2 rounded-full bg-[#101d55] shadow-[0_0_5px_rgba(43,75,210,0.55)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenFrame({
  screen,
  className,
  priority = false,
  showLabel = true,
}: {
  screen: ScreenDesign
  className?: string
  priority?: boolean
  showLabel?: boolean
}) {
  return (
    <article className={className}>
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="h-auto w-full"
      />
      {showLabel && screen.label ? (
        <p className="mt-3 text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
          {screen.label}
        </p>
      ) : null}
    </article>
  )
}
