import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import JoinView from '../views/JoinView.vue'
import LoginView from '../views/LoginView.vue'
import Trashbox from '../views/Trashbox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/trashbox',
      name: 'trashbox',
      component: Trashbox
    },
  ]
})

export default router
