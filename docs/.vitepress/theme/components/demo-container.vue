<template>
  <div>
    <div class="header">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="content">
      <!-- The demo is rendered in the default slot -->
      <slot />
    </div>
  </div>
</template>

<style scoped>
.header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f2f2f2;
  border: 1px solid #e6e6e6;
  border-bottom: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 1rem;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding-left: 0.5rem;
}

.header i {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 290486px;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 4px;
  margin-right: 2px;
  width: 4px;
}

.content {
  border: 1px solid #e6e6e6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  font-size: 0.8em;
  padding: 0.5em;
}
</style>
