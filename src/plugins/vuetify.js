import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#FF80AB',
    success: '#3cd1c2',
    info: '#E57373',
    error: '#f83e70'
  }
});
