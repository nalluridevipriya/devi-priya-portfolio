import { MacBookMockup } from "@/components/portfolio/macbook-mockup"
import { cn } from "@/lib/utils"
import type { ProcessBeforeAfter } from "@/lib/content/portfolio"

type BeforeAfterPanelProps = ProcessBeforeAfter & {
  showTopDivider?: boolean
}

function ComparisonFrame({
  label,
  src,
  alt,
  placeholderGradient,
}: {
  label: string
  src?: string
  alt: string
  placeholderGradient: string
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">{label}</p>
      <MacBookMockup
        src={src}
        alt={alt}
        placeholderGradient={placeholderGradient}
        placeholderText={`Add image: ${alt}`}
      />
      {src ? (
        <p className="text-center text-[0.6875rem] text-muted-foreground">Scroll inside the screen to explore</p>
      ) : null}
    </div>
  )
}

export function BeforeAfterPanel({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before design",
  afterAlt = "After design",
  whatChanged,
  whyChanged,
  showTopDivider = true,
}: BeforeAfterPanelProps) {
  return (
    <div
      className={cn(
        "space-y-6",
        showTopDivider ? "mt-6 border-t border-border/80 pt-6" : ""
      )}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <ComparisonFrame
          label={beforeLabel}
          src={beforeImage}
          alt={beforeAlt}
          placeholderGradient="from-muted via-background to-card"
        />
        <ComparisonFrame
          label={afterLabel}
          src={afterImage}
          alt={afterAlt}
          placeholderGradient="from-primary/20 via-background to-card"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.25rem] border border-border/80 bg-background/80 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-primary">What changed</p>
          <p className="mt-3 text-sm leading-7 text-foreground">{whatChanged}</p>
        </div>
        <div className="rounded-[1.25rem] border border-border/80 bg-background/80 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-primary">Why it changed</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{whyChanged}</p>
        </div>
      </div>
    </div>
  )
}
