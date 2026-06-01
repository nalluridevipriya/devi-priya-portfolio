import type { Metadata } from "next"

import { OtherWorksGrid } from "@/components/portfolio/other-works-grid"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { otherWorks, profile } from "@/lib/content/portfolio"

export const metadata: Metadata = {
  title: `Other Works | ${profile.name}`,
  description:
    "Interior design projects across residential, corporate, and retail spaces.",
}

export default function OtherWorksPage() {
  return (
    <SiteShell>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Other works"
          title="Interior design projects that shaped how I think about space, flow, and material detail."
          description="A selection of residential, corporate, and retail work from my interior design background, alongside my UX portfolio."
        />

        <OtherWorksGrid works={otherWorks} />
      </section>
    </SiteShell>
  )
}
