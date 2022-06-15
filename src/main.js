import Vue from 'vue'
import App from './App.vue'
import store from './store/modules/client.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { IconsPlugin } from 'bootstrap-vue'
import Sidebar from './components/layout/Sidebar'
import 'element-ui/packages/card/src/main.vue'
import ErrorPage from './components/layout/ErrorPage'
import Element from 'element-ui'
Vue.use(Element)

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  Sidebar,
  Element,
  ErrorPage
}).$mount('#app')
