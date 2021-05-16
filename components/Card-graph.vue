<template>
     <div class="card-graph">
       <div class="outer-layer">
          <div class="box-display">
         <div>
            <p class="text-uppercase p-align mt-4 ml-8">Total sales</p>
            <p class="p-align-t ml-8"><span>&#163;</span>0.00</p>
         </div>
         <div class="rounded-corners mt-4 mr-8">
             <span class="p-increase">0.0%</span>
             <Icon name="up" />
         </div>
        </div>
        <v-divider class="mx-8"></v-divider>
        <div class="graph-1">
         <icon name="graph" class="mx-8 my-6"></icon>
        </div>
        </div>

        <div class="outer-layer">
          <div class="box-display">
         <div>
            <p class="text-uppercase p-align mt-4 ml-8">Total earnings</p>
            <p class="p-align-t ml-8"><span>&#163;</span>0.00</p>
         </div>
         <div class="rounded-corners mt-4 mr-8">
             <span class="p-increase">0.0%</span>
             <Icon name="up" />
         </div>
        </div>
        <v-divider class="mx-8"></v-divider>
        <div class="graph-1">
        <icon name="graph" class="mx-8 my-6 "></icon>
        </div>
        </div>
        <div class="outer-layer">
          <div class="box-display">
         <div>
            <p class="text-uppercase p-align mt-4 ml-8">Total visitors</p>
            <p class="p-align-t ml-8">0</p>
         </div>
         <div class="rounded-corners mt-4 mr-8">
             <span class="p-increase">0.0%</span>
             <Icon name="up" />
         </div>
        </div>
        <v-divider class="mx-8"></v-divider>
        <div>
        <div class="graph-1">
        <icon name="graph-2" class="mx-8 my-6"></icon>  
        </div>
        </div>
        </div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.card-graph{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 33px;
}
.box-display{
    display: flex;
    justify-content: space-between;
    /* margin: 1rem 1rem 0 2rem; */
}
.outer-layer{
    width: 23.5vw;
    font-family: 'Space Grotesk';
    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 10px auto;

}
.rounded-corners{
    display: flex;
    background: rgba(12, 173, 115, 0.1);
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 2px 12px;
    border-radius: 16px;
    height: 5vh;
}
.p-align{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
}
.p-align-t{
    font-size: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-top: -15px;
}
.p-increase{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}

.graph-1 {
    position: relative;
    
    /* margin: 0 auto; */
    width: 100%;
}

</style>