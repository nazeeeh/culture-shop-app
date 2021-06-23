<template>
 <div class="btn-btn">
   <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Cancel</v-btn>
   <v-btn class="btn btn-mark-as-resolved py-6 px-12 text-uppercase mr-2">Add New</v-btn>
   <v-btn class="btn btn-save py-6 px-12 text-uppercase">Save</v-btn>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn-btn{
  position: absolute;
  top: 10px;
  right: 40px;
  font-family: 'Space Grotesk';
}
.btn-save{
    background: #0CAD73 !important;
    color: #fff !important;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.btn-mark-as-resolved{
    background: rgba(12, 173, 115, 0.1)!important;
    color: #0CAD73 !important;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.btn-cancel{
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
</style>