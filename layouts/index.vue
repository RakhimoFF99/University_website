<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/partnerships/header.vue";
import Footer from "../components/partnerships/footer.vue";
export default {
  components: { Footer, Header },
};
</script>

<style>
</style>