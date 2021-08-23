<template>
  <div>
    <!-- Table -->
        <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div class="table">
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
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{convertToDate(item.created_at)}}</td>
            <td>{{item.name}}</td>
            <td></td>
            <td>{{item.total}}</td>
            <td>{{item.status}}</td>
            <td class="change">
              <nuxt-link class="underline" to="">
                <span class="edit">edit <icon class="i" name="change"></icon></span>
              </nuxt-link>
              <nuxt-link class="underline" :to="`/manage-customers/orders/${item.order_no}`">
               <span class="view">view<icon class="i mt-1" name="right"></icon></span>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </template>
    </div>
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
          orders: []
        }
      },
      methods: {
        convertToDate(date){
          return moment(date).format('ll');
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