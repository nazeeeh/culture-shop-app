<template>
    <div class="sub-head">
    <v-row>
      <v-col cols="12" sm="8" md="6">
          <div class="p-align">
            <span class="text-uppercase">Export</span>
            <Icon name="dropdown" class="mt-1 ml-2"/>
            <span class="text-uppercase p-align-color ml-4">Store vendor</span>
            <span class="text-uppercase ml-4">Corner store</span>
            <Icon name="dropdown" class="mt-1 ml-2"/>
            <span class="text-uppercase p-align-color ml-4">Filter</span>
            <span class="text-uppercase ml-4">This month</span>
            <Icon name="dropdown" class="mt-1 ml-2"/>
          </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    props: ['Subhead']
}
</script>
<style scoped>
.p-align{
    display: flex;
    align-items: center;
    font-family: 'Space Grotesk';
    font-size: 12px;
    font-weight: 600;
    margin: 20px 0px 20px 32px;
}
.p-align-color{
    color: #8D8D8D;
}
</style>