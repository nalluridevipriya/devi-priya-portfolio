"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navigation = [
  { label: "Projects", href: "/work" },
  { label: "Other Works", href: "/other-works" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const

function isNavItemActive(
  label: (typeof navigation)[number]["label"],
  pathname: string,
  homeSection: string | null
) {
  switch (label) {
    case "Projects":
      return pathname.startsWith("/work")
    case "Other Works":
      return pathname.startsWith("/other-works") || (pathname === "/" && homeSection === "other-works")
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

  useEffect(() => {
    if (pathname !== "/") {
      setHomeSection(null)
      return
    }

    const sectionVisibility = new Map<string, number>()

    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash === "about" || hash === "contact" || hash === "other-works") {
        setHomeSection(hash)
        return
      }

      const bestMatch = [...sectionVisibility.entries()]
        .filter(([, ratio]) => ratio >= 0.3)
        .sort((a, b) => b[1] - a[1])[0]

      setHomeSection(bestMatch?.[0] ?? null)
    }

    const syncFromHash = () => updateActiveSection()

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)

    const aboutEl = document.getElementById("about")
    const contactEl = document.getElementById("contact")
    const otherWorksEl = document.getElementById("other-works")
    const sectionElements = [aboutEl, contactEl, otherWorksEl].filter(Boolean) as HTMLElement[]

    if (sectionElements.length === 0) {
      return () => window.removeEventListener("hashchange", syncFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          sectionVisibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          )
        }

        updateActiveSection()
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    )

    sectionElements.forEach((element) => {
      sectionVisibility.set(element.id, 0)
      observer.observe(element)
    })

    return () => {
      window.removeEventListener("hashchange", syncFromHash)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 lg:gap-x-8">
      {navigation.map((item) => {
        const isActive = isNavItemActive(item.label, pathname, homeSection)

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300 sm:text-sm",
              isActive
                ? "text-primary"
                : "text-foreground/65 hover:text-primary"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
