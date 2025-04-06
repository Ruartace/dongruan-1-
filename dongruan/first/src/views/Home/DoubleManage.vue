<script setup>
import { ref } from 'vue';

let biaoti = "已提交的记录";

const tableData = ref([
  {
    注册公司名称: "公司2",
    虚拟实体: "虚拟",
    申请人排名: "20",
    注册时间: "2023-01-01",
    公司规模: "200",
    佐证材料: "",
    状态: "营业",
    操作: "查看" 
  },
  {
    注册公司名称: "公司2",
    虚拟实体: "虚拟",
    申请人排名: "20",
    注册时间: "2023-01-01",
    公司规模: "200",
    佐证材料: "",
    状态: "营业",
    操作: "查看" 
  }
]);
</script>

<template>
    <div class="mainbox">
  <p class="table-title">{{ biaoti }}</p> 
  <el-table :data="tableData" border>
    <el-table-column prop="注册公司名称" label="注册公司名称" width="180" />
    <el-table-column prop="虚拟/实体" label="虚拟/实体" width="180" />
    <el-table-column prop="申请人排名" label="申请人排名"width="180" />
    <el-table-column prop="注册时间" label="注册时间" width="180"/>
    <el-table-column prop="公司规模" label="公司规模" width="180"/>
    <el-table-column prop="佐证材料" label="佐证材料" />
    <el-table-column prop="状态" label="状态" width="180"/>
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
  margin-top: 30px;
}

.table-title {
  text-align: center; 
  font-size: 20px;
  margin-top: 20px;
}
</style>