<script setup lang="ts" >
import { ref } from 'vue'
const input = ref('')
const username = ref('')
const password = ref('')
const repassword = ref('')
const email = ref('')
const emailcode = ref('')
const selectedGrade = ref('')
const selectedMajor = ref('')
const gradeOptions = [
  { value: 'freshman', label: '大一' },
  { value: 'sophomore', label: '大二' },
  { value: 'junior', label: '大三' },
  { value: 'senior', label: '大四' }
]

const majorOptions = [
  { value: 'computer', label: '计算机与科学技术' },
  { value: 'software', label: '软件工程' },
  { value: 'business', label: '商务英语' },
  { value: 'other', label: '其他专业' }
]

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
      <el-main class="el-main-right">
         <div class="login-box"> 
            <div class="topbox"><h1>注册</h1>
              <el-button @click="$router.push('/')" plain>返回登录</el-button>
            </div>
            <el-form>
               <div class="selectBox">                         
     <el-select
                v-model="selectedGrade"
                placeholder="请选择年级"
                class="select-item"
              >
                <el-option
                  v-for="item in gradeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

              <el-select
                v-model="selectedMajor"
                placeholder="请选择专业"
                class="select-item"
              >
                <el-option
                  v-for="item in majorOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
               <div class="inputBox">
                 <el-input
                 v-model="input"
                 name="useraccount"
    placeholder="请输入学号"
    clearable  />
<el-input
   v-model="username"
   name="username"
    placeholder="请输入姓名"
    clearable  />
      <el-input
      v-model="password"
     type="password"
    placeholder="请输入密码"
    show-password
      />
     <el-input
     v-model="repassword"
     type="password"
    placeholder="请再次输入密码"
    show-password  />
    <div class="emailBox">
      <el-input
      v-model="email"
    placeholder="请输入邮箱"  />
       <el-button  plain>发送验证码</el-button>
    </div>
    <el-input
    v-model="emailcode"
    placeholder="请输邮箱验证码"
    clearable  />
       <div class="btnbox">
        <el-button type="primary" plain @click="$router.push('/layout')">注册并进入</el-button>
      </div>     
               </div>            
            </el-form>
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
}
:deep(.el-container){
   width: 100%;
   height: 100%;
background: #ffffff;

}


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
   transform: translate(165px,-225.4px);   
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


/* 
:deep(.el-main-left){
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
}
.color-box{
   height: 20vw;
   width: 20vw;
   margin-left: -10vw;
   margin-top: 5vw;  
   display: flex;
   transform: translateY(20px);
}
.colortop{
   height: 90%;
   width: 50%;
   background: #e5f3a0d5;   
   filter: blur(30px);
     border-radius: 250px;
}
.colormid{
   height: 80%;
   width: 50%;
   border-radius: 250px;
   background: #77edba;   
    filter: blur(20px);
}
.colorbottom{
   height: 60%;
   width: 50%;
   background: rgba(234, 175, 175, 0.867);
     filter: blur(30px);
       border-radius: 250px;
      
}
.text {
  height: 20vw;
  width: 30vw;
  transform: translateY(-130px);   
}
.text h1{
   font-size: 70px;
   letter-spacing: 18px;
   font-family: 'KAITI'; 
   font-weight: 900;
   color: black;
   transform: translate(-0px,-100px);
}
.text h3{   
   font-size:35px;
   font-family: 'KAITI';
   color: black;
   transform: translate(20px,-90px);
   letter-spacing: 10px;
   font-weight: 900;
   line-height: 50px;
   text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   opacity: 0.8;  
}
.text h2{
   font-size: 16px;
   font-family: 'KAITI';
   color: black;
   transform: translate(10px,-100px);
   letter-spacing: 10px;
   font-weight: 900;
   line-height: 50px;
   opacity: 0.8;  
}
.text h4{
   font-size: 16px;
   font-family: 'KAITI';
   color: black;
   transform: translate(40px,-100px);
   letter-spacing: 1px;
   font-weight: 900;
   line-height: 50px;
   opacity: 0.8;  
} */
/* :deep(.el-main-right){
   width: 50%;
   height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
   }
   .login-box{
      width: 60%;
      height: 70%;
      margin-left: 20%;
      margin-bottom: 5%;
      border: 1px solid rgb(187, 187, 187,0.1);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: start;
      background: rgb(187, 187, 187,0.1);
   } */

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
      width:480px;
      height: 640px;
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
  .selectBox{
   /* 一堆输入框 */
    width: 80%;
    height: 6vw;
    margin-left: 30px;
  }
  .inputBox{
   width: 85%;
    height: 6vw;
    margin-left: 30px;
  }
  .emailBox{
    width: 100%;
    height: 1.7vw;
    display: flex;
    flex-direction: row; 
    margin-bottom: 20px;
    justify-content: space-between;
  }
  .emailBox :deep(.el-input){
    width: 50%;
    height: 100%;
   
  }
   .emailBox :deep(.el-button){
    width: 40%;
    height: 100%;
    margin-top: 20px;
  }
  :deep(.el-select){
    width: 100%;
    margin-top: 20px;
  }
  :deep(.el-input){
    width: 100%;
    margin-top: 20px;
  }
  .btnbox{
    width: 100%;
    height: 2vw;
    display: flex;
   justify-content: center;
   margin-top: 30px;
  }
.btnbox :deep(.el-button){
  width: 50%;
  height: 100%;

}
</style>
