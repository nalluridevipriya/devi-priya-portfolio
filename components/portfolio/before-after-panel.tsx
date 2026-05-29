import { WebsiteShowcaseFrame } from "@/components/portfolio/website-showcase-frame"
import { cn } from "@/lib/utils"
import type { ProcessBeforeAfter } from "@/lib/content/portfolio"

type BeforeAfterPanelProps = ProcessBeforeAfter & {
  pageTitle?: string
  showTopDivider?: boolean
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
  pageTitle,
  showTopDivider = true,
}: BeforeAfterPanelProps) {
  const existingTitle = pageTitle ? `${pageTitle} — ${beforeLabel}` : beforeLabel
  const redesignTitle = pageTitle ? `${pageTitle} — ${afterLabel}` : afterLabel

  return (
    <div
      className={cn(
        "space-y-6",
        showTopDivider ? "mt-6 border-t border-border/80 pt-6" : ""
      )}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <WebsiteShowcaseFrame
          title={existingTitle}
          image={beforeImage}
          imageAlt={beforeAlt}
          placeholderGradient="from-muted/40 via-[#f7f4f8] to-secondary/10"
        />
        <WebsiteShowcaseFrame
          title={redesignTitle}
          image={afterImage}
          imageAlt={afterAlt}
          placeholderGradient="from-primary/20 via-[#f7f4f8] to-secondary/15"
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
