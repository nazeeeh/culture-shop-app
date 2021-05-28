<template>

  <div class="user-permisions">
    <v-btn @click="showPage = !showPage" class="btn-btn py-6 px-10 text-uppercase" v-show="showPage">add new</v-btn>
      <div class="hide-show" v-if="showPage">

        <div class="user-permission">
          <div class="main-flex">
            <div class="export-box">
              <span class="text-uppercase t-text">Export</span>
                <icon name="dropdown" class="mt-1"></icon>
            </div>
            <div class="form-area">
            <form>
              <label class="search-text" for="Search">Search</label>
              <input type="search" placeholder="search for content">
            </form>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="round">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox"></label>
                </div>
        <div class="table">
          
          <sorted-table :values="values">
            <thead>
              <tr> 
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="id">Id</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="name"><span style="display: flex; align-items: center"> Date <icon name="up"></icon></span></sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits">Admin & Role</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits">Admin Details</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits"><span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Status</span> All <icon name="dropdown"></icon> </span></sort-link>
                </th>
              </tr>
            </thead>
      <template>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </sorted-table>
    </div>

    <div class="export-box bulk-action">
        <span class="text-uppercase t-text">Bulk Action</span>
        <icon name="dropdown" class="mt-1"></icon>
      </div>
  </div>

  <div v-else class="user-page">
    <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
    <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" :style="{background: '#0CAD73', color: '#fff'}" @click="dialog = true">Save</v-btn>

    <!-- Dialog -->
    <v-layout>
      <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
       <v-card class="dialog py-8 px-12">
        <v-card-text class="text-header" :style="{color: '#192135'}"><span>Are you sure want to add this new user? </span></v-card-text>
         <v-card-actions>
          <div class="button-dialog">
           <v-btn class="btn-f mx-2 px-14 py-6 white--text" color="#192135" @click="dialog = false"><span>No</span></v-btn>
           <v-btn class="btn-f px-14 py-6 white--text" color="#0CAD73" @click="dialog = false"><span>Yes</span></v-btn>
          </div>
         </v-card-actions>
        </v-card>
      </v-dialog>
     </v-row>
    </v-layout>

      <div>
        <div class="flex-section">
         <div class="box">
          <span class="text-uppercase t-text" :style="{color: '#0CAD73'}">Approved</span> 
         </div>
          <icon name="calender" class="mx-4"></icon>
          <!-- Date -->
          <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
        </div>
        <v-divider></v-divider>
      </div>

      <v-layout>
        <v-row>
          <v-col cols="6">
            <form>
                <div class="input">
                <label for="permission" class="name ">Permissions</label><br>
                <input type="text" class="permission"><br><br>
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

  </div>
</template>

<script>

    export default {
      name: 'user-permission',
      components: {},
      
      data () {
      return {
        date: new Date(),
        time: new Date(),

        showPage: true,
        dialog: false,
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
  .user-permission {
    font-family: 'Space Grotesk';
    margin: 5px 0 6px 34px;
  }
  .table {
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin: 5px 0px 6px 100px;
  }
  .round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 35px;
  position: absolute;
  top: 35px;
  width: 20px;
}
.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}
.round input[type="checkbox"]:checked + label {
  background-color: grey;
  border-color: grey;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
 
.btn-btn{
  position: absolute;
  top: 10px;
  right: 40px;
  background: #0CAD73 !important;
  color: #fff;
  box-shadow: none;
  border-radius: 16px;
  font-family: 'Space Grotesk';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
  }
  .main-flex{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .export-box{
    display: flex;
    align-items: center;
  }

  .form-area{
    margin-right: 40px;
  }
  .t-text{
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
  }
  .search-text{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  input[type='search']{
    border: 2px solid #ECECEC;
    border-radius: 12px;
    height: 6vh;
    padding: 10px;
  }
  .bulk-action{
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
    color: grey;
    margin: 50px 0 6px 34px;
  }
/* Add users */
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  background: rgba(12, 173, 115, 0.1);
  border-radius: 16px;
  height: 4vh;
}
.flex-section{
  display: flex;
  margin: 20px 0 20px 34px;
}
.user-page{
  font-family: 'Space Grotesk';
}
.t-text{
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.07em;
}
.datepicker{
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.07em;
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
    margin-left: 40px;
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
/* dialog */
.text-header{
  font-family: 'Space Grotesk';
  font-weight: bold;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
}
.btn-f{
    box-shadow: none;
    border-radius: 16px;
}
.button-dialog{
  text-align: center;
  width: 100%;
}
.dialog{
    font-family: 'Space Grotesk'; 
}
</style>


