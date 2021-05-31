<template>
    <div class="section">
        <!-- Manage customer-->
      <div class="text-settings">
      <v-list flat>
      <p class="mx-5 text-cap text-uppercase">Manage Drivers</p>
      <v-list-item to="/">
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
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title" class="text-uppercase text-settings"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item to="/">
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
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Orders',
        },
        {
          action: 'driver',
          items: [{ title: 'List Item' }],
          title: 'Drivers',
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

</style>