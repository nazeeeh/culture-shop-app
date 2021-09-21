<template>
  <div>
    <!-- Table -->
    <div class="table">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="orders"
        :single-select="singleSelect"
        item-key="name"
        show-select
        class="elevation-1"      
      >
    
      <template v-slot:[`header`]="{ header }">
          <th>{{ header }} </th>
        </template>
      <template v-slot:[`item.created_at`]="{ item }">
        {{ convertToDate(item.created_at) }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div class="change">
          <!-- <nuxt-link class="underline"> -->
            <span class="edit">Edit <icon class="i" name="change"></icon></span>
          <!-- </nuxt-link> -->
          <nuxt-link class="underline" :to="`/manage-customers/orders/${item.id}`">
            <span class="view">View<icon class="i mt-1" name="right"></icon></span>
          </nuxt-link>
        </div>
      </template>
      <template v-slot:[`item.status`]="{item}">
        <v-chip :color="colorChange(item.status)">
         <span style="text-transform: uppercase; font-size: 12px"> {{item.status}} </span>
        </v-chip>
      </template>
      <template v-slot:[`item.total`]="{ item }">
        &pound;{{item.total }}
      </template>
      </v-data-table>
      </div>
        <!-- <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
        </div> -->
        <!-- <div class="table">
            <thead>
              <tr > 
                <th scope="col" style="text-align: left; width: 10rem;">
                Id
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <span style="display: flex; align-items: center"> Date <icon name="up"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  Customer &#38; Role
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                 Vendor &#38; Role
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <span style="display: flex; align-items: center"> Total <icon name="up"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Status</span> All <icon name="dropdown"></icon></span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody class="table-details">
          <tr v-for="item in orders" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{convertToDate(item.created_at)}}</td>
            <td>{{item.name}}</td>
            <td></td>
            <td>&pound;{{item.total}}</td>
            <td :style="{color: setColor ? 'red': '#0CAD73'}"><span class="box">{{item.status}}</span></td>
            <td class="change">
              <nuxt-link class="underline" to="">
                <span class="edit">edit <icon class="i" name="change"></icon></span>
              </nuxt-link>
              <nuxt-link class="underline" :to="`/manage-customers/orders/${item.id}`">
               <span class="view">view<icon class="i mt-1" name="right"></icon></span>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>
    </div> -->
  </div>
</template>

<script>
    import moment from 'moment'
    export default {
       async fetch () {
        const data = await this.$api.getAllOrders()
        this.orders = data.orders
        console.log(data);
      },
      data () {
        return {
          orders: [],
          setColor: false,
          selected: [],
            headers: [
            {text:'ID', value:'id', sortable: false},
            {text:'DATE', value:'created_at'},
            {text: 'CUSTOMER & ROLE', value: 'name'},
            {text: 'VENDOR & ROLE', value: ''},
            {text: 'TOTAL', value: 'total'},
            {text: 'STATUS All', value: 'status'},
            {text: '', value: 'actions', width: '200px'}
            ]
         }
      },
      methods: {
        convertToDate(date){
          return moment(date).format('ll');
          },

          colorChange(status){
            if (status == 'accepted') { return '#0CAD733A'} 
            else if (status == 'pending') {return '#E76D143A'}
            else return 'red'
          }
      }
    }
</script>

<style scoped>
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
  .table .change{
    display: flex;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
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
    text-decoration: none;
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