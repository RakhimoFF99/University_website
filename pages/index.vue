  <template>
  <div>
    <Navbar
      :ShowNavbar="isShowNavbar"
      :ShowMainLogo="isShowMainLogo"
      :color="navColor"
      :height="navHeight"
    />
    <div class="container">
      <div class="image">
        <div class="image-border">
          <div class="slide-left"></div>
        </div>
        <div class="image-detail">
          {{ $t("indexlang") }}
          <div class="slide-right"></div>
          <div class="btn-detail">{{ $t("indexlang2") }}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tab-bar">
        <div class="news-type">{{ $t("hlang2") }}</div>
        <div class="news-type">{{ $t("indexlang3") }}</div>
        <div class="news-type">{{ $t("indexlang4") }}</div>
        <div class="news-type">{{ $t("indexlang5") }}</div>
      </div>
    </div>
    <newsCard />
    <section style="background-color: #1c2e51">
      <div
        class="
          container-fluid
          text-white
          mt-4
          d-flex
          justify-content-around
          flex-wrap
        "
        style="padding: 0 2.5rem"
      >
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-emblem-small.png" alt="emblem" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang6") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-emblem-small.png" alt="emblem" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang7") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-tax.png" alt="tax" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang8") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-gov.png" alt="gov" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang9") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img
            src="@/assets/images/image-foreign-lang.png"
            alt="foreign-lang"
          />
          <div class="ml-3 mt-1 font-weight-bolder">
            "O‘zbekistonda xorijiy tillar" {{ $t("indexlang10") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img
            src="@/assets/images/image-economical-organization.png"
            alt="economical"
          />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang11") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-governmental-portal.png" alt="tax" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang12") }}
          </div>
        </div>
        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-investition.png" alt="tax" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang13") }}
          </div>
        </div>

        <div class="items col-md-3 d-flex align-items-center">
          <img src="@/assets/images/image-presidential-service.png" alt="tax" />
          <div class="ml-3 mt-1 font-weight-bolder">
            {{ $t("indexlang14") }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import newsCard from "@/components/newsCard";
import { mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
    newsCard,
  },
  data() {
    return {
      navColor: false,
      isShowMainLogo: true,
      isShowNavbar: true,
      isShowNews: true,
      title: "",
      navHeight: {
        height: "100vh",
      },
    };
  },
};
</script>

<style>
.items {
  height: 100px;
  margin: 1.5rem;
}

.image {
  width: 700px;
  display: flex;
  align-items: center;
  position: relative;
  height: 400px;
  margin: 3rem 2rem 2rem 0;
  background: url("@/assets/images/image-students.png") no-repeat;
  background-size: contain;
  background-position: center;
}

.image-border {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 700px;
  height: 300px;
  border-radius: 16px;
  border: 4px solid #1c2e51;
}

.image-detail {
  word-break: break-word;
  font-weight: 500;
  display: flex;
  color: white;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 11;
  right: -200px;
  width: 50%;
  min-height: 200px;
  padding: 20px 30px 20px 20px;
  border-radius: 16px;
  background-color: #1c2e51;
  box-shadow: 0 4px 10px -2px rgb(215, 199, 210);
}

.btn-detail {
  float: right;
  margin-top: 20px;
  display: inline;
  padding: 8px 10px;
  border: 1px solid #898588;
}
.slide-left {
  width: 50px;
  height: 50px;
  background-image: url("@/assets/icons/arrow-left.png");
  background-repeat: no-repeat;
  position: absolute;
  cursor: pointer;
  left: -25px;
}
.slide-right {
  display: flex;
  align-self: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url("@/assets/icons/arrow-right.png");
  background-repeat: no-repeat;
  position: absolute;
  right: -25px;
}
.tab-bar {
  display: flex;
}

.news-type {
  border: 1px solid #efebee;
  padding: 5px 25px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.4s ease;
}

.news-type:hover {
  color: white;
  background-color: #1c2e51;
}

.news-card {
  border-radius: 30px;
  margin: 4rem 1rem;
  position: relative;
}
.news-body {
  width: 450px;

  height: 300px;
  background-image: url("@/assets/images/image-students-news.png");
  background-repeat: no-repeat;
  border-radius: 30px;
}
.news-text {
  padding: 15px 20px;
  width: 350px;
  font-weight: 500;
  height: 150px;

  position: absolute;
  background-color: #d7c7d2;
  left: 50px;
  border-radius: 16px;
  bottom: -100px;
}

@media only screen and (max-width: 600px) {
  .image {
    width: 300px;
    display: flex;
    align-items: center;
    position: relative;
    height: 300px;
    margin: 3rem 2rem 2rem 0;
    background: url("@/assets/images/image-students.png") no-repeat;
    background-size: contain;
    background-position: center;
  }
  .image-border {
    position: absolute;
    z-index: 10;
    width: 200px;
    height: 200px;
    border-radius: 16px;
    border: 4px solid #85657c;
  }
  .image-detail {
    word-break: break-word;
    font-size: 10px;
    display: flex;
    color: white;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 280px;
    z-index: 11;
    width: 50%;
    height: 100px;
    padding: 10px 20px 10px 10px;
    border-radius: 16px;
    background-color: #1c2e51;
    box-shadow: 0 4px 10px -2px rgb(215, 199, 210);
  }
}
</style>
