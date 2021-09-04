<template>
  <div>
    <carousel :options="{}" :items="4">
      <img
        class="col-md-11 my-2"
        src="../assets/news/image25.png"
        alt="news2"
      />

      <img
        class="col-md-11 my-2"
        src="../assets/news/image24.png"
        alt="news3"
      />

      <img
        class="col-md-11 my-2"
        src="../assets/news/image25.png"
        alt="news4"
      />

      <img
        class="col-md-11 my-2"
        src="../assets/news/image23.png"
        alt="news5"
      />
      <img
        class="col-md-11 my-2"
        src="../assets/news/image23.png"
        alt="news5"
      />
    </carousel>

    <h5 v-if="text" class="text">
      {{ $t("textCarousel") }}
    </h5>

    <div class="news-form">
      <h5>18 {{ $t("newsdate") }} 2018</h5>
      <button class="btn btn-success">{{ $t("newslang2") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imagecarousel",
  props: ["text"],
};
</script>

<style scoped>
.news-form {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.news-form button {
  padding: 10px 40px;
}
</style>