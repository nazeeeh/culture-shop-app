<template>
 <div>
  <v-list flat width="470px">
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
             <v-list-item-title v-text="child.title" class="text"><span>change</span></v-list-item-title>
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
            { title: 'Monday', tag: 0},
            { title: 'Tuesday', tag: 0},
            { title: 'Wednesday',tag: 0},
            { title: 'Thursday', tag: 0},
            { title: 'Friday', tag: 0},
            { title: 'Saturday', tag: 0},
            { title: 'Sunday', tag: 0}
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
    padding: 10px;
    border: 2px solid #ECECEC;
    border-radius: 16px;

}
</style>