使用流程：
1、下载百度ueditor包，例如ueditor1_4_3_3-utf8-jsp.zip
2、解压之后，将文件（除jsp文件夹）拷贝到static中的（该项目中拷贝到ueditor中）
3、创建UE实例，本项目在components创建实例ueditor
4、在main.js中引入相关js依赖
   import '../static/ueditor/ueditor.config.js'
   import '../static/ueditor/ueditor.all.min.js'
   import '../static/ueditor/lang/zh-cn/zh-cn.js'
   import '../static/ueditor/ueditor.parse.min.js'

注：
1、在ueditor实例：this.editor = window.UE.getEditor('editor', this.config) // 初始化UE，添加‘window’防止报错
2、在UE实例中，需要
  destroyed () {
    this.editor.destroy()
  }
  防止ue被多次重复创建
