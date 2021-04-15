import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import router from './router/index' <- equivalent a la ligne du dessus

/* createApp({
    name: 'App',
    components: {
      HelloWorld
    }
}).mount('#app') */

createApp(App).use(router).mount('#app')
