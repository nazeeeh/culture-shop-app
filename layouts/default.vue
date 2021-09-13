<template>
  <v-app dark>
    <!-- Navigation sidebar -->
    <v-navigation-drawer
      app
      fixed>
      <Avatar />
      <Sidebar />
    </v-navigation-drawer>
    
    <!-- Content loads -->
    <v-main>
      <v-container fluid>
        <nuxt />
        <snackbar :config="snackbarSettings"></snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import snackbar from '../components/snackbar'
export default {
  middleware : 'auth',
  components:{
    snackbar

  },
  data(){
    return{
      snackbarSettings: ''
    }
  } 
}

</script>
<style scoped>
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>