import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'

const routes = [
  { path: '/Homework12', name: 'Home', component: HomePage },
  { path: '/Homework12/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/Homework12/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/Homework12/by-ingredient', name: 'MealsByIngredients', component: MealsByIngredients },
  { path: '/Homework12/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/Homework12/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
