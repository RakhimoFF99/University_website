<template>
  <div>
    <navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
      :title="title"
    />
    <div class="container mt-5">
      <div class="row">
        <div class="col col-text">
          <p>
            O'zbekiston davlat jahon tillari universitetida magistraturaga qabul
            uchun mutaxasssislik fanidan 17-18 avgust kunlari test sinovlari
            o'tkazildi. https://t.me/magistrlarofficial telegram kanali
            obunachilaridan biri mazkur jarayonga eʼtiroz sifatida test
            sinovlari kompyuterda emas, qogʼoz variantda bo'layotganini, titulga
            belgilanmagani, inson omili aralashsa, korrupsiya yuzaga kelishi
            kabilarni keltirib o'tadi. O'zDJTU matbuot xizmati mazkur holatga
            quyidagicha munosabat bildiradi. Odatda jahon tajribasida test
            sinovlari uchun titulga ehtiyoj mavjud emas. Insho, esse yoki shunga
            o'xshash ismi-sharif aniq ko'rsatiladigan imtihon turlari uchun
            titul varagʼidan foydalaniladi. Testda esa bir necha variant mavjud
            bo'lib, talabgor tomonidan “А, B, C...”dan to'gʼri deb topilgan
            bitta variant belgilanadi. Talabgorning ismi-sharifi ko'rsatilishi
            jarayonga taʼsir etmaydi. Javoblar kalitlar orqali aniqlanadi.
            Аpellyatsiyaga ariza bilan murojaat qilingan taqdirda ham,
            belgilangan javoblarga qarab, variantlar ko'rib chiqiladi.
            Korrupsiyaga yo'l qo'yilmasligini oldini olish va shaffoflikni
            taʼminlash maqsadida test jarayonlari videoyozuvga muhrlanayotganini
            maʼlum qilamiz.
          </p>
        </div>
        <div class="news-images col-md-12 d-flex justify-content-center">
          <img src="../assets/news/image22.png" alt="" />
        </div>
      </div>

      <div class="cards row">
        <img class="col-md-3 my-2" src="@/assets/news/image25.png" alt="" />

        <img class="col-md-3 my-2" src="@/assets/news/image24.png" alt="" />

        <img class="col-md-3 my-2" src="@/assets/news/image25.png" alt="" />

        <img class="col-md-3 my-2" src="@/assets/news/image23.png" alt="" />
      </div>
      <div class="news-form">
        <h5>18 Mart 2018</h5>
        <button class="btn btn-success">Chop etish</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      navColor: true,
      isShowMainLogo: false,
      isShowNavbar: false,
      isShowNews: true,
      navHeight: {
        height: "70vh",
      },
      title: "Munosabat",
    };
  },
};
</script>

<style  scoped>
.col-text p {
  width: 100%;
}
.news-images {
  width: 460px;
  height: 608px;
}
.news-form {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.news-form button {
  padding: 10px 40px;
}
</style>