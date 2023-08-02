# 排版 Typography

## 垂直居中

![](https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/202212291648960.png)

上面图中还出现了其他的名词，这里简单说下我的理解：

- ascender height: 上下线高度
- cap height: 大写字母高度
- median: 中线
- descender height: 下行线高度

抛开 inherit 这类全局属性值不谈，我把 vertical-align 属性值分为以下 4 类:

- 线类，如 baseline(默认值)、top、middle、bottom;
- 文本类，如 text-top、text-bottom;
- 上标下标类，如 sub、super;
- 数值百分比类，如 20px、2em、20%等。

## 作用的前提

`vertical-align` 只能应用于内联元素以及 display 值为 table-cell 的元素。

vertical-align 属性只能作用在 display 计算值为 inline、inline-block，inline-table 或 table-cell 的元素上。因此，默认情况下，`<span>`、`<strong>`、`<em>`等内联元素，`<img>`、`<button>`、`<input`>等替换元素，非 HTML 规范的自定义标签 元素，以及`<td>`单元格，都是支持 vertical-align 属性的，其他块级元素则不支持。

图片垂直居中

```html
<div class="box">
  <img src="https://picsum.photos/60/96" />
</div>
```

<demo1 />

```css {3}
.box {
  height: 128px;
  line-height: 128px;
}

.box > img {
  height: 96px;
  vertical-align: middle;
}
```

<demo2 />

```css{3,4}
.box {
  height: 128px;
  display: table-cell;
  vertical-align: middle;
}

.box > img {
  height: 96px;
}
```

 <demo3 />

<script setup>
 
  import demo1 from './demos/demo1.vue'
  import demo2 from './demos/demo2.vue'
  import demo3 from './demos/demo3.vue'
</script>

## vertical-align

抛开 inherit 这类全局属性值不谈，我把 vertical-align 属性值分为以下 4 类:

- 线类，如 baseline(默认值)、top、middle、bottom;
- 文本类，如 text-top、text-bottom;
- 上标下标类，如 sub、super;
- 数值百分比类，如 20px、2em、20%等。

## 作用的前提

`vertical-align` 只能应用于内联元素以及 display 值为 table-cell 的元素。

vertical-align 属性只能作用在 display 计算值为 inline、inline-block，inline-table 或 table-cell 的元素上。因此，默认情况下，`<span>`、`<strong>`、`<em>`等内联元素，`<img>`、`<button>`、`<input`>等替换元素，非 HTML 规范的自定义标签 元素，以及`<td>`单元格，都是支持 vertical-align 属性的，其他块级元素则不支持。

图片垂直居中

```html
<div class="box">
  <img src="https://picsum.photos/60/96" />
</div>
```

<demo1 />

```css {3}
.box {
  height: 128px;
  line-height: 128px;
}

.box > img {
  height: 96px;
  vertical-align: middle;
}
```

<demo2 />

```css{3,4}
.box {
  height: 128px;
  display: table-cell;
  vertical-align: middle;
}

.box > img {
  height: 96px;
}
```

 <demo3 />

<script setup>
 
  import demo1 from './demos/demo1.vue'
  import demo2 from './demos/demo2.vue'
  import demo3 from './demos/demo3.vue'
</script>
