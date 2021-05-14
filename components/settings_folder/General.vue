<template>
  <div class="settings">
   <div class="bg">
        <span class="text-uppercase text-bg">General</span>
    </div>
    
    <div v-for="(setting, i) in settings" :key="i" class="settings-list" :to="setting.to" router>
        <div>
            <span class="p-b"> {{ setting.content }} </span>
        </div>
        <div class="f-left">
            <span class="p-s text-uppercase mt-1">{{ setting.views }}</span>
            <Icon :name="setting.icon" />
        </div>
        
    </div>
  </div>
</template>
<script>
export default {
    name: 'General',

    data ()
 {
     return {
         settings: [
              {content: 'User permissions', views: 'view', icon: 'right', to: '/user_permission'},
              {content: 'vendor agreements', views: 'view', icon: 'right', to: '/vendor_agreement'},
              {content: 'driver agreements', views: 'view', icon: 'right', to: '/driver_agreement'},
              {content: 'privacy policy', views: 'view', icon: 'right'},
              {content: 'terms & conditions', views: 'view', icon: 'right'},
          ],
     }
 }}
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
    padding: 20px 35px;
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

</style>