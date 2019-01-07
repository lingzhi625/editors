<template>
  <div>
    <!-- <el-button type="primary" @click="getUEContent">主要按钮</el-button> -->
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
export default {
  name: 'UE',
  data () {
    return {
      editor: null
    }
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }
  },
  mounted () {
    const _this = this
    this.editor = window.UE.getEditor('editor', this.config) // 初始化UE
    this.editor.addListener('ready', function () {
      _this.editor.setContent(_this.defaultMsg) // 确保UE加载完成后，放入内容。
    })
  },
  methods: {
    // getUEContent () { // 获取内容方法
    //   return this.editor.getContent()
    // }
    getUEContent () {
      let content = this.$refs.ue.getUEContent()
      this.$message({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      console.log(content)
    }
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>
