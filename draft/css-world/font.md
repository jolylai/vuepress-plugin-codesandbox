# font
## font-weight

```css
/* 平常用的最多的 */
font-weight: normal;
font-weight: bold;

/* 相对于父级元素 */
font-weight: lighter;
font-weight: bolder;

/* 字重的精细控制 */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;
```

::: tip

- 如果使用数值作为 font-weight 属性值，必须是 100 ～ 900 的整百数。不能自创如: `font-weight:550`
- `font-weight:400` 实际上等同于 `font-weight:normal`，`font-weight:700` 等同于 f`ont-weight:bold`。
- lighter 和 bolder 是基于临界点进行解析的，千万不要想当然地认为是根据当前字重上下 100 加加减减后的效果。

:::

### lighter 和 bolder 解析规则表
| 继承的值 | bolder | lighter |
| -------- | :----: | ------: |
| 100      |  400   |     100 |
| 200      |  400   |     100 |
| 300      |  400   |     100 |
| 400      |  700   |     100 |
| 500      |  700   |     100 |
| 600      |  900   |     400 |
| 700      |  900   |     400 |
| 800      |  900   |     700 |
| 900      |  900   |     700 |

## font-style

```css
font-style: normal;
font-style: italic;
font-style: oblique; 
```

::: tip
- italic 和 oblique 这两个关键字都表示“斜体”的意思
- italic 是使用当前字体的斜体字体，而 oblique 只是单纯地让文字倾斜。
- 没有斜体字体时 italic 表现会和 oblique 一致，因此，我们在实际开发的时候，几乎没有任何理由需要使用 font-style:oblique。

:::

## font

### 缩写
```
[ [ font-style || font-variant || font-weight ]? font-size [ / line-height ]? font-family ] 
```

::: tip
- font-size 和font-family 后面没有问号，也就是说是必需的，是不可以省略的。
- 是 font 缩写必须要带上 font-family，然而，原本真实继承的 font-family 属性值可能会很长，每次 font 缩写后面都挂一个长长的字体列表，令人很是不悦
:::

我们可以随便找一个系统根本不存在的字体名占位，如字母 a，或者特殊一点，
用笑脸表情☺，然后再设置 font-family:inherit 来重置这个占位字体。
```css
.font {
  font: 30px/30px '☺';
  font-family: inherit;
} 
```

### 使用关键字值的 font 属性
```css
font:caption | icon | menu | message-box | small-caption | status-bar 
```
::: tip
- caption：活动窗口标题栏使用的字体。
- icon：包含图标内容所使用的字体，如所有文件夹名称、文件名称、磁盘名称，甚至
浏览器窗口标题所使用的字体。
- menu：菜单使用的字体，如文件夹菜单。
- message-box：消息盒里面使用的字体。
- small-caption：调色板标题所使用的字体。
- status-bar：窗体状态栏使用的字体。
:::

::: warning
- 使用关键字作为属性值的时候必须是独立的，不能添加 font-family 或
者 font-size 之类的，这和 font 属性缩写不是一个路子。如果混用，例如：
```css
.menu { font: 14px menu; }
```
则此时的 menu 是作为自定义的字体名称存在的，而不是表示系统的 menu 菜单字体。
:::

### 让网页的字体跟系统走
```css
html { font: menu; }
body { font-size: 16px; } 

html { font: small-caption; }
body { font-size: 16px; }

html { font: status-bar; }
body { font-size: 16px; } 
```