import { DefaultTheme, defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  title: "MSDL Editor",
  description: "A basic viewer and editor for Military Scenario Definition Language (MSDL) files",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]],
  themeConfig: {
    outline: "deep",
    logo: "/favicon.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/orbat-mapper/msdl-editor" },
    ],
    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
      { text: "Open App", link: "https://msdl-editor.pages.dev" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "",
    },
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },
    search: {
      provider: "local",
    },
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      items: [
        { text: "Getting started", link: "getting-started" },
        { text: "About MSDL", link: "about-msdl" },
      ],
    },
    {
      text: "Usage",
      items: [
        { text: "Loading files", link: "loading-files" },
        { text: "Editing scenarios", link: "editing-scenarios" },
        { text: "Exporting data", link: "exporting-data" },
      ],
    },
  ];
}