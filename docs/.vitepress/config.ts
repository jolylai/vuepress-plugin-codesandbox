import { defineConfig } from 'vitepress'
import demoPlugin from 'markdown-it-vitepress-demo'
import pkg from '../../package.json'

export default defineConfig({
  title: 'CSS',
  description: 'Notebook of CSS',
  themeConfig: {
    nav: [
      {
        text: '指引',
        link: '/guide/colors/',
        activeMatch: '^/guide/'
      },
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '^/components/'
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link:
              'https://github.com/jolylai/notebook-css/blob/master/CHANGELOG.md'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/components/': getComponentsSidebar()
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jolylai/fe-notebook'
      }
    ]
  },
  markdown: {
    lineNumbers: false,
    config(md) {
      md.use(demoPlugin)
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '主题',
      items: [
        { text: '色彩', link: '/guide/colors/' },
        { text: '默认样式重置', link: '/guide/theme/reset' },
        { text: '内置样式', link: '/guide/theme/built-in' },
        { text: 'CSS 变量', link: '/guide/theme/variables' }
      ]
    },
    {
      text: '盒子模型',
      items: [
        { text: 'content', link: '/guide/box-model/content/' },
        { text: 'padding', link: '/guide/box-model/padding/' },
        { text: 'margin', link: '/guide/box-model/margin/' }
      ]
    },
    {
      text: '排版',
      items: [
        { text: '字体', link: '/guide/typography/font/' },
        { text: '文字省略', link: '/guide/typography/ellipsis/' },
        { text: 'vertical-align', link: '/guide/typography/' }
      ]
    },
    {
      text: '结构与布局',
      items: [
        { text: 'Flex', link: '/guide/layout/flex' },
        { text: '响应式布局', link: '/guide/layout/responsive' },
        { text: '浮动', link: '/guide/layout/float/' },
        { text: '自适应内部元素', link: '/guide/layout/intrinsic-sizing/' },
        { text: '圣杯布局', link: '/guide/layout/holy-grail/' },
        { text: '媒体查询', link: '/guide/layout/media/' }
      ]
    },
    {
      text: '过渡与动画',
      items: [
        { text: '缓动效果', link: '/guide/animation/easing' },
        { text: 'Loading', link: '/guide/animation/loading/' }
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '通用组件',
      items: [{ text: 'Button 按钮', link: '/components/button' }]
    },
    // {
    //   text: '布局',
    //   items: [
    //     { text: 'Space 间距', link: '/components/space/' },
    //     { text: 'Divider 分割线', link: '/components/divider/' },
    //   ],
    // },
    // {
    //   text: '数据录入',
    //   items: [
    //     { text: 'Checkbox 多选框', link: '/components/checkbox/' },
    //     { text: 'Upload 上传', link: '/components/upload/' },
    //   ],
    // },
    // {
    //   text: '导航',
    //   items: [{ text: 'Affix 固钉', link: '/components/affix/' }],
    // },
    {
      text: '数据展示',
      items: [
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Badge 徽章', link: '/components/badge/' },
        { text: 'Table', link: '/components/table/' },
        { text: 'Popper', link: '/components/popper/' },
        { text: 'Tooltip', link: '/components/tooltip/' }
      ]
    }
    // {
    //   text: '反馈',
    //   items: [
    //     { text: 'Alert 提示', link: '/components/alert/' },
    //     { text: 'Progress 进度条', link: '/components/progress/' },
    //     { text: 'Message 全局提示', link: '/components/message/' },
    //   ],
    // },
    // {
    //   text: '其他',
    //   items: [{ text: 'Anchor 锚点', link: '/components/anchor/' }],
    // },
  ]
}
