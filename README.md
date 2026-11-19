# dev-arts.de

Persönliche VitePress-Website mit Dokumentation (Lebenslauf, Kenntnisse, Projektseiten, Impressum, Datenschutz), betrieben von Arthur.

## Worum es geht

Die Seiten liegen als Markdown unter `docs/` und werden mit VitePress zu einer statischen Website gebaut. Die Inhalte deuten auf eine persönliche Präsentation hin. Der Zweck ist nicht ausdrücklich dokumentiert.

- **Stand:** Letzte Änderungen vom 2026-05-24. Der Branch `main` enthält 64 Commits.
- **Status:** ruhend

## Funktionen

- Startseite, Lebenslauf und Kenntnisse
- Projektübersicht mit einzelnen Projektseiten unter `docs/projekte/`
- Impressum und Datenschutzerklärung
- Automatisch erzeugte `robots.txt` und `sitemap.xml`
- Lazy Loading und feste Bildmaße für Inhaltsbilder

## Technik

- Node.js (Version ist nicht im Projekt festgelegt)
- VitePress `^1.6.4`
- Vue `^3.5.24`
- npm mit `package-lock.json`

## Projektstruktur

- `docs/`: Quelltexte der Seiten als Markdown
- `docs/.vitepress/`: VitePress-Konfiguration
- `docs/projekte/`: Einzelne Projektseiten und Projektübersicht
- `docs/public/`: Statische Dateien, die unverändert ausgeliefert werden
- `notes/`: Notizen, zum Beispiel `projects-to-incorporate.txt`
- `.github/workflows/`: GitHub-Actions-Workflow
- `.claude/`: Einstellungen für Claude Code

## Lokal starten

Abhängigkeiten installieren:

```sh
npm install
```

Entwicklungsserver mit Live-Reload starten:

```sh
npm run docs:dev
```

Produktionsbuild erzeugen:

```sh
npm run docs:build
```

Den erzeugten Build lokal ansehen:

```sh
npm run docs:preview
```

## Tests

Es gibt keine automatisierten Tests. Das Skript `test` führt nur einen VitePress-Build aus, der prüft, ob sich die Seiten fehlerfrei bauen lassen:

```sh
npm test
```

Die CI-Pipeline führt laut Commit-Historie ebenfalls nur diese Build-Prüfung aus.

## Betrieb

Ein Deployment-Ziel ist im Repository nicht dokumentiert. Die Ausgabe des Builds liegt im VitePress-Standardordner `docs/.vitepress/dist` (nicht geprüft, ergibt sich aus der VitePress-Konvention).

## Weiterführend

- `docs/projekte/index.md`: Übersicht aller Projekte
- `notes/projects-to-incorporate.txt`: Offene Projektideen
- GitHub-Repository: https://github.com/dev-arts-de/dev-arts.de
