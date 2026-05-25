import type { Metadata } from "next"

import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkShowcaseGrid } from "@/components/portfolio/work-showcase-grid"
import { caseStudies, profile } from "@/lib/content/portfolio"

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description:
    "UX case studies and product design projects showing research, process, and interaction design work.",
}

export default function WorkPage() {
  return (
    <SiteShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies that show how I frame problems before I polish screens."
          description="Each project has its own screen with context, process, decisions, and outcomes you can explore in depth."
        />

        <WorkShowcaseGrid caseStudies={caseStudies} />
      </section>
    </SiteShell>
  )
}
