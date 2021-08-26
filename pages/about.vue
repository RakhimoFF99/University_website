<template>
    <div>
     <navbar :ShowNavbar="isShowNavbar" :ShowMainLogo="isShowMainLogo" :color="navColor" :height="navHeight" :title="title"/>
    <div class="container mt-5">
    <div class="row">
    <div class="col-md-8 mt-3">
    O`zbekiston davlat jahon tillari universiteti (O`zDJTU) 1949-yilda Toshkent chet tillari pedagogika instituti nomi bilan faoliyatini boshlagan. Universitet 70 yillik tarixga ega.
1992-yili Toshkent chet tillari pedagogika instituti hamda Respublika Rus tili va adabiyoti instituti birlashib, O`zbekiston davlat jahon tillari universiteti maqomiga ega bo`ldi.
<br><br>
<p>
Bugungi kunda universitetda 9 000 ga yaqin talaba 20 ga yaqin xorijiy tilni jahon ta’lim standartlari asosida o`rganmoqda. Har yili universitetda 15 ta ta’lim yo`nalishida bakalavr, 13 ta ta’lim yo`nalishida magistrlik darajasiga ega mutaxassislar tayyorlanadi.
Universitet talabalari chuqur bilim va ko`nikmalar asosida til o`rganish, o`qitish, tarjima va talqin qilish malakalariga ega bo`lmoqda. Kun sayin rivojlanib borayotgan tezkor zamonda ta’lim tizimi ham o`zgarmoqda. Oliy ta’lim muassasasida til va madaniyat o`rtasidagi aloqa ta’lim tizimining asosiy tamoyili hisoblanadi.

</p>
    </div>
    <div style="height:300px" class="col-md-4 d-flex justify-content-center">
    <img src="@/assets/images/about-image1.png" alt="about-image">
    </div>
    </div>
    </div>



      <div class="container mt-5">
    <div class="row">
    <div style="height:300px" class="col-md-4 d-flex justify-content-center">
   <img src="@/assets/images/about-image2.png" alt="about-image">
    </div>

    <div  class="col-md-8 mt-3 ">
      Ingliz tili 1-, 2-, 3-fakultetlari, Roman-german filologiyasi, Rus filologiyasi fakultetlarida bo`lajak pedagoglar til o`qitishning sir-asrorlarini o`rganmoqdalar, Tarjima nazariyasi va amaliyoti fakultetida esa ingliz, nemis, koreys, yapon, xitoy tili yo`nalishlarida tarjima mahoratidan tahsil olmoqdalar.
<br><br>
     <p>
       Aynan universitetda bir qator xorijiy tillar bo`yicha ko`nikmalarga ega bo`lgan talabalar bugungi kunda xalqaro miqyosda turli jabhalarda faoliyat yuritishmoqda. Universitet bitiruvchilaridan yetuk tarjimonlar, chet tili o`qituvchilari, siyosatchilar, xalqaro
tashkilotlar va turli qo`shma korxonalarda faoliyat olib borayotgan yetakchi mutaxassislarning borligi universitet nufuzi naqadar yuqori ekanligini ifodalaydi.

       </p> 

    </div>
    </div>
    </div>

     <div class="container mt-5">
    <div class="row">
    <div class="col-md-8 mt-3">
   2018-yili AQSHning Vebster universiteti bilan imzolangan kelishuv asosida bir yillik magistratura akademik Dasturi tashkil etildi. Mazkur magistratura Dasturi Markaziy Osiyoda yagona hisoblanib, bu maskanda butun dunyo yoshlari tahsil olishlari mumkin.
Mamlakatda yagona hisoblangan O‘zbekiston davlat jahon tillari universiteti huzurida Chet tillarini o‘qitishning innovatsiyaviy metodikalarini rivojlantirish respublika ilmiy-amaliy markazi chet tillarni o`qitish bo`yicha Markaziy Osiyoda yetakchi oliy ta’lim
muassasasi hisoblanadi.

<br><br>
<p>
Bugungi kundagi ta’lim jarayoni jahon hamjamiyati talablariga javob beradigan tilshunoslar va tarjimonlar tayyorlashga qaratilgan. Binobarin, til xalqlar va elatlarni bir-biriga yaqinlashtiradigan, ular o`rtasidagi munosabatlarni rivojlantiradigan yagona vositadir.

</p>
    </div>
    <div style="height:300px" class="col-md-4 d-flex justify-content-center">
    <img src="@/assets/images/about-image3.png" alt="about-image">
    </div>
    </div>
    </div>


     
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
    export default {
  components: { Navbar },
  data () {
    return {
      navColor:true,
      isShowMainLogo:false,
      isShowNavbar:false,
      navHeight: {
        height:"70vh"
      },
      title : "O`zbekiston davlat jahon tillari universiteti haqida"
    }
  }
     
    }
</script>

<style  scoped>


</style>