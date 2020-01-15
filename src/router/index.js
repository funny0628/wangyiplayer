import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'
import Discovery from '../pages/discovery/index.vue'
import Playlists from '../pages/playlists/index.vue'
import Songs from '../pages/songs/index.vue'
import Mvs from '../pages/mvs/index.vue'
import Playlist from '../pages/playlist-detail/index.vue'
import Mv from '../pages/mv/index.vue'
import Search from '../pages/search/index.vue'
import Song from '../pages/search/songs.vue'

Vue.use(VueRouter)

export const menuslist = [
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    mate: {
      title: "发现音乐",
      ico: "icon-changpian"
    }
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    mate: {
      title: "推荐歌单",
      ico: "icon-yinleliebiao"
    }
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
    mate: {
      title: "最新音乐",
      ico: "icon-yinyue"
    }
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: Mvs,
    mate: {
      title: "最新MV",
      ico: "icon-shipinbofangyingpian"
    }
  },
]

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: '/discovery',
        name: 'discovery',
        component: Discovery,
      },
      ...menuslist,
      {
        path: '/playlist/:id',
        name: 'playlist',
        component: Playlist,
      },
      {
        path: '/search/:name',
        name: 'search',
        component: Search,
        children:[
          {
            path: 'song',
            name: 'song',
            component: Song,
          },
        ]
      },
     

    ]
  },

  {
    path: '/mv/:id',
    name: 'mv',
    component: Mv,
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
