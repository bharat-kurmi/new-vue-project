
import { createWebHistory, createRouter } from "vue-router";
import Logo from '../components/Logo.vue'
import Login from '../components/Login/index.vue'

const routes = [
  {
  path: '/logo',
  name: 'logo',
  component: Logo
},
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router