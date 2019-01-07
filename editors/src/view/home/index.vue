<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <el-menu default-active="simple" @select="selected">
          <el-menu-item index="simple"><span slot="title">medium-editor（行内）</span></el-menu-item>
          <el-menu-item index="complex"><span slot="title">ueditor（百度）</span></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <ueditor v-if="activePage === 'complex'" :defaultMsg='defaultMsg' :config='config' ref="ue"></ueditor>
        <mediumEditor v-if="activePage === 'simple'"></mediumEditor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ueditor from '../../components/ueditor'
import mediumEditor from '../../components/mediumEditor'
export default {
  data: () => {
    return {
      name: 'App',
      activePage: 'simple',
      defaultMsg: '这里是UE测试',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    }
  },
  components: {
    ueditor,
    mediumEditor
  },
  methods: {
    selected (val) {
      this.activePage = val
      // console.log('当前选中数据', val)
    }

  }
}
</script>

<style>
</style>
