<template>
 <div>
  <!-- <Button /> -->
  <div class="sub-section">
    <div class="flex-section">
    <!-- <span>{{shop_id}}</span> -->
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Draft</span> 
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
   <v-row>
    <v-col cols="6">
     <form @submit.prevent="onCreateCategory">
        <!-- <div class="input">
        <label for="last name" class="name">Id</label><br>
        <select name="role" class="grid">
        <option value=""></option>
        <option value="Administrator">Car</option>
        </select>
        </div> -->
      <div class="input">
       <label for="name" class="name">Name</label><br>
       <input v-model="name" type="text" ><br><br>
      </div>
      <div class="input">
       <label for="description" class="name">Description</label><br>
       <textarea v-model="description" name="" rows="10" placeholder="Reply"></textarea>
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
             <icon name="info"></icon>
             <span class="t-head mt-1 mx-2 text-capitalize">Information</span>
            </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small text-capitalize">Products:</span>
            </div>
                <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Vendors:</span>
            </div>
                <v-divider></v-divider>
            </div>
            </div>
          </v-col>
    </v-row>
 </div>
</template>

<script>
    // import Button from '../../resources/Buttons'
    import Subhead from '../../resources/Subheadcategory'
    import moment from 'moment'
    export default {
        components: {
            // Button,
            Subhead
        },
         data () {
        return {
            name: '',
            description: ''
            }
        
        },

    computed: {
     displayDate(){
       const m = moment()
        m.format('MMMM Do YYYY, h:mm:ss a')
        return m
        },

        formIsValid() {
        return this.name !== '' &&
        this.description !== '' 
        }
    },
    methods: {
         onCreateCategory(e){
            e.preventDefault()
            if(!this.formIsValid){
              return 
            }
            
        try{
            let categoryData= new FormData();
            categoryData.append("name", this.name);
            categoryData.append("description", this.description);

            const response = this.$api.addCategory(categoryData)
            this.$showSnackBar({
                     show: true,
                     timeout: 3000,
                     message: `Category Added`,
                     color: 'green',
                    })
                    //RESET INPUT VALUES
                    this.name = this.description = ""
            } catch(err){
                return err
            }
        }          
    }
        
    }
</script>

<style scoped>
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
input[type='text']{
    /* border: 2px solid #ECECEC; */
    border: 2px solid #ECECEC;
    border-radius: 16px;
    width: 40vw;
    height: 6vh;
    padding: 10px;
    outline: none;
    
}
input[type='text']:focus{
    border: 2px solid #192135;
}
.grid {
    border: 2px solid #ECECEC;
    border-radius: 16px;
    width: 18.5vw;
    height: 6vh;
    padding: 10px;
    outline: none;
}

textarea{
    border: 2px solid #ECECEC;
    border-radius: 16px;
    padding: 10px;
    width: 40vw;
    outline: none;
}
textarea:focus{
    border: 2px solid #192135;
}
.input{
   margin: 20px 0 20px 34px; 
}
.name{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    outline: none;
}

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
.life-spending{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.bar-section{
    padding: 40px;
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