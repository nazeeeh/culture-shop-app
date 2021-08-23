import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7aa80b1a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _02ab4140 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _415254b1 = () => interopDefault(import('..\\pages\\manage-customers\\orders\\index.vue' /* webpackChunkName: "pages/manage-customers/orders/index" */))
const _03884e2c = () => interopDefault(import('..\\pages\\manage-customers\\orders\\orders\\index.vue' /* webpackChunkName: "pages/manage-customers/orders/orders/index" */))
const _1fb2a258 = () => interopDefault(import('..\\pages\\manage-vendors\\orders\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/orders/all/index" */))
const _40cc2957 = () => interopDefault(import('..\\pages\\manage-vendors\\products\\add\\index.vue' /* webpackChunkName: "pages/manage-vendors/products/add/index" */))
const _1b1cef52 = () => interopDefault(import('..\\pages\\manage-vendors\\products\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/products/all/index" */))
const _ada040a8 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\overview\\index.vue' /* webpackChunkName: "pages/manage-vendors/support/overview/index" */))
const _753ae34a = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\add\\index.vue' /* webpackChunkName: "pages/manage-vendors/vendors/add/index" */))
const _26e0424a = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\all\\index.vue' /* webpackChunkName: "pages/manage-vendors/vendors/all/index" */))
const _b054ff4e = () => interopDefault(import('..\\pages\\manage-customers\\orders\\orders\\id\\_id.vue' /* webpackChunkName: "pages/manage-customers/orders/orders/id/_id" */))
const _abdba544 = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/resolved/_name" */))
const _281c1925 = () => interopDefault(import('..\\pages\\manage-customers\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-customers/support/tickets/unresolved/_name" */))
const _67830fe8 = () => interopDefault(import('..\\pages\\manage-drivers\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-drivers/support/tickets/resolved/_name" */))
const _4cde812f = () => interopDefault(import('..\\pages\\manage-drivers\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-drivers/support/tickets/unresolved/_name" */))
const _dc8d05f0 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\tickets\\resolved\\_name.vue' /* webpackChunkName: "pages/manage-vendors/support/tickets/resolved/_name" */))
const _79a3b362 = () => interopDefault(import('..\\pages\\manage-vendors\\support\\tickets\\unresolved\\_name.vue' /* webpackChunkName: "pages/manage-vendors/support/tickets/unresolved/_name" */))
const _248bc91a = () => interopDefault(import('..\\pages\\manage-customers\\category\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/add/_name" */))
const _3a6d21e2 = () => interopDefault(import('..\\pages\\manage-customers\\customers\\add\\_name.vue' /* webpackChunkName: "pages/manage-customers/customers/add/_name" */))
const _262f6d47 = () => interopDefault(import('..\\pages\\manage-customers\\customers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-customers/customers/edit/_id" */))
const _9ff9b43c = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\add\\_name.vue' /* webpackChunkName: "pages/manage-drivers/drivers/add/_name" */))
const _63c8e947 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\edit\\_id.vue' /* webpackChunkName: "pages/manage-drivers/drivers/edit/_id" */))
const _7fedad47 = () => interopDefault(import('..\\pages\\manage-vendors\\vendors\\edit\\_id.vue' /* webpackChunkName: "pages/manage-vendors/vendors/edit/_id" */))
const _380e9c90 = () => interopDefault(import('..\\pages\\manage-customers\\category\\_name.vue' /* webpackChunkName: "pages/manage-customers/category/_name" */))
const _5edec6be = () => interopDefault(import('..\\pages\\manage-customers\\customers\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/customers/_name/index" */))
const _1a1fcf59 = () => interopDefault(import('..\\pages\\manage-customers\\orders\\_id.vue' /* webpackChunkName: "pages/manage-customers/orders/_id" */))
const _9d5a8eca = () => interopDefault(import('..\\pages\\manage-customers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-customers/support/_name/index" */))
const _38b5a0a1 = () => interopDefault(import('..\\pages\\manage-drivers\\drivers\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/drivers/_name/index" */))
const _78a6324f = () => interopDefault(import('..\\pages\\manage-drivers\\orders\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/orders/_name/index" */))
const _176b9a25 = () => interopDefault(import('..\\pages\\manage-drivers\\support\\_name\\index.vue' /* webpackChunkName: "pages/manage-drivers/support/_name/index" */))
const _34760d84 = () => interopDefault(import('..\\pages\\settings\\general\\_name.vue' /* webpackChunkName: "pages/settings/general/_name" */))
const _757f9d68 = () => interopDefault(import('..\\pages\\manage-drivers\\orders\\_name\\all\\_id.vue' /* webpackChunkName: "pages/manage-drivers/orders/_name/all/_id" */))
const _6a2e03ae = () => interopDefault(import('..\\pages\\forget-password\\_name.vue' /* webpackChunkName: "pages/forget-password/_name" */))
const _7e55aece = () => interopDefault(import('..\\pages\\manage-customers\\_name.vue' /* webpackChunkName: "pages/manage-customers/_name" */))
const _7fe6e458 = () => interopDefault(import('..\\pages\\manage-drivers\\_name.vue' /* webpackChunkName: "pages/manage-drivers/_name" */))
const _229e4178 = () => interopDefault(import('..\\pages\\manage-vendors\\_name.vue' /* webpackChunkName: "pages/manage-vendors/_name" */))
const _9dff2ffa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7aa80b1a,
    name: "login"
  }, {
    path: "/settings",
    component: _02ab4140,
    name: "settings"
  }, {
    path: "/manage-customers/orders",
    component: _415254b1,
    name: "manage-customers-orders"
  }, {
    path: "/manage-customers/orders/orders",
    component: _03884e2c,
    name: "manage-customers-orders-orders"
  }, {
    path: "/manage-vendors/orders/all",
    component: _1fb2a258,
    name: "manage-vendors-orders-all"
  }, {
    path: "/manage-vendors/products/add",
    component: _40cc2957,
    name: "manage-vendors-products-add"
  }, {
    path: "/manage-vendors/products/all",
    component: _1b1cef52,
    name: "manage-vendors-products-all"
  }, {
    path: "/manage-vendors/support/overview",
    component: _ada040a8,
    name: "manage-vendors-support-overview"
  }, {
    path: "/manage-vendors/vendors/add",
    component: _753ae34a,
    name: "manage-vendors-vendors-add"
  }, {
    path: "/manage-vendors/vendors/all",
    component: _26e0424a,
    name: "manage-vendors-vendors-all"
  }, {
    path: "/manage-customers/orders/orders/id/:id",
    component: _b054ff4e,
    name: "manage-customers-orders-orders-id-id"
  }, {
    path: "/manage-customers/support/tickets/resolved/:name?",
    component: _abdba544,
    name: "manage-customers-support-tickets-resolved-name"
  }, {
    path: "/manage-customers/support/tickets/unresolved/:name?",
    component: _281c1925,
    name: "manage-customers-support-tickets-unresolved-name"
  }, {
    path: "/manage-drivers/support/tickets/resolved/:name?",
    component: _67830fe8,
    name: "manage-drivers-support-tickets-resolved-name"
  }, {
    path: "/manage-drivers/support/tickets/unresolved/:name?",
    component: _4cde812f,
    name: "manage-drivers-support-tickets-unresolved-name"
  }, {
    path: "/manage-vendors/support/tickets/resolved/:name?",
    component: _dc8d05f0,
    name: "manage-vendors-support-tickets-resolved-name"
  }, {
    path: "/manage-vendors/support/tickets/unresolved/:name?",
    component: _79a3b362,
    name: "manage-vendors-support-tickets-unresolved-name"
  }, {
    path: "/manage-customers/category/add/:name?",
    component: _248bc91a,
    name: "manage-customers-category-add-name"
  }, {
    path: "/manage-customers/customers/add/:name?",
    component: _3a6d21e2,
    name: "manage-customers-customers-add-name"
  }, {
    path: "/manage-customers/customers/edit/:id?",
    component: _262f6d47,
    name: "manage-customers-customers-edit-id"
  }, {
    path: "/manage-drivers/drivers/add/:name?",
    component: _9ff9b43c,
    name: "manage-drivers-drivers-add-name"
  }, {
    path: "/manage-drivers/drivers/edit/:id?",
    component: _63c8e947,
    name: "manage-drivers-drivers-edit-id"
  }, {
    path: "/manage-vendors/vendors/edit/:id?",
    component: _7fedad47,
    name: "manage-vendors-vendors-edit-id"
  }, {
    path: "/manage-customers/category/:name?",
    component: _380e9c90,
    name: "manage-customers-category-name"
  }, {
    path: "/manage-customers/customers/:name",
    component: _5edec6be,
    name: "manage-customers-customers-name"
  }, {
    path: "/manage-customers/orders/:id?",
    component: _1a1fcf59,
    name: "manage-customers-orders-id"
  }, {
    path: "/manage-customers/support/:name",
    component: _9d5a8eca,
    name: "manage-customers-support-name"
  }, {
    path: "/manage-drivers/drivers/:name",
    component: _38b5a0a1,
    name: "manage-drivers-drivers-name"
  }, {
    path: "/manage-drivers/orders/:name",
    component: _78a6324f,
    name: "manage-drivers-orders-name"
  }, {
    path: "/manage-drivers/support/:name",
    component: _176b9a25,
    name: "manage-drivers-support-name"
  }, {
    path: "/settings/general/:name?",
    component: _34760d84,
    name: "settings-general-name"
  }, {
    path: "/manage-drivers/orders/:name?/all/:id",
    component: _757f9d68,
    name: "manage-drivers-orders-name-all-id"
  }, {
    path: "/forget-password/:name?",
    component: _6a2e03ae,
    name: "forget-password-name"
  }, {
    path: "/manage-customers/:name?",
    component: _7e55aece,
    name: "manage-customers-name"
  }, {
    path: "/manage-drivers/:name?",
    component: _7fe6e458,
    name: "manage-drivers-name"
  }, {
    path: "/manage-vendors/:name?",
    component: _229e4178,
    name: "manage-vendors-name"
  }, {
    path: "/",
    component: _9dff2ffa,
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
