import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/css/reset.css'
import 'tdesign-vue/es/style/index.css';

// import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
// Vue.use(TDesign);
import { Col, Row } from 'tdesign-vue';
Vue.use(Col);
Vue.use(Row);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
