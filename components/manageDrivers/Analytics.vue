<template>
 <div class="Analytics">
  <div>
    <Subhead />
    <v-divider></v-divider>
     <DriversAnalytics />
    <Analyticsgraph />
    <Cards />
  </div>
 </div>
</template>

<script>
import Subhead from '../Dashboard-subhead'
import DriversAnalytics from '../resources/Driversanalytic'
import Analyticsgraph from '../resources/Analyticsgraph'
import Cards from '../resources/Driverscard'
    export default {
        name: 'analytics',
        components: {
          Subhead,
          DriversAnalytics,
          Analyticsgraph,
          Cards
        } 
    }
</script>

<style scoped>
.Analytics{
    font-family: 'Space Grotesk';
}
</style>