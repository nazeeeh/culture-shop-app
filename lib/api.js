/**
 * The API requests lib of Culture store
 *
 * @param {AxiosInstance} instance The axios instance
 * @param {StoreInstance} store The store instance
 * @param {object} services The services available `{ user, orders, customers, drivers, vendors }`
 * @param {object} header The request headers to be injected
 */
 export function CsRequests(instance, services, store, auth, snackbar) {
    this.instance = instance
    this.services = services
    this.store = store
    this.auth = auth
    this.snackbar = snackbar
  
    // Error Handling for all
    this.processError = async function (error) {
      let errmsg, errorTitle
  
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { data, status } = error.response
        errorTitle = data?.error?.message || 'Error!'
        console.log(data)
        // set errmsg based on error.response.status code
        switch (status) {
          case 400:
            errmsg = data?.error?.details || 'Invalid credentials'
            break
          case 401:
            errmsg = data?.error?.details || data?.error || 'Unauthorised request'
            if (
              data?.error &&
              data?.error.includes('jwt') &&
              data?.error.includes('expired')
            ) {
                await auth.logout()
            //   this.store.dispatch('user/logOut')
            }
            break
          case 404:
            errmsg = data?.error?.details || 'Requested params not found'
            break
          case 409:
            errmsg = data?.error?.details || data?.error || 'Invalid credentials'
            break
          case 422:
            errmsg = data?.error?.details || 'Invalid credentials'
            break
          case 500:
            // console.log(data)
            errmsg = data?.error?.details || 'Network error, try again'
            break
          case 501:
            errmsg = data?.error || 'Network error, try again'
            break
          case 502:
            errmsg = data?.error || 'Network error, try again'
            break
          case 503:
            errmsg = data?.error || 'Service unavailable, try again later'
            break
          default:
            errmsg =
              data.error?.details ||
              data.error?.error?.details ||
              data.error?.details ||
              'An error occurred, try again'
            break
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        // and an instance of http.ClientRequest in node.js
        errmsg = 'Internet connection error'
      } else {
        // Something happened in setting up the request that triggered an Error
        errmsg = error.error?.details || 'Unknown error, try again'
      }
  
      // Display error message in a snackbar
      snackbar({
        show: true,
        timeout: 3000,
        message: errmsg,
        color: 'red'
    })
    }
  
    /* =======================================================
    ORDER SERVICES SECTION
     ========================================================= */
  
    this.getAllOrders = async function () {
      try {
        const { data } = await this.instance.get(`${this.services.order.getAll}`)
        return data
      } catch (error) {
        this.processError(error)
        return Promise.reject(error)
      }
    },

    /* =======================================================
    PENDING ORDER SERVICES SECTION
     ========================================================= */

     this.getPendingOrders = async function() {
      try{
        const { data } = await this.instance.get(`${this.services.order.pending}`)
        return data
      }catch (error) {
        this.processError(error)
        return Promise.reject(error)

      }
     },

     /* =======================================================
    CANCELLED ORDER SERVICES SECTION
     ========================================================= */

     this.getCancelledOrders = async function() {
      try{
        const { data } = await this.instance.get(`${this.services.order.cancelled}`)
        return data
      }catch (error) {
        this.processError(error)
        return Promise.reject(error)

      }
     },

      /* =======================================================
     REFUNDED ORDER SERVICES SECTION
     ========================================================= */

     this.getRefundedOrders = async function() {
      try{
        const { data } = await this.instance.get(`${this.services.order.refunded}`)
        return data
      }catch (error) {
        this.processError(error)
        return Promise.reject(error)

      }
     },

     /* =======================================================
     DELIVERED ORDER SERVICES SECTION
     ========================================================= */

     this.getDeliveredOrders = async function() {
      try{
        const { data } = await this.instance.get(`${this.services.order.delivered}`)
        return data
      }catch (error) {
        this.processError(error)
        return Promise.reject(error)
      }
     },
     

    /* =======================================================
    CUSTOMERS SECTION
     ========================================================= */

     this.getCustomers = async function() {
       try{
         const { data } = await this.instance.get(`${this.services.customer.getCustomer}`)
         return data
       }catch (error){
         this.processError(error)
         return Promise.reject(error)
       }
     },

      /* =======================================================
      EDIT CUSTOMERS SECTION
     ========================================================= */

     this.editCustomer = async function() {
      try{
        const { data } = await this.instance.put(`${this.services.customer.editCustomer}`)
        return data
      }catch (error){
        this.processError(error)
        return Promise.reject(error)
      }
    }

    /* =======================================================
      PRODUCT SECTION NOT DONE
     ========================================================= */

     this.getProduct = async function() {
      try{
        const { data } = await this.instance.get(`${this.services.product.getProducts}`)
        return data
      }catch (error){
        this.processError(error)
        return Promise.reject(error)
      }
    }

    /* =======================================================
      ADD PRODUCT SECTION
     ========================================================= */

     this.addProduct = async function(payload) {
      try{
        const postData  = await this.instance.post(`${this.services.product.addProduct}`, payload)
        return postData
      }catch (error){
        this.processError(error)
        return Promise.reject(error)
      }
    }
  }
  