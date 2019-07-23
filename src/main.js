// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [],
    isActive: false,
    isComplete: false,
  },
  getters: {
    filterAll: state => {
      return state.list;
    },
    filterIsActive: state => {
      return state.list.filter(v => !v.isFinished);
    },
    filterIsComplete: state => {
      return state.list.filter(v => v.isFinished);
    }
  },
  mutations: {
    all: state => {
      state.isActive = false;
      state.isComplete = false;
    },
    activate: state => {
      state.isActive = true;
      state.isComplete = false;
    },
    complete: state => {
      state.isActive = false;
      state.isComplete = true;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
});
