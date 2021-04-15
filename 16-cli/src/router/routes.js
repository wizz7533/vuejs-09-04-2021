import Title from '@/components/i-decouverte/Title.vue'
import Counter from '@/components/ii-two-ways-binding/Counter.vue'
import Params from '@/components/iii-routing/Params.vue'

const routes = [
    { path: '/', component: Title },
    { path: '/count', component: Counter },
    { path: '/params/:id', component: Params },
]

export default routes;