<template>
 <div class="Edit-driver">
  <div class="sub-section">
    <div class="flex-section">
    <span>#{{driver.id}}</span>
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
            <form @submit.prevent="onUpdateDriver">
                <div class="grid-input">
                <div class="input">
                 <label for="vehicle type" class="name">Vehicle type</label><br>
                 <select v-model="driver.vehicle" name="role" class="grid">
                  <option value=""></option>
                  <option value="Car">Car</option>
                </select>
                <icon class="dropdown" name="dropdown"></icon>
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="first name" class="name">First Name</label><br>
                 <input v-model="driver.firstname" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="last name" class="name">Last Name</label><br>
                 <input v-model="driver.lastname" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="email address" class="name">Email address</label><br>
                 <input v-model="driver.email" type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input v-model="driver.password" type="password" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="street address" class="name">Street address</label><br>
                 <input v-model="driver.address" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input v-model="driver.postcode" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">City</label><br>
                 <input v-model="driver.city" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="mobile number" class="name">Mobile number</label><br>
                 <input v-model="driver.phone" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">Documentation type</label><br>
                 <select v-model="driver.documentation" name="role" class="grid">
                  <option value=""></option>
                  <option value="Passports">Passport</option>
                </select>
                <icon class="doc-dropdown" name="dropdown"></icon>
                </div>
                <div class="input">
                 <label for="document number" class="name">Documentation number</label><br>
                 <input v-model="driver.doc_number" type="text" class="grid">
                </div>
                </div>
                <div class="proof">
                 <label for="proof" class="name">Documentation Proof</label><br>
                 <div class="border-bg">
                   <input ref="file" 
                   v-on:change="onFileSelected" 
                   type="file" class="custom-file-input"
                   accept="image/*">
                   <icon class="add" name="add"></icon>
                 </div>
                </div>
              <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
              <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" type="submit" :style="{background: '#0CAD73', color: '#fff'}">Save</v-btn>
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
    import moment from 'moment'
    export default {
        
      name: 'edit',
      props: {
        driver: {
          type: Object,
          required: true
        }
      },
      
        components: {
            Subhead
           
        },
        data () {
        return {
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          postcode: '',
          documentation: '',
          doc_number: '',
          vehicle: '',
          password: '',
          selectedFile: ''
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
          onUpdateDriver(e){
            e.preventDefault()
            // if(!this.formIsValid){
            //   return 
            // }
        try{
            let updateData = new FormData();
            updateData.append("firstname", this.driver.firstname);
            updateData.append("lastname", this.driver.lastname);
            updateData.append("email", this.driver.email);
            updateData.append("phone", this.driver.phone);
            updateData.append("address", this.driver.address);
            updateData.append("city", this.driver.city);
            updateData.append("postcode", this.driver.postcode);
            updateData.append("documentation", this.driver.documentation);
            updateData.append("doc_number", this.driver.doc_number);
            updateData.append("vehicle", this.driver.vehicle);
            updateData.append("password", this.driver.password);
            updateData.append("passport", this.driver.selectedFile);
            
            // async fetch (){
            // const sendData = await $axios.$post(`https://api.thecultureshop.co.uk/api/v1/update/driver2/${params.id}`, updateData)
            
            const sendData = this.$api.editDriver(this.$route.params.id, updateData)
            this.$showSnackBar({
                     show: true,
                     timeout: 3000,
                     message: `Profile Updated`,
                     color: 'green',
                    })
                    // RESET INPUT VALUES
                    this.firstname = this.lastname = this.email = this.password = this.postcode = 
                    this.documentation = this.doc_number = this.vehicle = this.password = this.passport = ""
        } catch(err){
          return err
        }
      }
      }
        
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
.dropdown{
  position: absolute;
  left:23%;
  top: 19%;
}
.doc-dropdown{
  position: absolute;
  left: 23%;
  top: 67%;
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
.add{
  position: absolute;
  top: 49.5rem;
  left: 5.5rem;
  cursor: pointer;
}
</style>