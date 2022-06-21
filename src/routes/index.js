import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './about'
import Movie from './movie'

export default createRouter({

  // Hash
  // https://google.com/#/ 해쉬모드 
  history: createWebHashHistory(),

  //pages
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})