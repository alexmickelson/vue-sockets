import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';
 
// const socket = io('http://localhost:3000/');
// Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
