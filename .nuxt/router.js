import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ecf5465 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _740ef960 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _794da64c = () => interopDefault(import('..\\pages\\manage-customers\\orders\\orders\\index.vue' /* webpackChunkName: "pages/manage-customers/orders/orders/index" */))
const _3bbeb638 = () => interopDefault(import('..\\pages\\manage-vendors\\orders\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/orders/all/index" */))
const _ebba7592 = () => interopDefault(import('..\\pages\\manage-vendors\\products\\add\\index.vue' /* webpackChunkName: "pages/manage-vendors/products/add/index" */))
const _3bc82437 = () => interopDefault(import('..\\pages\\manage-vendors\\products\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/products/all/index" */))
const _27d4e8e8 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\overview\\index.vue' /* webpackChunkName: "pages/manage-vendors/support/overview/index" */))
const _4a9d692c = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\add\\index.vue' /* webpackChunkName: "pages/manage-vendors/vendors/add/index" */))
const _e752ab2c = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/vendors/all/index" */))
const _9711ea02 = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\edit\\index.vue' /* webpackChunkName: "pages/manage-vendors/vendors/edit/index" */))
const _7af4557e = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/resolved/_name" */))
const _4914b945 = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/unresolved/_name" */))
const _6510c008 = () => interopDefault(import('..\\pages\\manage-drivers\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-drivers/support/tickets/resolved/_name" */))
const _1dc0a94f = () => interopDefault(import('..\\pages\\manage-drivers\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-drivers/support/tickets/unresolved/_name" */))
const _e171a5b0 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-vendors/support/tickets/resolved/_name" */))
const _d7df6322 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-vendors/support/tickets/unresolved/_name" */))
const _3bd93f53 = () => interopDefault(import('..\\pages\\manage-customers\\category\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/add/_name" */))
const _9f9b0bfc = () => interopDefault(import('..\\pages\\manage-customers\\customers\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/customers/add/_name" */))
const _744e9127 = () => interopDefault(import('..\\pages\\manage-customers\\customers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-customers/customers/edit/_id" */))
const _15798e02 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\add\\_name.vue' /* webpackChunkName: "pages/manage-drivers/drivers/add/_name" */))
const _7fd4fd27 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-drivers/drivers/edit/_id" */))
const _62408cb0 = () => interopDefault(import('..\\pages\\manage-customers\\category\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/_name" */))
const _2b3f267e = () => interopDefault(import('..\\pages\\manage-customers\\customers\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/customers/_name/index" */))
const _70e590f9 = () => interopDefault(import('..\\pages\\manage-customers\\orders\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/orders/_name/index" */))
const _271810bb = () => interopDefault(import('..\\pages\\manage-customers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/support/_name/index" */))
const _1a3280c1 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/drivers/_name/index" */))
const _7c0663a2 = () => interopDefault(import('..\\pages\\manage-drivers\\orders\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/orders/_name/index" */))
const _0e2f0b76 = () => interopDefault(import('..\\pages\\manage-drivers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/support/_name/index" */))
const _16210d38 = () => interopDefault(import('..\\pages\\settings\\general\\_name.vue' /* webpackChunkName: "pages/settings/general/_name" */))
const _3b05896c = () => interopDefault(import('..\\pages\\manage-drivers\\orders\\_name\\all\\_id.vue' /* webpackChunkName: "pages/manage-drivers/orders/_name/all/_id" */))
const _07d0e78e = () => interopDefault(import('..\\pages\\forget-password\\_name.vue' /* webpackChunkName: "pages/forget-password/_name" */))
const _d5e17224 = () => interopDefault(import('..\\pages\\manage-customers\\_name.vue' /* webpackChunkName: "pages/manage-customers/_name" */))
const _32680478 = () => interopDefault(import('..\\pages\\manage-drivers\\_name.vue' /* webpackChunkName: "pages/manage-drivers/_name" */))
const _55c13cd0 = () => interopDefault(import('..\\pages\\manage-vendors\\_name.vue' /* webpackChunkName: "pages/manage-vendors/_name" */))
const _4505c823 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _0ecf5465,
    name: "dashboard"
  }, {
    path: "/settings",
    component: _740ef960,
    name: "settings"
  }, {
    path: "/manage-customers/orders/orders",
    component: _794da64c,
    name: "manage-customers-orders-orders"
  }, {
    path: "/manage-vendors/orders/all",
    component: _3bbeb638,
    name: "manage-vendors-orders-all"
  }, {
    path: "/manage-vendors/products/add",
    component: _ebba7592,
    name: "manage-vendors-products-add"
  }, {
    path: "/manage-vendors/products/all",
    component: _3bc82437,
    name: "manage-vendors-products-all"
  }, {
    path: "/manage-vendors/support/overview",
    component: _27d4e8e8,
    name: "manage-vendors-support-overview"
  }, {
    path: "/manage-vendors/vendors/add",
    component: _4a9d692c,
    name: "manage-vendors-vendors-add"
  }, {
    path: "/manage-vendors/vendors/all",
    component: _e752ab2c,
    name: "manage-vendors-vendors-all"
  }, {
    path: "/manage-vendors/vendors/edit",
    component: _9711ea02,
    name: "manage-vendors-vendors-edit"
  }, {
    path: "/manage-customers/support/tickets/resolved/:name?",
    component: _7af4557e,
    name: "manage-customers-support-tickets-resolved-name"
  }, {
    path: "/manage-customers/support/tickets/unresolved/:name?",
    component: _4914b945,
    name: "manage-customers-support-tickets-unresolved-name"
  }, {
    path: "/manage-drivers/support/tickets/resolved/:name?",
    component: _6510c008,
    name: "manage-drivers-support-tickets-resolved-name"
  }, {
    path: "/manage-drivers/support/tickets/unresolved/:name?",
    component: _1dc0a94f,
    name: "manage-drivers-support-tickets-unresolved-name"
  }, {
    path: "/manage-vendors/support/tickets/resolved/:name?",
    component: _e171a5b0,
    name: "manage-vendors-support-tickets-resolved-name"
  }, {
    path: "/manage-vendors/support/tickets/unresolved/:name?",
    component: _d7df6322,
    name: "manage-vendors-support-tickets-unresolved-name"
  }, {
    path: "/manage-customers/category/add/:name?",
    component: _3bd93f53,
    name: "manage-customers-category-add-name"
  }, {
    path: "/manage-customers/customers/add/:name?",
    component: _9f9b0bfc,
    name: "manage-customers-customers-add-name"
  }, {
    path: "/manage-customers/customers/edit/:id?",
    component: _744e9127,
    name: "manage-customers-customers-edit-id"
  }, {
    path: "/manage-drivers/drivers/add/:name?",
    component: _15798e02,
    name: "manage-drivers-drivers-add-name"
  }, {
    path: "/manage-drivers/drivers/edit/:id?",
    component: _7fd4fd27,
    name: "manage-drivers-drivers-edit-id"
  }, {
    path: "/manage-customers/category/:name?",
    component: _62408cb0,
    name: "manage-customers-category-name"
  }, {
    path: "/manage-customers/customers/:name",
    component: _2b3f267e,
    name: "manage-customers-customers-name"
  }, {
    path: "/manage-customers/orders/:name",
    component: _70e590f9,
    name: "manage-customers-orders-name"
  }, {
    path: "/manage-customers/support/:name",
    component: _271810bb,
    name: "manage-customers-support-name"
  }, {
    path: "/manage-drivers/drivers/:name",
    component: _1a3280c1,
    name: "manage-drivers-drivers-name"
  }, {
    path: "/manage-drivers/orders/:name",
    component: _7c0663a2,
    name: "manage-drivers-orders-name"
  }, {
    path: "/manage-drivers/support/:name",
    component: _0e2f0b76,
    name: "manage-drivers-support-name"
  }, {
    path: "/settings/general/:name?",
    component: _16210d38,
    name: "settings-general-name"
  }, {
    path: "/manage-drivers/orders/:name?/all/:id",
    component: _3b05896c,
    name: "manage-drivers-orders-name-all-id"
  }, {
    path: "/forget-password/:name?",
    component: _07d0e78e,
    name: "forget-password-name"
  }, {
    path: "/manage-customers/:name?",
    component: _d5e17224,
    name: "manage-customers-name"
  }, {
    path: "/manage-drivers/:name?",
    component: _32680478,
    name: "manage-drivers-name"
  }, {
    path: "/manage-vendors/:name?",
    component: _55c13cd0,
    name: "manage-vendors-name"
  }, {
    path: "/",
    component: _4505c823,
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
