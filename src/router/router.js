import {createRouter, createWebHashHistory} from 'vue-router';
import Main from '@/components/Main';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
