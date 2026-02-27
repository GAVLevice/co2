<template>
  <MainNavigation></MainNavigation>
  <Banner></Banner>
  <RouterView></RouterView>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Banner from "./components/Banner.vue"
  import MainNavigation from "./components/MainNavigation.vue"
  export default{
    data(){

    },
    components:{
      Banner, MainNavigation
    }

  }
</script>