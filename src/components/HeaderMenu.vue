<template>
  <div>
  <img src="../assets/logo_header.png" style="float: left"/>
    <el-menu class="headermenu" background-color="#303133" mode="horizontal"
              text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        {{ $t('header.screen') }}
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user"></i>
        {{ $t('header.me') }}
      </el-menu-item>
      <router-link to="/">
        <el-menu-item index="3" >
          {{ $t('header.exit') }}
          <i class="el-icon-close"></i>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
name: "HeaderMenu"
}
</script>

<style scoped>
.headermenu{
  display: flex;
  justify-content:flex-end;
  border: none;
}
</style>
