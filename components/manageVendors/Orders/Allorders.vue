<template>
 <div class="All-orders">
  <Exports />
  <!-- Table -->
        <div class="round">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
        </div>
        <div class="table">
          <sorted-table :values="values">
            <thead>
              <tr> 
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="id">Id</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="name"><span style="display: flex; align-items: center"> Date <icon name="up"></icon></span></sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits">Vendor &#38; Role</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits">Customer &#38; Role</sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="name"><span style="display: flex; align-items: center"> Total <icon name="up"></icon></span></sort-link>
                </th>
                <th scope="col" style="text-align: left; width: 10rem;">
                  <sort-link name="hits"><span style="display: flex; align-items: center"><span style="color: grey; margin-right: 1rem;">Status</span> All <icon name="dropdown"></icon> </span></sort-link>
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
    </sorted-table>
    </div>
    <BulkAction />
 </div>
</template>

<script>
    import Exports from '../../resources/Search'
    import BulkAction from '../../resources/Bulkaction'
    export default {
        components: {
            Exports,
            BulkAction

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