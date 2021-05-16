<template>
  <div>
    <div class="user-permission">
         <div class="header">
        <h2 class="t-title">{{ title }}</h2>
        <span class="sub-title text-uppercase">{{ subTitle }} {{ namedRoute}}</span>
      </div>
      <div>
        <v-btn @click="submitForm()" class="py-7 px-10 btn-btn" style="background: #0CAD73;
          color: #fff; border-radius: 16px;"><span class="t-btn">add new</span> </v-btn>
      </div>
 </div>
 <v-divider></v-divider>
  </div>
</template>
<script>
export default {
    data () {
        return {
            title : 'User permissions',
            subTitle: 'General ' +'/',
            namedRoute: 'User permissions'
        }
    },
    methods: {
      submitForm(){
        alert('Thank you!');
      }
    }
 
}
</script>
<style scoped>
.user-permission{
  display: flex;
  justify-content: space-between;
}
.header{
    font-family: 'Space Grotesk';
    margin: 5px 0 6px 34px;
}
.t-title{
    font-weight: bold;
    font-size: 24px;
    text-transform: capitalize;
}
.sub-title{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    color: #8D8D8D;
}
.t-btn{
  font-family: 'Space Grotesk';
  font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.07em;
}
.btn-btn{
  margin: 10px 34px 6px 0;
  box-shadow: none;
}
</style>