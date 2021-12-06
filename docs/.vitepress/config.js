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
        text: 'CSS',
        link: '/css/box-model/margin/',
        activeMatch: '^/css/'
      }
    ],
    sidebar: {
      '/css/': [
        {
          text: '指南',
          collapsable: false,
          children: [
            { text: '色彩', link: '/css/guide/color/' },
            { text: 'reset', link: '/css/guide/css-reset/' }
          ]
        },
        {
          text: '盒子模型',
          collapsable: false,
          children: [
            { text: 'content', link: '/css/box-model/content/' },
            { text: 'padding', link: '/css/box-model/padding/' },
            { text: 'margin', link: '/css/box-model/margin/' }
          ]
        },
        {
          text: '排版',
          collapsable: false,
          children: [
            {
              text: 'vertical-align',
              link: '/css/typography/vertical-align/'
            }
          ]
        },
        {
          text: '结构与布局',
          collapsable: false,
          children: [
            { text: '浮动', link: '/css/layout/float/' },
            { text: 'Flex', link: '/css/layout/flex/' },
            { text: '自适应内部元素', link: '/css/layout/intrinsic-sizing/' },
            { text: '圣杯布局', link: '/css/layout/holy-grail/' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: false
  }
}
