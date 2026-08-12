import { WebsiteShowcaseFrame } from "@/components/portfolio/website-showcase-frame"
import { cn } from "@/lib/utils"
import type { ProcessBeforeAfter } from "@/lib/content/portfolio"

type BeforeAfterPanelProps = ProcessBeforeAfter & {
  showTopDivider?: boolean
  figmaHref?: string
  figmaLabel?: string
  websiteHref?: string
  websiteLabel?: string
}

export function BeforeAfterPanel({
  beforeImage,
  beforeImages,
  afterImage,
  afterImages,
  beforeImageWidth,
  beforeImageHeight,
  afterImageWidth,
  afterImageHeight,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before design",
  afterAlt = "After design",
  whatChanged,
  whyChanged,
  showTopDivider = true,
  figmaHref,
  figmaLabel = "Open Figma Prototype",
  websiteHref,
  websiteLabel = "Arizona Science Center Website",
}: BeforeAfterPanelProps) {
  return (
    <div
      className={cn(
        "space-y-6",
        showTopDivider ? "mt-6 border-t border-border/80 pt-6" : ""
      )}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <WebsiteShowcaseFrame
          title={beforeLabel}
          image={beforeImage}
          images={beforeImages}
          imageAlt={beforeAlt}
          imageWidth={beforeImageWidth}
          imageHeight={beforeImageHeight}
          placeholderGradient="from-muted/40 via-[#f7f4f8] to-secondary/10"
          openHref={websiteHref}
          openLabel={websiteLabel}
        />
        <WebsiteShowcaseFrame
          title={afterLabel}
          image={afterImage}
          images={afterImages}
          imageAlt={afterAlt}
          imageWidth={afterImageWidth}
          imageHeight={afterImageHeight}
          placeholderGradient="from-primary/20 via-[#f7f4f8] to-secondary/15"
          openHref={figmaHref}
          openLabel={figmaLabel}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.25rem] border border-border/80 bg-background/80 p-4">
          <p className="text-xs tracking-[0.24em] text-primary uppercase">
            What changed
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground">
            {whatChanged}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-border/80 bg-background/80 p-4">
          <p className="text-xs tracking-[0.24em] text-primary uppercase">
            Why it changed
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {whyChanged}
          </p>
        </div>
      </div>
    </div>
  )
}
