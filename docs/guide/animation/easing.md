# 缓动效果

## Loading

::: code-group

```html
<svg class="loading-circular" viewBox="25 25 50 50">
  <circle cx="50" cy="50" r="20" fill="none" />
</svg>
```

```css
@keyframes van-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
```

:::

线型旋转

::: code-group

```html
<span>
  <svg class="loading-circular" viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
</span>
```

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

:::

- [animations](https://cssreference.io/animations/)
