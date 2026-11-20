/**
 * Shared project types and group definitions.
 * Kept outside the .data.ts loader because VitePress replaces loader
 * modules with their serialized data on the client.
 */

export type ProjectGroup = 'aktuell' | 'shopitech' | 'persoenlich' | 'frueher'

export interface ProjectLink {
  href: string
  text: string
}

export interface Project {
  url: string
  title: string
  description: string
  zeitraum: string
  status: string
  group: ProjectGroup
  order: number
  technik: string[]
  link?: ProjectLink
}

export interface GroupInfo {
  id: ProjectGroup
  title: string
  intro: string
}

export const GROUPS: readonly GroupInfo[] = [
  {
    id: 'aktuell',
    title: 'Eigene Projekte',
    intro: 'Was ich neben der Arbeit baue und betreibe, das Neueste zuerst.',
  },
  {
    id: 'shopitech',
    title: 'Shopitech',
    intro: 'Websites für kleine Betriebe und die Technik, auf der sie laufen.',
  },
  {
    id: 'persoenlich',
    title: 'Für Selina',
    intro: 'Zwei kleine Seiten mit genau einer Nutzerin.',
  },
  {
    id: 'frueher',
    title: 'Ausbildung und frühe Projekte',
    intro: 'Größtenteils nicht mehr online. Hier habe ich das meiste gelernt.',
  },
]

export function groupIndex(group: ProjectGroup): number {
  return GROUPS.findIndex((g) => g.id === group)
}

export function normalizePath(path: string): string {
  const clean = path.replace(/\.html$/, '').replace(/\/index$/, '/')
  return clean.length > 1 ? clean.replace(/\/$/, '') : clean
}
