<template>
 <div class="order-subhead">
  <div class="flex">
   <icon name="print"></icon><span class="mt-1 mx-2" style="color:grey">Print invoice</span><span class="mx-1">.</span>
   <span class="mt-1 mx-2">Order updates</span><icon name="dropdown"></icon><span class="mx-1">.</span>
   <span class="mt-1 mx-2" style="color:grey">Payment</span><icon name="dropdown"></icon>
   <span class="mt-1 mx-2" style="color:grey">Status</span><icon name="dropdown"></icon>
  </div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.flex{
    display: flex;
    margin: 0px 0px 0 0;
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}
</style>