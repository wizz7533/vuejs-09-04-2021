let app = Vue.createApp({
    data() {
        return {
            isActive: true,
            // Attention le spinal-case/kebab-case n'est pas valide en js, il faut mettre des quote ('), ou double quote (")
            mesClasses: {
                active: false,
                'txt-error': true,
            }
        }
    },
    methods: {
        deactivateClass() {
            this.isActive = false;
        }
    }
});
app.mount('#app');