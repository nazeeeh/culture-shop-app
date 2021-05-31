<template>
 <div class="Analytics">
  <div>
    <Subhead />
    <v-divider></v-divider>
    <AnalyticsCard />
  </div>
 </div>
</template>

<script>
import Subhead from '../Dashboard-subhead'
import AnalyticsCard from '../resources/Analyticscard'
    export default {
        name: 'analytics',
        components: {
            Subhead,
            AnalyticsCard
        }
        
    }
</script>

<style scoped>
.Analytics{
    font-family: 'Space Grotesk';
}
</style>