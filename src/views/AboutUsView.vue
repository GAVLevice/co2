<template>
    <Banner 
    bannerid="6"
    leftheading=""
    midheading=""
    bannerlabel=""
    buttonlabel="Späť na domov"
    rightheading=""
    bannerheight="20vw"
    bannerstyle="background-position-y: -15vw;"
    kam="/"
    displaybutton="none"
    ></Banner>
    <div class="service-content" style="color: white; flex-direction: column;">
      <h2>Kto sme</h2>
      <p>CO2 je moderný telekomunikačný operátor, ktorý prináša rýchly a optimalizovaný internet, férové mobilné služby a televíziu bez zbytočných komplikácií. Veríme, že pripojenie má byť jednoduché, dostupné a spoľahlivé pre každého. Našim cieľom je vytvárať služby, ktoré fungujú tak, ako majú - bez výpadkov, bez skrytých poplatkov a bez zbytočnej viazanosti.<br><br></p>
      <h2>Naša vízia</h2>
      <p>Chceme byť dychom čerstvého internetu na trhu - operátorom, ktorý kladie dôraz na transparentnosť, technológie a spokojnosť zákazníkov. Neustále investujeme do rozvoja siete a inovácií, aby sme prinášali stabilné 6G pokrytie, vysokorýchlostný domáci internet a moderné digitálne riešenia.<br><br></p>
      
      <h2>Prečo sme vznikli</h2>
      <p>CO2 vzniklo s jednoduchou myšlienkou - telekomunikačné služby by mali byť optimalizované. Žiadna vysoká latencia. Žiadne pomalé sťahovanie. Žiadne neprehľadné cenníky. Len jasné podmienky, férové ceny a služby, na ktoré sa môžete spoľahnúť nielen cenou, ale aj výkonom.<br><br></p>
      
      <h2>Naše hodnoty</h2>
      <p>Transparentnosť - hovoríme veci priamo.<br>Inovácie - sledujeme nové technológie.<br>Spoľahlivosť - stabilná sieť je základ.<br>Zákazník na prvom mieste - vaša spokojnosť je pre nás priorita.<br><br><br></p>
      
      <h2>Porovnanie výkonu CO2 s konkurenciou</h2>
      <img src="/images/porovnanie.png">
    </div>

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