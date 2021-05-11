<template>
     <div class="card-1">
        <div class="box-display">
         <div class="text-uppercase p-style ml-8 mt-4">
           <p>Customers online</p>
           <p class="p-counts">0</p>
           </div>
           <Icon name="customers" class="mr-8 mt-6"/>
        </div>
        <div class="box-display">
         <div class="text-uppercase p-style ml-8 mt-4">
           <p>Vendors online</p>
           <p class="p-counts">0</p>
           </div>
           <Icon name="vendor" class="mr-8 mt-6"/>
        </div>
        <div class="box-display">
         <div class="text-uppercase p-style ml-8 mt-4">
           <p>Drivers online</p>
           <p class="p-counts">0</p>
           </div>
           <Icon name="driver" class="mr-8 mt-6"/>
        </div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.card-1{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 16px;
}
.box-display{
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    /* height: 10vh; */
    width: 24vw;
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