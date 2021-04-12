let app = Vue.createApp({
    data() {
        return {
            todos: [
                {couleur: '', taille: '', texte: ''}
            ]
        }
    },
    methods: {
        addTask(event) {
            event.preventDefault();
            let texte = event.target.task.value;
            this.todos.push(texte);
        }
    }
});

app.mount("#app");