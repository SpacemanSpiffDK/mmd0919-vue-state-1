import Vue from 'vue'
import App from './App.vue'

import store from './store.js'    // import the store object for use in the vue instance

Vue.config.productionTip = false

new Vue({
  store,  // put the store in the Vue options object, this injects the store into all subcomponents to be accessed via this.$store
  render: h => h(App)
}).$mount('#app')
