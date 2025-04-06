<script setup>

import '@/styles/pagecss/header.css'
import '@/styles/pagecss/body.css'

                  
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header><img src="/pictures/nu.png" alt=""></el-header>
    </el-container>
  </div>
  <RouterView />
</template>
<style scoped>
 :deep(.el-header)  {
    width: 100%;
    height: 7vw;
    background: #c9f1a225;
    box-shadow: 1px 25px 10px -15px rgb(184, 174, 174);
    z-index: 2;
}
:deep(.el-header):hover{
    box-shadow: 1px 25px 20px -15px #e48aaf9d;

}

</style>