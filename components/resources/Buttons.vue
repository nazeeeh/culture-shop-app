<template>
 <div class="btn-btn">
   <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Cancel</v-btn>
   <v-btn class="btn btn-save-as-draft py-6 px-12 text-uppercase mr-2">Save As Draft</v-btn>
   <v-btn class="btn btn-save py-6 px-12 text-uppercase" @click="dialog = true">Save</v-btn>
   <!-- Dialog -->
    <v-layout >
      <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500" :customers="customers">
       <v-card class="dialog py-8 px-12">
        <v-card-text :style="{color: '#192135'}"><span class="text-header">Are you sure want to add this new customer?</span>
        </v-card-text>
         <v-card-actions>
          <div class="button-dialog">
           <v-btn class="btn-f mx-2 px-14 py-6 white--text" color="#192135" @click="dialog = false"><span>No</span></v-btn>
           <v-btn class="btn-f px-14 py-6 white--text" color="#0CAD73" @click="dialog = false"><span>Yes</span></v-btn>
          </div>
         </v-card-actions>
        </v-card>
      </v-dialog>
     </v-row>
    </v-layout>
 </div>
</template>

<script>
    export default {
      data() {
        return {
          dialog: false,
        }
      }
        
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
    background: rgba(231, 109, 20, 0.1)!important;
    color: #E76D14 !important;
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