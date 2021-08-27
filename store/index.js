import Config from '../services/config'


export const state = () => ({
    globalSnackbarSettings: {
      show: false,
    },
    users: [],
    items: []

  })

  //Getters
  export const getters = {
  
  }

  //Actions
  export const actions = {
    // async getItems(){
    //   const items = await 
    // }
    // async getUsers(){
    //   const users = await $axios.$get(Config.endpoints.admins)
    //   console.log(users)
    //   Commit("addUsers", users)
    // }
  }

  //Mutations
  export const mutations = {
    SHOW_SNACKBAR(state, settings) {
      state.globalSnackbarSettings = settings
    },
    HIDE_SNACKBAR(state) {
      state.globalSnackbarSettings = {
        show: false,
      }
    },
    getItems(state, items){
      state.items = items
    }
    // addUsers(state, users){
    //   state.users.push({...users})
    // }
}