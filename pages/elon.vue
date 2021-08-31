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
          {{ $t("e'lon") }}
          <br />
          <br />
          {{ $t("e'lon2") }}
        </div>
        <div class="col-md-12 mt-3 image">
          <img src="../assets/news/image25.png" alt="news" />
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
      text: true,
      title: "Universitet jamoasi Umummxalq hayriya xasharida",
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