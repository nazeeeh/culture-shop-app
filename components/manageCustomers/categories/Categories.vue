<template>
 <div>
  <v-btn class="btn-btn py-6 px-10 text-uppercase" >add new</v-btn>
  <SearchBar />
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
                  <span style="display: flex; align-items: center">Name</span>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">Product</th>
                <th scope="col" style="text-align: left; width: 10rem;">Vendor</th>
                <th scope="col" style="text-align: left; width: 10rem;">
                 <span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">
                   Status</span> All <icon name="dropdown"></icon> 
                  </span>
                </th>
              </tr>
            </thead>
      <template>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </div>
    <BulkAction />
 </div>
</template>

<script>
    import SearchBar from '../../resources/Search'
    import BulkAction from '../../resources/Bulkaction'
    export default {
        name: "all",
        
        components:{
            SearchBar,
            BulkAction
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