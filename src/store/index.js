import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home'},
      { text: 'All', to: '/all', icon: 'mdi-assistant'},
      { text: 'ByDate', to: '/byDate', icon:'mdi-account-settings'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
