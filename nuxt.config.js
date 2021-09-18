import colors from 'vuetify/es5/util/colors'

const URL = 'https://api.thecultureshop.co.uk'

export default {
  
  target: 'static',
    ssr: false,
    generate: {
      fallback: true
    },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - culture-shop',
    title: 'Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Space+Grotesk'}
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  publicRuntimeConfig: {
    orderService: {
      getAll: process.env.ORDERS,
      pending: process.env.PENDING_ORDERS,
      cancelled: process.env.CANCELLED_ORDERS,
      refunded: process.env.REFUNDED_ORDERS,
      delivered: process.env.DELIVERED_ORDERS
    },
    customerService:{
      getCustomer: process.env.CUSTOMERS,
      getaCustomer: process.env.GET_A_CUSTOMER,
      editCustomer: process.env.UPDATE_CUSTOMERS
    },
    productService: {
      getProducts: process.env.GET_PRODUCTS,
      addProduct: process.env.ADD_PRODUCT
    },
    vendorService: {
      addVendors: process.env.ADD_VENDOR,
      getVendors: process.env.VENDORS
    },
    driverService: {
      getDrivers: process.env.DRIVERS,
      addDriver: process.env.ADD_DRIVER,
      getaDriver: process.env.GET_A_DRIVER,
      editDriver: process.env.UPDATE_DRIVER
    },
    categoryService: {
      addCategory: process.env.ADD_CATEGORY,
      getCategory: process.env.GET_CATEGORY
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/pretty',
    '~/plugins/globalSnackbar',         
    '~/plugins/api',
    '~/plugins/image'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth'  
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: URL
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/login/admin',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: '/api/v1/admin',
            method: 'get',
            propertyName: 'user'
          },
          logout: false,
        }
      }
    },
    redirect:{
      home: '/'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.green.darken1,
          secondary: colors.lightBlue.darken4,
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true}]
      ]
    },
  },

  loadingIndicator: {
    name: 'circle',
    color: '#fff',
    background: colors.green.darken1,
  },

  // serverMiddleware: [
  //   '~/serverMiddleware/redirects'
  // ],
  // router: {
  //   middleware: []
  // }
}
