import { createRouter, createWebHistory } from 'vue-router'
import destopHome from '../components/destopHome.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: destopHome
    },
    // {
    //     path: '/testpage',
    //     name: 'testpage',
    //     component: 
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router