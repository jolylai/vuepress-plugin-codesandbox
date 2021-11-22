module.exports = {
  title: 'CSS',
  description: 'CSS 学习笔记',
  themeConfig: {
    repo: 'jolylai/notebook-css',
    editLinks: true,
    smoothScroll: true,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'docs',
    sidebarDepth: 2,
    nav: [
      {
        text: '指南',
        link: '/guide/box-model/margin/',
        activeMatch: '^/guide/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '盒子模型',
          collapsable: false,
          children: [
            { text: 'content', link: '/guide/box-model/content/' },
            { text: 'padding', link: '/guide/box-model/padding/' },
            { text: 'margin', link: '/guide/box-model/margin/' }
          ]
        },
        {
          text: '排版',
          collapsable: false,
          children: [
            {
              text: 'vertical-align',
              link: '/guide/typography/vertical-align/'
            }
          ]
        },
        {
          text: '结构与布局',
          collapsable: false,
          children: [
            { text: '浮动', link: '/guide/layout/float/' },
            { text: 'Flex', link: '/guide/layout/flex/' },
            { text: '自适应内部元素', link: '/guide/layout/intrinsic-sizing/' },
            { text: '圣杯布局', link: '/guide/layout/holy-grail/' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: false
  }
}
