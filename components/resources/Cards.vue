<template>
     <div class="card-2">
        <div class="box-display">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display1.name}}</p>
            <p class="p-counts">{{customerCount}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <div class="box-display">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display2.name}}</p>
            <p class="p-counts">{{display2.count}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
     </div>
</template>
<script>
export default {
    async fetch () {
      const newCustomerCount = await this.$api.getCustomers()
      console.log(newCustomerCount.count);
      this.customerCount += newCustomerCount.count
    },
    data () {
      return { 
        display1 : {
          name: 'New Customers',
          count: 0
        },
        display2 : {
          name: 'total support tickets',
          count: 0
        },
        customerCount: 0,
        ticketCount: 0
      }
    }  
}
</script>
<style scoped>
.card-2{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 10px;
    margin: 20px 20px;
}
.box-display{
    display: flex;
    justify-content: space-between;
    width: 22vw;
    border: 2px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 24px;
}
.p-style{
    font-family: 'Space Grotesk';   
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
}
.p-counts{
    font-weight: bold;
    font-size: 20px;
}
</style>