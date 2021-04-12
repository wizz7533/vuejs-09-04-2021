let app = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {
        sayHello() {
            return "Salut tout le monde !";
        },
        getDate: function() {
            const date = new Date()
            return date.toLocaleDateString();
        }
    }
});
app.mount('#app');