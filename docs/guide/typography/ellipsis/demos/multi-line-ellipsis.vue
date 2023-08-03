<template>
  <div class="ellipsis-l2">{{ '很长的文字'.repeat(20) }}</div>
</template>

<style scoped>
.ellipsis-l2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
