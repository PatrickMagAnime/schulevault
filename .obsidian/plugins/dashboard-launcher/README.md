# Dashboard Launcher (Obsidian Plugin)

Ein Dashboard für:
- Notiz-Templates aus konfigurierbaren Template-Dateien
- Webseiten (extern oder eingebettet)

## Features
- Konfigurierbarer Template-Basis-Ordner (wird automatisch erstellt)
- Buttons für neue Notizen (Label, Template-Datei, Zielordner, Dateiname-Muster)
- Platzhalter:
  - Dateiname: `{{date}}`, `{{time}}`, `{{label}}`
  - Inhalt: `{{date}}`, `{{label}}`
- Webseiten-Buttons (Browser oder eingebettete View mit Iframe)
- Eigene Views für Dashboard und Embedded Webseiten
- Commands für alles (über Command Palette aufrufbar)

## Installation (Manuell)
1. Repo/Ordner lokal anlegen: `dashboard-launcher`
2. Dateien aus diesem Projekt hinein kopieren.
3. Terminal öffnen im Ordner.
4. Abhängigkeiten installieren:
   ```bash
   npm install
   npm run build
   ```
5. Ergebnis: `main.js` im Root (neben `manifest.json`).
6. Kopiere Ordner `dashboard-launcher` in dein Vault:
   ```
   <DeinVault>/.obsidian/plugins/dashboard-launcher
   ```
7. In Obsidian:
   - Einstellungen → Community Plugins → (Safe Mode aus)
   - Plugin aktivieren: "Dashboard Launcher"
8. Command Palette (Strg+P / Cmd+P): "Open Dashboard"

## Entwicklung (Live)
```bash
npm run dev
```
Bei Änderungen an .ts-Dateien neu gebaut (watch). In Obsidian: Strg+P "Reload app without saving" oder Plugin kurz deaktivieren/aktivieren.

## Templates
Standard-Basisordner: `Templates/`
In Einstellungen änderbar (z.B. `_tpl`). Wird bei Änderung automatisch angelegt falls nicht da.

Beispiel Template-Datei:
```
Templates/mathe.md
```

Inhalt:
```markdown
# Mathe Notiz
Datum: {{date}}

## Thema

## Notizen

## Aufgaben
```

## Dateiname-Muster Beispiele
- `{{date}} - Mathe Notiz`
- `Mathe {{date}} {{time}}`
- `{{label}} - {{date}}`

## Webseiten
In Einstellungen → "Webseiten Buttons":
- Label = Button-Text
- URL = Seite (falls ohne https wird ergänzt)
- Open Mode:
  - Browser: extern (Button zeigt ↗)
  - Embedded: in eigenem Tab (Iframe)

Hinweis: Manche Seiten verhindern das Einbetten (X-Frame-Options / CSP).

## Sicherheit
Iframes laufen Sandbox-isoliert (allow-scripts, same-origin, forms, popups). Entferne sandbox nur falls nötig (nicht empfohlen).

## Erweiterungsideen
- Reordering (Drag & Drop)
- Icons / Emojis pro Button
- Farben individuell
- Weitere Platzhalter (Woche, ISO-Datum mit Uhrzeit, Unix Timestamp)
- Frontmatter-Generator
- Template-Vorschau
- Kategorien / Gruppen-Faltung

## Changelog
### 0.2.0
- Konfigurierbarer Template-Folder (Auto-Anlage)
- Webseiten Buttons (embedded / extern)
- Getrennte Abschnitte aktivierbar
- Code Refactor & Aufteilung

### 0.1.0
- Erstes Dashboard mit Template Buttons

Viel Spaß!