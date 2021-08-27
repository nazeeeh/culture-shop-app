<template>
 <div>
  <!-- <SaveOrCancelButton /> -->
  <div class="sub-section">
     <div class="flex-section">
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Pending</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate() }}</span> 
    </div>
    </div>
    <v-divider></v-divider>
    <v-layout>
        <v-row>
          <v-col cols="6">
            <form @submit.prevent="onCreateVendor">
                <div class="proof">
                 <label for="proof" class="name">Storefront imagery</label><br>
                 <div class="border-bg">
                   <input ref="file" 
                   v-on:change="onFileSelected" 
                   type="file" class="custom-file-input"
                   accept="image/*">
                   <icon class="add" name="add"></icon>
                 </div>
                </div>
                <div class="grid-input">
                <div class="input">
                 <label for="category" class="name">Category</label><br>
                    <select  v-model="category" class="grid">
                      <optgroup>
                        <option></option>
                      <option>Shoes</option>
                      </optgroup>
                    </select>
                    <icon class="dropdown" name="dropdown"></icon>
                </div>
                <div class="input">
                 <label for="Store name" class="name">Store name</label><br>
                 <input v-model="shopName" type="text" class="grid" value="Leon store">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="First name" class="name">First name</label><br>
                 <input v-model="firstName" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Last name" class="name">Last name</label><br>
                 <input v-model="lastName" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Email address" class="name">Email address</label><br>
                 <input v-model="email" type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input v-model="password" type="password" class="grid">
                </div>
                </div>
                 <div class="grid-input">
                 <div class="input">
                 <label for="Street address" class="name">Street address</label><br>
                 <input v-model="address" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input v-model="postcode" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="City" class="name">City</label><br>
                 <input v-model="city" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Storewide discount" class="name">Storewide discount</label><br>
                 <input v-model="storewideDiscount" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Mobile number" class="name">Mobile number</label><br>
                 <input v-model="phone" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Card name" class="name">Name on card</label><br>
                 <input v-model="nameCard" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Sort code" class="name">Sort code</label><br>
                 <input v-model="sortCode" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="Account number" class="name">Account number</label><br>
                 <input v-model="accountNumber" type="text" class="grid">
                </div>
                </div>
                <div class="btn-btn">
                <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Cancel</v-btn>
                <v-btn class="btn btn-save py-6 px-12 text-uppercase" type="submit">Save</v-btn>
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
    // import SaveOrCancelButton from '../../resources/Saveorcancel.vue'
    import OpeningHours from '../../resources/Openhours.vue'
    import moment from 'moment'
    export default {
        components: {
            // SaveOrCancelButton,
            OpeningHours
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

    computed: {
      formIsValid() {
            return this.selectedFile !== null &&
            this.firstName !== '' &&
            this.lastName !== '' &&
            this.shopName !== '' &&
            this.email !== '' &&
            this.password !== '' &&
            this.address !== '' &&
            this.postcode !== '' &&
            this.city !== '' &&
            this.storewideDiscount !== '' &&
            this.phone !== '' &&
            this.nameCard !== '' &&
            this.sortCode !== '' &&
            this.accountNumber !== '',
            this.category
          }
    },

    methods: {
          displayDate(){
            const m = moment()
            m.format('MMMM Do YYYY, h:mm:ss a')
            return m
          },
          
          onFileSelected(){
            this.selectedFile = this.$refs.file.files[0]
          },
          onCreateVendor(e){
            e.preventDefault()
            if(!this.formIsValid) {
              return
            }   
      try {
          let vendorData= new FormData();
          vendorData.append("firstname", this.firstname);
          vendorData.append("lastname", this.lastName);
          vendorData.append("shop_name", this.shopName); 
          vendorData.append("email", this.email);
          vendorData.append("password", this.password);
          vendorData.append("address", this.address);
          vendorData.append("postcode", this.postcode);
          vendorData.append("city", this.city);
          vendorData.append("discount", this.storewideDiscount);
          vendorData.append("phone", this.phone);
          vendorData.append("name_card", this.nameCard);
          vendorData.append("sort_code", this.sortCode);
          vendorData.append("acct_number", this.accountNumber);
          vendorData.append("category", this.category);
          vendorData.append("discount", this.storewideDiscount);
          vendorData.append("monday", this.monday);
          vendorData.append("tuesday", this.tuesday);
          vendorData.append("wednesday", this.wednesday);
          vendorData.append("thursday", this.thursday);
          vendorData.append("friday", this.friday);
          vendorData.append("saturday", this.saturday);
          vendorData.append("sunday", this.sunday);
          
          const sendData = this.$api.addVendor(vendorData)
          console,log(sendData)
        }catch (err){
          return err
        }
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
.dropdown{
  position: absolute;
  left:23%;
  top: 36.5%;
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
    padding: 5px;
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
.btn-cancel{
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
</style>