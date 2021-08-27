<template>
    <div class="name-route">
     <div class="routes">
      <div class="text-header">
       <h3>{{title}}</h3>
      </div>
      <div class= "nav-links">
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">Manage drivers /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">drivers /</span>
       </nuxt-link>
       <nuxt-link to= "/">
        <span class="sub-title text-uppercase">Edit</span>
       </nuxt-link>
      </div>
     </div>
     <v-divider w-100></v-divider>
     <Edit :driver="driver"/>
    </div>
</template>

<script>

    import Edit from '~/components/manageDrivers/drivers/Edit.vue'

    export default {
        // async asyncData({$axios, params}){
        //     const response = await $axios.$get(`https://api.thecultureshop.co.uk/api/v1/driver/${params.id}`)
        //     console.log(response.data)
        //     this.driver = response.data
        // },
        async fetch({params}){
            const response = await fetch(`https://api.thecultureshop.co.uk/api/v1/driver/${params.id}`)
            const data = await response.json()

            console.log(data.data)
            this.driver = data.data
            console.log(this.driver)
        },
        
    //     async fetch({params}) {
    //         const response = await this.$api.getaDriver(id)
    //         console.log(this.params)
    //         console.log(response)
    //   },
    // async asyncData({ params, $http }) {
    //   const post = await $http.get(`https://api.thecultureshop.co.uk/api/v1/driver/${params.id}`)
    //   console.log(post)
    //   return { post }
    // },
        name:'edit',
        components: {
            Edit
        },

        data () {
         return {
            title: 'Edit driver',
            driver: {
             firstname: 'Rex',
             lastname: 'Texh',
             email: 'rextexh@gmail.com',
             phone: '09087989876',
             address: 'Area 2 abuja',
             city: 'Abuja',
             postcode: '70024',
             documentation: 'passport',
             doc_number: '012',
             vehicle: 'car',
             password: '',
             selectedFile: ''
        }
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