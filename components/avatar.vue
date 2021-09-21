<template>
 <div class="avatar-bg">
   <v-list dense nav class="py-0 mx-2">
          <v-list-item v-for="(admin, i) in users" :key="i" two-line class="px-0">
            <v-list-item-avatar>
              <v-avatar color="indigo">
              <v-icon class="pa-0 ma-0" dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
            </v-list-item-avatar>
            <template v-if="$auth.$state.loggedIn">
              <v-list-item-content>
              <v-list-item-title class="white--text">{{ $auth.$state.user.name }}</v-list-item-title>
              <v-list-item-subtitle class="white--text user-role">{{$auth.$state.user.role }}</v-list-item-subtitle>
             </v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-content>
              <v-list-item-title class="white--text">{{ admin.name }}</v-list-item-title>
              <v-list-item-subtitle class="white--text">{{ admin.role }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
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

.user-role{
  opacity: 70%;
  z-index: 100;
}
</style>