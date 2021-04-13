import TheHeader from './components/theheader.js';
import TheBody from './components/thebody.js';

let app = Vue.createApp({
    data() {
        return {

        }
    },
    components: {
        'v-header': TheHeader,
        'the-body': TheBody
    }
});

app.mount("#app");