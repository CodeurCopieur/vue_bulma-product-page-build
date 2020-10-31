import Vue from 'vue'
import App from './App.vue'
import Bulma from 'bulma/css/bulma.css'

Vue.use(Bulma)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
