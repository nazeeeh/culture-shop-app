<template>
    <div class="section">
        <!-- Manage customer settings -->
            <v-list flat>
            <p class="mx-9 text-cap text-uppercase">Manage customers</p>
              <v-list-item-group v-model="selectedItem" >
                  <!-- Analytics -->
                <v-list-item class="text-settings" to="/">
                    <v-list-item-action>
                     <icon name="analytics"></icon>
                    </v-list-item-action>
                   
                     <span class="mb-1">Analytics</span>
                 
                 </v-list-item>
                    <!-- Orders -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="orders"></icon>
                    </v-list-item-action>
                     <span class="mb-1">orders</span>
                    <div>
                      <icon name="dropdown" class="mx-16"></icon>
                    </div>
                 </v-list-item>
                    <!-- Customers -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="customers"></icon>
                    </v-list-item-action>
                   
                     <span class="mb-1">Customers</span>
                   
                    <div>
                      <icon name="dropdown" class="mx-9"></icon>
                    </div>
                 </v-list-item>
                  <!-- Categories -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="category"></icon>
                    </v-list-item-action>
                     <span class="mb-1">Categories</span>
                    <div>
                      <icon name="dropdown" class="mx-9"></icon>
                    </div>
                 </v-list-item>
                 <!-- Support -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="new"></icon>
                    </v-list-item-action>
                    
                     <span class="mb-1">Support</span>
                    
                 </v-list-item>

              </v-list-item-group> 
            </v-list>
    </div>
</template>
<script>
export default {
    data () {
      return {
          selectedItem: 1,

        links: [
            {icon: 'analytics', text: 'analytics', to: '/'},
            {icon: 'analytics', text: 'analytics', to: '/'},
            {icon: 'analytics', text: 'analytics', to: '/'},
            {icon: 'categories', text: 'analytics', to: '/'},
            {icon: 'support', text: 'analytics', to: '/'},
        ]


        }
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

.a-link-hover:hover{
    padding: 20px;
    background: #8D8D8D;
    width: 100%;
}

</style>