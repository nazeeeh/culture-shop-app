<template>
    <div class="name-route">
     <div class="routes">
      <div class="text-header">
       <h3>{{title}}</h3>
      </div>
      <div class= "nav-links">
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">Manage customers /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">Orders /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">{{$route.params.id}} /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">{{order.order_no}}</span>
       </nuxt-link>
      </div>
     </div>
     <v-divider w-100></v-divider>
     <Orders :order="order"/>
    </div>
</template>

<script>

    import Orders from '~/components/manageCustomers/orders/Orders.vue'
    export default {
      
        data () {
            return {
                title: 'Orders',
            }
        },

        async asyncData({$axios, params}){
            try{
                const response = await $axios.$get(`https://api.thecultureshop.co.uk/api/v1/order/${params.id}`)  
                console.log(response.data)
                const order = response.data
                return {order}
            }catch(err){
                return err
            }
        },

        components: {
            Orders
        },
}
</script>

<style scoped>
.text-header{
    font-family: 'Space Grotesk';
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    text-transform: capitalize;
}
.sub-title{
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    color: #8D8D8D;
}
a {
    text-decoration: none;
}
.routes{
    margin: 5px 0 6px 34px;
}
</style>