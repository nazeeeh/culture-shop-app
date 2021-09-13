<template>
  <div class="dashboard">
    <v-row>
      <v-col cols="12" sm="8" md="6">
        <div class="top-section">
          <span class="tite">{{ title }}</span><br>
          <span class="subheading text-uppercase">{{ subheading }}</span>
        </div>
      </v-col>
    </v-row>
    <hr/>
  <!-- <v-divider></v-divider> -->
  <Subhead />
  <v-divider></v-divider>
  <Card />
  <Cardgraph />
  <Card2 />
  <Bottomgraph />
  </div>
</template>

<script>
import Subhead from '~/components/Dashboard-subhead.vue'
import Card from '~/components/Card-1.vue'
import Cardgraph from '~/components/Card-graph.vue'
import Card2 from '~/components/Card-2.vue'
import Bottomgraph from '~/components/Bottom-graph.vue'

export default {
  data () {
    return {
      title: 'Dashboard',
      subheading: 'Analytics'
    }
  },
  components: {
    Subhead,
    Card,
    Cardgraph,
    Card2,
    Bottomgraph
  }
}
</script>
<style scoped>
.tite{
font-family: 'Space Grotesk';
font-style: normal;
font-weight: bold;
font-size: 24px;
}
.subheading{
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
}
.top-section{
  margin: 5px 0 6px 34px;
}


</style>