<template>
 <div class="All-products">
  <AddButton />
  <SubheadSection />
  <!-- Table -->
      <div class="table">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="products"
        :single-select="singleSelect"
        item-key="name"
        show-select
        class="elevation-1"      
      >
    
      <template v-slot:[`header`]="{ header }">
          <th>{{ header }} </th>
        </template>
      <template v-slot:[`item.images`]="{ item }">
        <img :src="item.images" />
      </template>
      <template v-slot:[`item.price`]="{ item }">
        &#163;{{item.price}}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div class="change">
          <!-- <nuxt-link class="underline"> -->
            <span class="edit">Edit <icon class="i" name="change"></icon></span>
          <!-- </nuxt-link> -->
          <nuxt-link class="underline" to="">
            <span class="view">View<icon class="i mt-1" name="right"></icon></span>
          </nuxt-link>
        </div>
      </template>
      <template v-slot:[`item.total`]="{ item }">
        &pound;{{item.total }}
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
               <span style="display: flex; align-items: center">Image</span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                Category
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                Name
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
               <span style="display: flex; align-items: center">Vendor &#38; Role</span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                Price
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Stock</span> All <icon name="dropdown"></icon> </span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody class="table-details">
          <tr v-for="product in products" :key="product.id">
            <td>{{product.shop_id}}</td>
            <td><img :src="product.images"/></td>
            <td>{{ product.category }}</td>
            <td>{{ product.name}}</td>
            <td>{{ product.shop_name}} </td>
            <td><span>&#163;</span> {{ product.price }}</td>
            <td>{{ product.stock }}</td>
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
    import AddButton from '../../resources/Addbutton'
    import SubheadSection from '../../resources/ProductExportCat'
    import BulkAction from '../../resources/Bulkaction'
    export default {
      async fetch () {
        const response = await this.$api.getProduct()
        console.log(response.products)
        this.products = response.products
      },
        components: {
            AddButton,
            SubheadSection,
            BulkAction
        },
        data () {
          return {
            products : [],
            headers: [
            {text:'ID', value:'id', sortable: false},
            {text:'IMAGE', value:'images'},
            {text: 'CATEGORY', value: 'category'},
            {text: 'NAME', value: 'name'},
            {text: 'VENDOR & ROLE', value: 'shop_name'},
            {text: 'PRICE', value: 'price'},
            {text: 'STOCK All', value: 'stock'},
            {text: '', value: 'actions', width: '100px'}
            ]
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
  .table td {
    text-transform: capitalize;
    padding: 20px 0;
  }
  .table-details{
    font-size: 14px;
  }
  .change{
    display: flex;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
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
.underline{
  color: grey;
  text-decoration: none;
}
</style>