# 浮动

> 浮动的本质就是为了实现文字环绕效果。

## 特性

### 包裹性

包裹性: 由“包裹”和“自适应性”两部分组成。

**包裹**: 假设浮动元素父元素宽度 200px，浮动元素子元素是一个 128px 宽度的图片， 则此时浮动元素宽度表现为“包裹”，就是里面图片的宽度 128px

**自适应性**: 如果浮动元素的子元素不只是一张 128px 宽度的图片，还有一大波普通 的文字,则此时浮动元素宽度就自适应父元素的 200px 宽度，最终的宽度表现也是 200px。

<sandpack />

<div class="basis-float-wrap" style="width:200">
  <div class="float">
    <img
      width="128"
      src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg"
    />
    我是帅哥，好巧啊，我也是帅哥，原来看这本书的人都是帅哥~
  </div>
</div>

<style>
  .basis-float-wrap .float {
    float: left;
  }
</style>

### 块状化并格式化上下文

块状化的意思是，元素一旦 float 的属性值不为 none，则其 display 计算值就是 block 或者 table。

```css
span {
  float: left;
  display: block; /* 多余 */
}
span {
  float: left;
  vertical-align: middle; /* 多余 */
}
```

也不要指望使用 `text-align` 属性控制浮动元素的左右对齐，因为 `text-align` 对块级元素是无效的。

### 破坏文档流

### 没有任何 margin 合并

"行框盒子(每行内联元素所在的那个盒子)和浮动元素的不可重叠性”，也就是“行框盒子如果和浮动元素的垂直高度有 重叠，则行框盒子在正常定位状态下只会跟随浮动元素，而不会发生重叠”。
::: demo

```html
<template>
  <div class="basis-float-wrap">
    <div class="float">
      <img
        height="85"
        width="128"
        src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg"
      />
    </div>
    <div class="basis-float-content">
      苦杂金板假旁营哭就托艺形及达相期。功甚。姐跳饭第福翻袋同写然守袋？子堂米马迹兰青争许禁属。下败宫信元色营财口春？不越耳人味车经局秋。舞烈合行预录兰圣走洲？激之尔宝群口史行坐器释余型持洗。洲考象险多喝早注运？命乡方农千护素露处朋叫？凡下轻戏职永！象士找维愿妈亲印声房飞刚卫请乱？落现范孩望四严步枪凡须探教将须。定心取现改？继士顶姆河担强？救们示园言较？佛女白痛盖承婚令找给笔忆读属找！脑束终院它演千济话例？脱嘴萨得腿露。专查微飞虽端挥弄睛北？
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style></style>
```

:::

浮动后面元素 `margin` 负无穷大依然无效，只有外部的块状容器盒子尺寸变大，而和浮动元素垂直方向有重叠的“行框盒子” 依然被限死在那里

```css
.basis-float-content {
  margin-left: -100px;
}
```

## 作用机制

- **浮动锚点**： float 元素所在的“流”中的一个点，这个点本身并不浮动，就表现而言 更像一个没有 margin、border 和 padding 的空的内联元素。
- **浮动参考**：浮动元素对齐参考的实体。

为何右浮动时`html` 的结构要反着写

```html
<li class="basis-float-list-item">
  <span class="badge">14</span>
  Cras justo odio
</li>
```

看看具体的表现效果
::: demo

```html
<template>
  <ul class="basis-float-list">
    <li class="basis-float-list-item">
      <span class="badge">14</span>
      C妹资请幸山曲牛份严姐波制美。青编请周败？
    </li>
    <li class="basis-float-list-item">
      <span class="badge">16</span>
      赛信男慢言底再动星左消沙七装洗香。权眼。研切处形范著呀喜洛宫鞋任剧蜖树休。忍刚。轻桌目迹法烧术男这助摇毛烈农制式因？请。
    </li>
    <li class="basis-float-list-item">
      <span class="badge">16</span>
      赛信男慢言底再动星左消沙七装洗香。权眼。研切处形范著呀喜洛宫鞋任剧蜖树休。忍刚。轻桌目迹法烧术男这助摇毛烈农制式因？请。切领半点枪珍规议烧！极剧批旅很诺难！
    </li>
  </ul>
</template>
<script>
  export default {}
</script>
<style>
  .basis-float-list-item {
    display: block;
    padding: 0.625em 1em;
    border: 1px solid #c9a873;
    margin-bottom: -1px;
  }
  .basis-float-list-item .badge {
    float: right;

    padding: 0.125em 0.625em;
    box-sizing: border-box;
    font-size: 12px;
    border-radius: 9999px;
    background-color: #c9a873;
  }
</style>
```

```html
<template>
  <ul class="basis-float-list">
    <li class="basis-float-list-item">
      C妹资请幸山曲牛份严姐波制美。青编请周败？
      <span class="badge">14</span>
    </li>
    <li class="basis-float-list-item">
      赛信男慢言底再动星左消沙七装洗香。权眼。研切处形范著呀喜洛宫鞋任剧蜖树休。忍刚。轻桌目迹法烧术男这助摇毛烈农制式因？请。
      <span class="badge">16</span>
    </li>
    <li class="basis-float-list-item">
      赛信男慢言底再动星左消沙七装洗香。权眼。研切处形范著呀喜洛宫鞋任剧蜖树休。忍刚。轻桌目迹法烧术男这助摇毛烈农制式因？请。切领半点枪珍规议烧！极剧批旅很诺难难难！
      <span class="badge">16</span>
    </li>
  </ul>
</template>
<script>
  export default {}
</script>
<style></style>
```

:::

反着写的优点

- 不管内容没满一行，刚满一行，还是多行，浮动元素都以第一行对齐，且具有良好的样式
- 兼容 IE7 等低版本浏览器，因为 IE7 浮动的元素会在下一行内容的右边

## 两栏或多栏的自适应布局

::: demo

```html
<template>
  <div>
    <div class="basis-float-flow">
      <div class="float-left">←上一章</div>
      <div class="float-right">下一章→</div>
      <div class="title">夜的第七章</div>
    </div>
    <div class="basis-float-flow">
      <div class="float-left avatar">🤪</div>
      <div class="content">
        名景深却影近流听划华谁念色安出伦仍外现。客际定争沉他激呢弹第诺害败味浪。店形定五市黑余？汉及种高艺低印所寻更但败列脱停青杀局。击依约卡资责良洋待力？腿子响熟己阵取说早无？最中式风害哭点向才卫！下金休跟男下建买续弟另换顶父采森笑起。冷些哥身半细则记立？遍演纳秋门放半义立月击怀？做顾孤生弄店听抱根前！师向火段步命收会护试影运戏出。保份鲁孩寻忽很修未语！英丝关鱼维话德调价洗？建记毫姆班莱消前朝恐线器晚！
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .basis-float-flow .float-left {
    float: left;
  }
  .basis-float-flow .float-right {
    float: right;
  }
  .basis-float-flow .avatar {
    height: 64px;
    width: 64px;
    font-size: 64px;
  }
  .basis-float-flow .content {
    padding-left: 74px;
  }
  .basis-float-flow .title {
    padding: 0 70px;
    text-align: center;
  }
</style>
```

:::

原理其实很简单，content 元素没有浮动，也没有设置宽度，因此，流动性保持得很好， 设置 margin-left、border-left 或者 padding-left 都可以自动改变 content box 的尺寸，
继而实现了宽度自适应布局效果。

## 清除浮动

### clear 属性

- none:默认值，左右浮动来就来。
- left:左侧抗浮动。
- right:右侧抗浮动。
- both:两侧抗浮动。

::: demo

```html
<template>
  <ul class="basis-float-clear">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script>
  export default {}
</script>
<style>
  .basis-float-clear {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .basis-float-clear li {
    float: left;
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
    background: #7198a3;
  }
  .basis-float-clear li:nth-of-type(3) {
    clear: both;
  }
</style>
```

:::

```css
.clearfix::after {
  display: block;
  clear: both;
  content: '';
}
```

clear 属性只有块级元素才有效的，而::after 等伪元素默认都是内联水平，这就是借
助伪元素清除浮动影响时需要设置 display 属性值的原因。
