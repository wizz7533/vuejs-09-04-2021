import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/search', name:'filmsList', component: () => import('@/views/FilmsList.vue')},
  {path: '/', name:'welcome', component: () => import('@/views/HomePage.vue')},
  {path: '/film-list/:id', name: 'filmListDetails', component: () => import('@/views/FilmListDetails.vue')},
  {path: '/film-fav-list', name: 'filmFavList', component: () => import('@/views/FilmListFav.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
