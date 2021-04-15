export default {
    namespaced: true,
    state: {
        email: null
    },
    getters: {
        isLogged: state => {
            return state.email != null;
        },
    },
    mutations: {
        login(state, email) {
            state.email = email;
        },
        logout() {
            this.state.email = null;
        }
    },
    actions: {
    }
};