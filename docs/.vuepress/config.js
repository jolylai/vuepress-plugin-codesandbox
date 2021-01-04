const sidebar = require("./sidebar");

module.exports = {
  title: "NoteBook CSS",
  description: "🚀 CSS 学习笔记",
  base: "/notebook-css/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
    // ["link", { rel: "stylesheet", href: "https://cdn.bootcdn.net/ajax/libs/tailwindcss/2.0.0-alpha.5/tailwind.min.css" }],
  ],
  themeConfig: {
    repo: "jolylai/notebook-vue",
    // editLinks: true,
    smoothScroll: true,
    editLinkText: "Edit this on GitHub!",
    lastUpdated: "Last updated",
    sidebarDepth: 2,
    nav: require("./nav"),
    sidebar: {
      "/guide/": sidebar.guide,
      "/layout/": sidebar.layout
    }
  },
  extraWatchFiles: [".vuepress/nav.js", ".vuepress/sidebar.js"]
};
