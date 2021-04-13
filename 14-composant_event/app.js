import bodyComponent from './body.js';

let app = Vue.createApp({
    data() {
        return {
            message: 'Hello World !',
        }
    },
    methods: {
    },
    computed: {
    },
    watch: {
    },
});

// Composant Global
app.component('v-card', {
    name: 'Card',
    // La propriete msg fait desormais partie des variables du composant footer
    props: [],
    template: `
        <div>
            <p>Compteur Enfant: {{ count }}</p>
            <button>Incrementer</button>
        </div>
    `
});

app.mount('#app');