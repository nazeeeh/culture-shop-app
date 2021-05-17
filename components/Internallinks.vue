<template>
    <!-- Dashboard link -->
    <div class="dashboard-link">
      <v-list flat>
        <div class="internal-links mt-4">
          <v-list-item to="/">
            <v-list-item-action>
              <icon name='dashboard'></icon>
            </v-list-item-action>
            <v-list-content class="mb-2">
              <span class="text-settings">Dashboard</span> 
            </v-list-content>
          </v-list-item>
        </div>
      </v-list>
    </div>
</template>
<script>
export default {
    
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