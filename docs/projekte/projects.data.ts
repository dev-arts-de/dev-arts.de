import { createContentLoader } from 'vitepress'
import {
  GROUPS,
  groupIndex,
  type Project,
  type ProjectGroup,
  type ProjectLink,
} from '../.vitepress/theme/data/projects'

/**
 * Project metadata lives in each page's frontmatter. This loader collects
 * it once at build time for the index, the page header and the pager.
 */

const VALID_GROUPS = new Set<ProjectGroup>(GROUPS.map((g) => g.id))

function parseLink(value: unknown, url: string): ProjectLink | undefined {
  if (value === undefined) return undefined
  const link = value as Partial<ProjectLink>
  if (typeof link.href !== 'string' || typeof link.text !== 'string') {
    throw new Error(`Projektseite ${url}: link braucht href und text`)
  }
  return { href: link.href, text: link.text }
}

function toProject(url: string, fm: Record<string, unknown>): Project {
  const group = fm.gruppe as ProjectGroup
  if (!VALID_GROUPS.has(group)) {
    throw new Error(`Projektseite ${url}: unbekannte gruppe "${String(fm.gruppe)}"`)
  }
  // YAML reads a bare year like `zeitraum: 2022` as a number.
  const zeitraum = typeof fm.zeitraum === 'number' ? String(fm.zeitraum) : fm.zeitraum
  if (typeof fm.title !== 'string' || typeof zeitraum !== 'string') {
    throw new Error(`Projektseite ${url}: title und zeitraum sind Pflichtfelder`)
  }
  return {
    url,
    title: fm.title,
    description: String(fm.description ?? ''),
    zeitraum,
    status: String(fm.status ?? ''),
    group,
    order: Number(fm.order ?? 99),
    technik: Array.isArray(fm.technik) ? fm.technik.map(String) : [],
    link: parseLink(fm.link, url),
  }
}

declare const data: Project[]
export { data }

export default createContentLoader('projekte/*.md', {
  transform(raw): Project[] {
    return raw
      .filter((page) => page.url !== '/projekte/')
      .map((page) => toProject(page.url, page.frontmatter))
      .sort((a, b) => groupIndex(a.group) - groupIndex(b.group) || a.order - b.order)
  },
})
