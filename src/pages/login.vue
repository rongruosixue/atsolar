<template>
  <div class="login">
    <div class="head">
      <img src="../assets/logo_head.png"/>
      <div style="padding-left: 30vw">
        <el-link class="hlink" href="http://www.aotaicloud.com/ATSolarInfo/datasheet.html"
                 target="_blank" type="info">{{ $t('login.datasheet') }}</el-link>
        <el-link class="hlink" type="info">{{ $t('login.servicecenter') }}</el-link>
        <el-link class="hlink" type="info" @click="onGuest">{{ $t('login.guest') }}</el-link>
      </div>
    </div>
    <div class="body">
      <div class="logform">
        <el-form ref="form" :model="form">
          <el-form-item>
            <i class="el-icon-user-solid icolor"></i>
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item>
            <i class="el-icon-lock icolor"></i>
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="onSubmit">{{ $t('login.logbtn') }}</el-button>
            <el-button type="danger" class="btn" @click="onRegister">{{ $t('login.regbtn') }}</el-button>
          </el-form-item>
        </el-form>
        <el-image :src='form.appimg' ></el-image>
      </div>
      <el-dialog :title="$t('login.regbtn')" :visible.sync="dialogRegister"
                 width="25vw">
        <el-form :model="formreg">
          <el-form-item :label="$t('login.username')">
            <el-input v-model="formreg.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('login.password')">
            <el-input v-model="formreg.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('login.phone')">
            <el-input v-model="formreg.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('login.email')">
            <el-input type="email" v-model="formreg.email" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogRegister = false">{{ $t('btn.cancel') }}</el-button>
          <el-button type="primary" @click="onRegisterProcess">{{ $t('btn.ok') }}</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="foot">
      山东奥太电气有限公司 鲁ICP备15016186号-2
    </div>
  </div>
</template>

<script>


export default {
  name: 'login',
  data() {
    return{
      form: {
        username: '',
        password:'',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        appimg:'../../static/APP.png'
      },
      formreg:{
        username:'',
        password:'',
        phone:'',
        email:'',
      },
      dialogRegister:false,
    }
  },
  created () {
    this.form.username = localStorage.getItem('atusername');
    this.form.password = localStorage.getItem('atpassword');
  },
  methods:{
    onSubmit(){
      this.axios.get('/user/login',{
        params:{
          username:this.form.username,
          password:this.form.password,
        }
      }).then((response)=>{
        let data = response.data;
        if (data.code === 0) {
          this.$message.success(this.$t('login.logok'));
          this.$router.push('/HelloWorld');
        } else {
          this.$message.error(this.$t('login.logerror'));
        }
      });
    },
    onRegister(){
      this.dialogRegister = true;
    },
    onRegisterProcess(){
      if(this.formreg.username===''||this.formreg.password===''){
        this.$message.error(this.$t('login.emptyalert'));
      } else {
        this.axios.get('/user/register',{
          params:{
            username:this.formreg.username,
            password:this.formreg.password,
            email:this.formreg.email,
            phone:this.formreg.phone
          }
        }).then((response)=>{
          let data = response.data;
          if (data.code === 0){
            this.$message.success(this.$t('login.regok'));
            this.dialogRegister = false;
          } else {
            this.$message.warning(this.$t('login.regerror'));
          }
        });
      }
    },
    onGuest(){
      this.form.username = 'guest';
      this.form.password = 'guest';
      this.onSubmit();
    }
  }
}

</script>

<style scoped>
  .login{
    height: 100vh;
    margin:0;
  }
  .head{
    height: 10vh;
    width: 100%;
    display: flex;
    line-height: 10vh;
  }
  .head img{
    height: 100%;
    object-fit: scale-down;
  }
  .hlink{
    margin-right: 5vw;
  }
  .body{
    height: 80vh;
    width: 100%;
    background: url('../../static/bmg.jpg') no-repeat;
    background-size: auto;
  }
  .logform{
    background-color: white;
    float: right;
    margin-top: 20vh;
    margin-right: 10vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 10px;
    width: 300px;
    height: 200px;
    border-radius: 5px;
  }
  .icolor{
    color: #409EFF;
  }
  .btn{
    width: 140px;
  }
  .foot{
    height: 10vh;
    width: 100%;
    text-align: center;
    line-height: 10vh;
  }
</style>
