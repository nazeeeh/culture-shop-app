<template>
  <div class="name-route">
    <div class="header">
      <h2 class="t-title">{{$route.params.name.replace(/-/g, ' ')}}</h2>
    </div>
        <!-- <h1>{{$route.params.name.replace(/-/g, ' ')}}</h1>
        <nuxt-link to= "/settings">
            General /
        </nuxt-link>
        <nuxt-link to= "">
            {{$route.params.name}}
        </nuxt-link>
    <component :is="currentComponent">

    </component> -->
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
        driverAgreement
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
</style>