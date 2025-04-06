<script setup>
// import { useRouter } from 'vue-router';
// const router = useRouter()
// const gotoabout = () => {
//   router.push('/about')
// }
</script>
<!-- <template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template> -->
<template>
      <el-button type="primary" @click="$router.push('/login')">登录页面</el-button>
      <el-button type="primary" @click="$router.push('/regist')">注册页面</el-button>
       <el-button type="primary" @click="$router.push('/forget')">忘记密码页面</el-button>
       <el-button type="primary" @click="$router.push('/layout')">首页</el-button>
</template>
<style scoped>
</style>