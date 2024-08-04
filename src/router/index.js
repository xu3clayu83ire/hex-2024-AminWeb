import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Assignment from '../views/Assignment.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: Assignment
      }
    ]
  })
  
  export default router