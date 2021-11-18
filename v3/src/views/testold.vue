<template class="inmain">
  <p>egg.js 服务端 get post put delete 接口功能实现</p>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-input v-model="query.name" placeholder="用户名" />
    </el-col>
    <el-col :span="6">
      <el-button type="primary" @click="init">查询</el-button>
      <el-button type="primary" @click="add">新增</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableDate">
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
        <el-button type="primary" @click="operate">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import axios from '@/plugins/axios'
import { ElMessage } from 'element-plus'

export default {
  data: function () {
    return {
      dialogVisible: false,
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
  },
  methods: {
    operate() {
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
      axios.get('/mock/get', {
        params: {
          name: this.query.name
        },
        data:{test:1}
      }).then((res) => {
        this.tableDate = res.data
      })
    },
    put() {
      axios({
        method: 'put',
        url: '/mock/put',
        params: { test: 1 }, // 请求参数拼接在url上
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
      axios({
        method: 'post',
        url: '/mock/post',
        params: { test: 1 }, // 请求参数拼接在url上
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
    handleDelete(obj) {
      axios({
        method: 'delete',
        url: '/mock/delete',
        params: { test: 1 }, // 请求参数拼接在url上
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
<style scoped>
.inmain{
  margin:30px;
}
</style>
