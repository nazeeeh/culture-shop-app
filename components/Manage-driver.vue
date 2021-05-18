<template>
    <div class="section">
        <!-- Manage customer settings -->
            <v-list flat>
            <p class="mx-9 text-cap text-uppercase">Manage drivers</p>
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
                    <!-- Vendor -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="vendor"></icon>
                    </v-list-item-action>
                
                     <span class="mb-1">vendors</span>
                  
                    <div>
                      <icon name="dropdown" class="mx-14"></icon>
                    </div>
                 </v-list-item>
                  <!-- Drivers -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="driver"></icon>
                    </v-list-item-action>
                 
                     <span class="mb-1">Drivers</span>
             
                    <div>
                      <icon name="dropdown" class="mx-15"></icon>
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
          selectedItem: 0,
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