module.exports = {
  title: "NoteBook CSS",
  description: "🚀 CSS 学习笔记",
  base: "/notebook-css/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      }
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }
    ]
  ],
  plugins: [["demo-block"]],
  themeConfig: {
    nav: [
      {
        text: "CSS世界",
        link: "/css-world/"
      }
    ],
    sidebar: {
      "/css-world/": getCssWorldSiderBar()
    }
  }
};
function getCssWorldSiderBar() {
  return [
    {
      title: "文本处理",
      collapsable: false,
      children: [
        "font-size",
        "font-family",
        "font",
        "font-face",
        "text-control",
        "dot",
        "vertical-align"
      ]
    }
  ];
}
