# 灵活的背景定位

## background-position

```css
main {
  // 在不支持 background-position 扩展语法的浏览器中
  // 背景图片会紧贴在左上角（背景图片的默认位置）。
  // bottom 和 right 提供一个合适的回退方案
  background: url("http://csssecrets.io/images/code-pirate.svg") no-repeat
    bottom right #58a;
  background-position: bottom 10px right 20px;

  max-width: 10em;
  min-height: 5em;
  padding: 10px;
  color: #fff;
}
```

  <DemoBlock  demo='css-background-position' />

## background-origin

```css
background: url("http://csssecrets.io/images/code-pirate.svg") no-repeat bottom
  right #58a;
background-origin: content-box;

max-width: 10em;
min-height: 5em;
padding: 10px;
color: #fff;
```

  <DemoBlock  demo='css-background-origin' />

::: tip 📝

- background-position 是以 padding box 为准的，这样边框才不会遮住背景图片。
- 视觉效果跟 background-position 完全一样的，但我们的代码变得更加 DRY
  了。
  :::

## calc()

```css
background: url("http://csssecrets.io/images/code-pirate.svg") no-repeat #58a;
background-position: calc(100% - 10px) calc(100% - 10px);

max-width: 10em;
min-height: 5em;
padding: 10px;
color: #fff;
```

  <DemoBlock  demo='css-background-calc' />

::: tip 📝

- background-position 是以 padding box 为准的，这样边框才不会遮住背景图片。
- 视觉效果跟 background-position 完全一样的，但我们的代码变得更加 DRY
  了。
  :::
