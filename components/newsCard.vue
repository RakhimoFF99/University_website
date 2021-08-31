<template>
  <div class="container mt-4">
    <div class="news-box">
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }}
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }}
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }}
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }}
        </div>
      </div>
      <button class="btn-show-detail">{{ $t("bblang") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bodyNews",
};
</script>

<style scoped>
.news-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.image-news {
  width: 500px;
  height: 350px;
  margin: 10px;
  margin-bottom: 6rem;
  background-image: url("@/assets/images/image-students-news.png");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.image-text {
  width: 80%;
  height: 150px;
  color: white;
  padding: 20px;
  background-color: #1c2e51;
  position: absolute;
  bottom: -80px;
  z-index: 55;
}
.btn-show-detail {
  background-color: #3db166;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 12px 24px;
}
</style>