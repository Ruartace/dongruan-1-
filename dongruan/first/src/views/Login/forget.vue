
 <script setup lang="ts" >
import e from 'express';
import { ref } from 'vue'
const account = ref('')
const email = ref('')
const elmailcode = ref('')
const password = ref('')
const repassword = ref('')

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
   <div id="Backgroud"></div>
   <div>
     <div class="common-layout">
    <el-container>
      <el-main class="el-main-left">
      <div class="color-box">
         <div class="colortop"></div>
         <div class="colormid"></div>
         <div class="colorbottom"></div>
         
      </div>
      <div class="text"><h1>成都东软学院</h1>
         <h2>Chengdu Neusoft University</h2>
         <h3>奖项报名系统</h3>
         <h4>Awards registration system</h4>
      </div>
      <div></div></el-main>
      <el-main class="el-main-right">
         <div class="login-box"> 
            <div class="topbox"><h1>忘记密码</h1>
              <el-button @click="$router.push('/')" plain>返回登录</el-button>
            </div>
            <form action="#">
             
               <div class="inputBox">
                 <el-input
    v-model="account"
    placeholder="请输入学号"
    clearable  />
        <div class="emailBox">
      <el-input
    v-model="email"
    placeholder="请输入邮箱"  />
       <el-button plain>发送验证码</el-button>
    </div>
    <el-input
    v-model="elmailcode"
    placeholder="请输邮箱验证码"
    clearable  />
      <el-input
    v-model="password"
     type="password"
    placeholder="请输入密码"
    show-password/>
     <el-input
    v-model="repassword"
     type="password"
    placeholder="请再次输入密码"
    show-password  />

       <div class="btnbox">
        <el-button type="primary" plain @click="$router.push('/')">更改完毕</el-button>
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
   position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: white;
}
:deep(.el-container){
   width: 100%;
   height: 100%;
background: #ffffff;

}
:deep(.el-main-left){
   /* 左半部分所有元素的盒子 -CC*/
   width: 1500px;
   height: 1000px;
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
      width:400px;
      height: 435px;
      margin-left: 50px;
      border: 1px solid rgb(187, 187, 187,0.1);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: start;
   }  
  .login-box h1{
  margin: 30px;
  }
  .topbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .topbox :deep(.el-button){
    margin: 30px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);;
  }
  .inputBox{
       width: 25vw;
    height: 6vw;
    margin-left: 30px;
  }
  .emailBox{
    width: 320px;
    height: 35px;
    display: flex;
    flex-direction: row; 
    margin-bottom: 20px;
    justify-content: space-between;
  }
  .emailBox :deep(.el-input){
    width: 200px;
    height: 100%;
   
  }
   .emailBox :deep(.el-button){
    width: 90px;
    height: 100%;
    margin-top: 20px;
  }
  :deep(.el-input){
    width: 322px;
    margin-top: 20px;
  }
  .btnbox{
    width: 75%;
    height: 35px;
    display: flex;
   justify-content: center;
   margin-top: 30px;
  }
.btnbox :deep(.el-button){
  width: 200px;
  height: 100%;

}
</style>