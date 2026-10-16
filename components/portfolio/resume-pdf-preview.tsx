"use client"

import { useEffect, useRef, useState } from "react"

const resumePdfSrc = "/resume/devi-priya-nalluri-resume.pdf"
const pdfWorkerSrc = "/api/pdfjs-worker"

type PreviewStatus = "loading" | "ready" | "error"

export function ResumePdfPreview() {
  const frameRef = useRef<HTMLDivElement>(null)
  const pagesRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<PreviewStatus>("loading")

  useEffect(() => {
    const frame = frameRef.current
    const pages = pagesRef.current
    if (!frame || !pages) return

    let cancelled = false

    async function renderPages() {
      const width = frame?.clientWidth ?? 0
      if (!width || !pages) return

      const pdfjs = await import("pdfjs-dist")
      pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc

      const pdf = await pdfjs.getDocument({ url: resumePdfSrc }).promise
      if (cancelled) return

      pages.replaceChildren()

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber)
        if (cancelled) return

        const baseViewport = page.getViewport({ scale: 1 })
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
        const viewport = page.getViewport({
          scale: (width / baseViewport.width) * pixelRatio,
        })
        const canvas = document.createElement("canvas")
        canvas.width = viewport.width
        canvas.height = viewport.height
        canvas.style.width = "100%"
        canvas.style.height = "auto"
        canvas.className = "block bg-white"
        canvas.setAttribute("role", "img")
        canvas.setAttribute(
          "aria-label",
          `Resume page ${pageNumber} of ${pdf.numPages}`
        )

        pages.append(canvas)
        await page.render({ canvas, viewport }).promise
        if (cancelled) return
      }

      setStatus("ready")
    }

    void renderPages().catch((error: unknown) => {
      if (!cancelled) setStatus("error")
      console.error(error)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      ref={frameRef}
      className="overflow-hidden rounded-2xl border border-border/70 bg-white"
    >
      <div className="h-[min(85vh,1100px)] overflow-y-auto">
        {status === "loading" ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">
            Loading resume preview…
          </p>
        ) : null}
        {status === "error" ? (
          <p className="px-6 py-8 text-sm text-muted-foreground">
            The preview could not be drawn. Use download to open the PDF.
          </p>
        ) : null}
        <div ref={pagesRef} className="flex flex-col" />
      </div>
    </div>
  )
}
