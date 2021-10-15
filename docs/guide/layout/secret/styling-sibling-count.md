# 根据兄弟元素的数量来设置样式

<layout-styling-sibling-count />

## 只有一个列表项

```css
li:only-child {
  /* 只有一个列表项时的样式 */
  color: #fff;
  background-color: #f43f5e;
}
```

也就是只有 HTML 为

```html
<ul>
  <li>1</li>
</ul>
```

如果第一项同时也是最后一项，那从逻辑上来说它就是唯一的那一 项。

```css
li:first-child:nth-last-child(1) {
  /* 相当于li:only-child */
}
```
