<template>
  <div class="name-route">
    <div class="header">
      <h2 class="t-title">{{$route.params.name.replace(/-/g, ' ')}}</h2>

      <nuxt-link to= "/settings">
        <span class="sub-title text-uppercase">General /</span>
      </nuxt-link>

    <nuxt-link to= "">
         <span class="sub-title text-uppercase">{{$route.params.name}}</span>   
    </nuxt-link>
    </div>
    
    <v-divider></v-divider>
    <component :is="currentComponent">

    </component>
  </div> 
</template>
<script>

import userPermission from '~/components/General/Userpermission.vue'
import vendorAgreement from '~/components/General/Vendoragreement.vue'
import driverAgreement from '~/components/General/Driveragreement.vue'
export default {

    components: {
        userPermission,
        vendorAgreement,
        driverAgreement,
    },

    computed: {
        currentComponent() {
            return this.$route.params.name;
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.header{
    font-family: 'Space Grotesk';
    margin: 5px 0 6px 34px;
}
.t-title {
    font-weight: bold;
    font-size: 24px;
    text-transform: capitalize;
}
.sub-title{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    color: #8D8D8D;
}
</style>