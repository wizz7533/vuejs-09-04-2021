let userModule = {
    namespaced: true,
    // Equivalent à Data
    state: {
    },
    
    // Responsable du changement d'etat de l'application
    mutations: {
    },
  
    // Equivalent aux Méthods (Traitement complexe ou asyncrhone, puis appel la mutation)
    actions: {
        printHello(context) {
            console.log("Hello form user module: ", context)
        } 
    },
  
    //Equivalent des proriétés calculées
    getters: {},
}

export default userModule;