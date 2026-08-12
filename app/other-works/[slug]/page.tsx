import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { InteriorProductShowcase } from "@/components/portfolio/interior-product-showcase"
import { OtherWorkHero } from "@/components/portfolio/other-work-hero"
import { OtherWorkNav } from "@/components/portfolio/other-work-nav"
import { SiteShell } from "@/components/portfolio/site-shell"
import { cn } from "@/lib/utils"
import {
  getAdjacentOtherWorks,
  getInteriorProductsByWorkSlug,
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
      title: "Project Unavailable",
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
  const products = getInteriorProductsByWorkSlug(slug)

  return (
    <SiteShell>
      <article className="space-y-10 sm:space-y-12">
        <OtherWorkHero work={work} />

        <div
          className={cn(
            "relative min-h-[16rem] overflow-hidden rounded-[2rem] border border-border/80",
            work.coverStyle
              ? `bg-gradient-to-br ${work.coverStyle}`
              : "bg-muted"
          )}
          aria-hidden="true"
        />

        {products.length ? (
          <InteriorProductShowcase
            products={products}
            title={work.productShowcaseTitle}
            description={work.productShowcaseDescription}
          />
        ) : null}

        <div className="grid gap-5 lg:grid-cols-2">
          <EditorialCard
            title="Context"
            titleElement="h2"
            description={work.context}
          />
          <EditorialCard
            title="Approach"
            titleElement="h2"
            description={work.approach}
          />
        </div>

        <EditorialCard title="Contributions" titleElement="h2">
          <ul className="space-y-3">
            {work.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-7 text-muted-foreground"
              >
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
            label: "View UX Projects",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email Devi",
          }}
        />
      </article>
    </SiteShell>
  )
}
