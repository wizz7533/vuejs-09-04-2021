import Title from '@/components/i-decouverte/Title.vue'
import Counter from '@/components/ii-two-ways-binding/Counter.vue'
import Params from '@/components/iii-routing/Params.vue'
import GoBack from '@/components/iii-routing/GoBack.vue'
import NotFound from '@/components/iii-routing/NotFound.vue'

const routes = [
    { path: '/', component: Title },
    { path: '/count', component: Counter },
    { path: '/params/:id', component: Params },
    { 
        path: '/back', 
        name:'retour', 
        component: GoBack 
    },
    { path: '/:pathMath(.*)*', component: NotFound}
]

export default routes;