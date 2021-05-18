<template>
    <div class="section">
        <!-- Manage customer settings -->
            <v-list flat>
            <p class="mx-9 text-cap text-uppercase">General</p>
              <v-list-item-group >
                  <!-- Analytics -->
                <v-list-item class="text-settings" to="/settings">
                    <v-list-item-action>
                     <icon name="profile"></icon>
                    </v-list-item-action>
                    <v-list-item-content class="mb-1">
                     <span>Settings</span>
                    </v-list-item-content>
                 </v-list-item>
                    <!-- Orders -->
                 <v-list-item class="text-settings" to="/">
                    <v-list-item-action class="ml-4">
                     <icon name="logout"></icon>
                    </v-list-item-action>
                    <v-list-item-content class="mb-1">
                     <span>Logout</span>
                    </v-list-item-content>
            
                 </v-list-item>
              </v-list-item-group> 
            </v-list>
    </div>
</template>
<script>
export default {
    
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