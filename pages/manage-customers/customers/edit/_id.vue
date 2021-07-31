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
        <span class="sub-title text-uppercase">Customers /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">Edit</span>
       </nuxt-link>
      </div>
     </div>
     <v-divider w-100></v-divider>
     <Edit />
    </div>
</template>

<script>

    import Edit from '~/components/manageCustomers/customers/Edit.vue'

    export default {
        components: {
            Edit
        },
        // async fetch({ params }){
        //     const response = await this.$api.editCustomer()
        //     console.log(response)
        //     console.log(params.id)
        // },

        data () {
            return {
                title: 'Edit customer'
            }
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