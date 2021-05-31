<template>
 <div class="Analytics">
  <div>
    <Subhead />
    <v-divider></v-divider>
    <AnalyticsCard />
    <Bottomgraph />
  </div>
 </div>
</template>

<script>
import Subhead from '../Dashboard-subhead'
import AnalyticsCard from '../resources/Analyticscard'
import Bottomgraph from '../Bottom-graph'
    export default {
        name: 'analytics',
        components: {
          Subhead,
          AnalyticsCard,
          Bottomgraph
        }
        
    }
</script>

<style scoped>
.Analytics{
    font-family: 'Space Grotesk';
}
</style>