import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import Home from './components/landing-page/Home.vue'
import ContactUs from './components/landing-page/ContactUs.vue'


const routes = [
    { path: "/", component: Home},
    { path: "/contact-us", component: ContactUs },
    { path: "/help", component: ContactUs },
    { path: "/login", component: ContactUs },
];

createRouter
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')