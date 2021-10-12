## margin 合并

**块级元素**的上外边距(margin-top)与下外边距(margin-bottom)有时会合并为单个外边距，这样的现象称为“margin 合并”。

1. 相邻兄弟元素 margin 合并。

<p>eligendi sapiente aut</p>
<p>dolore occaecati deserunt</p>

2. 父级和第一个/最后一个子元素。

<hero />

<script setup>
import Negative from './demos/negative.vue'
import Hero from './demos/hero.vue'
</script>
