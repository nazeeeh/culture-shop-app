<template>
 <div class="">
  <v-btn class="btn-btn py-6 px-10 text-uppercase" @click="add">add new</v-btn>
  <Export />
  <!-- Table -->
    <div class="table">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="vendors"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    
    >
     <template v-slot:[`header.name`]="{ header }">
        <th >{{ header.name }} </th>
      </template>
    <template v-slot:[`item.created_at`]="{ item }">
      {{ convertToDate(item.created_at) }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="change">
        <nuxt-link class="underline" :to="`/manage-vendors/vendors/edit/${item.id}`">
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
        </div>
        <div class="table">
            <thead>
              <tr class="border_bottom"> 
                <th scope="col" style="text-align: left; width: 10rem;">
                 Id
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                 <span style="display: flex; align-items: center"> Date 
                   <icon name="up"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  Vendor &#38; Role
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                 Vendor Details
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center">
                  <span style="color: grey; margin-right: 1rem;">Status</span> All 
                  <icon name="dropdown"></icon> </span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody class="table-details">
          <tr class="border_bottom" v-for="item in vendors" :key="item.id">
            <td>{{ item.id}}</td>
            <td>{{ convertToDate(item.created_at)}}</td>
            <td>{{ item.shop_name}}</td>
            <td>{{ item.firstname}} {{item.lastname}} <span><br>{{item.email}}</span></td>
            <td></td>
            <td class="change">
              <nuxt-link class="underline" :to="`/manage-vendors/vendors/edit/${item.id}`">
                <span class="edit">edit<icon class="i" name="change"></icon></span>
              </nuxt-link>
              <nuxt-link class="underline" to="">
               <span class="view" @click="viewVendor(item)">view<icon class="i mt-1" name="right"></icon></span>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>-->
      <BulkAction />
    </div>
    
</template>

<script>
    // import AddButton from '../../resources/Addbutton'
    import Export from '../../resources/Export'
    import BulkAction from '../../resources/Bulkaction'
    import moment from 'moment'
    export default {
 
      async fetch() {
          const response = await this.$api.getVendors()
          this.vendors = response.data
          console.log(response)
        },

        components: {
            // AddButton,
            Export,
            BulkAction
        },
        data(){
          return {
            vendors: [],
            selected: [],
            headers: [
            {text:'ID', value:'id', sortable: false},
            {text:'DATE', value:'created_at'},
            {text: 'VENDOR & ROLE', value: 'shop_name'},
            {text: 'VENDOR DETAILS', value: 'firstname'},
            {text: 'STATUS All', value: 'status'},
            {text: '', value: 'actions', width: '200px'}
            ]
            
          }
        },
        methods:{
          viewVendor(record){
            // alert(JSON.stringify(record))
          },
          convertToDate(date){
          return moment(date).format('ll');
        },
        add(){
          this.$router.push('/manage-vendors/vendors/add')
        }
      }
        
    }
</script>

<style scoped>
.table {
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 16px;
    letter-spacing: 0.07em;
    margin-top: 40px;
    /* margin: 5px 0px 6px 100px; */
}
.table-details{
    font-size: 14px;
  }

.table thead{
    text-transform: uppercase;  
}
  .table tbody{
    text-transform: capitalize;
  }
.change{
  display: flex;
  cursor: pointer;
  align-items: center;
  text-transform: uppercase;
  margin-left: 12em;
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
  .underline{
    color: grey;
    text-decoration: none;
  }
  .table td {
    text-transform: capitalize;
    padding: 20px 0;
  }
  .round {
  position: relative;
}

/* .border_bottom td{
  border-bottom: 2px solid #ccc;
} */

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 35px;
  position: absolute;
  top: 35px;
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
</style>