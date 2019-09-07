export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/login',
        component: () => import('./views/Login.vue')
    }
];