<template>
 <div class="avatar-bg">
   <v-list dense nav class="py-0 mx-5">
          <v-list-item v-for="(user, i) in users" :key="i" two-line class="px-0">
            <v-list-item-avatar>
              <v-avatar color="indigo">
              <v-icon dark>
             mdi-account-circle
            </v-icon>
            </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle class="white--text">{{ user.role }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
   </v-list>
    </div>
</template>
<script>
export default {
    data () {
        return {
            users: [
          {
            image: 'mdi-account-circle',
            name: 'Billy k',
            role: 'Admin'
          }
        ],
        }
    },
    props: ['']

}
</script>
<style scoped>
.avatar-bg{
    background: #172130;
    font-family: 'Space Grotesk';

    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-align: left;
    text-transform: uppercase;
    color: #fff;

}
</style>