<template>
 <div>
    <div class="order-details">
  <div class="grid">
    <div class="flex-grid">
     <div>
      <span>Reference code:</span><br>
      <span>Order type:</span><br>
      <span>Order updates:</span><br>
     </div>
     <div class="mx-8">
        <span style="color:#0CAD73;">change</span><br>
        <span style="color:#0CAD73;">change</span>
     </div>
    </div>
    
    <div class="flex-grid">
     <div>
        <span>Subtotal</span><br>
        <span style="color: grey">Delivery fee</span><br>
        <span style="color: grey">Service fee</span><br>
        <span style="color: grey">VAT</span><br>
        <span>Paid by customer</span><br>
        <span>Paid to driver</span><br>
        <span>Paid to vendor</span><br>
        <span>Paid to culture shop</span><br>
    </div>
    <div>
        <span>&pound;0.00</span><br>
        <span style="color: grey">&pound;0.00</span><br>
        <span style="color: grey">&pound;0.00</span><br>
        <span style="color: grey">0%</span><br>
        <span>&pound;0.00</span><br>
        <span>&pound;0.00</span><br>
        <span>&pound;0.00</span><br>
        <span>&pound;0.00</span>
    </div>
    </div>
  </div>
 </div>
 <v-divider></v-divider>
 <div>
     <p>Special notes from customer:</p>
 </div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.order-details{
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    text-transform: capitalize;
    margin-top: 20em;
    margin-bottom: 20px;
}
.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.flex-grid{
    display: flex;
    justify-content: space-between;
}
p{

margin-top: 20px;
font-size: 14px;
line-height: 130%;
}
</style>