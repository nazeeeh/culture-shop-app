import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8e4aa19c = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _153536e0 = () => interopDefault(import('..\\pages\\settings\\user_permissions.vue' /* webpackChunkName: "pages/settings/user_permissions" */))
const _35be2fd2 = () => interopDefault(import('..\\pages\\settings\\general\\_name.vue' /* webpackChunkName: "pages/settings/general/_name" */))
const _4d5d8716 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/settings",
    component: _8e4aa19c,
    name: "settings"
  }, {
    path: "/settings/user_permissions",
    component: _153536e0,
    name: "settings-user_permissions"
  }, {
    path: "/settings/general/:name?",
    component: _35be2fd2,
    name: "settings-general-name"
  }, {
    path: "/",
    component: _4d5d8716,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
