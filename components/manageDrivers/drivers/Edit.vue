<template>
 <div class="Edit-driver">
  <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
  <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" :style="{background: '#0CAD73', color: '#fff'}">Save</v-btn>
  <div class="sub-section">
    <div class="flex-section">
    <span>#ID</span>
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#0CAD73'}">Approved</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
     </div>
     <div>
      <Subhead />
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
            <div class="bar-section">
              <div class="customer-spending">
             <icon name="pie"></icon>
             <span class="t-head mt-1 mx-2 text-capitalize">Driver earning activity</span>
            </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Life earnings</span>
             <icon name="dropdown"></icon>
            </div>
                <v-divider></v-divider>
            <div class="outer-layer">
             <div class="box-display">
              <div>
               <p class="text-uppercase p-align mt-4 ml-8">Lifetime earnings</p>
               <p class="p-align-t ml-8"><span>&#163;</span>0.00</p>
              </div>
              <div class="rounded-corners mt-4 mr-8">
               <span class="p-increase">0.0%</span>
               <Icon name="up" />
             </div>
             </div>
             <v-divider class="mx-8"></v-divider>
             <div class="graph-1">
              <img src="~/assets/img/Graph.png" class="mx-8 my-6" />
             </div>
            </div>
            </div>
            
            </div>
          </v-col>
        </v-row>
      </v-layout>
 </div>
</template>

<script>
    import Subhead from '../../resources/Subheaddriver'
    export default {
        components: {
            Subhead
           
        },
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
  background: rgba(12, 173, 115, 0.1);
  border-radius: 16px;
  height: 4vh;
}
form{
  font-family: 'Space Grotesk';
}
.permission {
  border: 2px solid #ECECEC;
  border-radius: 16px;
  width: 40vw;
  height: 6vh;
  padding: 10px;
  outline: none;
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
.customer-spending{
    display: flex;
    font-family: 'Space Grotesk';
    margin-bottom: 20px;
}
.life-spending{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.bar-section{
    padding: 40px;
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

/* graph component css */
.box-display{
    display: flex;
    justify-content: space-between;
}

.outer-layer{
    width: 30vw;
    font-family: 'Space Grotesk';
    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 10px auto;
    margin-top: 20px;
}

.rounded-corners{
    display: flex;
    background: rgba(12, 173, 115, 0.1);
    justify-content: center;
    align-items: center;
    padding: 2px 12px;
    border-radius: 16px;
    height: 5vh;
}
.p-align{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
}
.p-align-t{
    font-size: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-top: -15px;
}
.p-increase{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
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
</style>