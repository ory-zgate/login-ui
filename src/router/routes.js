import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'
import ErrorPage from '../pages/Error.vue'
import Registration from '../pages/Registration.vue'
import Settings from '../pages/Settings.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/error',
    component: ErrorPage
  },
]
