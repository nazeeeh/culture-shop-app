import BaseUrl from './baseUrl'

//Endpoints routes
const postEndpoints = BaseUrl;

const config = {
    local_storage: {
        userToken: 'auth._token.local',
    },

    endpoints: {
    // REGISTER ADMIN API
    register: `${postEndpoints}/register/admin`,
    orders:`${postEndpoints}/orders`,
    user: `${postEndpoints}/admin`,
    pendingOrders: `${postEndpoints}/pending/orders`,
    deliveredOrders: `${postEndpoints}/delivered/orders`,
    canceledOrders: `${postEndpoints}/canceled/orders`,
    refundedOrders: `${postEndpoints}/refunded/orders`,
    customers: `${postEndpoints}/customers`,
    shops: `${postEndpoints}/shops`,
    drivers: `${postEndpoints}/drivers`,
    admins: `${postEndpoints}/admins`,
    createShop: `${postEndpoints}/create/shop`,
    updateShop: `${postEndpoints}/update/shop2`,
    createDriver: `${postEndpoints}/create/driver`,
    updateDriver: `${postEndpoints}/update/driver2`,
    updateCustomer: `${postEndpoints}/update/customer`,
    driverRequests: `${postEndpoints}/drivers/requests`,
    approveDriver: `${postEndpoints}/approve/driver`,
    declineDriver: `${postEndpoints}/decline/driver`,
    shopRequests: `${postEndpoints}/shops/requests`,
    approveStore: `${postEndpoints}/approve/store`,
    declineStore: `${postEndpoints}/decline/store`,
    storeProducts: `${postEndpoints}/store_products`,
    uploadProducts: `${postEndpoints}/upload/product2`,
    updateProducts: `${postEndpoints}/update/product`,
    deletedProducts: `${postEndpoints}/delete/product2`
    },

    mutations: {
        global: {
          SHOW_SNACKBAR: 'SHOW_SNACKBAR',
          HIDE_SNACKBAR: 'HIDE_SNACKBAR',
        },
    }
}
export default config