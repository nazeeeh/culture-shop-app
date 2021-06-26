<template>
    <div class="section">
        <!-- Manage Vendor-->
            <div class="text-settings">
      <v-list flat>
      <p class="mx-5 text-cap text-uppercase">Manage vendors</p>
      <v-list-item to="/manage-vendors/analytics">
        <v-list-item-icon>
          <icon name="analytics"></icon>
        </v-list-item-icon>
        <v-list-item-title class="text-uppercase text-settings mb-1">Analytics</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-for="item in items"
        no-action
        :key="item.title"
        v-model="item.active"
        color="success"
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <icon :name="item.action"></icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text-uppercase text-settings mb-1"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.to"
        ><div class="round" :style="{backgroundColor: child.backgroundColor}"><span class="ml-3 mt-2" :style="{color: child.color}">{{child.tag}}</span></div>
          <v-list-item-content>
            <v-list-item-title v-text="child.title" class="text-uppercase text-settings"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <!-- Products & Vendors -->
      <v-list-group
        v-for="list in lists"
        no-action
        :key="list.sub"
        color="success"
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <icon :name="list.icon"></icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="list.sub" class="text-uppercase text-settings mb-1"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in list.lists"
          :key="child.sub"
          :to="child.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.sub" class="text-uppercase text-settings"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item to="/manage-vendors/support/overview">
        <v-list-item-icon>
          <icon name="new"></icon>
        </v-list-item-icon>
        <v-list-item-title class="text-uppercase text-settings mb-1">Support</v-list-item-title>
      </v-list-item>
    </v-list>
    </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
           items: [
        {
          action: 'orders',
          active: true,
          items: [
            { title: 'All', tag: 0, backgroundColor: "rgba(12, 173, 115, 0.1)", color: "#0CAD73", to:'/manage-vendors/orders/all'},
            { title: 'Completed', tag: 0, backgroundColor: "rgba(12, 173, 115, 0.1)", color: "#0CAD73"},
            { title: 'Out for delivery', tag: 0, backgroundColor: "rgba(12, 173, 115, 0.1)", color: "#0CAD73"},
            { title: 'delivered', tag: 0, backgroundColor: "rgba(12, 173, 115, 0.1)", color: "#0CAD73" },
            { title: 'pending', tag: 0, backgroundColor: "rgba(231, 109, 20, 0.1)", color: "#E76D14" },
            { title: 'refunded', tag: 0, backgroundColor: "rgba(231, 109, 20, 0.1)", color: "#E76D14" },
            { title: 'Failed', tag: 0, backgroundColor: "rgba(241, 16, 84, 0.1)", color: "#F11054" },
            { title: 'Cancelled', tag: 0, backgroundColor: "rgba(241, 16, 84, 0.1)", color: "#F11054" },
          ],
          title: 'Orders',
        },

        ],

        lists:[
        {
          icon: 'vendor',
          lists: [
            { sub: 'All', to:'/manage-vendors/vendors/all' },
            { sub: 'Add New', to:'/manage-vendors/vendors/add' },
          
          ],

          sub: 'Vendors',
        },

        {
          icon: 'product',
          lists: [
            { sub: 'All', to:'/manage-vendors/products/all' },
            { sub: 'Add New', to:'/manage-vendors/products/add' },
            ],
          sub: 'Products',
        }, 
       
      ],
        }
    }
}
</script>
<style scoped>
.text-cap{
    color: #8D8D8D;
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
}
.flex-content{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    /* max-width: 400px; */
    width: 80%;
    
}

.text-settings{
    font-family: 'Space Grotesk';
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: #192135;
}

.a-link-hover:hover{
    padding: 20px;
    background: #8D8D8D;
    width: 100%;
}
.round{
  height: 3vh;
  background: red;
  border-radius: 16px;
  width: 30px !important;
  margin-right: 5px;
}

</style>