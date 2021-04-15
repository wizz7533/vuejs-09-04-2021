import { createStore } from 'vuex'

export default createStore({
  state: {
    nomDuFilm: ''
  },
  mutations: {
    setName(state, valeur) {
       state.nomDuFilm = valeur;
    }
  },
  actions: {
  },
  modules: {
  }
})
