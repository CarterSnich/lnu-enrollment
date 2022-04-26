import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
import ContactUs from './ContactUs.vue';
import Help from './Help.vue';
import Login from './Login.vue';


const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/contact-us",
        component: ContactUs,
        props: {
            activePage: 'contact-us'
        }
    },
    {
        path: "/help",
        component: Help,
        props: {
            activePage: 'help'
        }
    },
    {
        path: "/login",
        component: Login,
        props: {
            activePage: 'login'
        }
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')