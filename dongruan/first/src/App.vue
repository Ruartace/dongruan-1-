<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>
#bkgc{
  position: absolute;
  z-index: -1;
}
</style>
<!-- 
增加了 当页面过小时弹出警告框 
修改了大部分页面的CSS样式
修改了部分CSS关联逻辑
优化了全部页面代码的规范性
    -- CC@cybercat  2025.3.26 19:13:37
-->
<!-- 替换了新的内部主页背景
    -- CC@cybercat  2025.3.28 12:15:26
-->