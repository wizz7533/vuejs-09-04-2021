let app = Vue.createApp({
    data() {
        return {
            message: 'Salut !'
        }
    },
    methods: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    }
});
app.mount('#app');