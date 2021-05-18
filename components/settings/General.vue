<template>
  <div class="settings">
   <div class="bg">
        <span class="text-uppercase text-bg">General</span>
    </div>
    
    <div v-for="(setting, i) in settings" :key="i" class="settings-list">
        <div>
            <v-list dense>
             <v-list-item>
                 <span class="p-b"> {{ setting.content }} </span>
             </v-list-item>
            </v-list>
        </div>
        <v-list dense>
         <div class="f-left">
         <v-list-item :to="setting.to" router>
         <span class="p-s text-uppercase">
                {{ setting.views }}
            </span>
              <icon :name="setting.icon" class="mt-2"></icon>

         </v-list-item>
        </div>
        </v-list>
    </div>
  </div>
</template>
<script>
export default {
    name: 'General',

    data () {
     return {
         settings: [
              {content: 'User permissions', views: 'view', icon: 'right', to: '/settings/general/user-permission'},
              {content: 'vendor agreements', views: 'view', icon: 'right', to: '/settings/general/vendor-agreement'},
              {content: 'driver agreements', views: 'view', icon: 'right', to: '/settings/general/driver-agreements'},
              {content: 'privacy policy', views: 'view', icon: 'right', to: '/settings/general/privacy-policy'},
              {content: 'terms & conditions', views: 'view', icon: 'right', to: '/settings/general/terms & conditions'},
          ],
     }
     
    }
 }
</script>
<style scoped>
.bg{
    background: #F2F2F2;
    font-family: 'Space Grotesk';
    padding: 5px 0;
}
.text-bg{
    font-size: 12px;
    font-weight: 600;
    margin-left: 2.1rem;
}
.settings-list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    font-family: 'Space Grotesk';
    border-bottom: 2px solid #F2F2F2;
}
.f-left{
    display: flex;
}
.p-b{
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
}
.p-s{
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
    color: #8D8D8D;
}
/* a{
    text-decoration: none;
} */
</style>