<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style src="../node_modules/medium-editor/dist/css/themes/default.css"></style>
<style src="../node_modules/medium-editor/dist/css/medium-editor.css"></style>
<style src="../node_modules/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css"></style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
