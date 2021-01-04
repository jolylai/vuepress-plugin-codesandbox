<template>
  <div>
    <div class="table">
      <div class="table-cell">
        <h4>正方观点</h4>
        <p>观点 1</p>
      </div>
      <div class="table-cell">
        <h4>反方观点</h4>
        <p>观点 1</p>
        <p>观点 2</p>
      </div>
    </div>
    <div class="column">
      <div class="column-left">
        <h4>正方观点</h4>
        <p>观点 1</p>
      </div>
      <div class="column-right">
        <h4>反方观点</h4>
        <p>观点 1</p>
        <p>观点 2</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
}
.table-cell {
  width: 50%;
  padding: 16px;
  background-color: aqua;
  display: table-cell;
}

.column {
  overflow: hidden;
  color: #ffffff;
  text-align: center;
}

.column-left,
.column-right {
  float: left;
  width: 50%;

  margin-bottom: -99999px;
  padding-bottom: 99999px;
}

.column-left {
  background-color: #34538b;
}

.column-right {
  background-color: #cd0000;
}
</style>