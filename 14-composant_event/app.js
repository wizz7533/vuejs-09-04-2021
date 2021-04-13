let app = Vue.createApp({
    data() {
        return {
            parentCount: 0,
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