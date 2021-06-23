<template>
 <div>
  <AddProductButton />
   <div class="sub-section">
    <div class="flex-section">
    <span>#ID</span>
     <div class="box">
      <span class="text-uppercase t-text" :style="{color: '#0CAD73'}">0 in stock</span> 
     </div>
     </div>
     <div>
      <Subhead />
     </div>
 </div>
 <v-divider></v-divider>
 <v-layout>
        <v-row>
          <v-col cols="6">
            <form>
                <div class="proof">
                 <label for="proof" class="name">Add images</label><br>
                 <div class="border-bg">
                  <div class="images">
                    <div class="pic">
                        <icon name="add"></icon>
                    </div>
                  </div>
                 </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="name" class="name">Name</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="price" class="name">Price</label><br>
                 <input type="text" class="grid" placeholder="£ 0.00">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="category" class="name">Category</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="tags" class="name">Tags</label><br>
                 <input type="text" class="grid" placeholder="Enter tag(s)">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Weight of product" class="name">Weight of product</label><br>
                 <input type="text" class="grid">
                </div>
                <div class="input">
                 <label for="sku" class="name">Sku</label><br>
                 <input type="text" class="grid">
                </div>
                </div>
                <div class="input">
                <label for="permission" class="name">Stock</label><br>
                <input type="dropdown" class="stock"><br>
                </div>
                <div class="input">
                <label for="description" class="name">Description</label><br>
                <textarea placeholder="Description"></textarea>
                </div>
                
            </form>
          </v-col>
          
          <v-spacer></v-spacer>

          <v-col cols="6">
           <div class="system-bar">
            <div class="bar-section">
              <div class="customer-spending">
             <icon name="vendor"></icon>
             <span class="t-head mt-1 mx-2 text-capitalize">Vendor</span>
            </div>
              <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Products:</span>
             <div class="view">
              <span>View</span>
              <icon name="right"></icon>
             </div>
            </div>
            <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Categories:</span>
             <div class="view">
              <span>View</span>
              <icon name="right"></icon>
             </div>
            </div>
            <v-divider></v-divider>
            </div>
            
            </div>
          </v-col>
        </v-row>
      </v-layout>
 </div>
</template>

<script>
    import AddProductButton from '../../resources/Addproductbtn'
    import Subhead from '../../resources/Productdelete.vue'
    export default {
        components: {
            AddProductButton,
            Subhead

        }
        
    }
</script>

<style scoped>
.sub-section{
    display: flex;
    justify-content: space-between;
}
.flex-section{
  display: flex;
  margin: 20px 0 20px 34px;
  font-family: 'Space Grotesk';
}
.t-text{
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.07em;
}
.t-head{
   font-family: 'Space Grotesk';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 130%; 
}
.t-small{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
}
.box{
  /* font-family: 'Space Grotesk'; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  background: rgba(12, 173, 115, 0.1);
  border-radius: 16px;
  height: 4vh;
  margin-left: 20px;
}
form{
  font-family: 'Space Grotesk';
}
.stock {
  border: 2px solid #ECECEC;
  border-radius: 16px;
  width: 39vw;
  height: 6vh;
  padding: 10px;
  outline: none;
}
.permission:focus{
  border: 2px solid #192135;
}
.input{
  margin: 20px 0 10px 34px;
}
.proof{
    margin: 20px 0 10px 34px;
}
.border-bg{
    border: 1px solid #ECECEC;
    border-radius: 16px;
    height: 15vh;
    width: 39vw;
}
 .name{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}
textarea{
    width: 39vw;
    border: 2px solid #ECECEC;
    border-radius: 16px;
    height: 20vh;
    outline: none;
}
textarea::placeholder{
    padding: 10px 20px;
}
.system-bar{
    border-left: 2px solid #ECECEC;
    height: 120vh;
    margin-left: 60px;
}
.customer-spending{
    display: flex;
    font-family: 'Space Grotesk';
    margin-bottom: 20px;
}
.life-spending{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.bar-section{
    padding: 40px;
}

.grid-input{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.grid {
    border: 2px solid #ECECEC;
    border-radius: 16px;
    width: 18.5vw;
    height: 6vh;
    padding: 10px;
    outline: none;
}
.grid:focus{
  border: 2px solid #192135;
}

.view{
    display: flex;
    font-family: Space Grotesk;
    font-weight: normal;
    font-size: 14px;
    color: #0CAD73;

}

/*  */
.images .pic {
  border: 1px solid #ECECEC;
  border-radius: 6.29091px;
  margin-top: 15px;
  margin-left: 20px;
  align-self: center;
  text-align: center;
  padding: 25px 0;
  width: 8vw;
  cursor: pointer;
}
</style>