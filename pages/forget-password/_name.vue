<template>
    
    <component :is="currentComponent">

    </component>
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

</style>