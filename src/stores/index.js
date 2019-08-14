import Vue from "vue";
import Vuex from "vuex";
import city from './city'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules:{//modules引入子状态
    city//在这里key和value都叫做了city，就直接写了city
  }
});
