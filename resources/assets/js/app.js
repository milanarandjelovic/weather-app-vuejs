import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './components/App.vue'

// Install some plugins
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
