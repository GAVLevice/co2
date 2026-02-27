<template>
  <MainNavigation></MainNavigation>
  <RouterView></RouterView>
  <FooterNavigation></FooterNavigation>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Banner from "./components/Banner.vue"
  import MainNavigation from "./components/MainNavigation.vue"
  import FooterNavigation from "./components/FooterNavigation.vue"
  export default{
    data(){

    },
    components:{
      Banner, MainNavigation, FooterNavigation
    }

  }
</script>