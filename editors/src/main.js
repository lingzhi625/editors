// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

// import '../node-modules/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js'
// import '../node-modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js'
// import '../node-modules/blueimp-file-upload/js/jquery.iframe-transport.js'
// import '../node-modules/blueimp-file-upload/js/jquery.fileupload.js'
// import '../node-modules/handlebars/handlebars.runtime.min.js'
// import '../node-modules/jquery-sortable/source/js/jquery-sortable-min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
