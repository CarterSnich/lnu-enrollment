import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Landing from './components/Landing.vue';
import ContactUs from './components/ContactUs.vue';
import Help from './components/Help.vue';
import Login from './components/Login.vue';


const routes = [
    {path: '/', component: Landing},
    {path: '/contact-us', component: ContactUs},
    {path: '/help', component: Help},
    {path: '/login', component: Login}
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')