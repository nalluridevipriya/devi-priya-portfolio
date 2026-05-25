import {
  RiArticleLine,
  RiContactsBook3Line,
  RiLightbulbFlashLine,
} from "@remixicon/react"

import { AboutSection } from "@/components/portfolio/about-section"
import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { ProcessTimeline } from "@/components/portfolio/process-timeline"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkShowcaseGrid } from "@/components/portfolio/work-showcase-grid"

import { aboutSection, caseStudies, profile, workingProcess } from "@/lib/content/portfolio"

function heroNameNodes(fullName: string) {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length >= 3) {
    const [first, second, ...rest] = parts
    const remainder = rest.join(" ")
    return (
      <>
        <span className="text-foreground">{first} </span>
        <span className="italic text-foreground">{second} </span>
        <span className="text-foreground">{remainder}</span>
      </>
    )
  }
  if (parts.length === 2) {
    return (
      <>
        <span className="text-foreground">{parts[0]} </span>
        <span className="italic text-foreground">{parts[1]}</span>
      </>
    )
  }
  return <span className="text-foreground">{fullName}</span>
}

export default function Page() {
  return (
    <SiteShell>
      <section className="flex flex-col gap-12 lg:gap-14">
        <div className="relative mx-auto w-full max-w-4xl px-2 pt-2 sm:px-4">
          <div className="pointer-events-none absolute left-0 top-2 z-10 max-w-[11rem] sm:left-0 sm:top-4 sm:max-w-none md:-left-2 md:top-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-100/75 px-3 py-1.5 text-[0.6875rem] font-medium leading-none text-foreground/90 shadow-sm backdrop-blur-sm dark:border-violet-500/25 dark:bg-violet-950/40 sm:px-3.5 sm:text-xs">
              <span className="text-primary/70">+</span>
              {profile.heroPills[0]}
            </span>
          </div>

          <div className="pointer-events-none absolute bottom-[34%] right-0 z-10 max-w-[10rem] sm:bottom-[30%] sm:right-2 sm:max-w-none md:right-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ddd5c8]/90 bg-[#ebe6dc]/85 px-3 py-1.5 text-[0.6875rem] font-medium leading-none text-foreground/90 shadow-sm backdrop-blur-sm sm:px-3.5 sm:text-xs">
              <span className="text-primary/70">+</span>
              {profile.heroPills[1]}
            </span>
          </div>

          <div className="flex flex-col items-center px-4 pb-2 pt-10 text-center sm:px-10 sm:pt-14 md:pt-16">
            <h1 className="max-w-[min(100%,20rem)] font-heading text-[2.75rem] font-medium leading-[0.98] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-6xl sm:leading-[0.96] md:text-7xl md:leading-[0.95] lg:text-[4.5rem] lg:leading-[0.93]">
              {heroNameNodes(profile.name)}
            </h1>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-stretch gap-4 px-1 sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:mt-12 md:max-w-4xl">
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
              <span className="text-sm text-muted-foreground">{profile.heroOpenToLabel}</span>
            </div>
            <p className="text-center text-sm leading-relaxed text-muted-foreground sm:max-w-[min(100%,26rem)] sm:text-right sm:text-sm md:max-w-md md:leading-7">
              {profile.heroHeadline}
            </p>
          </div>
        </div>

      
      </section>

      <section id="work" className="space-y-8">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Projects</p>

        <WorkShowcaseGrid caseStudies={caseStudies} />
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="How I work"
          title="A research-first based process that turns uncertainity into factual based next steps."
          description="Define the problem, map the journey, prototype, test and refine"
        />
        <ProcessTimeline items={workingProcess} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Strengths"
          title="The mix I bring: thoughtful systems, practical collaboration, and a learner's mindset."
          description="This section is meant to stay scannable for hiring teams, while still sounding like a real person."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <EditorialCard
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

      <AboutSection content={aboutSection} resumeHref={profile.resumeHref} />

      <section id="contact">
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
