<template>
    <div class="user-permission">
      <!-- <div class="btn-btn"> -->
        <v-btn class="btn-btn py-6 px-10 text-uppercase">add new</v-btn>
      <!-- </div> -->
      <div class="">
        <div>
          <span>Export</span>
          <icon name="dropdown"></icon>
        </div>
        <div>
          <form>
            <label for="Search">Search</label>
            <input type="search" placeholder="search for content">
          </form>
        </div>
      </div>
        
    </div>
</template>

<script>
    export default {
      name: 'user-permission'  
    }
</script>
<style scoped>
  .user-permission {
    font-family: 'Space Grotesk';
    margin: 5px 0 6px 34px;
  }
  .btn-btn{
    position: absolute;
    top: 10px;
    right: 40px;
    background: #0CAD73 !important;
    color: #fff;
    box-shadow: none;
    border-radius: 16px;
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
  }
  input[type='search']{
    border: 2px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 12px;
  }
</style>
