<template>
     <div class="bg">
          <el-form class="loginform" :model="form" label-width="120px">
               <el-form-item label="用户名">
                    <el-icon>
                         <Edit />
                    </el-icon>
                    <el-input v-model="form.name"></el-input>
               </el-form-item>
               <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
               </el-form-item>
               <el-form-item label>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
               </el-form-item>
          </el-form>
     </div>
</template>


<script setup>

import { Edit } from "@element-plus/icons";
import { reactive,getCurrentInstance  } from "vue";
// import axios from "@/plugins/axios"
const { proxy } = getCurrentInstance()
const form = reactive({
     name: "",
     password: "",
});
// eslint-disable-next-line no-undef
function onSubmit() { }
proxy.axios.get('/api/v1/topics')
     .then(function (response) {
        console.log(response);
     })
     .catch(function (error) {
          console.log(error);
     });
</script>

<style scoped>
:global(.red) {
  color: red;
}
.bg {
     /* background: yellow; */
     width: 100vw;
     height: 100vh;
}
.loginform {
     width: 400px;
     height: 400px;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
}

</style>
