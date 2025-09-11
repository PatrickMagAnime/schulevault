import { ItemView, WorkspaceLeaf } from "obsidian";
import DashboardLauncherPlugin, { WebsiteMapping } from "./main";

export const WEBSITE_VIEW_TYPE = "DASHBOARD_WEBSITE_VIEW";

export class WebsiteView extends ItemView {
  plugin: DashboardLauncherPlugin;
  website: WebsiteMapping | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: DashboardLauncherPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return WEBSITE_VIEW_TYPE;
  }

  getDisplayText(): string {
    return this.website?.label
      ? `Web: ${this.website.label}`
      : "Webseite";
  }

  getIcon(): string {
    return "globe";
  }

  async onOpen(): Promise<void> {
    this.render();
  }

  async onClose(): Promise<void> {
    // optional cleanup
  }

  setWebsite(mapping: WebsiteMapping) {
    this.website = mapping;
    this.render();
  }

  render() {
    const container = this.containerEl.children[1];
    container.empty();

    if (!this.website) {
      container.createEl("p", { text: "Keine Webseite gesetzt." });
      return;
    }

    const header = container.createDiv({ cls: "webview-header" });
    header.createEl("h2", { text: this.website.label });
    const link = header.createEl("a", {
      text: "Im Browser öffnen",
      href: this.website.url
    });
    link.setAttr("target", "_blank");
    link.addClass("external-link");

    const frameWrapper = container.createDiv({ cls: "webview-frame-wrapper" });
    const iframe = frameWrapper.createEl("iframe", {
      cls: "embedded-website-frame"
    });
    iframe.setAttr("src", this.website.url);
    iframe.setAttr("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups");
  }
}