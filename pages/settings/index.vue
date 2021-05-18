<template>
  <div class="settings">
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <div class="top-section">
          <span class="tite">{{ title }}</span><br>
          <span class="subheading text-uppercase">{{ subheading }}</span>
        </div>
      </v-col>
    </v-row>
    
    <!-- General settings -->
    <General />

    <!-- privacy and security -->
    <Privacy />
    
    <v-list>
    
        <v-list-item>
          <v-list-item-content>
            <div class="flex-content">
            <Icon name="logout" />
            <span class="ml-3">Logout</span>
            </div>
          </v-list-item-content>
        </v-list-item>
    
    </v-list>
  </div>
</template>
<script>

import General from '~/components/settings/General.vue'
import Privacy from '~/components/settings/Privacy.vue'

export default {
    data () {
        return {
          title: 'Settings',
          subheading: 'General & security',
        
        //   logger:[
        //       {icon: 'logout', tex: 'Logout'}
        //   ]
        }
    },
    components: {
        General,
        Privacy
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
  color: #8D8D8D;
}
.top-section{
  margin: 5px 0 6px 34px;
}
.flex-content{
    display: flex;
    padding: 20px 35px;
    font-family: 'Space Grotesk';
    border-bottom: 2px solid #F2F2F2;
    color:#8D8D8D;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
}
</style>