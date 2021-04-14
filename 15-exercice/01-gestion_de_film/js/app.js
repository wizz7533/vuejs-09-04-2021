import TheHeader from './components/theheader.js';
import TheBody from './components/thebody.js';

let app = Vue.createApp({
    data() {
        return {
            search: ''
        }
    },
    methods: {
        updateSearch(event) {
            // console.log("App: ", event);
            this.search = event;
        }
    },
    components: {
        'v-header': TheHeader,
        'the-body': TheBody,
        // 'v-test': {
        //     template: `
        //         <header>
        //             <h1>Blabla</h1>
        //             <slot></slot>
        //         </header>
        //     `
        // }
    }
});

app.mount("#app");