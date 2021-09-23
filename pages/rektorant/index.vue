<template>
  <div style="background: white">
    <Navbar :title="title" :color="navColor" :height="navHeight" />
    <rektorant-card />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import RektorantCard from "../../components/rektorantCard.vue";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    navColor: true,
    title: "Rektorat",
    navHeight: {
      height: "30vh",
    },
  }),

  components: {
    Navbar,
    RektorantCard,
  },
  methods: {
    ...mapMutations("colors", ["setColor"]),
  },
  mounted() {
    this.setColor(false);
  },
};
</script>

<style>
</style>