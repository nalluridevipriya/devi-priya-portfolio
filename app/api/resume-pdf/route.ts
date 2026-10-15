import { readFile } from "node:fs/promises"
import path from "node:path"

const RESUME_FILENAME = "devi-priya-nalluri-resume.pdf"

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    RESUME_FILENAME
  )
  const data = await readFile(filePath)

  return new Response(data, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${RESUME_FILENAME}"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}
