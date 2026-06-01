import { cn } from "@/lib/utils"
import type { SkillTool } from "@/lib/content/portfolio"

type SkillsLogoGridProps = {
  tools: SkillTool[]
  className?: string
}

export function SkillsLogoGrid({ tools, className }: SkillsLogoGridProps) {
  return (
    <div className={cn("flex w-full flex-wrap justify-center gap-x-6 gap-y-6", className)}>
      {tools.map((tool) => (
        <div key={tool.id} className="group flex w-[4.75rem] flex-col items-center gap-2 sm:w-[5.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.src}
            alt={`${tool.name} logo`}
            className="size-10 object-contain transition duration-300 group-hover:scale-105 sm:size-12"
            loading="lazy"
          />
          <span className="text-center text-xs leading-snug text-muted-foreground">{tool.name}</span>
        </div>
      ))}
    </div>
  )
}
