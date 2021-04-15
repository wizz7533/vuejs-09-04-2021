import Title from '@/components/i-decouverte/Title.vue'
import Counter from '@/components/ii-two-ways-binding/Counter.vue'
import Params from '@/components/iii-routing/Params.vue'
import GoBack from '@/components/iii-routing/GoBack.vue'
import NotFound from '@/components/iii-routing/NotFound.vue'
import Login from '@/components/iii-routing/Login.vue'
import Admin from '@/components/iii-routing/Admin.vue'
import Utilisateurs from '@/components/iv-axios/Utilisateurs.vue'

const routes = [
    { path: '/', component: Title },
    { path: '/count', component: Counter },
    { path: '/params/:id', component: Params },
    { 
        path: '/back', 
        name:'retour', 
        component: GoBack 
    },
    { path: '/:pathMath(.*)*', component: NotFound},
    { path: '/login', component: Login},
    { path: '/users', component: Utilisateurs},
    {
        path: '/admin', 
        meta: {
            // on peut choisir le nom qu'on veut
            requiresAuth: true
        },
        component: Admin
    },
]

export default routes;