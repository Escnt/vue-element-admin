<template>
  <div style="padding:20px">
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字" />
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字" />
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字" />
      <el-step title="步骤4" description="这是一段很长很长很长的描述性文字" />
    </el-steps>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    open1() {
      this.$message('这是一条消息提示')
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4() {
      this.$message.error('错了哦，这是一条错误消息')
    }
  }
}
</script>
