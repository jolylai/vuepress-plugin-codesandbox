module.exports = {
  title: 'CSS',
  description: 'CSS 学习笔记',
  themeConfig: {
    repo: 'jolylai/notebook-vue',
    editLinks: true,
    smoothScroll: true,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'docs',
    sidebarDepth: 2,
    nav: [
      {
        text: '指南',
        link: '/box-model/margin',
        activeMatch: '^/box-model/'
      }
    ],
    sidebar: {
      '/box-model/': [
        {
          text: '盒子模型',
          collapsable: false,
          children: [
            { text: 'content', link: '/box-model/content/' },
            { text: 'padding', link: '/box-model/padding/' },
            { text: 'margin', link: '/box-model/margin/index' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: false
  }
}
