<template>
  <div class="bg-white">
    <div class="header-img">
      <div class="container">
        <div class="slider">
          <span>
            <img src="@/assets/icons/arrow-left.png" alt="dwe" />
          </span>
          <span>
            <img src="@/assets/icons/arrow-right.png" alt="ada" />
          </span>
        </div>
        <div class="slider-text">
          <h5 style="color: white">{{ $t("hlang2") }}</h5>
          <h1 style="color: white; font-weight: 700; font-size: 48px">
            {{ $t("scolarship") }}
          </h1>
          <p style="color: white; font-weight: 500; margin-top: -10px">
            Oleg Kim <span class="mx-3">|</span> August 25 2021
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-2">
        <div class="col-md-6 d-flex elements">
          <img src="@/assets/partnership/image34.png" alt="" />
          <div class="elem-text pl-3">
            <h4 style="color: #000000; font-weight: 600; font-size: 20px">
              {{ $t("meeting") }}
            </h4>
            <p
              style="
                opacity: 60%;
                font-weight: 400;
                font-size: 14px;
                margin: 0;
                padding: 0;
              "
            >
              September 10, 2021
            </p>
            <hr style="border-bottom: 2px solid #3db166; width: 64px" />
            <p style="font-weight: 400; font-size: 14px; padding-bottom: 0">
              {{ $t("m-text") }}
            </p>
          </div>
        </div>
        <div class="col-md-6 d-flex elements">
          <img src="@/assets/partnership/image 32.png" alt="" />
          <div class="elem-text">
            <h4 style="color: #000000; font-weight: 600; font-size: 20px">
              {{ $t("global") }}
            </h4>
            <p style="opacity: 60%; font-weight: 400; font-size: 14px">
              September 10, 2021
            </p>
            <hr style="border-bottom: 2px solid #3db166; width: 64px" />
            <p style="font-weight: 400; font-size: 14px; padding-bottom: 0">
              {{ $t("g-text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="text">
            <h4 style="font-weight: 600; font-size: 24px">
              {{ $t("Categories") }}
            </h4>
          </div>
        </div>
        <div class="col-md-4">
          <button class="button-search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9984 21.0004L16.6484 16.6504"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <input id="search" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="nav2">
        <ul>
          <li>
            <a class="nav-link" href="#">{{ $t("Interviews") }}</a>
          </li>
          <li>
            <a class="nav-link" href="#">{{ $t("Job offers") }}</a>
          </li>
          <li>
            <a class="nav-link" href="#">{{ $t("hlang2") }}</a>
          </li>
          <li>
            <a class="nav-link" href="#">{{ $t("Scholarships2") }}</a>
          </li>
          <li>
            <a class="nav-link" href="#">{{ $t("visits") }}</a>
          </li>
        </ul>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 d-flex column">
          <img src="@/assets/partnership/image 35.png" alt="" />
          <div class="text-b ml-3">
            <h2 style="font-size: 32px; font-weight: 600; color: black">
              {{ $t("stajirovka") }}
            </h2>
            <p style="color: black; font-weight: 500; font-size: 16px">
              {{ $t("muddati") }} 2021 {{ $t("yil") }} 15 {{ $t("oy") }}
            </p>
            <hr style="border-bottom: 2px solid #3db166; width: 146px" />
            <p style="font-weight: 500">
              {{ $t("st-text") }}
            </p>
          </div>
        </div>
        <div class="col-md-12 d-flex mb-3 column">
          <img src="@/assets/partnership/image 36.png" alt="" />
          <div class="text-b ml-3">
            <h2 style="font-size: 32px; font-weight: 600; color: black">
              {{ $t("conferens") }}
            </h2>
            <p style="color: black; font-weight: 500; font-size: 16px">
              {{ $t("muddati") }} 2021 {{ $t("yil") }} 15 {{ $t("oy") }}
            </p>
            <hr style="border-bottom: 2px solid #3db166; width: 146px" />
            <p style="font-weight: 500">
              {{ $t("cont-text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",
};
</script>

<style>
.header-img {
  background-image: url("@/assets/partnership/image1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 220px;
}
.slider span img {
  width: 50px;
  height: 50px;
}
.slider-text {
  margin-top: 180px;
}
.button-search {
  background: #1e73be;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  position: relative;
  left: 540px;
  top: 48px;
}
.col-md-4 input {
  width: 496px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding-left: 30px;
  margin-left: 90px;
}
.nav2 {
  margin-left: -45px;
  display: block;
}
.nav2 ul {
  display: flex;
  list-style: none;
}
.nav2 ul li .nav-link {
  margin: 0 40px 0 0;
  color: black;
  font-weight: 500;
}
@media only screen and (max-width: 600px) {
  .col-md-4 input {
    width: 296px;
    height: 38px;
  }
  .button-search {
    background: #1e73be;
    width: 38px;
    height: 38px;
    position: relative;
    left: 400px;
    top: 0px;
  }

  .slider-text {
    margin-top: 80px;
  }

  .nav2 ul li .nav-link {
    margin: 0 10px 0 0;
  }
  .column img {
    width: 220px;
  }
} ;
</style>