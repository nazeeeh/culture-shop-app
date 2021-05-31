<template>
 <div class="name-route">
  <div class="main">
   <div class="logo">
    <Logo />
   </div>
   <!-- header -->
    <div class="header-text">
     <h2 class="header-title">{{$route.params.name.replace(/-/g, '\ ')}}</h2>
    </div>
   <component :is="currentComponent">

  </component> 
  </div>   
 </div>
</template>

<script>

    import RecoveryOption from '~/components/ForgetPassword/RecoveryOption.vue'
    import PhoneVerification from '~/components/ForgetPassword/PhoneVerification.vue'
    import ResetPassword from '~/components/ForgetPassword/ResetPassword.vue'

    export default {
        components: {
          RecoveryOption,
          PhoneVerification,
          ResetPassword

        },
        
        layout: 'none',

       computed: {
        currentComponent() {
            return this.$route.params.name;
        }
    }
        
    }
</script>

<style scoped>
.name-route{
    position: relative;
    text-align: center;
    font-family: 'Space Grotesk';
}
.name-route .main{
    position: absolute;
    /* border: 1px solid green; */
    top: 9em;
    left: 25%;
    padding: 30px 50px;
    width: 700px;
}
.header-title{
   font-weight: bold;
   font-size: 28px;
   line-height: 38px;
   text-transform: capitalize;
}
</style>