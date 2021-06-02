<template>
 <div class="Search">
  <div class="search-component">
   <div class="main-flex">
    <div class="export-box">
      <span class="text-uppercase t-text">Export</span>
      <Icon name="dropdown" class="mt-1 ml-2"/>
    </div>
    <div class="form-area">
     <form>
      <label class="search-text" for="Search">Search</label>
      <input type="search" placeholder="search for content">
     </form>
    </div>
  </div>
  </div>
 </div>
</template>

<script>
    export default {
        name: "Export"
        
    }
</script>

<style scoped>
.search-component{
  font-family: 'Space Grotesk';
  margin: 0 0 0 35px;
}
 .main-flex{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .export-box{
    display: flex;
    align-items: center;
  }

  .form-area{
    margin-right: 40px;
  }
  .t-text{
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
  }
  .search-text{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  input[type='search']{
    border: 2px solid #ECECEC;
    border-radius: 12px;
    height: 6vh;
    padding: 10px;
  }

</style>