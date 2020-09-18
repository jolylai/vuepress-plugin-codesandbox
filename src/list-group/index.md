---
nav:
  title: 组件
  path: /components
---

<code inline src="./index.jsx" />

## HTML

```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```

## CSS

去除 ul 默认样式

```css
.list-group {
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}
```

每项的样式

```css
.list-group-item {
  display: block;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
```

首尾项边框圆角，这里使用继承父元素的圆角

```css
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
```

去除重叠边框,也就是将非第一项的顶部边框去除

```css
.list-group-item + .list-group-item {
  border-top-width: 0;
}

/* or */

.list-group-item:not(:first-child) {
  border-top-width: 0px;
}
```

状态

```css
.list-group-item.active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.list-group-item.disabled {
  color: #cecfd0;
  pointer-events: none;
  background-color: #fff;
}
```

```css
.list-group {
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}
.list-group-item {
  display: block;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
.list-group-item:not(:first-child) {
  border-top-width: 0px;
}

.list-group-item.active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.list-group-item.disabled {
  color: #cecfd0;
  pointer-events: none;
  background-color: #fff;
}
```
