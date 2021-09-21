<template>
 <div>
  <v-list class="mb-8" flat width="470px">
    <v-list-group
        v-for="item in items"
        no-action
        :key="item.title"
        v-model="item.active"
        color="#000"
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <icon class="ml-6" :name="item.action"></icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="t-head mb-2 text-capitalize"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title">
          <v-list-item-content>
            <div class="time-border">
             <v-list-item-title v-text="child.title" class="text lis"></v-list-item-title>
               <div class="change">
                <span>{{child.t1}}  {{child.t2}}</span><span style="color: #0CAD73;" @click="dialog =true, itemToUse = child">Change</span>
               </div>
            </div>
          </v-list-item-content>
        </v-list-item>
        <!-- Dialog -->
        <v-layout >
          <v-row justify="center">
          <v-dialog v-model="dialog" :key="updateModal" persistent max-width="500">
          <v-card class="dialog py-8 px-12">
            <v-card-actions>
              <div class="button-dialog">
              <input @change="selectTime(itemToUse, 't1', 'startTime')" type="time" class="grid startTime"/><br>
              <span>to</span><br> 
              <input @change="selectTime(itemToUse, 't2', 'endTime')" type="time" class="grid endTime"><br>
              <button class="btn-f white--text" color="#0CAD73" @click="dialog = false, ++updateModal, sendDataToAddVendor()">ok</button>
              </div>
            </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row> 
        </v-layout>
      </v-list-group>
  </v-list>
  
 </div>
</template>

<script>
    export default {
        data () {
      return {
        dialog: false,
        updateModal: 0,
        itemToUse:{},

        items: [
        {
          action: 'openings',
          active: true,
          items: [
            { title: 'Monday', t1: '12:00', t2: '05:00'},
            { title: 'Tuesday', t1: '12:00', t2: '05:00'},
            { title: 'Wednesday', t1: '12:00', t2: '05:00'},
            { title: 'Thursday', t1: '12:00', t2: '05:00'},
            { title: 'Friday', t1: '12:00', t2: '05:00'},
            { title: 'Saturday', t1: '12:00', t2: '05:00'},
            { title: 'Sunday', t1: 'close'}
          ],
          title: 'Opening hours',
        }
      ],
      }
      },

      methods: {
        sendDataToAddVendor () {
          this.$emit("openHoursData", this.items[0].items)
        },
        selectTime(item, ele, node){
          const index = this.items[0].items.map((element) => 
          {
            return element.title
            }).indexOf(item.title)
          this.items[0].items[index][ele] = document.querySelector(`.${node}`).value
        }
      }
    }
</script>

<style scoped>
.t-head{
   font-family: 'Space Grotesk';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%; 
}
.text{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    padding-left: 16px;
}
.time-border{
    display:flex;
    /* justify-content: center; */
    padding: 18px;
    border: 2px solid #ECECEC;
    border-radius: 16px;
}
.change{
  display: flex;
  margin-left: -80px;
  justify-content: space-evenly;
  width: 300px;
  /* margin-right: 30px; */
}
.grid {
    border: 2px solid #ECECEC;
    border-radius: 16px;
    width: 18.5vw;
    height: 6vh;
    padding: 10px;
    outline: none;
    margin: 10px 0;
}
.grid:focus{
  border: 2px solid #192135;
}
.button-dialog{
  text-align: center;
  width: 100%;
  margin: 10px 0;
  font-family: 'Space Grotesk'; 
}
/* .btn-f{
    box-shadow: none;
    border-radius: 16px;
    background: #0CAD73
} */
button {
  background:#0CAD73;
  width: 70%;
  padding: 5px 0;
  border-radius: 16px;
}
</style>