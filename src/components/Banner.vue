<template>
    <div class="banner-1" :style="'background-image: url('+baseUrl+'images/banner-' + bannerid + '.png); height: '+bannerheight+'; '+bannerstyle">
        <div class="box-of-banner-heading-boxes">
            <div class="banner-heading-box">
                <h1 class="headings">{{ leftheading }}</h1>
                <hr :style="'display: '+displaybutton+';'">
                <label class="banner-label">{{ bannerlabel }}</label>
                <RouterLink :to="kam" :style="'display: '+displaybutton+';'"><button>{{buttonlabel}}</button></RouterLink>
            </div>

            <div class="banner-heading-box">
                <h1 class="headings">{{ midheading }}</h1>
            </div>

            <div :style="'display: '+displayrightbanner+';'" class="banner-heading-box">
                <h1 class="headings">{{ rightheading }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default{
    data(){
        return{
            baseUrl: import.meta.env.BASE_URL
        }
    },
    props: ['bannerstyle','displaybutton','bannerheight', 'bannerid', 'leftheading', 'rightheading', 'midheading', "kam", "buttonlabel", "bannerlabel"]

  }
</script>