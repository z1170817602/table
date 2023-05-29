<template>
  <div class="table">
    <div class="head">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div
          style="
            width: 7px;
            height: 20px;
            background-color: #409eff;
            border-radius: 5px;
            margin-right: 2px;
          "
        ></div>
        <div>人员列表</div>
      </div>
      <div class="search">
        <div style="margin-right: 10px">人员:</div>
        <div style="margin-right: 10px">
          <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
        </div>
        <div>
          <el-row>
            <el-button @click="search" type="primary">搜索</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <div>
      <el-table
        height="440"
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        style="width: 100%"
        stripe
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column prop="id" label="序号" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="人员" sortable width="180">
        </el-table-column>
        <el-table-column prop="tuijin" label="推进中" sortable width="180">
        </el-table-column>
        <el-table-column prop="zhihou" label="进度滞后" sortable width="180">
        </el-table-column>
        <el-table-column prop="yiwancheng" label="已完成" sortable width="180">
        </el-table-column>
        <el-table-column prop="zongshu" label="总数" sortable width="180">
        </el-table-column>
        <el-table-column
          prop="baifenbi"
          label="完成百分比"
          sortable
          width="180"
        >
        </el-table-column>
      </el-table>
    </div>
    <div>
      <!-- <el-pagination background small layout="prev, pager, next" :total="50">
      </el-pagination> -->
      <div class="block">
        <el-pagination
          :current-page="currentPage"
          :page-size="pagesize"
          :total="tableData.length"
          layout=" prev, pager, next"
          @current-change="handleCurrentChange"
          style="margin-top: 20px"
          background
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getTable } from "../api/mock.js";
export default {
  data() {
    return {
      input: "",
      tableData: [],
      currentPage: 1,
      pagesize: 20,
      totalPages: 0,
    };
  },
  mounted() {
    this.getMock();
  },
  methods: {
    async getMock() {
      let data = await getTable();
      this.tableData = data.data.data.list;
      // console.log(this.tableData);
      this.tableData.map((ele) => {
        ele.baifenbi = ele.baifenbi + "%";
      });
    },
    formatter(row, column) {
      return row.address;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    search() {
      let table = [];
      this.tableData.forEach((ele) => {
        if (ele.name == this.input) {
          table.push(ele);
        }
      });
      this.tableData = table;
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
