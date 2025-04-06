<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img src="/pictures/nu.png" alt="Logo" >
         <el-button @click="$router.push('/')" plain>退出登录</el-button>
      </el-header>    
        <div class="container">
          <el-container>
            <el-aside>
              <el-menu
                 router
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item  index="/home">
                  <span>首页</span>
                </el-menu-item>
                <el-menu-item index="/match">
                  <span>竞赛之星报名</span>
                </el-menu-item>
                <el-sub-menu index="/science">
                  <template #title>
                    <span>科研之星报名</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/science">
                      <span>科研项目</span>
                    </el-menu-item>
                    <el-menu-item index="/copyright">
                      <span>软件著作权</span>
                    </el-menu-item>
                    <el-menu-item index="/sendTest">
                      <span>发表论文</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="/doubleCreat">
                  <span>双创之星报名</span>
                </el-menu-item>
                <el-sub-menu index="/testManage">
                  <template #title>
                    <span>报名表单管理</span>
                  </template>
                  <el-menu-item index="/matchMaunage">
                      <span>竞赛之星报名管理</span>
                    </el-menu-item>
                  <el-menu-item-group>
                    <el-sub-menu index="/scienceManage">
                      <template #title>
                        <span>科研之星报名管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="/scienceManage">
                          <span>科研项目管理</span>
                        </el-menu-item>
                        <el-menu-item index="/copyManage">
                          <span>软件著作权管理</span>
                        </el-menu-item>
                        <el-menu-item index="/testManage">
                          <span>发表论文管理</span>
                         </el-menu-item>
                      </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="/doubleManage">
                      <span>双创之星报名管理</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
            </el-aside>
            <el-main class="main-box">
            <router-view></router-view>
            </el-main>
          </el-container>
        </div>
    </el-container>
  </div>
</template>
<style scoped>

.container {
  width: 100%;
  height: 100%;
}
:deep(.el-header) {
  width: 100%;
  height: 5vw;
  background: #2877c9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
:deep(.el-header) img {
  height: 50px; /* 调整Logo的高度 */
  max-height: 100%; /* 确保Logo高度不超过容器高度 */
}
:deep(.el-main) {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 90.7vh; /* 设置为100% */
  padding: 0; /* 移除内边距 */
}
:deep( .el-aside ){
  width: 300px;
background-size: cover;
  padding: 0px; /* 移除内边距 */
  margin: 0;
  height: 90.6vh;
}
:deep( .el-menu ){
  border-right: none;
  background-color: rgb(132, 175, 176);
  height: 100%; /* 设置为100% */
}
:deep(.el-menu-item-group__titl) e {
  padding-left: 20px; /* 统一内边距 */
  display: flex;
  align-items: center;
}
:deep(.el-menu-item-group__title)  span {
  margin-left: 0; /* 移除多余的左边距 */
}
:deep( .el-menu-item) {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 确保文本从左侧开始对齐 */
  padding-left: 20px; /* 统一内边距 */
}
:deep(.el-menu-item ) span {
  margin-left: 0; /* 移除多余的左边距 */
}
:deep( .el-sub-menu__title) {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 确保文本从左侧开始对齐 */
  padding-left: 20px; /* 统一内边距 */
}
:deep( .el-sub-menu__title) span {
  margin-left: 0; /* 移除多余的左边距 */
}
</style>