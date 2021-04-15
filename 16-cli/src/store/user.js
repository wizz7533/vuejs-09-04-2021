class UserStore {
    constructor() {
        this.state = {
            email: null
        }
    }

    login(email) {
        this.email = email;
        return true;
    }
    
    logout() {
        this.email = null;
    }
}