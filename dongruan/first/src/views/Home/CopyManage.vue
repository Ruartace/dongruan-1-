
   <script setup>
import { ref } from 'vue';

let biaoti = "已提交的软件著作权信息";
let name = "软件著作权管理管理";
const tableData = ref([
  {
    软著名称: "软件1",
    颁发单位: "单位1",
    排名总人数: "1/10",
    批获时间时间: "2023-01-01",
    佐证材料: "材料1",
    审批结果: "通过",
    驳回理由: ""
  },
  {
    软著名称: "软件2",
    颁发单位: "单位2",
    排名总人数: "2/10",
    批获时间时间: "2023-02-01",
    佐证材料: "材料2",
    审批结果: "驳回",
    驳回理由: "不符合要求"
  }
]);
</script>
<template>
   <div class="mainbox">
  <p class="table-title">{{ name }}</p>
  <p class="table-title">{{ biaoti }}</p> 
  <el-table :data="tableData">
    <el-table-column prop="软著名称" label="软著名称" width="180" />
    <el-table-column prop="颁发单位" label="颁发单位" width="180" />
    <el-table-column prop="排名总人数" label="排名/总人数" width="180" />
    <el-table-column prop="获批时间时间" label="获批时间时间" width="200" />
    <el-table-column prop="佐证材料" label="佐证材料" />
    <el-table-column prop="审批结果" label="审批结果" width="180" />
    <el-table-column prop="驳回理由" label="驳回理由" />
  </el-table>
  </div>
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