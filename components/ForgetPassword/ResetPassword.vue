<template>
    <div class="password-Reset">
     <div class="main">
      <h3 class="sub-title">Step 3 / 3</h3>
      <div class="form">
        <!-- form -->
        <v-layout>
         <v-row>
          <v-col>
           <form>
            <input class="inputs" type="email" placeholder="New password" required/><br><br>
            <input class="inputs" type="password" placeholder="Confirm password" required/><br><br>
            <div class="text">
              <span class="paragraph">Reset your new password. Minimum 8 characters with 1 special character.</span>
            </div><br>
            <div class="btn">
           <v-btn class="finish-btn">Finish</v-btn>
          </div>
          <div class="btn">
           <v-btn text class="cancel-btn">Cancel</v-btn>
          </div>
           </form>
          </v-col>
         </v-row>
        </v-layout>
      </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: 'reset-password',
        methods: {
            goToRoute(){
                
            }
        }
    }
</script>

<style scoped>
.sub-title {
    opacity: 0.8;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
}
 .form{
     margin-top: 20px;
    /* width: 700px; */
 }

.sub-text{
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
}

.inputs{
    border: 2px solid #ECECEC;
    border-radius: 16px;
    height: 7vh;
    width: 20vw;
    padding: 20px;
    outline: none;

}
.inputs::placeholder{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    opacity: 0.6;
}
.finish-btn{
    background: #0CAD73 !important;
    color: #fff;
    box-shadow: none;
    width: 20vw;
    border-radius: 40px;
    height: 54px !important;
    text-transform: capitalize;
}
.text{
    width: 22vw;
    margin-left: 7rem;
}
.paragraph{
    font-size: 14px;
    line-height: 18px;
    opacity: .5;
    margin-left: 12px;  
}
.btn{
    margin: 20px 0;
}
.cancel-btn{
    text-transform: capitalize;
    box-shadow: none;
    width: 20vw;
    border-radius: 40px;
    height: 54px !important;
}
</style>