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

// Composant Global: disponible n'importe où dans l'application
app.component('v-header', {
    name: 'Header',
    props: {
        bgColor: {
            type: String
        },
        nbElement: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            titre: 'Mon premier Composant !'
        }
    },
    template: `
        <header>
            <h1>{{titre}}</h1>
            <v-body></v-body>
        </header>
    `,
    components: {
        'v-body': bodyComponent
    }
});

// Composant Global
app.component('v-footer', {
    name: 'Footer',
    // La propriete msg fait desormais partie des variables du composant footer
    props: ['msg', 'visible'],
    template: `
        <footer>
            <p>Message: {{msg}}</p>
            <p>Visible: <mark>{{ typeof(visible) }}</mark></p>
            <p v-if="visible">
               <mark>Lorem ipsum dolor sit amet</mark>, consectetur adipisicing elit. Odio amet sapiente saepe, natus numquam magni ullam ratione temporibus unde facere, possimus dignissimos deleniti est sed. Nobis sed blanditiis voluptatibus. Minima.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis nisi sequi vitae, vero fugit voluptatibus ipsam exercitationem deleniti cum debitis praesentium dolore, illo blanditiis optio! Laboriosam cumque unde soluta.</p>
            <ul>
                <li><a href="#">item 1</a><a href="#">item 2</a><a href="#">item 3</a></li>
            </ul>
        </footer>
    `
});

app.mount('#app');