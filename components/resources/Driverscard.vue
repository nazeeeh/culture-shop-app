<template>
     <div class="card-2">
        <div class="box-display" v-for="(content, i) in contents" :key="i">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{content.name}}</p>
            <p class="p-counts">{{content.rate}}</p>
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
            {name: 'New Drivers', rate: 0},
            {name: 'total support tickets', rate: 0}
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
.box-display{
    display: flex;
    justify-content: space-between;
    width: 22vw;
    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 24px;
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