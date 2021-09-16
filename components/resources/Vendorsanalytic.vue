<template>
     <div class="card-2">
        <div class="box-display" v-for="(content, i) in contents" :key="i" :style="{backgroundColor: content.backgroundColor}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{content.name}}</p>
            <p class="p-counts" :style="{color: content.color}">{{content.rate}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
     </div>
</template>
<script>
export default {
    data () {
      return {
        contents: [
            {name: 'Vendors online', rate: 0, backgroundColor: '#a7f5a9', color: '#0CAD73'},
            {name: 'Pending orders', rate: 0, backgroundColor: '#ffbe86', color: '#E76D14'},
            {name: 'Confirmed orders', rate: 0, backgroundColor: '#a7f5a9', color: '#0CAD73'},
            {name: 'Completed orders', rate: 0, backgroundColor: '#a7f5a9', color: '#0CAD73'},
            {name: 'Delivered orders', rate: 0, backgroundColor: '#a7f5a9', color: '#0CAD73'},
            {name: 'Refunded orders', rate: 0, backgroundColor: '#ffbe86', color: '#E76D14'},
            {name: 'cancelled orders', rate: 0, backgroundColor: '#ff9ab9', color: '#F11054'},
            {name: 'Failed orders', rate: 0, backgroundColor: '#ff9ab9', color: '#F11054'}
        ]
        }
    }
    
}
</script>
<style scoped>
.card-2{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 10px;
    margin: 20px 20px;
}
p {
    color: #000;
}
.box-display{
    display: flex;
    justify-content: space-between;
    width: 17vw;
    /* border: 2px solid #F2F2F2; */
    box-sizing: border-box;
    border-radius: 24px;
    padding: 5px 0;
}
.p-style{
    font-family: 'Space Grotesk';   
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
}
.p-counts{
    font-weight: bold;
    font-size: 20px;
}
</style>