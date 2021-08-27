<template>
 <div class="Add-button">
  <v-btn class="btn-btn py-6 px-10 text-uppercase" @click="add">add new</v-btn>
 </div>
</template>

<script>
    export default {
      methods: {
        add(){
          this.$router.push('/manage-vendors/products/add')
        }
      }
        
    }
</script>

<style scoped>
.btn-btn{
  position: absolute;
  top: 10px;
  right: 40px;
  background: #0CAD73 !important;
  color: #fff;
  box-shadow: none;
  border-radius: 16px;
  font-family: 'Space Grotesk';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
}
</style>