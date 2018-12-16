import Vue from 'vue';
import Element from 'element-ui';
import App from './App';
import router from './router';
import store from './store';
import '@/components/icon-svg';
import '@/components/dynamic-form';

Vue.use(Element);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
