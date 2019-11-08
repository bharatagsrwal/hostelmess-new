import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home'},
      { text: 'All', to: '/all', icon: 'mdi-expand-all'},
      { text: 'ByDate', to: '/byDate', icon:'mdi-calendar-today'}
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
