import bodyComponent from './body.js';

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
    },
});

app.component('v-header', {
    name: 'Header',
    data() {
        return {
            titre: 'Mon premier Composant !'
        }
    },
    template: `
        <h1>{{titre}}</h1>
        <v-body></v-body>
    `,
    components: {
        'v-body': bodyComponent
    }
});

app.component('v-footer', {
    name: 'Footer',
    template: `
        <footer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis nisi sequi vitae, vero fugit voluptatibus ipsam exercitationem deleniti cum debitis praesentium dolore, illo blanditiis optio! Laboriosam cumque unde soluta.</p>
            <ul>
                <li><a href="#">item 1</a><a href="#">item 2</a><a href="#">item 3</a></li>
            </ul>
        </footer>
    `
});

app.mount('#app');