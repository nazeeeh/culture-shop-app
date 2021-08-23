<template>
 <div>
  <Buttons />
   <div class="sub-section">
    <div class="flex-section">
    <span>#{{ user.id}}</span>
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
            <form @submit.prevent="onUpdateCustomer">
                <div class="input">
                <label for="permission" class="name ">Permissions</label><br>
                <input type="dropdown" class="permission"><br><br>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="first name" class="name">First Name</label><br>
                 <input v-model="user.firstname"  type="text" class="grid" >
                </div>
                <div class="input">
                 <label for="last name" class="name">Last Name</label><br>
                 <input v-model="user.lastname" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="email address" class="name">Email address</label><br>
                 <input v-model="user.email" type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input v-model="user.password" type="password" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="street address" class="name">Street address</label><br>
                 <input v-model="user.address" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input v-model="user.postcode" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">City</label><br>
                 <input v-model="user.city" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="mobile number" class="name">Mobile number</label><br>
                 <input v-model="user.phone" type="text" class="grid">
                </div>
                </div>
                <div class="btn-btn">
                  <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Cancel</v-btn>
                  <v-btn class="btn btn-save-as-draft py-6 px-12 text-uppercase mr-2">Save As Draft</v-btn>
                  <v-btn class="btn btn-save py-6 px-12 text-uppercase" type="submit">Save</v-btn>
                </div>
            </form>
          </v-col>
          
          <v-spacer></v-spacer>

          <v-col cols="6">
           <div class="system-bar">
            <div class="bar-section">
              <div class="customer-spending">
             <icon name="pie"></icon>
             <span class="t-head mt-1 mx-2 text-capitalize">Customers spending activity</span>
            </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Life spending</span>
             <icon name="dropdown"></icon>
            </div>
              <v-divider></v-divider>
            <div class="outer-layer">
             <div class="box-display">
              <div>
               <p class="text-uppercase p-align mt-4 ml-8">Lifetime spending</p>
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
import {mapState} from 'vuex'
    import Buttons from '../../resources/Buttons'
    import Subhead from '../../resources/Subhead'
    import moment from 'moment'
    export default {
        name: 'edit',
        props: {
          user:{
            type: Object,
            required: true
          },
         
        },
       
        components: {
            Buttons,
            Subhead
        },
        // async fetch(context){
        //   console.log('context')
        // },

     data () {
        return {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          postcode: '',
          address: '',
          city: '',
          phone: '' 
          }
        },
        // fetch(){
        //   console.log(this.user)
        // },
        // created(){
        //   console.log(this.id)
        // },
        computed: {
          // ...mapState("customer", ["customerDetailsToView"])
        },
        methods: {
          displayDate(){
            const m = moment()
            m.format('MMMM Do YYYY, h:mm:ss a')
            return m
          },

          onUpdateCustomer(e){
            e.preventDefault()
            // if(!this.formIsValid){
            //   return 
            // }
        try{
            let updateData= new FormData();
            updateData.append("firstname", this.user.firstname);
            updateData.append("lastname", this.user.lastname);
            updateData.append("email", this.user.email);
            updateData.append("password", this.user.password);
            updateData.append("postcode", this.user.postcode);
            updateData.append("address", this.user.address);
            updateData.append("city", this.user.city);
            updateData.append("phone", this.user.phone);

            const sendData = this.$api.editCustomer(updateData, this.user.id)
            this.$showSnackBar({
                     show: true,
                     timeout: 3000,
                     message: `Profile Updated`,
                     color: 'green',
                    })
                    //RESET INPUT VALUES
                    this.firstname = this.lastname = this.email = this.password = this.postcode = 
                    this.address = this.city = this,phone = ""
        } catch (err){
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
  /* :value="customerDetailsToView.name" */
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
 .name{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}
.system-bar{
    border-left: 2px solid #ECECEC;
    height: 100vh;
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
.btn-save-as-draft{
    background: rgba(231, 109, 20, 0.1)!important;
    color: #E76D14 !important;
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