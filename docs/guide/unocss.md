# Unocss

## 主题

自定义颜色

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    text: 'var(--pro-ant-color-text)',
    textSecondary: 'var(--pro-ant-color-text-secondary)',
  },
})
```
使用

```html
<div class="text">text</div>
<div class="text-secondary">textSecondary</div>
```