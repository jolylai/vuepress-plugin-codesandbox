<template>
  <ul>
    <li class="qz-ellipsis">
      <p class="qz-ellipsis-content">
        Nisi Lorem sit duis commodo.
      </p>
      <span class="qz-ellipsis-tag qz-ellipsis-tag-red">置顶</span>
      <span class="qz-ellipsis-tag qz-ellipsis-tag-skyblue">11万字</span>
    </li>
    <li class="qz-ellipsis">
      <p class="qz-ellipsis-content">
        Sit nulla proident qui nostrud tempor dolore adipisicing exercitation id
        commodo elit. Aute ea sunt dolor esse officia fugiat magna nulla tempor
        nisi deserunt. Elit incididunt qui consequat irure fugiat quis
        exercitation culpa cupidatat. Dolor ullamco nulla sunt ex qui culpa
        officia consequat elit sunt irure. Excepteur id sunt cillum eiusmod
        proident aliquip nulla nisi enim. Irure reprehenderit dolor duis et
        velit aute. Ut et id ullamco nulla non adipisicing cupidatat do.
      </p>

      <span class="qz-ellipsis-tag qz-ellipsis-tag-red">置顶</span>
      <span class="qz-ellipsis-tag qz-ellipsis-tag-skyblue">11万字</span>
    </li>
  </ul>
</template>

<style>
.qz-ellipsis {
  display: flex;
  overflow: hidden;
  align-items: center;
}
.qz-ellipsis-content {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
}
.qz-ellipsis-tag {
  border: 1px solid;
  padding: 6px 8px;
  margin-left: 8px;
  flex-shrink: 0;
}
.qz-ellipsis-tag-red {
  color: red;
}
.qz-ellipsis-tag-skyblue {
  color: skyblue;
}
</style>
