import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CSS',
  // description: 'CSS 学习笔记',
  themeConfig: {
    nav: [
      {
        text: '指引',
        link: '/guide/colors/',
        activeMatch: '^/guide/'
      },
      {
        text: 'CSS',
        link: '/css/box-model/margin/',
        activeMatch: '^/css/'
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/css/': getCssSidebar()
    }
  },
  markdown: {
    lineNumbers: false
  }
})

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        { text: '色彩', link: '/guide/colors/' },
        { text: 'reset', link: '/guide/css-reset/' }
      ]
    }
  ]
}

function getCssSidebar() {
  return [
    {
      text: '盒子模型',
      items: [
        { text: 'content', link: '/css/box-model/content/' },
        { text: 'padding', link: '/css/box-model/padding/' },
        { text: 'margin', link: '/css/box-model/margin/' }
      ]
    },
    {
      text: '排版',
      items: [
        {
          text: 'vertical-align',
          link: '/css/typography/vertical-align/'
        }
      ]
    },
    {
      text: '结构与布局',
      items: [
        { text: '浮动', link: '/css/layout/float/' },
        { text: 'Flex', link: '/css/layout/flex/' },
        { text: '自适应内部元素', link: '/css/layout/intrinsic-sizing/' },
        { text: '圣杯布局', link: '/css/layout/holy-grail/' },
        { text: '媒体查询', link: '/css/layout/media/' }
      ]
    }
  ]
}
