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
            <icon :name="item.action"></icon>
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
                <span >9:00 - 23:00</span><span style="color: #0CAD73;">Change</span>
               </div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
  </v-list>
  
 </div>
</template>

<script>
    export default {
        data () {
      return {
        items: [
        {
          action: 'time',
          active: true,
          items: [
            { title: 'Monday'},
            { title: 'Tuesday'},
            { title: 'Wednesday'},
            { title: 'Thursday'},
            { title: 'Friday'},
            { title: 'Saturday'},
            { title: 'Sunday'}
          ],
          title: 'Opening hours',
        }
      ],
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
}
.time-border{
    display:flex;
    /* justify-content: center; */
    padding: 10px;
    border: 2px solid #ECECEC;
    border-radius: 16px;
}
.lis{
  
  /* width: 10px; */
}
.change{
  display: flex;
  margin-left: -80px;
  justify-content: space-evenly;
 
  width: 300px;
  /* margin-right: 30px; */
}
</style>