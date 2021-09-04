<template>
  <div style="background: white">
    <navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
      :title="title"
    />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 mt-5">
          <h1><strong>Aloqa</strong></h1>
          <br />
          <h5>O'zbekiston Davlat Jahon tillari universiteti</h5>
          <br />
          <div class="row">
            <div class="col-md-4">
              <div class="index">
                index <br />
                <strong>100138</strong>
              </div>
              <br />
              <div class="tele">
                Telefon: <br />
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
                <strong>131-avtobus, 13-yo`nalishli taksi.</strong>
              </div>
              <br />
              <div>
                Manzil: <br />
                <strong
                  >Toshkent shahri, Kichik Xalqa <br />
                  Yo`li ko`chasi, G-9a mavzesi, <br />
                  21-a uy.</strong
                >
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
import Navbar from "../components/Navbar.vue";
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