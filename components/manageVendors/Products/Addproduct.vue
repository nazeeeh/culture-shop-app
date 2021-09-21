<template>
 <div>
  <!-- <AddProductButton /> -->
   <div class="sub-section">
    <div class="flex-section">
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
            <form @submit.prevent="onCreateProduct">
                <div class="proof">
                 <label for="proof" class="name">Add images</label><br>
                 <vue-upload-multiple-image
                 dragText="Upload Image"
                 browseText=""
                 showEdit= ""
                 primaryText=""
                 showDelete= ""
                 markIsPrimaryText=""
                 v-on:change="onFileSelected"
                 ></vue-upload-multiple-image>
                 <!-- <div class="border-bg">
                   <input ref="file" 
                   v-on:change="onFileSelected" 
                   type="file" class="custom-file-input"
                   accept="image/*">
                   <icon class="add" name="add"></icon>
                 </div> -->
                </div>
                    <div class="input svg-inner">
                      <label for="name" class="name">Shop vendor</label><br>
                      <select  v-model="shop_id" class="grid">
                      <optgroup v-for="(item, index) in allShops" :key="index" >
                      <option :value="item.id">{{item.firstname}}</option>
                      </optgroup>
                    </select>
                  <icon class="dropdown" name="dropdown"></icon>
                    </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="name" class="name">Name</label><br>
                 <input v-model="name" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="price" class="name">Price</label><br>
                 <input v-model="price" type="text" class="grid" placeholder="£ 0.00">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="category" class="name">Category</label><br>
                 <input v-model="category" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="tags" class="name">Tags</label><br>
                 <input v-model="tag" type="text" class="grid" placeholder="Enter tag(s)">
                </div>
                </div>
                <div class="grid-input">
                  <div class="input">
                 <label for="Weight of product" class="name">Weight of product</label><br>
                 <input v-model="weight" type="text" class="grid">
                </div>
                <div class="input">
                 <label for="sku" class="name">Sku</label><br>
                 <input v-model="sku" type="text" class="grid">
                </div>
                </div>
                <div class="input">
                <label for="permission" class="name">Stock</label><br>
                <input v-model="stock" type="text" class="stock"><br>
                </div>
                <div class="input">
                <label for="description" class="name">Description</label><br>
                <textarea v-model="description" placeholder="Description"></textarea>
                </div>
                 
                <div class="btn-btn">
                <v-btn class="btn btn-cancel py-6 px-10 text-uppercase mr-2">Cancel</v-btn>
                <v-btn class="btn btn-mark-as-resolved py-6 px-12 text-uppercase mr-2">Add New</v-btn>
                <v-btn class="btn btn-save py-6 px-12 text-uppercase" type="submit" >Save</v-btn>
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
             <span class="t-small mt-1 text-capitalize">Products:0</span>
             <div class="view">
              <span>View</span>
              <icon name="right"></icon>
             </div>
            </div>
            <v-divider></v-divider>
            <div class="life-spending">
             <span class="t-small mt-1 text-capitalize">Categories:0</span>
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
    // import AddProductButton from '../../resources/Addproductbtn'
    import Subhead from '../../resources/Productdelete.vue'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    export default {

      async fetch() {
        const response = await this.$api.getVendors()
        this.allShops = response.data
      },
        components: {
            // AddProductButton,
            Subhead,
            VueUploadMultipleImage
        },
        data() {
          return {
              selectedFile: '',
              name: '',
              price: '',
              category: '',
              tag: '',
              weight: '',
              sku: '',
              stock: '',
              description: '',
              allShops: [],
              shop_id: ""
          }
        },
        computed: {
          formIsValid() {
            return this.selectedFile !== null &&
            this.name !== '' &&
            this.price !== '' &&
            this.category !== '' &&
            // this.tag !== '' &&
            // this.weight !== '' &&
            // this.sku !== '' &&
            this.stock !== '' &&
            // this.description !== '' &&
            this.shop_id != ''
          }
        },

        methods: {
          onFileSelected(){
            this.selectedFile = this.$refs.file.files[0]
          },

        onCreateProduct(e){
            e.preventDefault()
            if(!this.formIsValid) {
              return
            }   
      try {
          let productData= new FormData();
          productData.append("shop_id", this.shop_id);
          productData.append("image", this.selectedFile);
          productData.append("name", this.name); 
          productData.append("category", this.category);
          productData.append("price", this.price);
          productData.append("description", this.description);
          productData.append("weight", this.weight);
          productData.append("sku", this.sku);
          productData.append("tag", this.tag);
          productData.append("stock", this.stock);
          
              const response = this.$api.addProduct(productData)
              this.$showSnackBar({
                     show: true,
                     timeout: 3000,
                     message: `Product Added`,
                     color: 'green',
                    })
                    //RESET INPUT VALUES
                    this.selectedFile = this.name = this.price = this.category
                  this.tag = this.weight = this.sku = this.stock = this.description = ""
                }catch(err){
                  return err
            }
          },
          
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
  width: 40.5vw;
  height: 8vh;
  padding-left: 25px;
  margin-top: 12px;
  outline: none;
}
.stock:focus{
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
    width: 40.5vw;
    border: 2px solid #ECECEC;
    border-radius: 16px;
    height: 20vh;
    padding-left: 25px;
    padding-top: 10px;
    margin-top: 12px;
    outline: none;
}
.svg-inner {
  position: relative;
  width: 100%;
}

.dropdown{
  position: absolute;
  left: 40%;
  top: 55%;
  display: block;
  padding: 0;
  z-index: 1;
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
    width: 19vw;
    height: 8vh;
    padding-left: 25px;
    margin-top: 12px;
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
.add{
  position: absolute;
  top: 13.2rem;
  left: 5.5rem;
  cursor: pointer;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: '';
  margin-top: 15px;
  margin-left: 10px;
  width: 8vw;
  align-self: center;
  text-align: center;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 6.29091px;
  padding: 25px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
}
.custom-file-input:hover::before {
  border-color: black;
}

.btn-btn{
  position: absolute;
  top: 10px;
  right: 40px;
  font-family: 'Space Grotesk';
}
.btn-save{
    background: #0CAD73 !important;
    color: #fff !important;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.btn-mark-as-resolved{
    background: rgba(12, 173, 115, 0.1)!important;
    color: #0CAD73 !important;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}
.btn-cancel{
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    box-shadow: none;
}

</style>