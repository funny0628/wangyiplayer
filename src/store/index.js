import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //热门搜索列表是否显示
    hotlist: false,
    //搜索歌曲数据
    hotdata: [],
    //搜索歌曲总数据
    total: 0
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
    }
  },
  modules: {
  }
})
