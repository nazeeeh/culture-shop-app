<template>
    <div class="section">
        <!-- General settings -->
        
      <v-list flat class="">
      <p class="mx-5 text-cap text-uppercase">General</p>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <icon :name="item.action"></icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-uppercase text-settings mb-1"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Logout -->
        <v-list-item>
        <v-list-item-icon>
          <icon name="logout"></icon>
        </v-list-item-icon>
        <v-list-item-title class="text-uppercase text-settings mb-1" @click="dialog = true">Logout</v-list-item-title>
      </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-layout>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      
      <v-card class="dialog py-8 px-12">
        <v-card-text class="text-header" :style="{color: '#192135'}"><span>Are you sure you want to logout? </span></v-card-text>
        <v-card-actions>
        <div class="btn-btn">
          <v-btn class="btn-f mx-2 px-14 py-6 white--text" color="#192135" @click="dialog = false"><span>No</span></v-btn>
          <v-btn class="btn-f px-14 py-6 white--text" color="#0CAD73" @click="logout"><span>Yes</span></v-btn>
        </div>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
    
    </v-layout>

    </div>
</template>

<script>

export default {
    components: {},

    data(){
      return {
          dialog: false,

        items:[
          {action: 'profile',
           title: 'Settings',
           to: '/settings'
          },

        //   {action: 'logout',
        //    title: 'Logout',
        //   },

        ]
      }
    },

    methods: {
      logout() {
      this.$auth.logout()
      this.$router.push('/login')
    },
    }
}

</script>
<style scoped>
.text-cap{
    color: #8D8D8D;
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
}
.flex-content{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    /* max-width: 400px; */
    width: 80%;
    
}

.text-settings{
    font-family: 'Space Grotesk';
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: #192135;
}

.dialog{
    font-family: 'Space Grotesk'; 
}

.text-header{
    font-weight: bold;
    font-size: 16px;
    line-height: 27px;
    color: '#192135';
    text-align: center;
}

.btn-btn{
   
    width: 100%;
    text-align: center;

}

.btn-f{
    color: "#fff";
    border-radius: 10px;
}

</style>