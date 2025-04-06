<script></script>
<template>
    <div class="mainbox">
           <div class="welcome-message">
                <p>欢迎使用成都东软学院奖项报名填报系统</p>
                <p>注意：若有多余奖项信息清分多次提交表单，切勿放在一个表单提交！否则次数计算将不达标！</p>
                <p>若已提交，请在审批之前删除数据重新提交！若被驳回，请修改之后重新提交即可</p>
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
</style>