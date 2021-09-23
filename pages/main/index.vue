<template>
  <div style="background: white">
    <navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
      :title="title"
      :bg_color="bgColor"
    />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 mt-5">
          <h1>
            <strong>{{ $t("mainPage") }}</strong>
          </h1>
          <br />
          <h5>{{ $t("mainPageh5") }}</h5>
          <br />
          <div class="row">
            <div class="col-md-4">
              <div class="index">
                index <br />
                <strong>100138</strong>
              </div>
              <br />
              <div class="tele">
                {{ $t("mainPhone") }}: <br />
                <strong>+998 71 230-12-91</strong>
              </div>
              <br />
              <div class="email">
                E-mail:
                <strong>
                  uzgumya@exat.uz, uzgumya1@exat.uz, uzdjtu_d@edu.uz
                </strong>
              </div>
            </div>
            <div class="col-md-8">
              <div>
                Transport: <br />
                <strong>{{ $t("transport") }}</strong>
              </div>
              <br />
              <div>
                Manzil: <br />
                <strong>
                  {{ $t("manzil") }} <br />
                  {{ $t("manzil2") }} <br />
                  {{ $t("manzil3") }}
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 square"></div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      navColor: false,
      isShowMainLogo: true,
      isShowNavbar: true,
      isShowNews: true,
      bgColor: {
        background: "rgba(138, 42, 43, 0.7)",
      },
      title: "",
      navHeight: {
        height: "100vh",
      },
    };
  },
};
</script>

<style scoped>
.square {
  width: 624px;
  height: 304px;
  margin-top: 100px;
  background: #c4c4c4;
  border-radius: 24px;
}
</style>