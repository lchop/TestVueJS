import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import AdminPanel from './components/AdminPanel.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/adminpanel',
            name: 'AdminPanel',
            component: AdminPanel
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
