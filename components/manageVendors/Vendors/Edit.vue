<template>
 <div>
  <SaveOrCancelBtn />
    <div class="sub-section">
     <div class="flex-section">
     <span>#{{vendor.id}}</span>
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#0CAD73'}">Approved</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate() }}</span> 
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
                <div class="proof">
                 <label for="proof" class="name">Storefront imagery</label><br>
                 <vue-upload-multiple-image
                 dragText="Upload Image"
                 browseText=""
                 showEdit= ""
                 primaryText=""
                 showDelete= ""
                 markIsPrimaryText=""
                 ></vue-upload-multiple-image>
                 <!-- <div class="border-bg">
                   <input ref="file" 
                   v-on:change="onFileSelected" 
                   type="file" class="custom-file-input"
                   accept="image/*">
                   <icon class="add" name="add"></icon>
                 </div> -->
                </div>
                <div class="grid-input">
                 <div class="input svg-inner">
                 <label for="category" class="name">Category</label><br>
                    <select  v-model="vendor.category" class="grid">
                      <optgroup>
                        <option></option>
                      <option>Shoes</option>
                      <option>Meat</option>
                      </optgroup>
                    </select>
                    <icon class="dropdown" name="dropdown"></icon>
                </div>
                <div class="input">
                 <label for="Store name" class="name">Store name</label><br>
                 <input v-model="vendor.shop_name" type="text" class="grid" value="Leon store">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="First name" class="name">First name</label><br>
                 <input v-model="vendor.firstname" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Last name" class="name">Last name</label><br>
                 <input v-model="vendor.lastname" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Email address" class="name">Email address</label><br>
                 <input v-model="vendor.email" type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input v-model="vendor.password" type="password" class="grid">
                </div>
                </div>
                 <div class="grid-input">
                  <div class="input">
                 <label for="Street address" class="name">Street address</label><br>
                 <input v-model="vendor.address" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input v-model="vendor.postcode" type="text" class="grid">
                </div>
                </div>
               <div class="grid-input">
                  <div class="input">
                 <label for="City" class="name">City</label><br>
                 <input v-model="vendor.city" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Storewide discount" class="name">Storewide discount</label><br>
                 <input v-model="storewideDiscount" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Mobile number" class="name">Mobile number</label><br>
                 <input v-model="vendor.phone" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Card name" class="name">Name on card</label><br>
                 <input v-model="vendor.nameCard" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Sort code" class="name">Sort code</label><br>
                 <input v-model="vendor.sortCode" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Account number" class="name">Account number</label><br>
                 <input v-model="vendor.accountNumber" type="text" class="grid">
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
              <v-divider></v-divider>
              <div class="app-clip mt-2"> 
               <icon name="clip"></icon>
               <span class="t-head mt-1 mx-2 text-capitalize">App clip usage</span>
              </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Innvocations:</span>
            </div>
            <v-divider></v-divider>
            <div class="vendor-earnings mt-2"> 
               <icon name="pie"></icon>
               <span class="t-head mt-1 mx-2 text-capitalize">Vendor Earning activities</span>
              </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Lifetime spend</span>
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
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Earnings</span>
            </div>
            <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Store visitors</span>
            </div>
            <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Sales</span>
            </div>
            <v-divider></v-divider>
            </div>
            </div>
          </v-col>
        </v-row>
      </v-layout>
 </div>
 
</template>

<script>
    import SaveOrCancelBtn from '../../resources/Saveorcancel'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    import Subhead from '../../resources/Vendorsubhead'
    import OpeningHours from '../../resources/Openhours'
    import moment from 'moment'
    export default {
        components: {
            SaveOrCancelBtn,
            Subhead,
            OpeningHours,
            VueUploadMultipleImage
        },
        props: {
        vendor: {
          type: Object,
          required: true
        }
      },
        data() {
          return {
            selectedFile: '',
              firstName: '',
              lastName: '',
              shopName: '',
              email: '',
              password: '',
              address: '',
              postcode: '',
              city: '' ,
              storewideDiscount: '',
              phone: '',
              nameCard: '',
              sortCode: '',
              accountNumber: '',
              category: '',
          }
        },

    methods: {
      displayDate(){
            const m = moment()
            m.format('MMMM Do YYYY, h:mm:ss a')
            return m
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

.svg-inner {
  position: relative;
  width: 100%;
}

.dropdown{
  position: absolute;
  left: 85%;
  top: 55%;
  display: block;
  padding: 0;
  z-index: 1;
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
    margin-bottom: 20px;
    margin-left: -40px;
}
.app-clip{
    display: flex;
    font-family: 'Space Grotesk';
    margin-bottom: 20px;
}

.vendor-earnings{
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
    width: 19vw;
    height: 8vh;
    padding-left: 25px;
    margin-top: 12px;
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
.add{
  position: absolute;
  top: 13rem;
  left: 5rem;
  cursor: pointer;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: '';
  margin-top: 15px;
  margin-left: 10px;
  width: 8vw;
  align-self: center;
  text-align: center;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 6.29091px;
  padding: 25px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
}
.custom-file-input:hover::before {
  border-color: black;
}
</style>