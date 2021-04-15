import Vue from 'vue'
import Vuex from 'vuex'
import FilmModule from './modules/films'
import NavModule from './modules/nav'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  namespaced: true,
  modules: {
    film: FilmModule,
    nav: NavModule,
    user: UserModule
  }
})
