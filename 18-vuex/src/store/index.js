import { createStore } from 'vuex'
import shop from '@/api/shop';
import userModule from './modules/user';

export default createStore({
  // Equivalent à Data
  state: {
    products: []
  },

  // Responsable du changement d'etat de l'application
  mutations: {
    // La variable state sera fournie par vue
    setProducts(state, products) {
      state.products = products
    }
  },

  // Equivalent aux Méthods (Traitement complexe ou asyncrhone, puis appel la mutation)
  // Les actions renvoie souvent des promesse lorsqu'il y a un traitement asynchrone
  actions: {
    // le context comprend toutes propriétés (state, getters, mutations ...)
    // L'argument est fournie par vue
    fetchProducts(context) {
      return new Promise(
        function (resolve) {
          shop.getProducts(products => {
            // Commit est une methode du store, qui prend en paramettre le nom de la fonction mutation
            context.commit('setProducts', products);
            resolve();
        }
      );
    });
    }
  },

  //Equivalent des proriétés calculées
  getters: {
     // La variable state sera fournie par vue
     availableProducts(state) {
        return state.products.filter(product => product.inventory > 0);
     }
  },

  // Equivalent a components: {}
  modules: {
    userModule
  }
});
