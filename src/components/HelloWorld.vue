<template>
    <el-container>
      <el-header>
        <header-menu></header-menu>
      </el-header>
      <el-container>
        <left-menu></left-menu>
        <el-main>main</el-main>
      </el-container>
    </el-container>
</template>

<script>
import Header from './HeaderMenu'
import Aside from './LeftMenu'
import LeftMenu from './LeftMenu'
import HeaderMenu from './HeaderMenu'
export default {
  name: 'HelloWorld',
  components: {HeaderMenu, LeftMenu, Aside, Header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    let login = sessionStorage.getItem('login');
    if (login !== 'true') {
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
