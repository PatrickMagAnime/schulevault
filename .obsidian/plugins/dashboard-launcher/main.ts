import { App, Notice, Plugin, TFile, WorkspaceLeaf, openExternal } from "obsidian";
import { DashboardSettingTab } from "./settings";
import { DashboardView, DASHBOARD_VIEW_TYPE } from "./view";
import { WebsiteView, WEBSITE_VIEW_TYPE } from "./websiteView";

export interface TemplateMapping {
  label: string;
  templateFile: string;
  targetFolder: string;
  fileNamePattern: string;
}

export type WebsiteOpenMode = "browser" | "embedded";
export interface WebsiteMapping {
  label: string;
  url: string;
  openMode: WebsiteOpenMode;
}

export interface DashboardSettings {
  templateFolder: string;
  dashboardTitle: string;
  openInNewSplit: boolean;
  templates: TemplateMapping[];
  websites: WebsiteMapping[];
  showWebsiteSection: boolean;
  showTemplateSection: boolean;
}

const DEFAULT_SETTINGS: DashboardSettings = {
  templateFolder: "Templates",
  dashboardTitle: "Mein Dashboard",
  openInNewSplit: false,
  templates: [
    {
      label: "Mathe",
      templateFile: "mathe.md",
      targetFolder: "Schule/Mathe",
      fileNamePattern: "{{date}} - Mathe Notiz"
    }
  ],
  websites: [
    {
      label: "WolframAlpha",
      url: "https://www.wolframalpha.com/",
      openMode: "embedded"
    }
  ],
  showWebsiteSection: true,
  showTemplateSection: true
};

export default class DashboardLauncherPlugin extends Plugin {
  settings: DashboardSettings;

  async onload() {
    console.log("Lade Plugin: Dashboard Launcher");
    await this.loadSettings();
    await this.ensureBaseTemplateFolder();

    // Views
    this.registerView(DASHBOARD_VIEW_TYPE, (leaf) => new DashboardView(leaf, this));
    this.registerView(WEBSITE_VIEW_TYPE, (leaf) => new WebsiteView(leaf, this));

    // Commands Grund
    this.addCommand({
      id: "open-dashboard",
      name: "Open Dashboard",
      callback: () => this.openDashboard()
    });

    // Dynamische Commands
    this.addTemplatesAsCommands();
    this.addWebsitesAsCommands();

    // Settings
    this.addSettingTab(new DashboardSettingTab(this.app, this));
  }

  onunload() {
    console.log("Entlade Plugin: Dashboard Launcher");
    this.app.workspace.detachLeavesOfType(DASHBOARD_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(WEBSITE_VIEW_TYPE);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  refreshDashboardViews() {
    const leaves = this.app.workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE);
    for (const leaf of leaves) {
      const view = leaf.view as DashboardView;
      view.render();
    }
  }

  addTemplatesAsCommands() {
    this.settings.templates.forEach(tpl => {
      this.addCommand({
        id: `create-from-template-${tpl.label.toLowerCase().replace(/\s+/g, "-")}`,
        name: `Neue Note: ${tpl.label}`,
        callback: () => this.createNoteFromTemplate(tpl)
      });
    });
  }

  addWebsitesAsCommands() {
    this.settings.websites.forEach(ws => {
      this.addCommand({
        id: `open-website-${ws.label.toLowerCase().replace(/\s+/g, "-")}`,
        name: `Webseite öffnen: ${ws.label}`,
        callback: () => this.openWebsite(ws)
      });
    });
  }

  async openDashboard() {
    const { workspace } = this.app;
    let leaf: WorkspaceLeaf;

    if (this.settings.openInNewSplit) {
      leaf = workspace.getLeaf(true);
    } else {
      leaf = workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE)[0];
      if (!leaf) {
        leaf = workspace.getRightLeaf(false) ?? workspace.getLeaf(true);
      }
    }
    await leaf.setViewState({ type: DASHBOARD_VIEW_TYPE, active: true });
    workspace.revealLeaf(leaf);
  }

  private resolveFileName(pattern: string, label: string): string {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const timeStr = `${pad(now.getHours())}-${pad(now.getMinutes())}`;
    return pattern
      .replace(/{{date}}/gi, dateStr)
      .replace(/{{time}}/gi, timeStr)
      .replace(/{{label}}/gi, label)
      .replace(/[\\/:?*"<>|]+/g, "_");
  }

  async createNoteFromTemplate(tpl: TemplateMapping) {
    try {
      const templateContent = await this.loadTemplateContent(tpl);
      const fileName = this.resolveFileName(tpl.fileNamePattern, tpl.label) + ".md";

      let folderPath = tpl.targetFolder?.trim() || "";
      if (folderPath && !folderPath.endsWith("/")) folderPath += "/";

      const fullPath = folderPath + fileName;

      if (folderPath) {
        await this.ensureFolderExists(folderPath);
      }

      if (this.app.vault.getAbstractFileByPath(fullPath)) {
        new Notice("Datei existiert bereits: " + fullPath);
        return;
      }

      const file = await this.app.vault.create(fullPath, templateContent);
      await this.app.workspace.getLeaf(true).openFile(file);
      new Notice("Note erstellt: " + fileName);
    } catch (e: any) {
      console.error(e);
      new Notice("Fehler beim Erstellen der Note (siehe Konsole).");
    }
  }

  private async loadTemplateContent(tpl: TemplateMapping): Promise<string> {
    const base = this.settings.templateFolder?.trim() || "";
    const finalPath = base ? `${base}/${tpl.templateFile}` : tpl.templateFile;
    const abstract = this.app.vault.getAbstractFileByPath(finalPath);

    if (!abstract || !(abstract instanceof TFile)) {
      new Notice("Template nicht gefunden: " + finalPath);
      return `# ${tpl.label}\n\n_Template nicht gefunden (${finalPath})_`;
    }

    const raw = await this.app.vault.read(abstract);
    return raw
      .replace(/{{label}}/gi, tpl.label)
      .replace(/{{date}}/gi, new Date().toISOString().split("T")[0]);
  }

  async ensureBaseTemplateFolder() {
    const base = this.settings.templateFolder.trim();
    if (!base) return;
    const exists = this.app.vault.getAbstractFileByPath(base);
    if (!exists) {
      try {
        await this.app.vault.createFolder(base);
        console.log("Template Basis-Ordner erstellt:", base);
      } catch (e) {
        console.warn("Konnte Template-Basisordner nicht erstellen:", base, e);
      }
    }
  }

  private async ensureFolderExists(path: string) {
    const parts = path.split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const maybe = this.app.vault.getAbstractFileByPath(current);
      if (!maybe) {
        await this.app.vault.createFolder(current);
      }
    }
  }

  sanitizeUrl(url: string): string {
    let u = url.trim();
    if (!/^https?:\/\//i.test(u)) {
      u = "https://" + u;
    }
    return u;
  }

  async openWebsite(mapping: WebsiteMapping) {
    mapping.url = this.sanitizeUrl(mapping.url);

    if (mapping.openMode === "browser") {
      openExternal(mapping.url);
      return;
    }

    const leaf = this.app.workspace.getLeaf(true);
    await leaf.setViewState({ type: WEBSITE_VIEW_TYPE, active: true });
    const view = leaf.view as WebsiteView;
    view.setWebsite(mapping);
    this.app.workspace.revealLeaf(leaf);
  }
}