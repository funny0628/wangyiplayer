import Vue from 'vue'
import Vuex from 'vuex'
import Miniplayer from '../comments/miniplayler.vue'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //热门搜索列表是否显示
    hotlist: false,
    //搜索歌曲数据
    hotdata: [],
    //搜索歌曲总数据
    total: 0,
    //歌曲的url
    songUrl:"",
    songtime:0,
    songname:'',
    picUrl:'',
    artistname:'',
    showLyric:false,
  },
  mutations: {
    //热门搜索列表是否显示
    changehot(state, v) {
      state.hotlist = v;
    },

    //热门搜索里面的歌曲数据
    DATA(state, payload) {
      state.hotdata = payload.hotdata
      state.total = payload.total
      
    },

    //播放音乐的url
    SongUrl(state,payload){
      state.songUrl = payload.url  
      state.songtime = payload.duration   
      state.picUrl = payload.picUrl  
      state.songname = payload.songname,
      state.artistname = payload.artistname
    },

    //显示歌词
    ShowLyric(state,payload){
      console.log(payload,"000000000000000")
      state.showLyric = payload
    }
  },
  actions: {
    //热门搜索里面的歌曲
    async Getsongs(context, payload) {
      let { data } = await Vue.prototype.$request.Getsongs(payload);
      let hotdata;
      let total;
      if (!payload.type) {
        hotdata = data.result.songs
        total = data.result.songCount
      } else if (payload.type === 1000) {
        hotdata = data.result.playlists;
        total = data.result.playlistCount;
      } else if (payload.type === 1004) {
        hotdata = data.result.mvs;
        total = data.result.mvCount;
      }

      context.commit('DATA', { hotdata, total })
    },
    //音乐播放
    async Getplayurl({commit},payload){
      let {data} = await Vue.prototype.$request.Getsongurl({id:payload.id});
      console.log(data);
      commit('SongUrl',{
        url:data.data[0].url,
        duration:payload.duration,
        picUrl:payload.picUrl,
        songname:payload.songname,
        artistname:payload.artistname
      })
    }
  },
  modules: {
  }
})
