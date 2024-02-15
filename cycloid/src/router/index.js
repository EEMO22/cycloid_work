import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import JoinView from '../views/JoinView.vue'
import LoginView from '../views/LoginView.vue'
import Trashbox from '../views/Trashbox.vue'
import { useUserStore } from '@/stores/user'

const beforeAuth = isAuthenticated => async (from, to, next) => {
  const user = useUserStore();

  if ((user.getIsAuth && isAuthenticated) || (!user.getIsAuth && !isAuthenticated)) {
    console.log('check');
    return next();
  } else {
    return next('/login');
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      beforeEnter: beforeAuth(true),
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
