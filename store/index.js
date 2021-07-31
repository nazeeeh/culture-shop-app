 import Config from '../services/config'


export const state = () => ({
    globalSnackbarSettings: {
      show: false,
    },
    users: []

  })

  //Getters
  export const getters = {

  }

  //Actions
  export const actions = {
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
    // addUsers(state, users){
    //   state.users.push({...users})
    // }
}