<template>
  <div>
    <a href>登录</a>
    <a href>注册</a>
  </div>
</template>

<style scoped>
a + a::before {
  content: "";
  font-size: 0;
  padding: 10px 3px 1px;
  margin-left: 6px;
  border-left: 1px solid gray;
}
</style>