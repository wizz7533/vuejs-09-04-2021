let app = Vue.createApp({
    data() {
        return {
            prenoms: ['Rick', 'Beth', 'Jerry', 'Summer'],
            utilisateurs: [
                {nom: 'Doe', prenom: 'John'},
                {nom: 'Zarella', prenom: 'Maude'}
            ]
        }
    }
});
app.mount('#app');