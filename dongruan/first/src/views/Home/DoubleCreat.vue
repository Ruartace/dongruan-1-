<script>
export default {
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
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          alert('提交成功!');
        } else {
          alert('请检查输入内容');
          return false;
        }
      });
    }
  }
};
</script><template>  
<div class="mainbox">
      <div class="center-text" style="font-size: 20px;">评选说明：</div>
      <div class="center-text" style="font-size: 20px;">1. 做为主要创业成员（版权排名前三）大学校大学生创业中心创办1家虚拟公司；</div>
      <div class="center-text" style="font-size: 20px;">2.做为主要创业成员（版权排名前三）在国家相关部门注册1家实体公司 。</div>
   
    <el-form :model="form" :rules="rules" ref="formRef" label-width="150px">
     
        <el-form-item label="注册公司名称：" prop="softwareName">
          <el-input v-model="form.softwareName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="虚拟/实体：" prop="issuingAuthority">
          <el-input v-model="form.issuingAuthority" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="申请人排名：" prop="rankTotal">
          <el-input v-model="form.rankTotal" placeholder="请输入内容"></el-input>
        </el-form-item>
      
        <el-form-item label="注册时间：" prop="selectedDate">
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
     
      <el-form-item label="公布规模：" prop="rankTotal">
        <el-input v-model="form.rankTotal" placeholder="请输入内容"></el-input>
      </el-form-item>
     
        <el-form-item label="佐证材料：" prop="file">
          <input type="file" id="fileInput" @change="onFileSelected" style="display: none;" ref="fileInput" />
          <el-button type="primary" @click="$refs.fileInput.click()">选择文件</el-button>
          <p v-if="form.selectedFileName">{{ form.selectedFileName }}</p>
        </el-form-item>
     
      <div class="submit-button">
        <el-button type="primary" @click="submitForm">提交</el-button>
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
.center-text {
  text-align: center;
}
.submit-button {
  text-align: center;
}

.el-input__inner {
  width: 50px;
}

.form-wrapper {
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.el-form-item__label {
  text-align: center;
}
</style>    