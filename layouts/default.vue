<template>
  <div>
    <Header :color="headerBackground" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => ({
    headerBackground: {
      backgroundColor: "#1C2E51",
    },
  }),
  methods: {},
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
</style>
