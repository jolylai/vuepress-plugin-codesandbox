<template>
  <div class="ellipsis">{{ '很长的文字'.repeat(20) }}</div>
</template>

<style scoped>
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
