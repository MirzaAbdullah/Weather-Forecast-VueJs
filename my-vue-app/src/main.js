import Vue from 'vue'
import App from './components/mainComponent.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/CSS/Custom.css'
import 'axios-progress-bar/dist/nprogress.css'
import VueCarousel from 'vue-carousel'
import VeeValidate from 'vee-validate';

Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));
Vue.use(VueCarousel);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  render: h => h(App),
  data:{ }
})