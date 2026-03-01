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
            <img :src="baseUrl+'images/text-box-outline-custom.png'">
            <div>
                <h2>Služby bez viazanosti</h2>
                <p>Viazanosť patrí do múzea! U nás sa veru nenosí - vyberáte si, kedy a ako chcete využívať naše služby.</p>
            </div>
        </div>

        <div class="why-us-box">
            <img :src="baseUrl+'images/account-custom.png'">
            <div>
                <h2>2 milióny spokojných zákazníkov</h2>
                <p>Už 2 milióny zákazníkov ocenia náš férový prístup. Vďaka nemu sme sa už po desiatykrát stali operátorom roka.</p>
            </div>
        </div>
    </div>

    <div class="why-us">
        <div class="why-us-box">
            <img :src="baseUrl+'images/earth-custom.png'">
            <div>
                <h2>99,67 % pokrytie 6G sieťou</h2>
                <p>Mobilný internet je pre Vás dôležitý. Naše pokrytie sa neustále rozširuje - 6G využíva už 99,67 % obyvateľov.</p>
            </div>
        </div>

        <div class="why-us-box">
            <img :src="baseUrl+'/images/home-outline-custom.png'">
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
        return{
            baseUrl: import.meta.env.BASE_URL
        }
    },
    components:{
      Banner
    }

  }
</script>