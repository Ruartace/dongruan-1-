<script setup>
import { ref } from 'vue';

let biaoti = "软件著作权管理管理";
let name = "已提交的软件著作权信息";

const tableData = ref([
  {
    期刊名称: "软件1",
    论文名称: "单位1",
    排名总人数: "1/10",
    发表时间: "2023-01-01",
    佐证材料: "材料1",
    审批结果: "通过",
    驳回理由: "",
    操作: "查看" // 添加逗号
  },
  {
    期刊名称: "软件2",
    论文名称: "单位2",
    排名总人数: "1/10",
    发表时间: "2023-01-01",
    佐证材料: "材料1",
    审批结果: "不通过",
    驳回理由: "材料不充足",
    操作: "查看" // 添加逗号
  }
]);
</script>

<template>
      <div class="mainbox">
  <p class="table-title">{{ biaoti }}</p>
  <p class="table-title">{{ name }}</p> 
  <el-table :data="tableData">
    <el-table-column prop="期刊名称" label="期刊名称" width="180" />
    <el-table-column prop="论文名称" label="论文名称" width="180" />
    <el-table-column prop="排名总人数" label="排名/总人数" width="180" />
    <el-table-column prop="发表时间" label="发表时间" width="180" />
    <el-table-column prop="佐证材料" label="佐证材料" />
    <el-table-column prop="审批结果" label="审批结果" width="180" />
    <el-table-column prop="驳回理由" label="驳回理由" />
    <el-table-column prop="操作" label="操作" width="180"/>
  </el-table>
</div>
    <RouterView />
</template>

<style scoped>
   .mainbox {
  width: 100%;
  height: 100%;
background: url('/public/pictures/Background.jpg');
  display: flex;
  align-items: center;
  flex-direction: column;
}
.el-table {
  color: black;
  width: 80%;
  margin: 0 auto;
}

.table-title {
  text-align: center; 
  font-size: 20px;
  margin-top: 20px;
}
</style>