<template>
  <div>
    <div class="export-box bulk-action">
     <span class="text-uppercase t-text">Bulk Action</span>
     <icon name="dropdown" class="mt-1"></icon>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.export-box{
    display: flex;
    align-items: center;
  }
  .t-text{
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
  }
  .bulk-action{
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
    color: grey;
    margin: 50px 0 6px 34px;
  }
</style>