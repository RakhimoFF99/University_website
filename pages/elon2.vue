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
        <div class="col-md-12 mt-3 text">
          Университетда ташкил этилган Наврўз сайли чин маънода халқимизнинг
          гўзал урф-одатлари, анъаналари ва қадриятларининг намойиш саҳнаси
          бўлди, десак муболаға бўлмайди. Бир тарафда йигитларнинг баҳор элчиси
          қалдирғочга монанд варрак учириши, қизларнинг ўзларига оро бериб,
          шаршарага монанд сочлари билан соллоланиши, қадриятларимиз билимдони
          бўлган ўқитувчиларнинг вилоятларимиздаги гўзал урф-одатлару
          анъаналарни талаба-ёшларга сўзлаши, бу ажиб манзара бир сўз билан
          айтганда эртаклар оламига қиёс сеҳрли диёр, Ўзбекистон дея аталмиш
          жаннатмакон юртнинг келажаги буюк, одамлари бахтли эканлигидан
          далолатдир. Қуйида ҳукмингизга ҳавола этиладиган фотолавҳаларга
          муҳрланган олтинга тенг лаҳзалар, ўйлаймизки, сизни ҳам бефарқ
          қолдирмайди.
        </div>
        <div class="col-md-12 mt-3 image">
          <img src="../assets/image22.png" alt="news" />
        </div>
        <Imgcarousel :text="text" />
        <div class="new-text">
          <h1>{{ $t("newslang3") }}</h1>
          <newsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Imgcarousel from "../components/Imgcarousel.vue";
import Navbar from "../components/Navbar.vue";
import newsCard from "../components/newsCard.vue";
export default {
  components: { Navbar, Imgcarousel, newsCard },
  data() {
    return {
      navColor: true,
      isShowMainLogo: false,
      isShowNavbar: false,
      navHeight: {
        height: "30vh",
      },
      title:
        "Баҳор... Наврўз... Гўзаллик... Энг латиф туйғулар бизнинг университетда меҳмон...",
    };
  },
};
</script>

<style  scoped>
.text {
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding: 0 90px;
}
.image img {
  width: 100%;
  height: 100%;
  padding: 0 80px;
}
.new-text h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  margin-left: 45px;
}
</style>