<template>
 <div>
  <v-btn class="btn-btn py-6 px-10 text-uppercase" @click="add">add new</v-btn>
  <SearchBar />
  <!-- Table -->
    <div class="table">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="categories"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    
    >
     <template v-slot:[`header`]="{ header }">
        <th>{{ header}} </th>
      </template>
    <template v-slot:[`item.created_at`]="{ item }">
      {{ convertToDate(item.created_at) }}
    </template>
    <template v-slot:[`item.actions`]="{}">
      <div class="change">
        <nuxt-link class="underline" to="">
          <span class="edit">Edit <icon class="i" name="change"></icon></span>
        </nuxt-link>
      <span class="view">View<icon class="i mt-1" name="right"></icon></span>
      </div>
    </template>
    <template v-slot:[`item.firstname`]="{ item }">
      {{item.firstname }} {{item.lastname }}
    </template>
    </v-data-table>
    </div>
        <!-- <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
        </div> -->
  <!-- <div class="table">
            <thead>
              <tr> 
                <th scope="col" style="text-align: left; width: 10rem;">Id</th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <span style="display: flex; align-items: center">Name</span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">Vendor</th>
                <th scope="col" style="text-align: left; width: 10rem;">Product</th>
                
                <th scope="col" style="text-align: left; width: 10rem;">
                 <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">
                   Status</span> All <icon name="dropdown"></icon> 
                  </span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody class="table-details">
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.vendors }}</td>
            <td class="change">
              <nuxt-link class="underline" to="">
              <span class="edit">edit <icon class="i" name="change"></icon></span>
              </nuxt-link>
              <nuxt-link class="underline" to="">
               <span class="view">view<icon class="i mt-1" name="right"></icon></span>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>
    </div> -->
    <BulkAction />
 </div>
</template>

<script>
    import SearchBar from '../../resources/Search'
    import BulkAction from '../../resources/Bulkaction'
    export default {
        name: "all",
        async fetch(){
          const response = await this.$api.getCategory()
          console.log(response)
          this.categories = response.Categories
          console.log(this.categories)
        },
        
        components:{
            SearchBar,
            BulkAction
        },
        data(){
          return {
            categories: [],
            selected: [],
            headers: [
            {text:'ID', value:'id', sortable: false},
            {text:'NAME', value:'name'},
            {text: 'VENDOR', value: 'vendors'},
            {text: 'PRODUCT', value: ''},
            {text: 'STATUS All', value: 'status'},
            {text: '', value: 'actions', width: '200px'}
            ]
          }
        },
        methods: {
          add () {
          this.$router.push('/manage-customers/category/add')
         }
        }
    }
</script>

<style scoped>
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
  .underline{
  text-decoration: none;
  color: grey;
}
.table-details{
    font-size: 14px;
  }
/* .table td {
    text-transform: capitalize;
    padding: 20px 0;
  } */
.change{
    display: flex;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
    /* margin-left: 34em; */
  }
.edit, .view{
    font-family: 'Space grotesk';
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 80px;
    color: grey;
  }
  .table .i{
    margin-right: 5rem;
  }
  .table {
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: capitalize;
    margin-top: 40px;
    /* margin: 5px 0px 6px 100px; */
  }
   .round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 35px;
  position: absolute;
  top: 28px;
  width: 20px;
}
.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}
.round input[type="checkbox"]:checked + label {
  background-color: grey;
  border-color: grey;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>