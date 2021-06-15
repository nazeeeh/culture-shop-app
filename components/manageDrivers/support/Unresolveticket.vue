<template>
 <div>
  <Buttons />
  <div class="sub-section">
    <div class="flex-section">
    <span>#ID</span>
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#E76D14'}">Unresolved</span> 
     </div>
     <icon name="calender" class="mx-4"></icon>
     <!-- Date -->
     <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
     </div>
     <Subhead />
     </div> 
     <v-divider></v-divider>

      <v-row>
    <v-col cols="6">
     <form>
      <div class="input">
       <label for="name" class="name">Ticket Title</label><br>
       <input type="text"><br><br>
      </div>
      <div class="input">
       <label for="description" class="name">Message</label><br>
       <textarea name="" id="" rows="10" placeholder="Reply"></textarea>
      </div>
      <v-btn class="btn">Submit Reply</v-btn>
     </form>    
    </v-col>
    <v-spacer></v-spacer>
     <v-col cols="6">
           <div class="system-bar">
            <div class="bar-section">
              <div class="customer-spending">
               <icon name="profile"></icon>
               <span class="t-head mt-1 mx-2 text-capitalize">Customer</span>
              </div>
              <v-divider></v-divider>
              <div class="previous-reply">
               <icon name="new"></icon>
               <span class="t-head mx-2 text-capitalize">Previous Replies</span>
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
    import Buttons from '../../resources/Ticketbutton'
     import Subhead from '../../resources/Ticketsubhead'
    export default {
        components:{
            Buttons,
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
   font-family: 'Space Grotesk';
}
.name{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    outline: none;
}
.btn{
    font-family: 'Space Grotesk';
    background: #0CAD73 !important;
    color: #fff !important;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
    margin: 0px 0 20px 34px; 
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