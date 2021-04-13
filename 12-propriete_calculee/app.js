let app = Vue.createApp({
    data() {
        return {
            message: 'Salut !',
            rienAVoir: '',
            titre: ''
        }
    },
    methods: {
        reverseMessage() {
            console.count('ReverseMessage');
            return this.message.split('').reverse().join('');
        }
    },
    computed: {
        // Exécuter une fois au lancement de l'application, puis le resultat est mis en cache. cette fonction ne sera rappellé seulement si la variable this.message change.
        reverseMessageComputed() {
            console.count('ReverseMessageComputed');
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
        // Traitement Async
        titre(newValeur, oldValeur) {
            console.log("Watch");
            console.log("Vouvelle Valeur: ",newValeur );
            console.log("Ancienne Valeur: ", oldValeur);
        }
    }
});
app.mount('#app');