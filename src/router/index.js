import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    //route to homepage
    path: '/',
    name: 'Home',
    component: Home


  },
  {
    //route to add page
    path: '/Add',
    name: 'Add',

    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  },
  

  {
    //route to details page and use id as the key to access that record
    path: '/Details/:id',
  
component:Details
  },
  {
    path: "/:catchAll(.*)",
    name: 'catchAll',
    component: Home
 }
]


//using router-view package to navigate thru our application pages
const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
