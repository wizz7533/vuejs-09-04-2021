import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import userStore from '@/store/user';

const router = createRouter({
  history: createWebHistory(),
  // routes: routes,
  routes
})

// La callback est appellée avant chaque
//  navigation
router.beforeEach(
  // to: La route de destination
  // from: La route de provenance
  // next: fonction qui permet de rediriger
  function(to, from, next) {
      if (to.meta.requiresAuth) {
        // il faut etre connecter, 
        console.log("Il faut etre connecté");
        if (userStore.state.email) {
          next();
        } else {
          next('/login');
        }
      } else {
        // c'est ok on peut acceder a la page
        next();
      }
  }
);

export default router
