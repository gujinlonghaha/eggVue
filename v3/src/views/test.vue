<template >
  <div class="inmain">
    <p>egg.js 服务端 get post put delete form 上传文件 接口功能实现   定时任务数据库自动加人</p>
    <el-row :gutter="20" class="inmain">
      <el-col :span="3">
        <el-input v-model="query.name" placeholder="用户名" />
      </el-col>
      <el-col :span="18">
        <el-button type="primary" @click="init">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="primary" @click="addForm">测试表单form</el-button>
        <el-button type="primary" @click="start">开启定时任务(/2s)</el-button>
        <el-button type="primary" @click="stop">关闭定时任务</el-button>
        <el-button type="primary">
          <a href="http://127.0.0.1:7002/download" download>下载服务器文件</a>
        </el-button>
        <el-button type="primary">
          <a href="http://127.0.0.1:7002/download-image" download>下载服务器取远端文件</a>
        </el-button>
        <el-button type="primary" @click="setToken">
            设置token (cookie中)
        </el-button>
        <el-button type="primary" @click="getToken">
            查询token (cookie中)
        </el-button>
       
      </el-col>
    </el-row>
    <el-table :data="tableDate" border>
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="名字" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="remark" label="描述" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :close-on-click-modal="false" title="操作" width="30%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名字">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" v-if="!this.isForm" @click="operate">确定</el-button>
          <el-button type="primary" v-if="this.isForm" @click="operate">form 方式提交(默认post 新增 修改模式别使用)</el-button>
        </span>
      </template>
    </el-dialog>
    <p class="inmain"> 测试文件上传  上传后地址{{imageUrl}} </p> 
    <el-upload
      class="avatar-uploader"
      action="/mock/upload"
      :data="{test:1}"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">文件上传</el-icon>
    </el-upload>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import { ElMessage } from 'element-plus'
import qs from 'qs';

export default {
  data: function () {
    return {
      dialogVisible: false,
      imageUrl: '',
      isForm: false,
      query: {
        name: '',
      },
      form: {
        remark: '',
        name: '',
        address: '',
      },
      tableDate: []
    }
  },
  mounted() {
    this.init()
    // this.initscoket()
  },
  methods: {
    handleAvatarSuccess(res) {
      this.imageUrl = `http://127.0.0.1:7002/public/${res.name}`
    },
    addForm() {
      this.isForm = true
      this.add()
    },
    stop() {
       axios.get('/mock/stop', {
      }).then((res) => {
         ElMessage({
            message: res.data.data,
            type: 'success',
          })
      })
    },
    start() {
       axios.get('/mock/start', {
      }).then((res) => {
         ElMessage({
            message: res.data.data,
            type: 'success',
          })
      })
    },
    operate() {
      if (this.isForm) {
        this.post()
        return
      }
      if (this.form.id) {
        this.put()
      } else {
        this.post()
      }
    },
    add() {
      this.dialogVisible = true
      this.form = Object.assign({}, this.$options.data.form)
    },
    handleEdit(obj) {
      this.dialogVisible = true
      this.form = Object.assign({}, this.form, obj)
    },
    init() {
      this.isForm = false
      axios.get('/mock/test', {
        params: {
          name: this.query.name
        },
        data: { test: 1 }
      }).then((res) => {
        this.tableDate = res.data.data
      })
    },
    getToken(){
       axios.get('/mock/getToken', {
      }).then((res) => {
         ElMessage({
            message: res.data.data,
            type: 'success',
          })
      })
    },
    setToken(){
       axios.get('/mock/setToken', {
      }).then((res) => {
         ElMessage({
            message: res.data.data,
            type: 'success',
          })
      })
    },
    put() {
      axios({
        method: 'put',
        url: `/mock/test/${this.form.id}`,
        data: this.form  // 请求参数放在请求体
      }).then(() => {
        ElMessage({
          message: '操作成功',
          type: 'success',
        })
        this.dialogVisible = false
        this.init()
      })

    },
    post() {
      if (this.isForm) {
        axios({
          method: 'post',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          url: '/mock/postTest',
          data: qs.stringify(this.form)  // 请求参数放在请求体
        }).then(() => {
          ElMessage({
            message: '操作成功',
            type: 'success',
          })
          this.dialogVisible = false
          this.init()
        })
      } else {
        axios({
          method: 'post',
          url: '/mock/test',
          data: this.form  // 请求参数放在请求体
        }).then(() => {
          ElMessage({
            message: '操作成功',
            type: 'success',
          })
          this.dialogVisible = false
          this.init()
        })

      }

    },
    handleDelete(obj) {
      axios({
        method: 'delete',
        url: `/mock/test/${this.form.id}`,
        data: obj  // 请求参数放在请求体
      }).then(() => {
        ElMessage({
          message: '删除成功',
          type: 'success',
        })
        this.init()
      })
    }
  }
}
</script>
<style >
.inmain {
  margin: 30px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar-uploader-icon svg {
  margin-top: 74px; /* (178px - 28px) / 2 - 1px */
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
