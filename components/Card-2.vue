<template>
     <div class="card-2">
         <!-- Delivered Orders -->
        <div class="box-display" :style="{backgroundColor: '#a7f5a9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display1.name}}</p>
            <p class="p-counts" :style="{color: '#0CAD73'}">{{ deliveredCount}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- Refunded Orders -->
        <div class="box-display" :style="{backgroundColor: '#ffbe86'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display2.name}}</p>
            <p class="p-counts" :style="{color: '#E76D14'}">{{ refundedCount}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- Cancelled Orders -->
        <div class="box-display" :style="{backgroundColor: '#ff9ab9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display3.name}}</p>
            <p class="p-counts" :style="{color: '#F11054'}">{{ cancelledCount }}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- Failed Orders -->
        <div class="box-display" :style="{backgroundColor: '#ff9ab9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display4.name}}</p>
            <p class="p-counts" :style="{color: '#F11054'}">{{ display4.count}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- TBC Orders -->
        <div class="box-display" :style="{backgroundColor: '#a7f5a9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display5.name}}</p>
            <p class="p-counts" :style="{color: '#0CAD73'}">{{ display5.count}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- Pending Orders -->
        <div class="box-display" :style="{backgroundColor: '#ffbe86'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display6.name}}</p>
            <p class="p-counts" :style="{color: '#E76D14'}">{{ pendingCount }}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- Comfirmed Orders -->
        <div class="box-display" :style="{backgroundColor: '#a7f5a9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display7.name}}</p>
            <p class="p-counts" :style="{color: '#0CAD73'}">{{ display1.count}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
        <!-- TBC Orders -->
        <div class="box-display" :style="{backgroundColor: '#a7f5a9'}">
          <div class="text-uppercase p-style ml-8 mt-4" >
            <p>{{display8.name}}</p>
            <p class="p-counts" :style="{color: '#0CAD73'}">{{ display1.count}}</p>
          </div>
            <Icon name="right" class="mr-8 mt-6" />
        </div>
     </div>
</template>
<script>
export default {
    async fetch () {
        const pendingOrders = await this.$api.getPendingOrders()
        const cancelledOrders = await this.$api.getCancelledOrders()
        const refundedOrders = await this.$api.getRefundedOrders()
        const deliveredOrders = await this.$api.getDeliveredOrders()
        this.pendingCount += pendingOrders.count
        this.cancelledCount += cancelledOrders.count 
        this.refundedCount += refundedOrders.count
        this.deliveredCount += deliveredOrders.count 
    },

    data () {
      return {
        display1: {
            name: 'Delivered orders',
            count: 0
        },
        display2: {
            name: 'Refunded orders',
            count: 0
        },
        display3: {
            name: 'Cancelled orders',
            count: 0
        },
        display4: {
            name: 'Failed orders',
            count: 0
        },
        display5: {
            name: 'Tbc',
            count: 0
        },
        display6: {
            name: 'Pending orders',
        },
        display7: {
            name: 'Comfirmed orders',
            count: 0
        },
        display8: {
            name: 'Tbc',
            count: 0
        },
        pendingCount: 0,
        cancelledCount: 0,
        refundedCount: 0,
        deliveredCount: 0
        
            

        // contents: [
        //     {name1: 'Delivered orders', count: '', backgroundColor: '#E7F7F1', color: '#0CAD73'},
        //     {name: 'Refunded orders', count: '', backgroundColor: '#FDF0E8', color: '#E76D14'},
        //     {name: 'Cancelled orders', count: '', backgroundColor: '#FEE7EE', color: '#F11054'},
        //     {name: 'Failed orders', count: '', backgroundColor: '#FEE7EE', color: '#F11054'},
        //     {name: 'Tbc', count: '', backgroundColor: '#E7F7F1', color: '#0CAD73'},
        //     {name: 'Pending orders', count: '', backgroundColor: '#FDF0E8', color: '#E76D14'},
        //     {name: 'Comfirmed orders', count: '', backgroundColor: '#E7F7F1', color: '#0CAD73'},
        //     {name: 'Tbc', count: '', backgroundColor: '#E7F7F1', color: '#0CAD73'}
        // ],
        // count: ''
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
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
    /*  */
    margin: 20px 20px;
}
p {
  color: #000;
}
.box-display{
    display: flex;
    justify-content: space-between;
    width: 17vw;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 5px 0
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