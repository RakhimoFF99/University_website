<template>
  <div>
    <navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
      :title="title"
    />

    <div class="container">
      <div class="text mt-5">
        <h1>
          <strong> {{ $t("storyTitle") }} </strong>
        </h1>
      </div>
      <div class="row mt-3">
        <div class="col-md-9">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/XmNaOekams8?start=2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-3 pl-5 text">
          <p>
            {{ $t("story") }}
          </p>
        </div>
        <div class="image-content">
          {{ $t("bottomText") }}
        </div>
      </div>
      <div class="news-form">
        <h5>18 {{ $t("newsdate") }} 2018</h5>
        <button class="btn btn-success">{{ $t("newslang2") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "store",
  data() {
    return {
      navColor: false,
      isShowMainLogo: false,
      isShowNavbar: false,
      isShowNews: false,
      navHeight: {
        height: "0",
      },
      title: false,
    };
  },
};
</script>


<style scoped>
.video {
  width: 875px;
  height: 576px;
}
.news-form {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}
.news-form button {
  padding: 10px 40px;
}

@media only screen and (max-width: 600px) {
  .video {
    width: 475px;
    height: 276px;
  }
}
@media (min-width: 601px) and (max-width: 1000px) {
  .video {
    width: 475px;
    height: 376px;
  }
}
@media (min-width: 1001px) and (max-width: 1200px) {
  .video {
    width: 675px;
    height: 476px;
  }
}
</style>