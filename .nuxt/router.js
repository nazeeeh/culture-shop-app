import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba0e40e8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _8e4aa19c = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _3e750a50 = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/resolved/_name" */))
const _2f3b8197 = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/unresolved/_name" */))
const _d40dc57e = () => interopDefault(import('..\\pages\\manage-customers\\category\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/add/_name" */))
const _cbe34c58 = () => interopDefault(import('..\\pages\\manage-customers\\customers\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/customers/add/_name" */))
const _632321d6 = () => interopDefault(import('..\\pages\\manage-customers\\customers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-customers/customers/edit/_id" */))
const _287d0215 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-drivers/drivers/edit/_id" */))
const _572d3202 = () => interopDefault(import('..\\pages\\manage-customers\\category\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/_name" */))
const _6678bfda = () => interopDefault(import('..\\pages\\manage-customers\\customers\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/customers/_name/index" */))
const _69f52232 = () => interopDefault(import('..\\pages\\manage-customers\\orders\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/orders/_name/index" */))
const _10f3f08d = () => interopDefault(import('..\\pages\\manage-customers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/support/_name/index" */))
const _5a6fa5da = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/drivers/_name/index" */))
const _3e9160c6 = () => interopDefault(import('..\\pages\\manage-drivers\\orders\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/orders/_name/index" */))
const _9d03b2d2 = () => interopDefault(import('..\\pages\\manage-drivers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/support/_name/index" */))
const _35be2fd2 = () => interopDefault(import('..\\pages\\settings\\general\\_name.vue' /* webpackChunkName: "pages/settings/general/_name" */))
const _4416617c = () => interopDefault(import('..\\pages\\forget-password\\_name.vue' /* webpackChunkName: "pages/forget-password/_name" */))
const _3d0dea80 = () => interopDefault(import('..\\pages\\manage-customers\\_name.vue' /* webpackChunkName: "pages/manage-customers/_name" */))
const _c096d66c = () => interopDefault(import('..\\pages\\manage-drivers\\_name.vue' /* webpackChunkName: "pages/manage-drivers/_name" */))
const _426bf1ea = () => interopDefault(import('..\\pages\\manage-vendors\\_name.vue' /* webpackChunkName: "pages/manage-vendors/_name" */))
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
    path: "/login",
    component: _ba0e40e8,
    name: "login"
  }, {
    path: "/settings",
    component: _8e4aa19c,
    name: "settings"
  }, {
    path: "/manage-customers/support/tickets/resolved/:name?",
    component: _3e750a50,
    name: "manage-customers-support-tickets-resolved-name"
  }, {
    path: "/manage-customers/support/tickets/unresolved/:name?",
    component: _2f3b8197,
    name: "manage-customers-support-tickets-unresolved-name"
  }, {
    path: "/manage-customers/category/add/:name?",
    component: _d40dc57e,
    name: "manage-customers-category-add-name"
  }, {
    path: "/manage-customers/customers/add/:name?",
    component: _cbe34c58,
    name: "manage-customers-customers-add-name"
  }, {
    path: "/manage-customers/customers/edit/:id?",
    component: _632321d6,
    name: "manage-customers-customers-edit-id"
  }, {
    path: "/manage-drivers/drivers/edit/:id?",
    component: _287d0215,
    name: "manage-drivers-drivers-edit-id"
  }, {
    path: "/manage-customers/category/:name?",
    component: _572d3202,
    name: "manage-customers-category-name"
  }, {
    path: "/manage-customers/customers/:name",
    component: _6678bfda,
    name: "manage-customers-customers-name"
  }, {
    path: "/manage-customers/orders/:name",
    component: _69f52232,
    name: "manage-customers-orders-name"
  }, {
    path: "/manage-customers/support/:name",
    component: _10f3f08d,
    name: "manage-customers-support-name"
  }, {
    path: "/manage-drivers/drivers/:name",
    component: _5a6fa5da,
    name: "manage-drivers-drivers-name"
  }, {
    path: "/manage-drivers/orders/:name",
    component: _3e9160c6,
    name: "manage-drivers-orders-name"
  }, {
    path: "/manage-drivers/support/:name",
    component: _9d03b2d2,
    name: "manage-drivers-support-name"
  }, {
    path: "/settings/general/:name?",
    component: _35be2fd2,
    name: "settings-general-name"
  }, {
    path: "/forget-password/:name?",
    component: _4416617c,
    name: "forget-password-name"
  }, {
    path: "/manage-customers/:name?",
    component: _3d0dea80,
    name: "manage-customers-name"
  }, {
    path: "/manage-drivers/:name?",
    component: _c096d66c,
    name: "manage-drivers-name"
  }, {
    path: "/manage-vendors/:name?",
    component: _426bf1ea,
    name: "manage-vendors-name"
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
