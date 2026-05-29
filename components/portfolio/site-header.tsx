"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { SiteNav } from "@/components/portfolio/site-nav"
import { cn } from "@/lib/utils"

function SiteLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3 sm:gap-3.5">
      <span className="shrink-0 text-sm font-semibold leading-none tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-base">
        {"d"}P
      </span>
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span className="font-heading text-[1.35rem] font-bold leading-none tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[1.5rem]">
          devi
        </span>
        <span className="text-[0.72rem] font-semibold uppercase leading-none tracking-[0.24em] text-foreground transition-colors group-hover:text-primary sm:text-[0.78rem]">
          Priya
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const [visible, setVisible] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) {
      return
    }

    const updateHeight = () => {
      setHeaderHeight(header.offsetHeight)
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(header)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      if (currentScrollY <= 8) {
        setVisible(true)
      } else if (scrollDelta > 6) {
        setVisible(false)
      } else if (scrollDelta < -6) {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "site-header fixed inset-x-0 top-0 z-40 border-b border-border/45 bg-background/92 backdrop-blur-md transition-transform duration-300 ease-out will-change-transform",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-4 sm:py-[1.125rem] lg:py-5">
            <SiteLogo />
            <SiteNav />
          </div>
        </div>
      </header>

      <div
        aria-hidden
        className="mb-10"
        style={{ height: headerHeight > 0 ? `${headerHeight}px` : undefined }}
      />
    </>
  )
}
