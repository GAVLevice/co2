<template>
    <Banner 
    bannerid="2"
    leftheading=""
    midheading="Smartfóny"
    bannerlabel=""
    buttonlabel=""
    rightheading=""
    bannerheight="20vw"
    kam="/o-nas"
    displaybutton="none"
    ></Banner>
    <div class="smartphones">
      <<div class="smartphone-card" v-for="smartphone in smartphones">
        <div class="smartphone-img-box"><img :src="import.meta.env.BASE_URL+'images/'+smartphone.image+'.png'"></div>
      <label><strong>{{ smartphone.name }}</strong></label>
      <label>{{ smartphone.price }}€</label>
      </div>
    </div>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Banner from "../components/Banner.vue"
  export default{
    data(){
      return{
        smartphones: [
          { id: 1, name: "iPhone 11 Pro/Max", price: 349, image: "iphone11"},
          { id: 2, name: "iPhone 12 Pro/Max", price: 499, image: "iphone12"},
          { id: 3, name: "iPhone 13 Pro/Max", price: 599, image: "iphone13"},
          { id: 4, name: "iPhone 14 Pro/Max", price: 749, image: "iphone14"},
          { id: 5, name: "iPhone 15 Pro/Max", price: 999, image: "iphone15"},
          { id: 6, name: "iPhone 16 Pro/Max", price: 1099, image: "iphone16"},
          { id: 7, name: "iPhone 17 Pro/Max", price: 1199, image: "iphone17"}
        ]
      }
    },
    components:{
      Banner
    }

  }
</script>