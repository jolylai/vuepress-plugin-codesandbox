<template>
  <div class="comment">
    <div class="comment-content">
      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    </div>
    <img
      class="comment-avatar"
      src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/jucy-beef-burger.jpg"
    />
  </div>
</template>

<style scoped>
.comment {
  margin-top: 16px;
  border: 1px solid #f0f0f0;
  padding: 16px;

  overflow: hidden;
}

.comment-content {
  width: 100%;
  float: left;
}

.comment-content p {
  margin: 0;
  margin-right: 100px;
}

.comment-avatar {
  width: 80px;
  height: 80px;
  border-radius: 8px;

  float: left;
  margin-left: -80px;
}
</style>