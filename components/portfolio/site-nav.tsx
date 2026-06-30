"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navigation = [
  { label: "Projects", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
] as const

function isNavItemActive(
  label: (typeof navigation)[number]["label"],
  pathname: string,
  homeSection: string | null
) {
  switch (label) {
    case "Projects":
      return pathname.startsWith("/work")
    case "Resume":
      return pathname.startsWith("/resume")
    case "About":
      return pathname === "/" && homeSection === "about"
    case "Contact":
      return pathname === "/" && homeSection === "contact"
    default:
      return false
  }
}

export function SiteNav() {
  const pathname = usePathname()
  const [homeSection, setHomeSection] = useState<string | null>(null)
  const activeHomeSection = pathname === "/" ? homeSection : null

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact")

    if (!contactEl) {
      window.location.hash = "contact"
      return
    }

    const headerHeight =
      document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0
    const targetTop =
      contactEl.getBoundingClientRect().top + window.scrollY - headerHeight - 24

    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#contact`
    )
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" })
  }

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    const aboutEl = document.getElementById("about")
    const contactEl = document.getElementById("contact")
    const sectionElements = [aboutEl, contactEl].filter(
      Boolean
    ) as HTMLElement[]

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight
      const bestMatch = sectionElements
        .map((element) => {
          const rect = element.getBoundingClientRect()
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          )
          const ratio = visibleHeight / Math.min(rect.height, viewportHeight)

          return [element.id, ratio] as const
        })
        .filter(([, ratio]) => ratio >= 0.3)
        .sort((a, b) => b[1] - a[1])[0]

      setHomeSection(bestMatch?.[0] ?? null)
    }

    let scrollFrame = 0
    const syncFromScroll = () => {
      if (scrollFrame) {
        return
      }

      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0
        updateActiveSection()
      })
    }

    const syncFromHash = () => {
      requestAnimationFrame(updateActiveSection)
    }

    if (sectionElements.length === 0) {
      return
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    window.addEventListener("scroll", syncFromScroll, { passive: true })
    document.addEventListener("scroll", syncFromScroll, {
      passive: true,
      capture: true,
    })
    const activeSectionInterval = window.setInterval(updateActiveSection, 250)

    const observer = new IntersectionObserver(() => updateActiveSection(), {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    })

    sectionElements.forEach((element) => observer.observe(element))

    return () => {
      if (scrollFrame) {
        cancelAnimationFrame(scrollFrame)
      }

      window.removeEventListener("hashchange", syncFromHash)
      window.removeEventListener("scroll", syncFromScroll)
      document.removeEventListener("scroll", syncFromScroll, { capture: true })
      window.clearInterval(activeSectionInterval)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 lg:gap-x-8">
      {navigation.map((item) => {
        const isActive = isNavItemActive(
          item.label,
          pathname,
          activeHomeSection
        )
        const isContact = item.label === "Contact"

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={
              isContact
                ? (event) => {
                    event.preventDefault()
                    scrollToContact()
                  }
                : undefined
            }
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 sm:text-sm",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-transparent text-foreground/65 hover:border-primary hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
