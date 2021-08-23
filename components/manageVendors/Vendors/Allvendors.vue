<template>
 <div>
  <AddButton />
  <Export />
  <!-- Table -->
        <div class="round">
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
        <tbody>
          <tr v-for="item in vendors" :key="item.id">
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
      </template>
    </div>
    <BulkAction />
 </div>
</template>

<script>
    import AddButton from '../../resources/Addbutton'
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
            AddButton,
            Export,
            BulkAction
        },
        data(){
          return {
            vendors: []
          }
        },
        methods:{
          viewVendor(record){
            // alert(JSON.stringify(record))
          },
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
    margin: 5px 0px 6px 100px;
}
  .table thead{
    text-transform: uppercase;
  }
  .table tbody{
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
  }
  .underline{
    color: grey;
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