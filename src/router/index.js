import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import Table from '@/views/table.vue';
import ChillrentTable from '@/views/chillrentTable.vue';
import Children2Table from '@/views/children2Table.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/table',
        component: Table,
        children: [
            {
                path: 'chill',
                component: ChillrentTable
            },
            {
                path: 'chill2',
                component: Children2Table
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router