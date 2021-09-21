<template>
 <div class="Drivers-section">
  <v-btn class="btn-btn py-6 px-10 text-uppercase" @click="add">add new</v-btn>
   <ExportSearch />
   <!-- Table -->
      <div class="table">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="drivers"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    
    >
     <template v-slot:[`header`]="{ header }">
        <th >{{ header }} </th>
      </template>
    <template v-slot:[`item.created_at`]="{ item }">
      {{ convertToDate(item.created_at) }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="change">
        <nuxt-link class="underline" :to="`/manage-drivers/drivers/edit/${item.id}`">
          <span class="edit">Edit <icon class="i" name="change"></icon></span>
        </nuxt-link>
      <span class="view">View<icon class="i mt-1" name="right"></icon></span>
      </div>
    </template>
    <template v-slot:[`item.firstname`]="{ item }">
      {{item.firstname }} {{item.lastname }}
    </template>
    <template v-slot:[`item.vehicle`]="{ item }">
     <span>{{item.vehicle }}<span style="color: grey;"><br>{{item.phone }}</span></span>  
    </template>
    </v-data-table>
    </div>
    <!-- <div class="round">
     <input type="checkbox" id="checkbox" />
     <label for="checkbox"></label>
    </div>
    <div class="table">
            <thead>
              <tr> 
                <th scope="col" style="text-align: left; width: 10rem;">
                Id
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <span style="display: flex; align-items: center"> Date <icon name="up"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                Driver &#38; Role
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                Driver Details
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Status</span> All <icon name="dropdown"></icon> </span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody class="table-details">
          <tr v-for="driver in drivers" :key="driver.id">
            <td> {{ driver.id }}</td>
            <td> {{ convertToDate(driver.created_at)}}</td>
            <td> {{ driver.firstname}} {{ driver.lastname}}</td>
            <td> {{driver.vehicle}} <span><br> {{driver.phone}}</span></td>
            <td :style="{color: '#0CAD73'}"><span class="box">Approved</span></td>
            <td class="change">
              <nuxt-link class="underline" :to="`/manage-drivers/drivers/edit/${driver.id}`">
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
    import ExportSearch from '../../resources/Export'
    import BulkAction from '../../resources/Bulkaction'
    import moment from 'moment'
    export default {
    async fetch () {
      const response = await this.$api.getDriver()
      console.log(response)
      this.drivers = response.drivers
    },
     components: {
         ExportSearch,
         BulkAction
     },
     data () {
       return {
         drivers: [],
          selected: [],
            headers: [
            {text:'ID', value:'id', sortable: false},
            {text:'DATE', value:'created_at'},
            {text: 'DRIVER & ROLE', value: 'firstname'},
            {text: 'DRIVER DETAILS', value: 'vehicle'},
            {text: 'STATUS All', value: 'status'},
            {text: '', value: 'actions', width: '200px'}
            ]
       }
     },
     methods: {
       convertToDate(date){
        return moment(date).format('ll');
       },
       add(){
         this.$router.push('/manage-drivers/drivers/add')
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
  .table-details{
    font-size: 14px;
  }
  .table td {
    text-transform: capitalize;
    padding: 20px 0;
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
  .table .i{
    margin-right: 5rem;
  }
   .box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  background: rgba(12, 173, 115, 0.1);
  border-radius: 16px;
  height: 4vh;
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
</style>