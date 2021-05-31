<template>
    <div class="login">
     <div class="main">
      <div class="logo">
       <Logo />
      </div>
      
        <!-- header -->
        <v-layout>
         <v-row>
          <v-col >
            <h3 class="header">Culture Shop</h3>
            <h5 class="sub-text">Administrator</h5>
          </v-col>
         </v-row>
        </v-layout>
        <!-- form -->
        <v-layout>
         <v-row>
          <v-col>
           <form>
            <input class="inputs" type="email" placeholder="Email Address" required/><br><br>
            <input class="inputs" type="password" placeholder="Password" required/><br><br>
            <div class="round">
             <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
              <span class="remember-me">Remember me</span>
            </div><br><br>
            <!-- <input type="checkbox">
            <label for="checkbox"></label><br><br> -->
            <v-btn class="sign-in-btn">Sign In</v-btn><br><br>
            <nuxt-link to="/forget-password/recovery-option">
             <span class="forgotten-password">Forgotten password</span>
            </nuxt-link>
           </form>
          </v-col>
         </v-row>
        </v-layout>
     </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo'
    export default {
        components: {
         Logo
        },
        layout: 'none'
    }
</script>

<style scoped>
.login{
    position: relative;
    text-align: center;
    font-family: 'Space Grotesk';
}
.login .main{
    position: absolute;
    /* border: 1px solid green; */
    top: 9em;
    left: 25%;
    padding: 30px 50px;
    width: 700px;
}

.header{
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    margin-top: 30px;
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
.sign-in-btn{
    background: #0CAD73 !important;
    color: #fff;
    box-shadow: none;
    width: 20vw;
    border-radius: 40px;
    height: 54px !important;
    text-transform: capitalize;
}
.remember-me{
    font-weight: bold;
    font-size: 15px;
    opacity: 0.8;
    margin-left: 10px;
}

a {
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: grey;
    opacity: 0.6;
    text-transform: capitalize;
}

label{
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 40%;
    position: absolute;
    top: 66.5%;
    width: 20px;
}
label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 3px;
  opacity: 0;
  position: absolute;
  top: 4px;
  transform: rotate(-45deg);
  width: 12px;
}
input[type="checkbox"] {
  visibility: hidden;
}
input[type="checkbox"]:checked + label {
  background-color: #0CAD73;
  border-color: #0CAD73;
}
input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>