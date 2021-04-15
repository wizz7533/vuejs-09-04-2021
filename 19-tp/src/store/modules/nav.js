const NavModule = {
    namespaced: true,
    state: {
        nomDuFilm: null
    },
    getters: {
        nomDuFilm: state => state.nomDuFilm,
    },
    mutations: {
        updateName(state, nomDuFilm) {
            state.nomDuFilm = nomDuFilm;
        }
    },
    actions: {
        updateName(context, nomDuFilm) {
            context.commit('updateName', nomDuFilm);
        }
    }
};

export default NavModule;