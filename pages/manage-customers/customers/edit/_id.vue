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
     <Edit :user="user" />
    </div>
</template>

<script>

    import Edit from '~/components/manageCustomers/customers/Edit.vue'

    export default {
        async fetch(){
            const response = await fetch('https://api.thecultureshop.co.uk/api/v1/customer/1')
            const data = await response.json()
            
            // console.log(this.$axios)
            console.log(data.data)
            this.user = data.data
        },
            // const response = await this.$api.getCustomer(params.id)
            // console.log(response)
        //     console.log(this.$api)
        // },
        name: 'edit',
        components: {
            Edit
        },

        data () {
            return {
                title: 'Edit customer',
                user: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    postcode: '',
                    address: '',
                    city: '',
                    phone: ''
                }
            }
            
        },
        methods:{      
            }
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