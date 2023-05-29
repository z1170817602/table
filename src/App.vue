<template>
  <Table></Table>
</template>

<script>
import Table from "./view/Table.vue";

export default {
  name: "App",
  components: {
    Table,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  /* 垂直显示 */
  flex-direction: column;
  /* 上下平均排列 */
  justify-content: center;
  /* 	
元素位于容器的中心*/
  align-items: center;
  /* 视窗高度 */
  height: 100vh;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
}
::-webkit-scrollbar-thumb {
  background: #409eff;
  border-radius: 10px;
}

.el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.el-table__body-wrapper,
.el-scrollbar__wrap {
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
}
.el-timeline-item__node--normal {
  width: 28px;
  height: 28px;
  left: -9px;
  border: 7px solid #fff;
}
.tabs.el-tabs--card > .el-tabs__header .el-tabs__nav,
.tabs.el-tabs--card > .el-tabs__header .el-tabs__item,
.tabs.el-tabs--card > .el-tabs__header {
  border: none;
}
.tabs.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-radius: 4px 4px 0 0;
  background: #e8ebf2;
  color: #5f6677;
  margin-right: 3px;
  height: 34px;
  line-height: 36px;
}
.tabs.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  border: none;
  background: #2a8dff;
}
.el-pagination {
  ul {
    li {
      border-radius: 50% !important;
    }
  }
}
</style>
