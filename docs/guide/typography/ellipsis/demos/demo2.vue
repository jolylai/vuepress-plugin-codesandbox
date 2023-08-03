<template>
  <ul>
    <li class="qz-ellipsis-float">
      <div class="qz-ellipsis-float-tags">
        <span class="qz-ellipsis-float-tag qz-ellipsis-float-tag-red"
          >置顶</span
        >
        <span class="qz-ellipsis-float-tag qz-ellipsis-float-tag-skyblue"
          >11万字</span
        >
      </div>
      <div class="qz-ellipsis-float-content">
        Sit nulla proident qui nostrud tempor.
      </div>
    </li>
    <li class="qz-ellipsis-float">
      <div class="qz-ellipsis-float-tags">
        <span class="qz-ellipsis-float-tag qz-ellipsis-float-tag-red"
          >置顶</span
        >
        <span class="qz-ellipsis-float-tag qz-ellipsis-float-tag-skyblue"
          >11万字</span
        >
      </div>
      <div class="qz-ellipsis-float-content">
        Sit nulla proident qui nostrud tempor dolore adipisicing exercitation id
        commodo elit. Aute ea sunt dolor esse officia fugiat magna nulla tempor.
      </div>
    </li>
  </ul>
</template>

<style>
.qz-ellipsis-float {
  overflow: hidden;
  height: 40px;
  line-height: 40px;
}
.qz-ellipsis-float-content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.qz-ellipsis-float-tags {
  float: right;
}
.qz-ellipsis-float-tag {
  border: 1px solid;
  padding: 6px 8px;
  margin-left: 8px;
}
.qz-ellipsis-float-tag-red {
  color: red;
}
.qz-ellipsis-float-tag-skyblue {
  color: skyblue;
}
</style>
