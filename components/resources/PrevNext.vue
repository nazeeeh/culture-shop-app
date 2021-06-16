<template>
 <div class="btn-btn">
   <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Previous</v-btn>
   <v-btn class="btn btn-save-as-draft py-6 px-12 text-uppercase mr-2">Next</v-btn>
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
.btn-save-as-draft{
    background: rgba(12, 173, 115, 0.1)!important;
    color:#0CAD73 !important;
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
/* dialog */
.text-header{
  font-family: 'Space Grotesk';
  font-weight: bold;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
}
.small-text{
    text-align: center;
}
.btn-f{
    box-shadow: none;
    border-radius: 16px;
}
.button-dialog{
  text-align: center;
  width: 100%;
}
.dialog{
    font-family: 'Space Grotesk'; 
}
</style>