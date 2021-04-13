let app = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    watch: {
    }
});

app.component('v-header', {
    template: `
        <h1>Mon premier Composant !</h1>
    `
});

app.mount('#app');