<template>
    <div>
     <navbar :ShowNavbar="isShowNavbar" :ShowMainLogo="isShowMainLogo" :color="navColor" :height="navHeight" :title="title"/>
    <div class="container mt-5">
    <div class="row">
    <div class="col-md-8">
    O`zbekiston davlat jahon tillari universiteti (O`zDJTU) 1949-yilda Toshkent chet tillari pedagogika instituti nomi bilan faoliyatini boshlagan. Universitet 70 yillik tarixga ega.
1992-yili Toshkent chet tillari pedagogika instituti hamda Respublika Rus tili va adabiyoti instituti birlashib, O`zbekiston davlat jahon tillari universiteti maqomiga ega bo`ldi.
<p>
Bugungi kunda universitetda 9 000 ga yaqin talaba 20 ga yaqin xorijiy tilni jahon ta’lim standartlari asosida o`rganmoqda. Har yili universitetda 15 ta ta’lim yo`nalishida bakalavr, 13 ta ta’lim yo`nalishida magistrlik darajasiga ega mutaxassislar tayyorlanadi.
Universitet talabalari chuqur bilim va ko`nikmalar asosida til o`rganish, o`qitish, tarjima va talqin qilish malakalariga ega bo`lmoqda. Kun sayin rivojlanib borayotgan tezkor zamonda ta’lim tizimi ham o`zgarmoqda. Oliy ta’lim muassasasida til va madaniyat o`rtasidagi aloqa ta’lim tizimining asosiy tamoyili hisoblanadi.

</p>
    </div>
    <div class="col-md-4">
    
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