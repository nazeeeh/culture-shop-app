<template>
  <v-app dark>
    <!-- Navigation sidebar -->
    <v-navigation-drawer
      app
      fixed
    >
      <Avatar />

      <Sidebar />
      <!-- <v-list>
        <v-list-item
          v-for="(dash, i) in dashs"
          :key="i"
          :to="dash.to"
          router
          exact
        >
          <v-list-item-action>
            <icon name="dashboard" class=""></icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="dash.title" />
          </v-list-item-content>
        </v-list-item>

        <p> Manage customers</p>
        <v-list-item
         v-for="(analyt, i) in analyts" :key="i">
          <v-list-item-action>
            <icon name="analytics"></icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="analyt.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
         v-for="(section, i) in sections" :key="i">
          <v-list-item-action>
            <icon :name="section.icon"></icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="section.title" />
          </v-list-item-content>
        </v-list-item>

        
      </v-list> -->
    </v-navigation-drawer>

    
    <!-- Content loads -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
 
    }

</script>
<style scoped>
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>