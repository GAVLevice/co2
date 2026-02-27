<template>
    <div class="banner-1" :style="'background-image: url(/images/banner-' + bannerid + '.png); height: '+bannerheight+';'">
        <div class="box-of-banner-heading-boxes">
            <div class="banner-heading-box">
                <h1 class="headings">{{ leftheading }}</h1>
                <hr>
                <label class="banner-label">{{ bannerlabel }}</label>
                <RouterLink :to="kam"><button>{{buttonlabel}}</button></RouterLink>
            </div>

            <div class="banner-heading-box">
                <h1 class="headings">{{ midheading }}</h1>
            </div>

            <div class="banner-heading-box">
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

        }
    },
    props: ['bannerheight', 'bannerid', 'leftheading', 'rightheading', 'midheading', "kam", "buttonlabel", "bannerlabel"]

  }
</script>