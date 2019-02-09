import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/firebase/init';
import Alert from './components/Shared/Alert.vue';


Vue.config.productionTip = false
Vue.component('app-alert', Alert);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
