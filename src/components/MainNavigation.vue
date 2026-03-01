<template>
    <div class="nav-bar">
        <RouterLink to="/"><div class="logo-box"><img :src="baseUrl+'images/logo.png'"></div></RouterLink>
        <RouterLink to="/sluzby"><div class="nav-headings">Služby</div></RouterLink>
        <RouterLink to="/smartfony"><div class="nav-headings">Smartfóny</div></RouterLink>
        <RouterLink to="/o-nas"><div class="nav-headings">O nás</div></RouterLink>
    </div>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default{
        data(){
            return{
                baseUrl: import.meta.env.BASE_URL
            }
        }
    }
</script>