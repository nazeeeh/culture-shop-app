<template>
 <div>
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
            <form @submit.prevent="onCreateDriver">
                <div class="input svg-inner">
                 <label for="vehicle type" class="name">Vehicle type</label><br>
                 <select v-model="vehicle" name="role" class="grid">  
                  <option value=""></option>
                  <option value="Car">Car</option>
                </select>
                <icon class="dropdown" name="dropdown"></icon>
                </div>
              
                <div class="grid-input">
                  <div class="input">
                 <label for="first name" class="name">First Name</label><br>
                 <input v-model="firstname" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="last name" class="name">Last Name</label><br>
                 <input v-model="lastname" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="email address" class="name">Email address</label><br>
                 <input v-model="email" type="email" class="grid">
                </div>
                <div class="input">
                 <label for="password" class="name">Password</label><br>
                 <input v-model="password" type="password" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="street address" class="name">Street address</label><br>
                 <input v-model="address" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="postcode" class="name">Postcode</label><br>
                 <input v-model="postcode" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="city" class="name">City</label><br>
                 <input v-model="city" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="mobile number" class="name">Mobile number</label><br>
                 <input v-model="phone" type="text" class="grid">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input svg-inner">
                 <label for="city" class="name">Documentation type</label><br>
                 <select v-model="documentation" name="role" class="grid">
                  <option value=""></option>
                  <option value="Passports">Passport</option>
                </select>
                   <icon class="doc-dropdown" name="dropdown"></icon>
                </div>
                <div class="input ">
                 <label for="document number" class="name">Documentation number</label><br>
                 <input v-model="doc_number" type="text" class="grid">
                </div>
                </div>
                <div class="proof">
                 <label for="proof" class="name">Documentation Proof</label><br>
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
                   type="file" class="custom-file-input">
                   <icon class="add" name="add"></icon>
                 </div> -->
                </div>
                  <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
                  <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" type="submit" :style="{background: '#0CAD73', color: '#fff'}">Save</v-btn>
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
    import moment from 'moment'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    

    export default {
      components: {
        VueUploadMultipleImage
      },
        data () {
         return {
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          selectedFile: '',
          postcode: '',
          documentation: '',
          doc_number: '',
          vehicle: '',
          password: '',
          selectedFile: ''
        }
      },

    computed: {
     displayDate(){
       const m = moment()
        m.format('MMMM Do YYYY, h:mm:ss a')
        return m
        },

    //  formIsValid() {
    //     return this.firstname !== '' &&
    //     this.lastname !== '' &&
    //     this.email !== '' &&
    //     this.phone !== '' &&
    //     this.address !== '' &&
    //     this.postcode !== '' &&
    //     this.doc_number !== '' &&
    //     this.vehicle !== '' &&
    //     this.password !== '' &&
    //     this.selectedFile !== ''
    //     }
    },
    methods: {
      onFileSelected(){
            this.selectedFile = this.$refs.file.files[0]
          },

          onCreateDriver(e){
            e.preventDefault()
            // if(!this.formIsValid){
            //   return 
            // }
            try {
              let driverData = new FormData();
              driverData.append("firstname", this.firstname);
              driverData.append("lastname", this.lastname);
              driverData.append("email", this.email); 
              driverData.append("phone", this.phone);
              driverData.append("address", this.address);
              driverData.append("postcode", this.postcode);
              driverData.append("city", this.city);
              driverData.append("passport", this.selectedFile);
              driverData.append("documentation", this.documentation);
              driverData.append("doc_number", this.doc_number);
              driverData.append("vehicle", this.vehicle);
              driverData.append("password", this.password);
          
              const response = this.$api.addDriver(driverData)
              this.$showSnackBar({
                     show: true,
                     timeout: 3000,
                     message: `Driver Added`,
                     color: 'green',
                    })
                    //RESET INPUT VALUES
                    this.selectedFile = this.firstname = this.lastname = this.email =
                  this.address = this.city = this.documentation = this.doc_number 
                  = this.vehicle = this.password = ""

              console.log(response)
            } 
            catch (err) {
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

.svg-inner {
  position: relative;
  width: 100%;

}
.dropdown{
  position: absolute;
  left: 40%;
  top: 55%;
  display: block;
  padding: 0;
  z-index: 1;
}

.doc-dropdown{
  position: absolute;
  left: 84%;
  top: 55%;
  display: block;
  padding: 0;
  z-index: 1;
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