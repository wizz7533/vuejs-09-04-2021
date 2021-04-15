import Title from '@/components/i-decouverte/Title.vue'
import Counter from '@/components/ii-two-ways-binding/Counter.vue'
import Params from '@/components/iii-routing/Params.vue'
import GoBack from '@/components/iii-routing/GoBack.vue'

const routes = [
    { path: '/', component: Title },
    { path: '/count', component: Counter },
    { path: '/params/:id', component: Params },
    { path: '/back', name:'retour', component: GoBack },
]

export default routes;