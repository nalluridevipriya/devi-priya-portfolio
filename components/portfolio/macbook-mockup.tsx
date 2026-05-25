import Image from "next/image"
import { useId } from "react"

import { cn } from "@/lib/utils"

type MacBookMockupProps = {
  src?: string
  alt: string
  placeholderGradient?: string
  placeholderText?: string
  className?: string
}

/** MacBook Pro front view — viewBox 944 × 600. Screen opening is transparent for content. */
function MacBookFrame({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "")
  const silver = `silver-${uid}`
  const silverDeep = `silverDeep-${uid}`
  const keyGrad = `keyGrad-${uid}`
  const padGrad = `padGrad-${uid}`

  const keys = Array.from({ length: 65 }, (_, index) => {
    const row = Math.floor(index / 13)
    const col = index % 13
    const x = 148 + col * 46.5
    const y = 536 + row * 11.5
    return <rect key={index} x={x} y={y} width={42} height={8.5} rx={1.6} fill={`url(#${keyGrad})`} />
  })

  return (
    <svg
      viewBox="0 0 944 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={silver} x1="472" y1="16" x2="472" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2F2F6" />
          <stop stopColor="#E5E5EA" />
          <stop stopColor="#D8D8DD" />
        </linearGradient>
        <linearGradient id={silverDeep} x1="472" y1="520" x2="472" y2="592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3E3E8" />
          <stop stopColor="#CDCDD2" />
          <stop stopColor="#BABABF" />
        </linearGradient>
        <linearGradient id={keyGrad} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FAFAFC" />
          <stop stopColor="#EBEBEF" />
        </linearGradient>
        <linearGradient id={padGrad} x1="472" y1="556" x2="472" y2="586" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D2D2D7" />
          <stop stopColor="#B8B8BD" />
        </linearGradient>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="472" cy="594" rx="310" ry="11" fill="#000" fillOpacity="0.13" />

      {/* Silver display housing (outer shell minus bezel opening) */}
      <path
        fill={`url(#${silver})`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M 64 16
          H 880
          C 896 16 908 28 908 44
          V 508
          C 908 524 896 536 880 536
          H 64
          C 48 536 36 524 36 508
          V 44
          C 36 28 48 16 64 16
          Z
          M 76 36
          H 868
          C 876 36 882 42 882 50
          V 502
          C 882 510 876 516 868 516
          H 76
          C 68 516 62 510 62 502
          V 50
          C 62 42 68 36 76 36
          Z
        "
      />

      {/* Black bezel ring (does not cover screen — hole in center) */}
      <path
        fill="#1D1D1F"
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M 76 36
          H 868
          C 876 36 882 42 882 50
          V 502
          C 882 510 876 516 868 516
          H 76
          C 68 516 62 510 62 502
          V 50
          C 62 42 68 36 76 36
          Z
          M 90 50
          H 854
          C 858 50 862 54 862 58
          V 494
          C 862 498 858 502 854 502
          H 90
          C 86 502 82 498 82 494
          V 58
          C 82 54 86 50 90 50
          Z
        "
      />

      {/* Notch + camera (overlays top of screen content) */}
      <path
        d="M 408 50 H 536 C 542 50 548 55 548 62 V 70 C 548 74 544 76 540 76 H 404 C 400 76 396 74 396 70 V 62 C 396 55 402 50 408 50 Z"
        fill="#1D1D1F"
      />
      <circle cx="472" cy="60" r="2.4" fill="#2C2C2E" />
      <circle cx="472" cy="60" r="1.1" fill="#48484A" fillOpacity="0.6" />

      {/* Keyboard deck */}
      <path
        d="M 68 520 H 876 C 888 520 896 528 896 540 V 572 C 896 584 888 592 876 592 H 68 C 56 592 48 584 48 572 V 540 C 48 528 56 520 68 520 Z"
        fill={`url(#${silverDeep})`}
      />

      <rect x="116" y="528" width="712" height="1" fill="#AEAEB3" fillOpacity="0.5" />

      {keys}

      <rect x="328" y="556" width="288" height="30" rx="7" fill={`url(#${padGrad})`} />
      <rect x="328" y="556" width="288" height="30" rx="7" stroke="#AEAEB3" strokeOpacity="0.4" />

      <rect x="424" y="584" width="96" height="3.5" rx="1.75" fill="#A1A1A6" />
    </svg>
  )
}

export function MacBookMockup({
  src,
  alt,
  placeholderGradient = "from-muted via-background to-card",
  placeholderText,
  className,
}: MacBookMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[36rem]", className)}>
      <div className="relative aspect-[944/600] w-full">
        {/* Screen content — sits in the transparent display opening */}
        <div
          className="absolute z-0 overflow-hidden bg-white"
          style={{
            left: "8.69%",
            top: "8.33%",
            width: "82.63%",
            height: "75.33%",
            borderRadius: "4px",
          }}
        >
          <div
            className="h-full overflow-y-auto overscroll-contain scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.22)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15 [&::-webkit-scrollbar-track]:bg-transparent"
            tabIndex={0}
            role="region"
            aria-label={`Scrollable MacBook preview: ${alt}`}
          >
            {src ? (
              <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 580px"
                className="block h-auto w-full"
                style={{ width: "100%", height: "auto" }}
                draggable={false}
              />
            ) : (
              <div
                className={cn(
                  "flex min-h-full items-end bg-gradient-to-br p-4",
                  placeholderGradient
                )}
              >
                <p className="text-xs leading-5 text-muted-foreground">
                  {placeholderText ?? `Add image: ${alt}`}
                </p>
              </div>
            )}
          </div>

          {src ? (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-black/8 to-transparent"
              aria-hidden
            />
          ) : null}
        </div>

        <MacBookFrame className="pointer-events-none absolute inset-0 z-10" />
      </div>
    </div>
  )
}
