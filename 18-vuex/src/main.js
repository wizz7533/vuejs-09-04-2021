import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// createApp(App).use(store).mount('#app')
let app = createApp(App);
app.use(store);
app.mount('#app');
