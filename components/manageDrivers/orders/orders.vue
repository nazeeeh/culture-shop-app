<template>
 <div>
  <Buttons />
  <div class="sub-section">
    <div class="flex-section">
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Paid</span>   
     </div>
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Pending</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
     <div>
      <RightSubhead />
     </div>
     </div>
  </div>
  <v-divider></v-divider>

  <v-row>
    <v-col cols="6">
     
      <div class="left-section">
      <div class="sub-flex">
       <h4>Leon store</h4>
       <div class="time-flex">
         <icon name="time"></icon><span class="mx-1 mt-1 t-small">Collection in </span>
       </div>
      </div>
      <v-divider></v-divider>
      <div class="products">
        <div>
         <span>Product</span>
         <span class="mx-9">Name</span>
        </div>
        <div>
         <span class="mx-9">Price</span>
         <span>Qty</span>
        </div>
      </div>
      <v-divider></v-divider>
      <OrderDetails />
     </div>
     
     
    </v-col>
    <v-spacer></v-spacer>
     <v-col cols="6">
           <div class="system-bar">
            <div class="bar-section">
              <div class="customer-spending">
               <icon name="vendor"></icon>
               <span class="t-head mt-1 mx-2 text-capitalize">Vendor</span>
              </div>
              <v-divider></v-divider>
              <div class="previous-reply">
               <icon name="profile"></icon>
               <span class="t-head mx-2 text-capitalize">Customer</span>
              </div>
            <!-- <div class="life-spending">
             <span class="t-small text-capitalize">Products:</span>
            </div> -->
                <v-divider></v-divider>
            
            </div>
            
            </div>
          </v-col>
    </v-row>

  

 </div>
</template>

<script>
    import Buttons from '../../resources/PrevNext'
    import RightSubhead from '../../resources/Ordersubhead'
    import OrderDetails from '../../resources/Orderdetails'
    export default {
        components: {
            Buttons,
            RightSubhead,
            OrderDetails
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
.left-section{
  margin: 20px 0 20px 34px; 
  font-family: Space Grotesk;
}
.sub-flex{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
}
.sub-flex h4{
  
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
}
.time-flex{
  display: flex;
}
.products{
  display: flex;
  justify-content: space-between;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin: 20px 0;
}

/* .input{
   margin: 20px 0 20px 34px; 
} */


.system-bar{
    border-left: 2px solid #ECECEC;
    height: 100vh;
    margin-left: 40px;
}
.customer-spending{
    display: flex;
    font-family: 'Space Grotesk';
    margin-bottom: 20px;
}
.previous-reply{
    display: flex;
    font-family: 'Space Grotesk';
    margin-top: 20px;
}
.life-spending{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.bar-section{
    padding: 20px 40px;
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
</style>