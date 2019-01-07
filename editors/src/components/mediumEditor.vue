<template>
  <div>
     <div class="editable" @input="handleInput">当前为测试文本</div>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'
// import '../node-modules/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js'
// import MediumEditor from 'medium-editor'
// import * as $ from 'jquery'
// import '../../../node_modules/blueimp-file-upload/js/jquery.fileupload.js'

export default {
  name: 'mediumEditor',
  data () {
    return {
      editor: null
    }
  },
  props: {
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.innerHTML)
    }

  },
  mounted () {
    var editor = new MediumEditor('.editable', {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']
      }
    })
    // $(() => {
    //   $('.editable').mediumInsert({
    //     editor: editor
    //   })
    // })
    // console.log(editor)
    this.editor = editor
  },
  created () {
    // $(f
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  destroyed () {
  }
}
</script>
<style>
  .editable {
    width: 80%;
    min-height: 400px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
</style>
