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
      <v-container fluid class="pa-0">
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

html {
  font-family: 'Space Grotesk';
}
 * {
  margin: 0;
  padding: 0;
}
*, *::after, *::before{
  box-sizing: border-box;
}

</style>