<template>
    <div class="footer-nav">
        <div class="footer-nav-col">
            <h2>Rýchle odkazy</h2>
            <RouterLink to="/sluzby"><div class="footer-headings">Služby</div></RouterLink>
            <RouterLink to="/smartfony"><div class="footer-headings">Smartfóny</div></RouterLink>
            <RouterLink to="/o-nas"><div class="footer-headings">O nás</div></RouterLink>
        </div>
        <div class="footer-nav-col">
            <h2>Kontakt</h2>
            <a href="mailto:kontakt@co2.com">kontakt@co2.com</a>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
        </div class="footer-nav-col">
        <div class="footer-nav-col">
            <h2>Nájdete nás</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5074825031775!2d18.61110157784791!3d48.216101871252285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476adc571df94c5b%3A0x30b8e811b5ff4582!2sJanka%20Jesensk%C3%A9ho%2C%20934%2005%20Levice!5e0!3m2!1ssk!2ssk!4v1772212807963!5m2!1ssk!2ssk" width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>