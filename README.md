# dev-arts.de

Persönliches Portfolio von Arthur Schimpf, gebaut mit VitePress.

## Inhalt

- `docs/index.md`: Startseite mit Hero (`HomeHero.vue`) und Textabschnitten
- `docs/lebenslauf.md`: Stationen als Zeitleiste (`<CvStation>`)
- `docs/kenntnisse.md`: Technische Kenntnisse
- `docs/projekte/*.md`: eine Seite pro Projekt, Übersicht unter `docs/projekte/index.md`
- `docs/impressum.md`, `docs/datenschutz.md`: Pflichtseiten

## Projektseiten

Die Metadaten eines Projekts stehen im Frontmatter der jeweiligen Seite. `docs/projekte/projects.data.ts` sammelt sie beim Build ein; daraus entstehen die Übersicht, der Kopf jeder Projektseite und die Navigation zum vorherigen und nächsten Projekt.

```yaml
---
title: Fundus
description: Ein Satz, der in der Übersicht und als Lead erscheint.
gruppe: aktuell        # aktuell | shopitech | persoenlich | frueher
order: 1               # Reihenfolge innerhalb der Gruppe
zeitraum: seit November 2026
status: In Betrieb
technik: [Python, SQLite]
link: { href: 'https://example.org', text: 'example.org' }   # optional
aside: false
---
```

Gruppen und ihre Texte stehen in `docs/.vitepress/theme/data/projects.ts`. Eine neue Projektseite braucht keine weitere Registrierung.

## Gestaltung

- Tokens in `docs/.vitepress/theme/styles/tokens.css`: Nebelgrau, Schieferblau, ein Grünton als Akzent, eigener Dark Mode
- Schriften: Bricolage Grotesque (Überschriften, Navigation) und Source Serif 4 (Fließtext), selbst gehostet über `@fontsource`
- Das Linienmotiv im Hero (`FanLines.vue`) ist der Stadtgrundriss von Karlsruhe: 32 Straßen, die vom Schlossturm ausgehen
- Keine Bilder in den Inhalten; das Social-Vorschaubild ist `docs/public/og-cover.svg`, gerendert nach `og-cover.png`

## Lokal

```sh
npm install
npm run docs:dev      # Entwicklungsserver
npm run docs:build    # Produktionsbuild nach docs/.vitepress/dist
npm test              # Build-Prüfung, läuft auch in GitHub Actions
```

## Betrieb

Vercel baut und deployt automatisch bei jedem Push auf `main`. `vercel.json` enthält Weiterleitungen für entfernte Seiten.
