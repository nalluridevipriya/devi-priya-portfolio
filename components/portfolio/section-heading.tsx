import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered ? "mx-auto max-w-3xl" : "")}>
      <p className={cn("text-xs uppercase tracking-[0.32em] text-primary", centered ? "text-center" : "")}>
        {eyebrow}
      </p>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-heading text-4xl font-light leading-tight tracking-[-0.03em] text-foreground sm:text-5xl md:text-2xl",
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-[16px] leading-7 text-muted-foreground",
            centered ? "mx-auto max-w-2xl text-left" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
