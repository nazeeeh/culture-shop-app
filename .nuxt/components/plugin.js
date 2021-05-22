import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Avatar: () => import('../..\\components\\avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => wrapFunctional(c.default || c)),
  BottomGraph: () => import('../..\\components\\Bottom-graph.vue' /* webpackChunkName: "components/bottom-graph" */).then(c => wrapFunctional(c.default || c)),
  Card1: () => import('../..\\components\\Card-1.vue' /* webpackChunkName: "components/card1" */).then(c => wrapFunctional(c.default || c)),
  Card2: () => import('../..\\components\\Card-2.vue' /* webpackChunkName: "components/card2" */).then(c => wrapFunctional(c.default || c)),
  CardGraph: () => import('../..\\components\\Card-graph.vue' /* webpackChunkName: "components/card-graph" */).then(c => wrapFunctional(c.default || c)),
  DashboardSubhead: () => import('../..\\components\\Dashboard-subhead.vue' /* webpackChunkName: "components/dashboard-subhead" */).then(c => wrapFunctional(c.default || c)),
  General: () => import('../..\\components\\General.vue' /* webpackChunkName: "components/general" */).then(c => wrapFunctional(c.default || c)),
  Icon: () => import('../..\\components\\Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c)),
  Internallinks: () => import('../..\\components\\Internallinks.vue' /* webpackChunkName: "components/internallinks" */).then(c => wrapFunctional(c.default || c)),
  Logout: () => import('../..\\components\\Logout.vue' /* webpackChunkName: "components/logout" */).then(c => wrapFunctional(c.default || c)),
  ManageDriver: () => import('../..\\components\\Manage-driver.vue' /* webpackChunkName: "components/manage-driver" */).then(c => wrapFunctional(c.default || c)),
  ManageVendor: () => import('../..\\components\\Manage-vendor.vue' /* webpackChunkName: "components/manage-vendor" */).then(c => wrapFunctional(c.default || c)),
  Popup: () => import('../..\\components\\Popup.vue' /* webpackChunkName: "components/popup" */).then(c => wrapFunctional(c.default || c)),
  Sectionlinks: () => import('../..\\components\\Sectionlinks.vue' /* webpackChunkName: "components/sectionlinks" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  GeneralDriveragreement: () => import('../..\\components\\General\\Driveragreement.vue' /* webpackChunkName: "components/general-driveragreement" */).then(c => wrapFunctional(c.default || c)),
  GeneralUserpermission: () => import('../..\\components\\General\\Userpermission.vue' /* webpackChunkName: "components/general-userpermission" */).then(c => wrapFunctional(c.default || c)),
  GeneralVendoragreement: () => import('../..\\components\\General\\Vendoragreement.vue' /* webpackChunkName: "components/general-vendoragreement" */).then(c => wrapFunctional(c.default || c)),
  SettingsGeneral: () => import('../..\\components\\settings\\General.vue' /* webpackChunkName: "components/settings-general" */).then(c => wrapFunctional(c.default || c)),
  SettingsPrivacy: () => import('../..\\components\\settings\\Privacy.vue' /* webpackChunkName: "components/settings-privacy" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
