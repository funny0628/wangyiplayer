import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotlist:false
  },
  mutations: {
    changehot(state,v){
      
      state.hotlist = v;
      console.log("------",state.hotlist);
    }
  },
  actions: {
  },
  modules: {
  }
})
