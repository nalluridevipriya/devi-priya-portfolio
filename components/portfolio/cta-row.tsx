import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"

type CtaAction = {
  href: string
  label: string
}

type CtaRowProps = {
  title: string
  description: string
  primaryAction: CtaAction
  secondaryAction: CtaAction
  tertiaryAction?: CtaAction
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function CtaActionButton({
  action,
  variant = "default",
}: {
  action: CtaAction
  variant?: "default" | "outline"
}) {
  const isEmail = action.href.startsWith("mailto:")
  const isPdf = action.href.endsWith(".pdf")
  const isExternal = isExternalHref(action.href)

  if (isEmail || isPdf || isExternal) {
    return (
      <Button asChild size="lg" variant={variant} className="px-6">
        <a href={action.href} target="_blank" rel="noreferrer">
          {action.label}
          <RiArrowRightUpLine className="size-4" />
        </a>
      </Button>
    )
  }

  return (
    <Button asChild size="lg" variant={variant} className="px-6">
      <Link href={action.href}>
        {action.label}
        <RiArrowRightUpLine className="size-4" />
      </Link>
    </Button>
  )
}

export function CtaRow({
  title,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
}: CtaRowProps) {
  const primaryIsEmail = primaryAction.href.startsWith("mailto:")
  const primaryIsPdf = primaryAction.href.endsWith(".pdf")
  const primaryIsExternal = isExternalHref(primaryAction.href)

  return (
    <div className="rounded-[2.2rem] border border-border/80 bg-card/95 p-7 shadow-[0_24px_70px_-40px_rgba(74,56,40,0.25)] sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Contact</p>
          <h2 className="max-w-3xl font-heading text-4xl leading-tight tracking-[-0.03em] text-foreground sm:text-[42px]">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primaryIsEmail ? (
            <a
              href={primaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_16px_45px_-25px_rgba(89,62,95,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
            >
              {primaryAction.label}
              <RiArrowRightUpLine className="size-4" />
            </a>
          ) : primaryIsPdf ? (
            <a
              href={primaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_16px_45px_-25px_rgba(89,62,95,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
            >
              {primaryAction.label}
              <RiArrowRightUpLine className="size-4" />
            </a>
          ) : primaryIsExternal ? (
            <Button asChild size="lg" className="px-6">
              <a href={primaryAction.href} target="_blank" rel="noreferrer">
                {primaryAction.label}
                <RiArrowRightUpLine className="size-4" />
              </a>
            </Button>
          ) : (
            <Button asChild size="lg" className="px-6">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <RiArrowRightUpLine className="size-4" />
              </Link>
            </Button>
          )}
          <CtaActionButton
            action={secondaryAction}
            variant={secondaryAction.href.startsWith("mailto:") ? "default" : "outline"}
          />
          {tertiaryAction ? (
            <CtaActionButton action={tertiaryAction} variant="default" />
          ) : null}
        </div>
      </div>
    </div>
  )
}
