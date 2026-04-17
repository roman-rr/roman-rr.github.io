import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

const aliases = [
  { short: 'ai-agents',       source: 'cases/pt-agents/pt-agents-architecture.html' },
  { short: 'ai-emails',       source: 'cases/pt-emails/pt-emails-pipeline-arch.html' },
  { short: 'ai-calls',        source: 'cases/pt-calls/pt-calls-pipeline-arch.html' },
  { short: 'ai-microsoft-365', source: 'cases/microsoft-365-v1/microsoft-365-architecture.html' },
]

const ABSOLUTE_RE = /^(https?:|\/\/|\/|#|mailto:|tel:|data:|javascript:)/i

function rewriteRelative(html, baseDir) {
  const prefix = `/${baseDir.replace(/\\/g, '/')}/`
  return html.replace(
    /\b(src|href)\s*=\s*(['"])([^'"]+)\2/gi,
    (match, attr, quote, value) => {
      if (ABSOLUTE_RE.test(value)) return match
      return `${attr}=${quote}${prefix}${value}${quote}`
    },
  )
}

async function main() {
  for (const { short, source } of aliases) {
    const srcPath = resolve(distDir, source)
    const destPath = resolve(distDir, `${short}.html`)
    const baseDir = dirname(source)

    const original = await readFile(srcPath, 'utf8')
    const rewritten = rewriteRelative(original, baseDir)
    await writeFile(destPath, rewritten, 'utf8')
    console.log(`[short-urls] ${source} -> /${short}.html`)
  }
}

main().catch((err) => {
  console.error('[short-urls] failed:', err)
  process.exit(1)
})
