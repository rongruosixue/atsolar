<template>
  <el-aside>
      <el-menu background-color="#303133" text-color="#fff"
                active-text-color="#ffd04b" :default-active="activeItem">
        <router-link to="/endUser">
          <el-menu-item index="0">
            <i class="el-icon-user"></i>
            {{$t('leftnav.account')}}
          </el-menu-item>
        </router-link>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            {{ $t('leftnav.station') }}
          </template>
          <el-menu-item-group active-text-color="#ffd04b">
            <el-menu-item index="1-1">{{ $t('leftnav.normal') }}</el-menu-item>
            <el-menu-item index="1-2">{{ $t('leftnav.standby') }}</el-menu-item>
            <el-menu-item index="1-3">{{ $t('leftnav.fault') }}</el-menu-item>
            <el-menu-item index="1-4">{{ $t('leftnav.warn') }}</el-menu-item>
            <el-menu-item index="1-5">{{ $t('leftnav.offline') }}</el-menu-item>
            <el-menu-item index="1-6">{{$t('leftnav.building')}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            {{ $t('leftnav.inverter') }}
          </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">{{ $t('leftnav.normal') }}</el-menu-item>
              <el-menu-item index="2-2">{{ $t('leftnav.standby') }}</el-menu-item>
              <el-menu-item index="2-3">{{ $t('leftnav.fault') }}</el-menu-item>
              <el-menu-item index="2-4">{{ $t('leftnav.warn') }}</el-menu-item>
              <el-menu-item index="2-5">{{ $t('leftnav.offline') }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-s-grid"></i>
          {{ $t('leftnav.collector') }}
        </el-menu-item>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "LeftMenu",
  props:{
    activeItem:{
      type:String,
      default:"-1"
    }
  },
}
</script>

<style scoped>

</style>
