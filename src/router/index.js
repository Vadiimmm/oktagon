import { createRouter, createWebHistory } from 'vue-router'
import GithubPage from '../components/GithubProfile.vue'
import NotificationPage from '../components/NotificationPage.vue'

const routes = [
  {
    path: '/',
    name: 'Github',
    component: GithubPage,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
