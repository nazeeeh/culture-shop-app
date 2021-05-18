<template>
    <div class="user-permisions">
      <div class="user-permission">
      <!-- <div class="btn-btn"> -->
        <v-btn class="btn-btn py-6 px-10 text-uppercase">add new</v-btn>
      <!-- </div> -->
      <div class="main-flex">
        <div class="export-box">
          <span class="text-uppercase t-text">Export</span>
          <icon name="dropdown" class="mt-1"></icon>
        </div>
        <div class="form-area">
          <form>
            <label class="search-text" for="Search">Search</label>
            <input type="search" placeholder="search for content">
          </form>
        </div>
      </div>
    </div>
    

      <!-- Table -->
      <v-data-table
    v-model="selected"
    :headers="headers"
    :items="users"
    :single-select="singleSelect"
    item-key="id"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
    </div>
</template>

<script>
    export default {
      name: 'user-permission',
      
      data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Date', value: 'date' },
          { text: 'Admin & Role', value: 'admin&role' },
          { text: 'Admin Details', value: 'admindetails' },
          { text: 'Status All', value: 'status' },
        ],
        users: [
          {
            id: '#424345',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
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
