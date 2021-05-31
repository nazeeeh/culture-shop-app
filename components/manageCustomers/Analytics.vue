<template>
 <div class="Analytics">
  <div>
    <Subhead />
    <v-divider></v-divider>
    <AnalyticsCard />
    <Analyticsgraph />
    <Cards />
  </div>
 </div>
</template>

<script>
import Subhead from '../Dashboard-subhead'
import AnalyticsCard from '../resources/Analyticscard'
import Analyticsgraph from '../resources/Analyticsgraph'
import Cards from '../resources/Cards'
    export default {
        name: 'analytics',
        components: {
          Subhead,
          AnalyticsCard,
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