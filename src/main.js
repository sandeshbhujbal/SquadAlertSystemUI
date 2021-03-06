import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import '@blibli/blue-internal/dist/blue-internal.min.css'
import Blue from '@blibli/blue-internal/dist/blue-internal.min'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'

import './assets/scss/main.scss'
import './assets/scss/variables.scss'
import icons from '@blibli/blue-internal/dist/add-ons/icons'

Vue.use(Blue)
Vue.use(icons)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
