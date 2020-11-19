<template>
  <el-container>
    <el-header>
      <header-menu active-item="2"></header-menu>
    </el-header>
    <el-container>
      <left-menu></left-menu>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="card-head">
            <span>
              <i class="el-icon-user-solid"><b>{{ $t('header.me') }}</b></i>
            </span>
            <el-button class="btnedit" type="primary" v-show="operate"
                       icon="el-icon-edit" circle @click="onEditClick"></el-button>
          </div>
          <div>
            <el-form ref="user">
              <el-form-item :label="$t('mecenter.username')">
                <el-input v-model="user.userName" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item :label="$t('mecenter.password')">
                <el-input v-model="user.password" :disabled="!isedit"></el-input>
              </el-form-item>
              <el-form-item :label="$t('mecenter.email')">
                <el-input v-model="user.email" :disabled="!isedit"
                  type="email"></el-input>
              </el-form-item>
              <el-form-item :label="$t('mecenter.phone')">
                <el-input v-model="user.phone" :disabled="!isedit"></el-input>
              </el-form-item>
              <el-form-item :label="$t('mecenter.remark1')">
                <el-input v-model="user.remark1" :disabled="!isedit"></el-input>
              </el-form-item>
              <el-form-item :label="$t('mecenter.recordtime')">
                <el-input v-model="user.recordTime" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item v-show="isedit">
                <el-button class="btnedit" type="success" icon="el-icon-check"
                           circle @click="onSubmitClick"></el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu'
import LeftMenu from '../components/LeftMenu'

export default {
name: "meCenter",
  components: {LeftMenu, HeaderMenu},
  data(){
    return{
      user:JSON.parse(sessionStorage.getItem('user')),
      isedit:false,
      operate:false,
    }
  },
  created () {
  },
  mounted () {
    var that = this;
    this.$getItem('operate',function (err,result) {
      if (result=='true'){
        that.operate = true;
      } else {
        that.operate = false;
      }
    })
  },
  methods:{
    onEditClick:function () {
      this.isedit = !this.isedit;
    },
    onSubmitClick:function () {
      this.axios.get('/user/updateUser',{
        params:{
          password:this.user.password,
          phone:this.user.phone,
          email:this.user.email,
          remark1:this.user.remark1,
          id:this.user.id,
        }
      }).then((response)=>{
        let data = response.data;
        if (data.code === 0){
          this.$message.success(this.$t('mecenter.success'));
          sessionStorage.setItem('user',JSON.stringify(this.user));
        } else {
          this.$message.error(this.$t('mecenter.error'));
        }
        this.isedit = !this.isedit;
      });
    }
  }
}
</script>

<style scoped>
.el-header{
  background-color: #303133;
}
.el-aside{
  background-color: #303133;
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-main{
  background-color: whitesmoke;
  height: 100%;
}
.mecontent{
  background-color: white;
  border-radius: 5px;
}
.card-head{
  height: 3vh;
  line-height: 3vh;
}
.btnedit{
  float: right;
}
</style>
