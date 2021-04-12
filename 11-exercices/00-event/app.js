let app = Vue.createApp({
    data() {
        return {
            imageUrl: '',
            imageAlt: ''
        }
    },
    methods: {
        changeImage(nombre) {
            switch(nombre) {
                case 1:
                    // image de chien
                    this.imageUrl = "https://images.unsplash.com/photo-1582239239488-1a9eaa5c06b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80";
                    this.imageAlt = "photo d'un chien";
                    break;
                case 2:
                    // image de chat
                    this.imageUrl = "https://images.unsplash.com/photo-1600811436664-30bb5617c13c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1186&q=80";
                    this.imageAlt = "photo d'un chat";
                    break;
                case 3:
                    // image de lapin
                    this.imageUrl = "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
                    this.imageAlt = "photo d'un lapin";
                    break;
                default:
                    this.imageUrl = '';
                    break;
            }
        }
    }
});

app.mount("#app");