import VArticle from './varticle.js';

const TheBody = {
    name: 'Header',
    data() {
        return {
            title: 'Super Body'
        }
    },
    methods: {
        setTitle(event) {
            this.title = event;
        }
    },
    template: `
        <header>
            <h2>{{title}}</h2>
            <v-article v-on:my-update-title="title = $event">
            </v-article>
        </header>
    `,
    components: {
        VArticle
    }
}

export default TheBody;