<template>
    <Banner 
    bannerid="2"
    leftheading="Rýchly internet?"
    midheading="Výhodný paušál?"
    bannerlabel=""
    buttonlabel="Viac informácií"
    rightheading="Sme tu pre vás."
    bannerheight="20vw"
    kam="/o-nas"
    ></Banner>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Banner from "../components/Banner.vue"
  export default{
    data(){

    },
    components:{
      Banner
    }

  }
</script>