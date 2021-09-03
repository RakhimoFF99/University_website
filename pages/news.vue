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
            {{ $t("newslang") }}
          </p>
        </div>
        <div class="news-images col-md-12 d-flex justify-content-center">
          <img src="../assets/news/image22.png" alt="" />
        </div>
      </div>

      <imgcarousel />

      <div class="new-text">
        <h1>{{ $t("newslang3") }}</h1>
        <newsCard />
      </div>
    </div>
  </div>
</template>

<script>
import newsCard from "@/components/newsCard";
import Navbar from "../components/Navbar.vue";
import Imgcarousel from "../components/Imgcarousel.vue";
export default {
  components: {
    Navbar,
    newsCard,
    Imgcarousel,
  },
  data() {
    return {
      navColor: true,
      isShowMainLogo: false,
      isShowNavbar: false,
      isShowNews: true,
      navHeight: {
        height: "30vh",
      },
      title: "Munosabat",
    };
  },
};
</script>

<style  scoped>
.col-text p {
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
.new-text h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  margin-left: 40px;
}
</style>