# font-family

- font-family 支持两类属性值，一类是“字体名”，一类是“字体族”。
- 字体族
  - serif：衬线字体。
  - sans-serif：无衬线字体。
  - monospace：等宽字体。
  - cursive：手写字体。
  - fantasy：奇幻字体。
  - system-ui：系统 UI 字体。
- 字体分衬线字体和无衬线字体。所谓衬线字体，通俗讲就是笔画开始、结束的地方有额外
  装饰而且笔画的粗细会有所不同的字体。无衬线字体没有这些额外的装饰，而且笔画的粗细差不多

## 等宽字体

::: demo

```html
<template>
  <main>
    边框类型：<select class="font-family monospaced">
      <option value="solid" selected>———————</option>
      <option value="dashed">-------</option>
      <option value="dotted">·······</option>
    </select>
  </main>
</template>

<style>
  .font-family.monospaced {
    width: 110px;
    font-family: Consolas, Monaco, monospace;
    font-size: 14px;
    letter-spacing: -0.2px;
  }
</style>

<script>
  export default {};
</script>
```

:::

## ch 单位与等宽字体布局

1ch 表示一个 0 字符的宽度

::: demo

```html
<template>
  <main>请输入手机号码： <input class="font-family phoneNo" /></main>
</template>

<style>
  .font-family.phoneNo {
    width: 11ch;
    font-family: Consolas, Monaco, monospace;
    font-size: 14px;
  }
</style>

<script>
  export default {};
</script>
```

:::
