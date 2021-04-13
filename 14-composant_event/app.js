let app = Vue.createApp({
    data() {
        return {
            parentCount: 0,
        }
    },
    methods: {
        incrementerParent(event) {
            console.log("Event: ", event);
            console.log("Type of Event: ", typeof event);
        }
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
    props: ['compteur'],
    // On ne doit pas modifier la props, elle est en lecture seule
    // donc on doit la copier avant de l'utiliser dans le composant enfant
    data() {
        return {
            childCount: this.compteur
        }
    },
    methods: {
        incrementer() {
            this.childCount++;
            // Declenchement d'un evenement personnalisé 
            // la fonction $emit prend 2 arguments:
            //      1- le nom de l'evenement (je peux mettre ce que je veux comme nom)
            //      2- la valeur/variable/objet... a transmettre
            this.$emit('my-incrementer-compteur', 5);
        }
    },
    template: `
        <div>
            <p>Compteur Enfant: {{ childCount }}</p>
            <button @click="incrementer()">
                Incrementer
            </button>
        </div>
    `
});

app.mount('#app');