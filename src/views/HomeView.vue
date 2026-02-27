<template>
  <Banner 
    bannerid="1"
    leftheading="Vyberte si parťáka do vymakanej 6G siete"
    bannerlabel="6G zariadenia za výhodné ceny"
    buttonlabel="Ponuka smartfónov"
    rightheading="Užite si internet bez prekážok."
    kam="/smartfony"
    bannerheight="40vw"
    ></Banner>

    <h1 class="why-us-heading">Prečo CO2</h1>
    <div class="why-us">
        <div class="why-us-box">
            <img src="/images/text-box-outline-custom.png">
            <div>
                <h2>Služby bez viazanosti</h2>
                <p>Viazanosť patrí do múzea! U nás sa veru nenosí - vyberáte si, kedy a ako chcete využívať naše služby.</p>
            </div>
        </div>

        <div class="why-us-box">
            <img src="/images/account-custom.png">
            <div>
                <h2>2 milióny spokojných zákazníkov</h2>
                <p>Už 2 milióny zákazníkov ocenia náš férový prístup. Vďaka nemu sme sa už po desiatykrát stali operátorom roka.</p>
            </div>
        </div>
    </div>

    <div class="why-us">
        <div class="why-us-box">
            <img src="/images/earth-custom.png">
            <div>
                <h2>99,76 % pokrytie 5G sieťou</h2>
                <p>Mobilný internet je pre vás dôležitý. Naše pokrytie sa neustále rozširuje - 5G využíva už 99,76 % obyvateľov a 4G LTE viac ako 99 % populácie.</p>
            </div>
        </div>

        <div class="why-us-box">
            <img src="/images/home-outline-custom.png">
            <div>
                <h2>Komplexný operátor</h2>
                <p>Aj keď je naša ponuka prehľadná, máme všetko, čo potrebujete - od CO2 Internetu po TV balíky a mobilné paušály.</p>
            </div>
        </div>
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