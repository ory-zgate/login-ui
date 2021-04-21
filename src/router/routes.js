import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'
import ErrorPage from '../pages/Error.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/auth/login',
    component: Login
  },
  {
    path: '/auth/logout',
    component: Logout
  },
  {
    path: '/error',
    component: ErrorPage
  },
]
