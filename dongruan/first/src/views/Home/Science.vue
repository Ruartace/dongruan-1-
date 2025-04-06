<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElDatePicker } from 'element-plus';

export default {
  name: 'NewFormComponent',
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
        issuingAuthority: '',
        rankTotal: '',
        selectedDate: '',
        selectedFileName: ''
      },
      rules: {
        softwareName: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        issuingAuthority: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        rankTotal: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        selectedDate: [
          { required: true, message: '请输入立项时间', trigger: 'change' }
        ]
      },
      isSubmitting: false,
      inputHistory: {}
    };
  },
  methods: {
    handleInput(field) {
      if (!this.inputHistory[field]) {
        this.inputHistory[field] = [];
      }
      this.inputHistory[field].push(this.form[field]);
      if (this.inputHistory[field].length > 5) {
        this.inputHistory[field].shift();
      }
    },
    handleDateChange() {
     
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.selectedFileName = file.name;
      }
    },
    async submitForm() {
      this.isSubmitting = true;
      try {
        const valid = await this.$refs.formRef.validate();
        if (valid) {
          
          console.log('Form data submitted:', this.form);
          alert('提交成功!');
        } else {
          alert('请检查输入内容');
        }
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>
<template>
     <div class="mainbox">
    <div class="text-container">
      <h2 class="center-text">评选说明：</h2>
      <p class="center-text">1. 做为项目主要成员（排名前八）获得院级以上的科研项目或教研课题立项（含教师科研项目）1项及以上；</p>
      <p class="center-text">2. 作为主申请人（排名第三）获得软件著作权1项及以上。</p>
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="150px" class="form-wrapper">
      <el-form-item label="期刊名称：" prop="softwareName">
        <el-input v-model="form.softwareName" placeholder="请输入内容" clearable @input="handleInput('softwareName')">
        </el-input>
      </el-form-item>
      <el-form-item label="论文名称：" prop="issuingAuthority">
        <el-input v-model="form.issuingAuthority" placeholder="请输入内容" clearable @input="handleInput('issuingAuthority')">
        </el-input>
      </el-form-item>
      <el-form-item label="排名/总人数：" prop="rankTotal">
        <el-input v-model="form.rankTotal" placeholder="请输入内容" clearable @input="handleInput('rankTotal')">
        </el-input>
      </el-form-item>
      <el-form-item label="立项时间：" prop="selectedDate" id="Time">
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
      <el-form-item label="佐证材料：" prop="file">
        <input type="file" id="fileInput" @change="onFileSelected" style="display: none;" ref="fileInput" />
        <el-button type="primary" @click="$refs.fileInput.click()">选择文件</el-button>
        <p v-if="form.selectedFileName">{{ form.selectedFileName }}</p>
      </el-form-item>
      <div class="submit-button">
        <el-button type="primary" @click="submitForm" :loading="isSubmitting">提交</el-button>
      </div>
    </el-form></div>
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
.text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.form-wrapper {
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.center-text {
  text-align: center;
  margin: 5px 0;
}
.submit-button {
  text-align: center;
  margin-top: 10px;
}
</style>