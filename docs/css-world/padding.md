# padding

- `margin` 属性不同，`padding` 属性是不支持负值的；
- `padding` 支持百分比值，`padding` 百分比值无论是水平方向还是垂直方向均是相对于`父元素宽度`计算的

::: demo

```html
<template>
  <div class="cw-padding-percent"></div>
</template>
<script>
  export default {};
</script>
<style>
  .cw-padding-percent {
    padding: 20% 20%;
    background: skyblue;
  }
</style>
```

:::

## 内联元素

- 假如是空的内联元素，里面没有任何文字，仅有一个`<span>`标签内联元素的垂直 padding 会让“幽灵空白节点”显现，
  由于内联元素默认的高度完全受 font-size 大小控制，因此，我们只要：设置 `font-size: 0`
  ::: demo

```html
<template>
  <span class="cw-padding-inline"></span>
</template>
<script>
  export default {};
</script>
<style>
  .cw-padding-inline {
    padding: 2% 2%;
    font-size: 0;
    background: skyblue;
  }
</style>
```

:::
