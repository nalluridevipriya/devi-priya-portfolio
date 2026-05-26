import {
  RiArticleLine,
  RiContactsBook3Line,
  RiLightbulbFlashLine,
} from "@remixicon/react"

import { AboutSection } from "@/components/portfolio/about-section"
import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { HomeHero } from "@/components/portfolio/home-hero"
import { ProcessTimeline } from "@/components/portfolio/process-timeline"
import { SectionDivider } from "@/components/portfolio/section-divider"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkShowcaseGrid } from "@/components/portfolio/work-showcase-grid"

import { aboutSection, caseStudies, profile, workingProcess } from "@/lib/content/portfolio"

export default function Page() {
  return (
    <SiteShell mainClassName="gap-0">
      <section className="flex flex-col gap-12 pb-24 lg:gap-14">
        <HomeHero profile={profile} />
      </section>

      <SectionDivider />

      <section id="work" className="space-y-8 py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Projects</p>

        <WorkShowcaseGrid caseStudies={caseStudies} />
      </section>

      <SectionDivider />

      <section className="space-y-8 py-24">
        <SectionHeading
          eyebrow="How I work"
          title="A research-first based process that turns uncertainity into factual based next steps."
          description="Define the problem, map the journey, prototype, test and refine"
        />
        <ProcessTimeline items={workingProcess} />
      </section>

      <SectionDivider />

      <section className="space-y-8 py-24">
        <SectionHeading
          eyebrow="Strengths"
          title="The mix I bring: thoughtful systems, practical collaboration, and a learner's mindset."
          description="This section is meant to stay scannable for hiring teams, while still sounding like a real person."
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <EditorialCard
            variant="plain"
            icon={<RiLightbulbFlashLine className="size-5 text-primary" />}
            title="What I focus on"
            description="I am drawn to onboarding, service flows, and everyday product moments where clarity matters more than novelty."
          >
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Opportunity framing and journey mapping</li>
              <li>Wireflows and lightweight prototypes</li>
              <li>Making dense information easier to act on</li>
            </ul>
          </EditorialCard>

          <EditorialCard
            variant="plain"
            icon={<RiContactsBook3Line className="size-5 text-primary" />}
            title="How I collaborate"
            description="I communicate best in visible drafts. I like putting rough ideas on the table early so feedback has something concrete to react to."
          >
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Share direction before polishing</li>
              <li>Document decisions in plain language</li>
              <li>Invite critique without losing momentum</li>
            </ul>
          </EditorialCard>

          <EditorialCard
            variant="plain"
            icon={<RiArticleLine className="size-5 text-primary" />}
            title="Tools and working habits"
            description="The exact toolkit can change, but the working rhythm stays the same: gather signal, synthesize what matters, and iterate intentionally."
          >
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Figma, docs, and lo-fi prototypes</li>
              <li>Audit notes that stay readable later</li>
              <li>Clear handoff thinking, even in student work</li>
            </ul>
          </EditorialCard>
        </div>
      </section>

      <SectionDivider />

      <AboutSection className="py-24" content={aboutSection} resumeHref={profile.resumeHref} />

      <SectionDivider />

      <section id="contact" className="pt-24">
        <CtaRow
          title="Let's Connect!"
          description="I would love to hear from you whether it is about design or new opportunities. Always excited to connect and share ideas."
          primaryAction={{
            href: profile.linkedinHref ?? profile.resumeHref,
            label: "LinkedIn",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email Me",
          }}
        />
      </section>
    </SiteShell>
  )
}
