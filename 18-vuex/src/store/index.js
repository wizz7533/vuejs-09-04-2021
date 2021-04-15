import { createStore } from 'vuex'

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
  actions: {
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
  }
});
