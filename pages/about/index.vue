<template>
  <div style="background: white">
    <div>
      <navbar
        :ShowNavbar="isShowNavbar"
        :ShowMainLogo="isShowMainLogo"
        :color="navColor"
        :height="navHeight"
        :title="title"
      />
      <div class="container">
        <div class="row mt-5">
          <div style="font-size: 18px" class="col-md-8 mt-2">
            {{ $t("aboutlang") }}
            <br /><br />
            <p>
              {{ $t("aboutlang2") }}
            </p>
          </div>
          <div
            style="height: 300px"
            class="col-md-4 d-flex justify-content-center"
          >
            <img src="@/assets/images/about-image1.png" alt="about-image" />
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div
          style="height: 300px"
          class="col-md-4 d-flex justify-content-center"
        >
          <img src="@/assets/images/about-image2.png" alt="about-image" />
        </div>

        <div style="font-size: 18px" class="col-md-8 mt-2">
          {{ $t("aboutlang3") }}
          <br /><br />
          <p>
            {{ $t("aboutlang4") }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div style="font-size: 18px" class="col-md-8 mt-2">
          {{ $t("aboutlang5") }}
          <br /><br />
          <p>
            {{ $t("aboutlang6") }}
          </p>
        </div>
        <div
          style="height: 300px"
          class="col-md-4 d-flex justify-content-center"
        >
          <img src="@/assets/images/about-image3.png" alt="about-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import { mapMutations } from "vuex";
export default {
  components: { Navbar },
  data() {
    return {
      navColor: true,
      isShowMainLogo: false,
      isShowNavbar: false,
      isShowNews: true,
      title1: false,
      navHeight: {
        height: "30vh",
      },
      title: "O`zbekiston davlat jahon tillari universiteti haqida",
    };
  },
  methods: {
    ...mapMutations("colors", ["setColor"]),
  },
  mounted() {
    this.setColor(false);
  },
};
</script>

<style scoped>
</style>