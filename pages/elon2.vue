<template>
  <div>
    <navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
      :title="title"
      :title1="title1"
    />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 mt-3 text">
          {{ $t("elon2") }}
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
      title: "Баҳор... Наврўз... Гўзаллик... Энг латиф",
      title1: "туйғулар бизнинг университетда меҳмон...",
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