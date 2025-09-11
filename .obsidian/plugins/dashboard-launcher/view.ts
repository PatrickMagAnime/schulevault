import { ItemView, WorkspaceLeaf } from "obsidian";
import DashboardLauncherPlugin from "./main";

export const DASHBOARD_VIEW_TYPE = "DASHBOARD_VIEW";

export class DashboardView extends ItemView {
  plugin: DashboardLauncherPlugin;

  constructor(leaf: WorkspaceLeaf, plugin: DashboardLauncherPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return DASHBOARD_VIEW_TYPE;
  }

  getDisplayText(): string {
    return this.plugin.settings.dashboardTitle || "Dashboard";
  }

  getIcon(): string {
    return "layout-dashboard";
  }

  async onOpen(): Promise<void> {
    this.render();
  }

  async onClose(): Promise<void> {}

  render() {
    const container = this.containerEl.children[1];
    container.empty();

    const header = container.createDiv({ cls: "dash-header" });
    header.createEl("h1", { text: this.plugin.settings.dashboardTitle });

    if (this.plugin.settings.showTemplateSection) {
      const templateSection = container.createDiv({ cls: "dash-section" });
      templateSection.createEl("h2", { text: "Notiz-Templates" });
      const grid = templateSection.createDiv({ cls: "dashboard-grid" });

      if (this.plugin.settings.templates.length === 0) {
        grid.createEl("p", { text: "Keine Templates konfiguriert." });
      } else {
        this.plugin.settings.templates.forEach(tpl => {
          const btn = grid.createEl("button", { text: tpl.label, cls: "dash-btn" });
            btn.addEventListener("click", async () => {
              await this.plugin.createNoteFromTemplate(tpl);
            });
        });
      }
    }

    if (this.plugin.settings.showWebsiteSection) {
      const webSection = container.createDiv({ cls: "dash-section" });
      webSection.createEl("h2", { text: "Webseiten" });
      const grid2 = webSection.createDiv({ cls: "dashboard-grid" });

      if (this.plugin.settings.websites.length === 0) {
        grid2.createEl("p", { text: "Keine Webseiten konfiguriert." });
      } else {
        this.plugin.settings.websites.forEach(ws => {
          const btn = grid2.createEl("button", {
            text: ws.label + (ws.openMode === "browser" ? " ↗" : ""),
            cls: "dash-btn dash-btn-web"
          });
          btn.addEventListener("click", async () => {
            await this.plugin.openWebsite(ws);
          });
        });
      }
    }

    if (!this.plugin.settings.showTemplateSection && !this.plugin.settings.showWebsiteSection) {
      container.createEl("p", { text: "Beide Abschnitte sind deaktiviert (Einstellungen prüfen)." });
    }
  }
}