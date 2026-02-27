<template>
    <div class="nav-bar">
        <RouterLink><div class="logo-box"><img src="/images/logo.png"></div></RouterLink>
        <RouterLink><div class="nav-headings">Služby</div></RouterLink>
        <RouterLink><div class="nav-headings">Smartfóny</div></RouterLink>
        <RouterLink><div class="nav-headings">O nás</div></RouterLink>
    </div>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>