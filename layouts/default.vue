<template>
  <div>
    <Header :color="headerBackground" />
    <Nuxt />
    <Footer :color="footerBackground" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
export default {
  data: () => ({
    headerBackground: {
      backgroundColor: "#1C2E51",
    },
    footerBackground: {
      backgroundColor: "#1C2E51",
    },
  }),
  computed: {
    ...mapState("colors", ["isChangedColor"]),
  },

  methods: {},
  mounted() {
    this.isChangedColor
      ? (this.headerBackground.backgroundColor = "rgba(138, 42, 43, 0.9)")
      : (this.headerBackground.backgroundColor = "1C2E51");
    this.isChangedColor
      ? (this.footerBackground.backgroundColor = "rgba(138, 42, 43, 0.9)")
      : (this.footerBackground.backgroundColor = "1C2E51");
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
</style>
