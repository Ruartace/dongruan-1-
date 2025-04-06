<template>
    <div class="mainbox">
    <div :style="{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }">
    科研项目管理
   </div>
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
   .outer-glass-box {
    width: 1200px;
    height: 700px;
    background: rgba(237, 236, 237, 0.979);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin: 20px auto 0; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 80px;
  }
</style>