import Vue from 'vue';
import Vuetify from 'vuetify';
import Demo from './Demo.jsx';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  components: {
    Demo,
  },
  render(h) {
    return h('Demo')
  }
}).$mount('#app');
