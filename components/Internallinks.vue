<template>
    <!-- Dashboard link -->
    <div class="dashboard-link " >
      <v-list flat class="py-2">
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <icon :name="item.action"></icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-uppercase text-settings mb-1"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      <!-- <v-list flat>
        <div class="internal-links mt-4">
          <v-list-item-group color="success">
            <v-list-item to="/">
            <v-list-item-action>
              <icon name='dashboard'></icon>
            </v-list-item-action>
              <span class="text-settings mb-2">Dashboard</span> 
          </v-list-item>
          </v-list-item-group>
        </div>
      </v-list> -->
    </div>
</template>
<script>
export default {
    data(){
      return {
        items:[
          {action: 'dashboard',
           title: 'Dashboard',
           to: '/'
          
          }
        ]
      }
    }
}
</script>

<style scoped>

/* .internal-links{   
    border: 1px solid red;
} */
.text-settings{
    font-family: 'Space Grotesk';
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: #192135;
}

</style>