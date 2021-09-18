<template>
  <div class="settings">
   <div class="bg">
        <span class="text-uppercase text-bg">privacy and security</span>
    </div>

    <div v-for="(set, i) in settingsTwo" :key="i" class="settings-list"  >
        <div>
            <span class="p-b" :style="{color: set.color}"> {{ set.content }} </span>
        </div>
       
         <div class="f-left">
            <span class="p-s text-uppercase">
                {{ set.views }}
            </span>
            <icon :name="set.icon" class="mt-2"></icon>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Privacy',
    
    data ()
 {
     return {
           settingsTwo: [
              {content: 'GDPR', views: 'view', icon: 'right', to: '/'},
              {content: 'invoice & reports', views: 'view', icon: 'right', to: '/'},
              {content: 'push notifications', views: 'view', icon: 'right', to: '/'},
              {content: '2FA authentication', views: 'view', icon: 'right', color: '#8D8D8D', to: '/'},
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
    padding: 30px 35px;
    font-family: 'Space Grotesk';
    border-bottom: 2px solid #F2F2F2;
    color: #000;
}
.settings-list:hover{
    background-color: #f0f0f0;
}
.f-left{
    display: flex;
    align-items: center;
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