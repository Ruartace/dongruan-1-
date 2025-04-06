<script setup lang="ts" >
import { ref } from 'vue'
const inputName = ref('')
const inputPassword = ref('')

function checkWindowSize() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
      if (windowHeight < 680 || windowWidth < 700) {
        alert('请调整窗口大小至全屏，窗口过小可能会影响功能正常使用！');
    } 
}
checkWindowSize();
window.addEventListener('resize', checkWindowSize);  
</script>
<template>
   <div>
      <div class="common-layout">
         <el-container>
            <!-- 左半部分元素的盒子 -CC-->
            <el-main class="el-main-left">
               <!-- 背景颜色块 -CC-->
               <div class="color-box">
                  <div class="colortop"></div>
                  <div class="colormid"></div>
                  <div class="colorbottom"></div>         
               </div>
               <!-- 标题 -CC-->
               <div class="text">
                  <h1>成都东软学院</h1>
                  <h2>Chengdu Neusoft University</h2>
                  <h3>奖项报名系统</h3>
                  <h4>Awards registration system</h4>
               </div>
            </el-main>
            <!-- 一整个登录框 -CC-->
            <el-main class="el-main-right">
               <div class="login-box"> 
                  <h1>登录</h1>
                  <!-- 表单 -CC-->
                  <form action="#">
                     <div class="userbox">               
                        <label for="username" >账号：</label>               
                        <el-input
                           v-model="inputName" 
                           id="username"
                           placeholder="请输入用户名" />
                     </div>
                     <!--  -CC-->
                     <div class="passwordbox">
                        <label for="password">密码：</label>
                        <el-input
                           v-model="inputPassword"
                           type="password"
                           placeholder="请输入密码"
                           show-password/>
                     </div>
                     <!--  -CC-->
                     <div class="btnbox">
                        <el-button type="primary" plain @click="$router.push('/layout')">登录</el-button>
                     </div> 
                     <!-- 注册和忘记密码 -CC-->
                     <div class="a-box">
                        <div>
                           没有账号？点击我进行<a href="" @click="$router.push('/regist')">注册</a>
                        </div>
                        <div>
                           <a href="" @click="$router.push('/forget')">忘记密码？</a>
                        </div>
                     </div>
                  </form>
               </div>
            </el-main>
         </el-container>
      </div>
   </div>
</template>

<style scoped>

.common-layout {
   /* 全部样式 -CC*/
   position: fixed;
   height: 100%;
   width: 100%;
}
/* :deep(.el-container){
   width: 100px;
   height: 100%;
   background: #ffffff;
} */   /*作用于全体 且对页面无任何实际影响 删除 -CC*/
:deep(.el-main-left){
   /* 左半部分所有元素的盒子 -CC*/
   width: 1500px;
   height: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-left: -150px;
}
.color-box{
   /* 背景模糊色块盒子 -CC*/
   /* background-color: #77edba;*/    /*用于目测盒子区域 -CC*/
   height: 300px;
   width: 350px;
   margin-left: -10vw;
   margin-top: 200px;  
   display: flex;
   transform: translateY(20px);
   z-index: 0;
}
.colortop{
   /* 黄色色块（左） */
   height: 260px;
   width: 50%;
   background: #e5f3a0d5;   
   filter: blur(30px);
     border-radius: 250px;
}
.colormid{
   /* 绿色色块（中） */
   height: 200px;
   width: 50%;
   border-radius: 250px;
   background: #77edba;   
    filter: blur(20px);
}
.colorbottom{
   /* 红色色块（右） */
   height: 140px;
   width: 50%;
   background: rgba(234, 175, 175, 0.867);
   filter: blur(30px);
   border-radius: 250px;
}
.text {
   /* 标题盒子 带动整体盒子位置 -CC */
   /* background-color: #77edba38;*/   /*用于目测盒子区域 -CC*/
   height: 400px;
   width: 800px;
   transform: translate(165px,-250px);   
}
.text h1{
   /* 成都东软学院 -CC*/
   font-size: 70px;
   letter-spacing: 18px;
   font-family: 'KAITI'; 
   font-weight: 900;
   color: black;
   transform: translate(0px,-50px);
}
.text h2{
   /* Chengdu Neusoft University标题 -CC*/
   font-size: 16px;
   font-family: 'KAITI';
   color: black;
   transform: translate(10px,-120px);
   letter-spacing: 5px;
   font-weight: 900;
   line-height: 50px;
   opacity: 0.8;  
}
.text h3{  
   /* 奖项报名系统 -CC*/ 
   font-size:50px;
   font-family: 'KAITI';
   color: black;
   transform: translate(10px,-160px);
   letter-spacing: 10px;
   font-weight: 900;
   line-height: 50px;
   text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   opacity: 0.8;  
}
.text h4{
   /* Awards registration system标题 -CC*/
   font-size: 16px;
   font-family: 'KAITI';
   color: black;
   transform: translate(20px,-220px);
   letter-spacing: 3px;
   font-weight: 900;
   line-height: 50px;
   opacity: 0.8;  
}
:deep(.el-main-right){
   /* 右半部分所有元素的盒子 -CC*/
   width: 850px;
   height: 900px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 1;
   margin-right: 50px;
   }
   .login-box{
      /* 登录框 -CC*/
      width:380px;
      height: 435px;
      margin-left: 50px;
      border: 1px solid rgb(187, 187, 187,0.1);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: start;
   }  
   .userbox{
      /* 用户名盒子 -CC*/
      width: 100%;
      height:auto;
      display: flex;
      flex-direction: row;
   }
   .passwordbox{
      /* 密码盒子 -CC*/
       width: 100%;
      height:auto;
      display: flex;
      flex-direction: row;
   }
   .btnbox{  
      /* 按钮盒子 -CC*/
      margin-top: 10px;    
      width: 100%;
      height:auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
   }
   .userbox label{
      /* 用户名标签 -CC*/
      margin-top: 50px;
      margin-left: 80px;
      font-size: 20px;
   }
   .passwordbox label{
      /* 密码标签 -CC*/
      margin-top: 50px;
      margin-left: 80px;
      font-size: 20px;
   }
   .login-box h1{
      /* "登录"标题 -CC*/
      font-size: 40px;
   font-family: 'KAITI';
   color: black;
   margin-left: 20px;
   margin-top: 20px;
   letter-spacing: 5px;
   }
   form{
      /* 表单 -CC*/
      width: 100%;
      height: 100%;
   }
   :deep(.el-input){
      width: 50%;
      margin-top: 50px;
   }
      :deep(.el-button){
      width: 50%;
      margin-top: 50px;
   }
   .a-box{
      /* 注册和忘记密码盒子 -CC*/
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 40px;     
   }
   .a-box a{
      /* 注册和忘记密码的链接 -CC*/
      color: rgba(17, 104, 185, 0.801);
   }
</style>

