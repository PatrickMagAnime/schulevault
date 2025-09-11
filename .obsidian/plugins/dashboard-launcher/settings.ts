import { App, PluginSettingTab, Setting } from "obsidian";
import DashboardLauncherPlugin, {
  DashboardSettings,
  TemplateMapping,
  WebsiteMapping,
  WebsiteOpenMode
} from "./main";

export class DashboardSettingTab extends PluginSettingTab {
  plugin: DashboardLauncherPlugin;

  constructor(app: App, plugin: DashboardLauncherPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Dashboard Launcher – Einstellungen" });

    new Setting(containerEl)
      .setName("Dashboard Titel")
      .addText(t => t
        .setValue(this.plugin.settings.dashboardTitle)
        .onChange(async (val) => {
          this.plugin.settings.dashboardTitle = val;
          await this.plugin.saveSettings();
          this.plugin.refreshDashboardViews();
        }));

    new Setting(containerEl)
      .setName("In neuer Split-Ansicht öffnen")
      .setDesc("Wenn aktiv: Commands öffnen neue Splits.")
      .addToggle(t => t
        .setValue(this.plugin.settings.openInNewSplit)
        .onChange(async (val) => {
          this.plugin.settings.openInNewSplit = val;
          await this.plugin.saveSettings();
        }));

    // Template-Basis Ordner
    new Setting(containerEl)
      .setName("Template Basis-Ordner")
      .setDesc("Relativer Pfad im Vault. Beispiel: Templates, _tpl oder 01-Templates. Ordner wird bei Bedarf angelegt.")
      .addText(t => t
        .setPlaceholder("Templates")
        .setValue(this.plugin.settings.templateFolder)
        .onChange(async (val) => {
          this.plugin.settings.templateFolder = val.trim();
          await this.plugin.ensureBaseTemplateFolder();
          await this.plugin.saveSettings();
        }));

    // Abschnitt Sichtbarkeit
    new Setting(containerEl)
      .setName("Template Abschnitt anzeigen")
      .addToggle(t => t
        .setValue(this.plugin.settings.showTemplateSection)
        .onChange(async (val) => {
          this.plugin.settings.showTemplateSection = val;
          await this.plugin.saveSettings();
          this.plugin.refreshDashboardViews();
        }));

    new Setting(containerEl)
      .setName("Webseiten Abschnitt anzeigen")
      .addToggle(t => t
        .setValue(this.plugin.settings.showWebsiteSection)
        .onChange(async (val) => {
          this.plugin.settings.showWebsiteSection = val;
          await this.plugin.saveSettings();
          this.plugin.refreshDashboardViews();
        }));

    // Template Buttons
    containerEl.createEl("h3", { text: "Template Buttons" });
    containerEl.createEl("p", { text: "Label, Template-Datei (relativ zum Template-Basisordner), Zielordner & Dateinamen-Muster." });

    this.plugin.settings.templates.forEach((tpl, idx) => {
      const block = containerEl.createDiv({ cls: "dash-setting-block" });
      block.createEl("h4", { text: `Template Button ${idx + 1}` });

      new Setting(block)
        .setName("Label")
        .addText(t => t
          .setValue(tpl.label)
          .onChange(async (val) => {
            tpl.label = val;
            await this.plugin.saveSettings();
            this.plugin.refreshDashboardViews();
          }));

      new Setting(block)
        .setName("Template-Datei")
        .setDesc("Nur Dateiname z.B. mathe.md")
        .addText(t => t
          .setValue(tpl.templateFile)
          .onChange(async (val) => {
            tpl.templateFile = val.trim();
            await this.plugin.saveSettings();
          }));

      new Setting(block)
        .setName("Zielordner (optional)")
        .setDesc("Relativer Pfad, z.B. Schule/Mathe (wird erstellt falls fehlt)")
        .addText(t => t
          .setValue(tpl.targetFolder)
          .onChange(async (val) => {
            tpl.targetFolder = val.trim();
            await this.plugin.saveSettings();
          }));

      new Setting(block)
        .setName("Dateiname Muster")
        .setDesc("Tokens: {{date}}, {{time}}, {{label}}")
        .addText(t => t
          .setValue(tpl.fileNamePattern)
          .onChange(async (val) => {
            tpl.fileNamePattern = val;
            await this.plugin.saveSettings();
          }));

      new Setting(block)
        .addButton(btn => btn
          .setButtonText("Löschen")
          .setWarning()
          .onClick(async () => {
            this.plugin.settings.templates.splice(idx, 1);
            await this.plugin.saveSettings();
            this.display();
            this.plugin.refreshDashboardViews();
          }));
    });

    new Setting(containerEl)
      .addButton(btn => btn
        .setButtonText("Neuen Template-Button hinzufügen")
        .setCta()
        .onClick(async () => {
          const newMapping: TemplateMapping = {
            label: "Neues Template",
            templateFile: "beispiel.md",
            targetFolder: "",
            fileNamePattern: "{{date}} - {{label}}"
          };
          this.plugin.settings.templates.push(newMapping);
          await this.plugin.saveSettings();
          this.display();
          this.plugin.refreshDashboardViews();
        }));

    // Webseiten
    containerEl.createEl("h3", { text: "Webseiten Buttons" });
    containerEl.createEl("p", { text: "Label, URL & Öffnungsart (eingebettet oder extern)." });

    this.plugin.settings.websites.forEach((ws, idx) => {
      const block = containerEl.createDiv({ cls: "dash-setting-block" });
      block.createEl("h4", { text: `Webseite ${idx + 1}` });

      new Setting(block)
        .setName("Label")
        .addText(t => t
          .setValue(ws.label)
          .onChange(async (val) => {
            ws.label = val;
            await this.plugin.saveSettings();
            this.plugin.refreshDashboardViews();
          }));

      new Setting(block)
        .setName("URL")
        .setDesc("Falls kein http(s) vorangestellt ist, wird https:// ergänzt.")
        .addText(t => t
          .setValue(ws.url)
          .onChange(async (val) => {
            ws.url = val;
            await this.plugin.saveSettings();
          }));

      new Setting(block)
        .setName("Open Mode")
        .setDesc("Browser = extern, Embedded = Iframe-View")
        .addDropdown(d => {
          d.addOption("browser", "Browser");
          d.addOption("embedded", "Embedded");
          d.setValue(ws.openMode);
          d.onChange(async (val: WebsiteOpenMode) => {
            ws.openMode = val;
            await this.plugin.saveSettings();
          });
        });

      new Setting(block)
        .addButton(btn => btn
          .setButtonText("Löschen")
          .setWarning()
          .onClick(async () => {
            this.plugin.settings.websites.splice(idx, 1);
            await this.plugin.saveSettings();
            this.display();
            this.plugin.refreshDashboardViews();
          }));
    });

    new Setting(containerEl)
      .addButton(btn => btn
        .setButtonText("Neue Webseite hinzufügen")
        .setCta()
        .onClick(async () => {
          const newWebsite: WebsiteMapping = {
            label: "Neue Seite",
            url: "https://example.com",
            openMode: "embedded"
          };
          this.plugin.settings.websites.push(newWebsite);
          await this.plugin.saveSettings();
          this.display();
          this.plugin.refreshDashboardViews();
        }));
  }
}