import Vue from 'vue'
import App from './App.vue'
import router from './router'
import status from './status'
import Table  from 'ant-design-vue/lib/table';
import 'ant-design-vue/dist/antd.css';

Vue.component(Table.name, Table);


Vue.config.productionTip = false;

new Vue({
  router,
  data:status,
  render: h => h(App)
}).$mount('#app')
