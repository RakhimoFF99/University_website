<template>
  <div class="container mt-4">
    <div class="news-box">
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }} <br />
          <a href="#"> {{ $t("indexlang2") }}</a>
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }} <br />
          <a href="#"> {{ $t("indexlang2") }}</a>
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }} <br />

          <a href="#"> {{ $t("indexlang2") }}</a>
        </div>
      </div>
      <div class="image-news">
        <div class="image-text">
          {{ $t("blang") }} <br />
          <a href="#"> {{ $t("indexlang2") }}</a>
        </div>
      </div>
    </div>
    <div class="shows-btn">
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
  width: 480px;
  height: 350px;
  margin: 10px;
  margin-bottom: 6rem;
  background-image: url("@/assets/images/image-students-news.png");
  background-repeat: no-repeat;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.image-text {
  width: 80%;
  /* height: 150px; */
  color: white;
  padding: 20px;
  background-color: #1c2e51;
  position: absolute;
  bottom: -80px;
  z-index: 55;
  border-radius: 8px;
  font-size: 18px;
}
.image-text a {
  float: right;
  text-decoration: none;
  color: #3db166;
  font-size: 16px;
  margin-top: 10px;
}
.btn-show-detail {
  background-color: #3db166;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 14px 60px;
}
.shows-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>