import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { OtherWorkHero } from "@/components/portfolio/other-work-hero"
import { OtherWorkNav } from "@/components/portfolio/other-work-nav"
import { OverviewHighlightsGrid } from "@/components/portfolio/overview-highlights-grid"
import { SiteShell } from "@/components/portfolio/site-shell"
import { cn } from "@/lib/utils"
import {
  getAdjacentOtherWorks,
  getOtherWorkBySlug,
  otherWorks,
  profile,
} from "@/lib/content/portfolio"

type OtherWorkPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return otherWorks.map((work) => ({
    slug: work.slug,
  }))
}

export async function generateMetadata({
  params,
}: OtherWorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const work = getOtherWorkBySlug(slug)

  if (!work) {
    return {
      title: "Project not found",
    }
  }

  return {
    title: `${work.title} | ${profile.name}`,
    description: work.summary,
  }
}

export default async function OtherWorkPage({ params }: OtherWorkPageProps) {
  const { slug } = await params
  const work = getOtherWorkBySlug(slug)

  if (!work) {
    notFound()
  }

  const { previous, next } = getAdjacentOtherWorks(slug)

  return (
    <SiteShell>
      <article className="space-y-10">
        <OtherWorkHero work={work} />

        <div
          className={cn(
            "relative min-h-[16rem] overflow-hidden rounded-[2rem] border border-border/80",
            work.coverStyle ? `bg-gradient-to-br ${work.coverStyle}` : "bg-muted"
          )}
          aria-hidden="true"
        />

        <OverviewHighlightsGrid items={work.highlights} />

        <div className="grid gap-5 lg:grid-cols-2">
          <EditorialCard title="Context" description={work.context} />
          <EditorialCard title="Approach" description={work.approach} />
        </div>

        <EditorialCard title="Contributions">
          <ul className="space-y-3">
            {work.contributions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </EditorialCard>

        <OtherWorkNav previous={previous} next={next} />

        <CtaRow
          title="Explore UX projects"
          description="See how spatial thinking, research, and detail-oriented design carry into my product and UX work."
          primaryAction={{
            href: "/work",
            label: "View projects",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email me",
          }}
        />
      </article>
    </SiteShell>
  )
}
