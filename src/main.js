import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Destinations from './views/Destinations.vue'
import DestinationDetails from './views/DestinationDetails.vue'
import Favorites from './views/Favorites.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import ManageDestinations from './views/ManageDestinations.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/manage-destinations', component: ManageDestinations },
    { path: '/destination/:id', component: DestinationDetails },
    { path: '/favorites', component: Favorites },
    { path: '/profile', component: Profile },
    { path: '/about', component: About }
  ]
})

createApp(App).use(router).mount('#app')