<template>
  <div>
     <div class="editable" @input="handleInput">当前为测试文本</div>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'
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
