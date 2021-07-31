import {CsRequests} from '../lib/api'

export default (ctx, inject) => {
    const auth = ctx.$auth
    const instance = ctx.$axios
    const store = ctx.$store
    const snackbar = ctx.$showSnackBar
    const services = {
        order: ctx.$config.orderService,
        customer: ctx.$config.customerService,
        product: ctx.$config.productService
    }

    const Api = new CsRequests(instance, services, store, auth, snackbar)

    inject('api', Api)
}