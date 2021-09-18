<template>
    <div class="vendor-permission">
      <div class="btn-flex">
       <v-btn class="btn-cancel py-6 px-10 text-uppercase">Cancel</v-btn>
       <v-btn class="btn-save py-6 px-12 text-uppercase mx-2" :style="{background: '#0CAD73', color: '#fff'}">Save</v-btn>
      </div>
      
      <div>
        <div class="flex-section">
         <div class="box">
          <span class="text-uppercase t-text">Most up to date</span> 
         </div>
          <icon name="calender" class="mx-4"></icon>

          <!-- Date -->
          <span class="text-uppercase datepicker mt-1">{{ displayDate }}</span> 
        </div>
        <v-divider></v-divider>
      </div>

        <v-row>
          <v-col cols="6">
            <form>
                <div class="input">
                <label for="name" class="name">Name</label><br>
                <input type="text"><br><br>
                </div>
                <div class="input">
                <label for="description" class="name">Description</label><br>
                <textarea name="" id="" rows="10" placeholder="Reply"></textarea>
                </div>
            </form>
            
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6">
              <div class="system-bar">
                 
              </div>
          </v-col>
        </v-row>
      </div>
      
</template>

<script>
    export default {
      name: 'vendor-agreement',

    data: () => ({
        date: new Date(),
        time: new Date()
    }),

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
.vendor-permission{
    font-family: 'Space Grotesk';
}
/* .btn-flex{
    
    width: 21vw;
    position: absolute;
    top: 10px;
    right: 5px;
    border: 1px solid red;
} */
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
.t-text{
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
    color: #0CAD73;
}
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
    /* border: 1px solid red; */
}
.datepicker{
    font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.07em
}
form {
    font-family: 'Space Grotesk';
}
input[type='text']{
    border: 2px solid #ececec;
    border-radius: 16px;
    width: 39vw;
    height: 8vh;
    padding-left: 25px;
    margin-top: 12px;
}

textarea{
    border: 2px solid #ECECEC;
    border-radius: 16px;
    padding-left: 25px;
    padding-top: 10px;
    width: 39vw;

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
}

.system-bar{
    border-left: 2px solid #ECECEC;
    height: 100vh;
    margin-left: 40px;
}
</style>