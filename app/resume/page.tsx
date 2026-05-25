import Link from "next/link"
import { RiArrowRightUpLine, RiMailLine, RiMapPin2Line } from "@remixicon/react"

import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { PullQuote } from "@/components/portfolio/pull-quote"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { profile, resumeSections } from "@/lib/content/portfolio"

export default function ResumePage() {
  return (
    <SiteShell>
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Resume"
          title="A scannable snapshot of strengths, projects, and the kind of product work I want to grow into."
          description="This page is intentionally designed to act as the primary CTA destination for the portfolio. It reads quickly, keeps the essentials visible, and avoids forcing a file download."
        />

        <EditorialCard className="space-y-6">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2">
              <RiMapPin2Line className="size-4" />
              Open to remote and hybrid opportunities
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2">
              <RiMailLine className="size-4" />
              {profile.email}
            </span>
          </div>
          <p className="text-lg leading-8 text-foreground">{profile.resumeSummary}</p>
        </EditorialCard>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {resumeSections.map((section) => (
          <EditorialCard key={section.title} title={section.title} description={section.summary}>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={`${section.title}-${item.title}`}
                  className="rounded-[1.5rem] border border-border/80 bg-background/80 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 font-medium text-foreground">{item.title}</h3>
                    </div>
                    {item.href ? (
                      item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          View
                          <RiArrowRightUpLine className="size-4" />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          View
                          <RiArrowRightUpLine className="size-4" />
                        </a>
                      )
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </EditorialCard>
        ))}
      </section>

      <PullQuote quote={profile.pullQuote} attribution={profile.name} role={profile.title} />

      <section id="contact">
        <CtaRow
          title="Prefer a PDF later?"
          description="The site is already wired to use this resume page as the main CTA. If you add a PDF in the future, keep this page as the human-friendly overview and link the file as a secondary action."
          primaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email me",
          }}
          secondaryAction={{
            href: "/#work",
            label: "Browse case studies",
          }}
        />
      </section>
    </SiteShell>
  )
}
