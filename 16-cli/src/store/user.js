class UserStore {
    constructor() {
        console.count('UserStore');
        this.state = {
            email: null,
            mdp: null
        }
    }

    login(email, mdp) {
        this.state.email = email;
        this.state.mdp = mdp;
    }
    
    logout() {
        this.email = null;
    }
}

let userStore = new UserStore();
export default userStore;