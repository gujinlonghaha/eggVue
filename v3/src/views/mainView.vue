<template>
  <el-container class="containerOut">
    <el-aside width="200px">
      <el-row >
        <el-col :span="24" class="system">系统名称</el-col>
        <el-col :span="24">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
          <TheMenu :list="menuList"></TheMenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <el-icon></el-icon>
      </el-header>
      <el-main>sd </el-main>
      <el-footer>版权所属</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import TheMenu from '../components/TheMenu.vue'

const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
     let menuList = [
      {
        name: "系统设置",
        children: [
          {
            name: "角色管理",
            children: [{ name: "111", children: [{ name: "222" }] }],
          },
          { name: "用户管理" },
          { name: "菜单管理" },
          { name: "字典管理" },
        ],
      },
    ];


</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 30px;
}
.el-footer {
  height: 30px;
  line-height: 30px;
}

.el-aside {
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.containerOut {
  height: 100vh;
}
.system{
  height: 50px;
  color: #fff;
  line-height:50px;
  font-weight: bold;
}
</style>
