# 图片

## object-fit

用于控制被替换元素的内容如何调整大小的实用程序。

- `fill`: 中文释义“填充”。默认值。替换内容拉伸填满整个 content box, 不保证保持原有的比例。
- `contain`: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
- `cover`: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
- `none`: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
- `scale-down`: 中文释义“降低”。就好像依次设置了 none 或 contain, 最终呈现的是尺寸比较小的那个。

#### Reference

- [Lorem Picsum](https://picsum.photos/)
- [object-fit](https://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/)
