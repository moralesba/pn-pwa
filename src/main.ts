import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const fb = require('./services/firebase');
fb.firebaseConfig();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
