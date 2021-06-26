<template>
 <div>
  <SaveOrCancelButton />
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
                <div class="proof">
                 <label for="proof" class="name">Storefront imagery</label><br>
                 <div class="border-bg">
                  <div class="images">
                    <div class="pic">
                        <icon name="add"></icon>
                    </div>
                  </div>
                 </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Permissions" class="name">Permissions</label><br>
                 <input type="text" class="grid" >
                </div>
                <div class="input">
                 <label for="Store name" class="name">Store name</label><br>
                 <input type="text" class="grid" value="Leon store">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="First name" class="name">First name</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Last name" class="name">Last name</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Email address" class="name">Email address</label><br>
                 <input type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input type="password" class="grid">
                </div>
                </div>
                <div class="input">
                <label for="Mobile number" class="name">Mobile number</label><br>
                <input type="text" class="stock"><br>
                </div>
                 <div class="grid-input">
                  <div class="input">
                 <label for="Street address" class="name">Street address</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="City" class="name">City</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Storewide discount" class="name">Storewide discount</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
            </form>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6">
           <div class="system-bar">
            <div class="bar-section">
              <div class="customer-spending">
                <OpeningHours />  
              </div>
            </div>
            </div>
          </v-col>
        </v-row>
      </v-layout>
 </div>
</template>

<script>
    import SaveOrCancelButton from '../../resources/Saveorcancel.vue'
    import OpeningHours from '../../resources/Openhours.vue'
    export default {
        components: {
            SaveOrCancelButton,
            OpeningHours
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
    }

    }
</script>

<style scoped>
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
form{
  font-family: 'Space Grotesk';
}
.stock {
  border: 2px solid #ECECEC;
  border-radius: 16px;
  width: 39vw;
  height: 6vh;
  padding: 10px;
  outline: none;
}
.stock:focus{
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
textarea{
    width: 39vw;
    border: 2px solid #ECECEC;
    border-radius: 16px;
    height: 20vh;
    outline: none;
}
textarea::placeholder{
    padding: 10px 20px;
}
.system-bar{
    border-left: 2px solid #ECECEC;
    height: 120vh;
    margin-left: 60px;
}
.customer-spending{
    display: flex;
    font-family: 'Space Grotesk';
  
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

.view{
    display: flex;
    font-family: Space Grotesk;
    font-weight: normal;
    font-size: 14px;
    color: #0CAD73;

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