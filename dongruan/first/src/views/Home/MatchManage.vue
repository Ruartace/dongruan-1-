<template>
   <div class="mainbox">
  <div class="form-container">
    <div :style="{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }">
      竞赛之星报名管理
    </div>
    <div :style="{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }">
      已提交的竞赛信息
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>竞赛报名时间</th>
          <th>竞赛名称</th>
          <th>佐证材料</th>
          <th>审批结果</th>
          <th>驳回理由</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.time }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.material }}</td>
          <td>{{ item.result }}</td>
          <td>{{ item.reason }}</td>
          <td>{{ item.operation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
 <RouterView />
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.mainbox {
  width: 100%;
  height: 100%;
background: url('/public/pictures/Background.jpg');
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data-table {
  width: 900px;
  border-collapse: collapse;
  margin: 0 auto;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 6px;
  text-align: left;
}

.data-table th {
  background-color: #f2f2f2;
}
</style>    