# Table

- 搜索重置布局
- 搜索栏初始值

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
- 点击键盘 Enter

## 搜索按钮居右

```js
const span = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6,
}

/** 配置表单列变化的容器宽度断点 */
const BREAKPOINTS = {
  vertical: [
    // [breakpoint, cols, layout]
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Number.POSITIVE_INFINITY, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Number.POSITIVE_INFINITY, 4, 'horizontal'],
  ],
}
```

## Columns

```js
const columns = [
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 120,
  },
]
```

### valueType

```js
const options = [
  { value: `password`, label: `密码输入框`, initialValue: '123456' },
  { value: `money`, label: `金额输入`, initialValue: '123456' },
  { value: `textarea`, label: `文本域`, initialValue: '123456\n121212' },
  { value: `date`, label: `日期`, initialValue: Date.now() },
  { value: `dateTime`, label: `日期时间`, initialValue: Date.now() },
  { value: `dateWeek`, label: `周`, initialValue: Date.now() },
  { value: `dateMonth`, label: `月`, initialValue: Date.now() },
  { value: `dateQuarter`, label: `季度输入`, initialValue: Date.now() },
  { value: `dateYear`, label: `年份输入`, initialValue: Date.now() },
  {
    value: `dateRange`,
    label: `日期区间`,
    initialValue: [Date.now(), Date.now()],
  },
  {
    value: `dateTimeRange`,
    label: `日期时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `time`, label: `时间`, initialValue: Date.now() },
  {
    value: `timeRange`,
    label: `时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `text`, label: `文本框`, initialValue: '123456' },
  { value: `select`, label: `下拉框`, initialValue: 'open' },
  {
    value: 'treeSelect',
    label: '树形下拉框',
    initialValue: ['0-0', '0-0-0'],
  },
  { value: `checkbox`, label: `多选框`, initialValue: 'open' },
  { value: `rate`, label: `星级组件`, initialValue: '' },
  { value: `radio`, label: `单选框`, initialValue: 'open' },
  { value: `radioButton`, label: `按钮单选框`, initialValue: 'open' },
  { value: `progress`, label: `进度条`, initialValue: '10' },
  { value: `percent`, label: `百分比组件`, initialValue: '20' },
  { value: `digit`, label: `数字输入框`, initialValue: '200000' },
  { value: `second`, label: `秒格式化`, initialValue: 20000 },
  {
    value: `avatar`,
    label: `头像`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  { value: `code`, label: `代码框`, initialValue: '# 2121' },
  { value: `switch`, label: `开关`, initialValue: 'open' },
  { value: `fromNow`, label: `相对于当前时间`, initialValue: Date.now() },
  {
    value: `image`,
    label: `图片`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    value: `jsonCode`,
    label: `JSON代码框`,
    initialValue: '{ "name":"qixian" }',
  },
  {
    value: `color`,
    label: `颜色选择器`,
    initialValue: '#1890ff',
  },
]
```

## 数据请求

```tsx
<ProTable<DataType, Params>
  // params 是需要自带的参数
  // 这个参数优先级更高，会覆盖查询表单的参数
  params={params}
  request={async (
    // 第一个参数 params 查询表单和 params 参数的结合
    // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
    params: T & {
      pageSize: number;
      current: number;
    },
    // 排序
    sort,
    // 过滤
    filter,
  ) => {
    // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
    // 如果需要转化参数可以在这里进行修改
    const msg = await myQuery({
      page: params.current,
      pageSize: params.pageSize,
    });
    return {
      data: msg.result,
      // success 请返回 true，
      // 不然 table 会停止解析数据，即使有数据
      success: boolean,
      // 不传会使用 data 的长度，如果是分页一定要传
      total: number,
    };
  }}
/>
```

### 分页

### 排序

### 过滤

## 数据展示

### 长表格冻结表头

### 宽表格冻结首列

## 操作

- [表格设计有什么要注意的？](https://zhuanlan.zhihu.com/p/157708717)

html 中的`<table>`元素用于显示表格数据。您可以将其视为描述和显示数据的一种方式，这种方式在电子表格软件中是有意义的。本质上:列和行。在这篇文章中，我们将看看如何使用它们，何时使用它们，以及其他你需要知道的一切。

## 样式

你所见过的大多数表格都是用颜色和线条来区分表格的不同部分。边界是很常见的。默认情况下，所有表单元格之间的间隔为 2px。你可以控制间距

```css
table {
  border-spacing: 0.5rem;
}
```

但更常见的做法是去掉这个间距。如果你这样做，该属性将被完全忽略，并且空间折叠:

```css
table {
  border-collapse: collapse;
}
```
