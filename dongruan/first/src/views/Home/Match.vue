<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElDatePicker } from 'element-plus';

export default {
  name: 'GlassBox',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDatePicker
  },
  data() {
    return {
      form: {
        softwareName: '',
        selectedDate: '',
        selectedFileName: ''
      }
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.selectedFileName = file.name;
      }
    },
    submitForm() {
      if (this.form.selectedFileName) {
        alert(`提交的证明材料是：${this.form.selectedFileName}`);
      } else {
        alert('请选择证明材料！');
      }
    },
    handleDateChange() {      
    }
  }
};
</script>
<template>
  <div class="mainbox">
    <div class="textbox">
      <p class="center-text">评选说明：</p>
    <p class="center-text">报名参赛达三次以上</p>
  </div>
<div class="formbox">
 
      <el-form ref="formRef" :model="form" > 
        <div class="inputbox"> 
          <el-form-item label="参与竞赛名称:" prop="softwareName">
          <el-input v-model="form.softwareName" placeholder="请输入竞赛名称" clearable />
          </el-form-item>
          <el-form-item label="竞赛报名时间:">
          <el-date-picker
            v-model="form.selectedDate"
            type="date"
            placeholder="请选择日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            clearable
            @change="handleDateChange"
          />
        </el-form-item>
      </div>       
        <el-form-item label="证明材料:">
          <input type="file" id="fileInput" class="fileInput" @change="onFileSelected" ref="fileInput" />
        </el-form-item>
        <el-form-item>
          <div class="btnbox"> 
            <el-button type="primary" @click="submitForm">提交</el-button>
          </div> 
        </el-form-item>
      </el-form>
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
.textbox{
  margin-top: 30px;
  color: rgba(250, 33, 33, 0.589);
  font-size: 16px;
  font-weight: 800;
}
.formbox {
  margin: 30px;
  width: 25%;
  height: 50%;
}
.formbox :deep(.el-input){
  width: 100%;
}
.btnbox{
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px so1lid #ccc;
}
.btnbox :deep(.el-button){
  width: 100%;
}
.fileInput{
  margin-left: 30px;
}
</style>