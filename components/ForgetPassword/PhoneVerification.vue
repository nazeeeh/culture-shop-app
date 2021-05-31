<template>
    <div class="Phone-verification">
     <v-btn class="arrow" fab small to="/login">
        <icon name="left-arrow"></icon>
      </v-btn>
     <div class="main">
      <h3 class="sub-title">Step 2 / 3</h3>
      <div class="verify">
          <form>
            <div class="number-box">
             <input type="text"/>
             <input type="text"/>
             <input type="text"/>
             <input type="text"/>
            </div>
            <div class="flex">
              <div>
               <label for="time">0 secs remaining</label>
              </div>
              <div>
                <label for="refresh" class="resend">Re-send code</label>
              </div>
            </div>
            <div class="btn">
           <v-btn class="continue">Continue</v-btn>
          </div>
          <div class="btn">
           <v-btn text class="cancel">Cancel</v-btn>
          </div>
          </form>
      </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: 'phone-verification'
    }
</script>

<style scoped>
.sub-title {
    opacity: 0.8;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
}
input[type='text']{
    border: 2px solid #ECECEC;
    width: 5vw;
    border-radius: 8px;
    height: 54px;
    margin-left: 10px;
    outline: none;

}
input[type='text']:focus{
    border: 2px solid green;

}
.number-box{
    margin-top: 60px;
    margin-left: 8rem; 
}
.flex{
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    width: 23vw;
    margin-left: 8.5em;
    margin-top: 20px;
}
.verify{
    width: 30rem;
}
.resend{
    color: #0CAD73;
}
.btn{
    margin-top: 20px;
    margin-left: 8rem;
}
.continue{
    width: 23.5vw;
    border-radius: 40px;
    height: 54px !important;
    background: #0CAD73 !important;
    color: #fff;
    text-transform: capitalize;
}
.cancel{
    text-transform: capitalize;
    width: 23.5vw;
    border-radius: 40px;
    height: 54px !important;
}
</style>