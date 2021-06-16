<template>
 <div>
  <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
  <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" :style="{background: '#0CAD73', color: '#fff'}">Save</v-btn>
  <div class="sub-section">
    <div class="flex-section">
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Pending</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
     </div>
     
  </div>
  <v-divider></v-divider>
  <v-layout>
        <v-row>
          <v-col cols="6">
            <form>
                <div class="input">
                <label for="permission" class="name ">Permissions</label><br>
                <input type="dropdown" class="permission"><br><br>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="first name" class="name">First Name</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="last name" class="name">Last Name</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="email address" class="name">Email address</label><br>
                 <input type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input type="password" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="street address" class="name">Street address</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">City</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="mobile number" class="name">Mobile number</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">Documentation type</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="mobile number" class="name">Documentation number</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="proof">
                 <label for="proof" class="name">Documentation Proof</label><br>
                 <div class="border-bg">
                  <div class="images">
                    <div class="pic">
                        <icon name="add"></icon>
                    </div>
                  </div>
                 </div>
                 <!-- <input type="text" class="grid"> -->
                </div>

            </form>
          </v-col>
          
          <v-spacer></v-spacer>

          <v-col cols="6">
           <div class="system-bar">
            
            </div>
          </v-col>
        </v-row>
      </v-layout>
 </div>
</template>

<script>
    export default {
         data () {
        return {
            date: new Date(),
            time: new Date(),
            }
        },

    computed: {
     displayDate(){
        const date = new Date(this.date);
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
        return date
        }
    },
    }
</script>

<style scoped>
.btn-save{
    position: absolute;
    top: 10px;
    right: 5px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.btn-cancel{
    position: absolute;
    top: 10px;
    right: 160px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.sub-section{
    display: flex;
    justify-content: space-between;
}
.flex-section{
  display: flex;
  margin: 20px 0 20px 34px;
  font-family: 'Space Grotesk';
}
.t-text{
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.07em;
}
.t-head{
   font-family: 'Space Grotesk';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%; 
}
.t-small{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
}
.datepicker{
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
}
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  background: rgba(231, 109, 20, 0.1);
  border-radius: 16px;
  height: 4vh;
}
.permission {
  border: 2px solid #ECECEC;
  border-radius: 16px;
  width: 40vw;
  height: 6vh;
  padding: 10px;
  outline: none;
}
form{
    font-family: 'Space Grotesk';
}
.permission:focus{
  border: 2px solid #192135;
}
.input{
  margin: 20px 0 10px 34px;
}
.proof{
    margin: 20px 0 10px 34px;
}
.images .pic {
  border: 1px solid #ECECEC;
  border-radius: 6.29091px;
  margin-top: 15px;
  margin-left: 20px;
  align-self: center;
  text-align: center;
  padding: 25px 0;
  width: 8vw;
  cursor: pointer;
}
.border-bg{
    border: 1px solid #ECECEC;
    border-radius: 16px;
    height: 15vh;
    width: 39vw;
}
 .name{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}
.system-bar{
    border-left: 2px solid #ECECEC;
    height: 120vh;
    margin-left: 60px;
}
.grid-input{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.grid {
    border: 2px solid #ECECEC;
    border-radius: 16px;
    width: 18.5vw;
    height: 6vh;
    padding: 10px;
    outline: none;
}
.grid:focus{
  border: 2px solid #192135;
}
</style>