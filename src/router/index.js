import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Principal.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/principal',
    component: Principal,
    children: [
      {
        path: "/about",
        component: () => import(/* webpackChunkName: "A propos" */ '../views/About.vue')
      },
      {
        path: "/competences",
        component: () => import(/* webpackChunkName: "competences" */ '../views/Competences.vue')
      },
      {
        path: "/projets",
        component: () => import(/* webpackChunkName: "projets" */ '../views/Projets.vue')
      },
      {
        path: "/contact",
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router