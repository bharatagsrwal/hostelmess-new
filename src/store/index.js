import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notificationPermisson:false,
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home'},
      { text: 'All', to: '/all', icon: 'mdi-expand-all'},
      { text: 'ByDate', to: '/byDate', icon:'mdi-calendar-today'},
      { text: 'About', to: '/about', icon:'mdi-chart-bubble'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setNotification: (state, payload) => (state.notificationPermisson = payload),
  },
  actions: {
  },
  modules: {
  }
})
