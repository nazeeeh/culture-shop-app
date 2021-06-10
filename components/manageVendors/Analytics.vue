<template>
 <div class="Analytics">
  <div>
    <Subhead />
    <v-divider></v-divider>
     <VendorsAnalytics />
     <CardGraph />
    <Cards />
  </div>
 </div>
</template>

<script>
import Subhead from '../Dashboard-subhead'
import VendorsAnalytics from '../resources/Vendorsanalytic'
import CardGraph from '../Card-graph'
import Cards from '../resources/Vendorscard'
    export default {
        name: 'analytics',
        components: {
          Subhead,
          VendorsAnalytics,
          CardGraph,
          Cards
        } 
    }
</script>

<style scoped>
.Analytics{
    font-family: 'Space Grotesk';
}
</style>