import Link from "next/link"

import { SiteLogo } from "@/components/portfolio/site-logo"
import { profile } from "@/lib/content/portfolio"

const footerLinks = [
  profile.linkedinHref
    ? { label: "LinkedIn", href: profile.linkedinHref, external: true }
    : null,
  {
    label: "Resume",
    href: profile.resumePdfHref ?? profile.resumeHref,
    external: Boolean(profile.resumePdfHref),
  },
].filter(Boolean) as { label: string; href: string; external: boolean }[]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/45">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <SiteLogo variant="mark" />
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-6 sm:gap-8"
        >
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm text-sm font-semibold text-foreground/70 transition-colors hover:text-primary focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-sm text-sm font-semibold text-foreground/70 transition-colors hover:text-primary focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  )
}
