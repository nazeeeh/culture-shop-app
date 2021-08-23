<template>
 <div>
  <SearchBox />
  <Table />
  <BulkAction />  
  </div>
</template>

<script>
import SearchBox from '../../resources/Search'
import Table from '../../resources/Tables'
import BulkAction from '../../resources/Bulkaction'
    export default {
      name: 'all',
      // async fetch () {
      //   const data = await this.$api.getAllOrders()
      //   console.log(data);
      // },

      components: {
          SearchBox,
          Table,
          BulkAction

        }
    }
</script>

<style scoped>

</style>