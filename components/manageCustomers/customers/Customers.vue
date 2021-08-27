<template>
 <div class="Customers-section">
  <!-- <v-btn class="btn-btn py-6 px-10 text-uppercase" >add new</v-btn> -->
  <ExportSearch />
  <!-- Table -->
        <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div class="table">
            <thead>
              <tr> 
                <th scope="col" style="text-align: left; width: 10rem;">Id</th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center"> Date <icon name="up"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">Customer &#38; Role</th>
                <th scope="col" style="text-align: left; width: 10rem;">Customer Details</th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Status</span> All <icon name="dropdown"></icon></span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center">Purchases</span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{customer.id}}</td>
            <td>{{convertToDate(customer.created_at)}}</td>
            <td>{{customer.firstname}} {{customer.lastname}}</td>
            <td>{{customer.email}}</td>
            <td>Approved</td>
            <td>0</td>
            <td class="change">
              <nuxt-link class="underline" :to="`/manage-customers/customers/edit/${customer.id}`">
                <span class="edit" @click="setCustomer(customer)">edit <icon class="i" name="change"></icon></span>
              </nuxt-link>
              <nuxt-link class="underline" to="">
               <span class="view">view<icon class="i mt-1" name="right"></icon></span>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>
    </div>
    <BulkAction />
 </div>
</template>

<script>
    import ExportSearch from '../../resources/Export'
    import BulkAction from '../../resources/Bulkaction'
    import moment from 'moment'

    export default {
        name: 'all',
        async fetch () {
        const response = await this.$api.getCustomers()
        console.log(response.customers);
        this.customers = response.customers
      
        // this.customers = response.customers
      },
      data () {
        return{
          customers: [],
        }
      },
        components: {
          ExportSearch ,
          BulkAction 
        },
        methods:{
          setCustomer (customer) {
            console.log(customer);
            this.$store.commit("customer/setCustomerToView", customer)
          },
          convertToDate(date){
          return moment(date).format('ll');

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
  .table {
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin: 5px 0px 6px 100px;
  }
  .table td {
    text-transform: capitalize;
  }
  .table .change{
    display: flex;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
  }
  .table .edit, .table .view{
    display: flex;
    align-items: center;
    width: 80px;
    color: grey;
  }
  .underline{
    text-decoration: none;
  }
  .table .i{
    margin-right: 5rem;
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