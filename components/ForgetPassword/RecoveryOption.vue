<template>
    <div class="Recovery-Option">
     
      <!-- main section -->
     <div class="main">
      <!-- Sub-title -->
      <h3 class="sub-title">Step 1 / 3</h3>
      <div class="recovery-choices">
        <form>
         <label class="container"><span class="label">Email</span>
            <input type="radio" checked="checked" name="radio">
            <span class="checkmark"></span>
        </label>
        <v-divider></v-divider>
        <label class="container"><span class="label">Text message<span style="font-weight: none; margin-left: 5px;"> (SMS)</span></span>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
        </label>
           <span class="paragraph">We will send you an email with instructions on how to reset your password</span>
          <div class="input-box">
           <input type="text"/>
          </div>
          <div class="btn">
           <v-btn class="continue" @click="goToRoute">Continue</v-btn>
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
        name: 'recovery-option',

        methods: {
            goToRoute(){
                this.$router.push({ path: '/forget-password/phone-verification'});
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
.Recovery-Option{
    position: relative;
}
.recovery-choices{
    width: 22rem;
    padding: 10px 0;
    margin: 20px auto;

}
/* .flex{
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
} */
/* The container */
        .container {
          display: block;
          position: relative;
          margin-bottom: 12px;
          cursor: pointer;
        }
        
        /* Hide the browser's default radio button */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        
        /* Create a custom radio button */
        .checkmark {
          position: absolute;
          top: 30%;
          left: 90%;
          height: 20px;
          width: 20px;
          background-color: #eee;
          border-radius: 50%;
        }
        
        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
          background-color: #ccc;
        }
        
        /* When the radio button is checked, add a blue background */
        .container input:checked ~ .checkmark {
          background-color: #0CAD73;
        }
        
        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        /* Show the indicator (dot/circle) when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }
        
        /* Style the indicator (dot/circle) */
        .container .checkmark:after {
             top: 6.5px;
            left: 6.5px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }

.paragraph{
    font-size: 14px;
    line-height: 18px;
    margin-top: 20px;
    opacity: .5;
   
}
.label{
    display: flex;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
}
input[type='text']{
    border: 2px solid #ECECEC;
    height: 54px;
    width: 23.5vw;
    border-radius: 16px;
    margin-top: 20px;
    outline: none;
}
.btn{
    margin-top: 20px;
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