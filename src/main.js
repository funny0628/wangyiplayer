import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './assets/styles/base.scss'
import './assets/styles/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from './http/index.js'
import {global} from './utils/global.js'
import './utils/comment.js'
Vue.prototype.$request = request;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(global);



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
