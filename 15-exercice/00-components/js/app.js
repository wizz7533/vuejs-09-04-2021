import TheHeader from './theheader.js';
import TheBody from './thebody.js';

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

// app.component('v-header', {
//     data() {
//         return {

//         }
//     },
//     template: `
//         <header>
//             <h1>Super Site !</h1>
//             <img src="https://via.placeholder.com/150" alt="placeholder image" />
//         </header>
//     `
// });

app.mount("#app");