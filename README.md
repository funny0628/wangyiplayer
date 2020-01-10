# myplayer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


+ 项目目录
main.js -> App.vue
 --layout(主页面)

  --pages(路由页面) 
   --discovery(发现音乐)
   --playlists(推荐歌单)
   --songs(最新音乐)
   --mvs(最新MV)

 --comments(功能型组件)
   --mvscard(mvs的card)
   --playlistcard(歌单列表card)
   --songscard(最新歌单card)

 --base(小的公共的组件)
   --topic(推荐歌单标题)
   --icon(播放图标)

>base的组件为小的功能性的组件 ,注册为全局组件,如果全部意义导入到mian.js中,太过于冗余,所以使用require.context 实现工程的自动化,在untils的global 整体导入base中的所有的文件,使用的自定义插件的方式,