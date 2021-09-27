  <template>
  <div style="background: white">
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
          <h3 style="color: white; padding: 0px 32px 0 32px">
            {{ $t("indexlang") }}
          </h3>
          <div class="slide-right"></div>
          <div class="btn-detail">{{ $t("indexlang2") }}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <b-card no-body style="box-shadow: none; margin-top: 80px">
        <b-tabs class="b-tabs" v-model="tabIndex">
          <b-tab title="Yangiliklar" :title-link-class="linkClass(0)">
            <NewsCard />
          </b-tab>
          <b-tab title="Tadbirlar" :title-link-class="linkClass(1)">
            <NewsCard />
          </b-tab>
          <b-tab title="E'lonlar" :title-link-class="linkClass(2)">
            <NewsCard />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
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
import Navbar from "../components/Navbar.vue";
import newsCard from "../components/newsCard.vue";
import { mapMutations } from "vuex";
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
        height: "680px",
      },

      tabIndex: 0,
    };
  },
  methods: {
    ...mapMutations("colors", ["setColor"]),
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-success", "text-white", "px-4"];
      } else {
        return ["bg-white", "text-black", "px-4"];
      }
    },
  },
  mounted() {
    this.setColor(false);
  },
};
</script>

<style scoped>
.b-tabs {
  background-color: white;
  border-bottom: none;
}
.items {
  height: 100px;
  margin: 1.5rem;
}
.tabs-card {
  border: 1px solid;
}

.image {
  width: 750px;
  display: flex;
  align-items: center;
  position: relative;
  left: 48px;
  top: 50px;
  height: 500px;
  margin: 3rem 2rem 2rem 0;
  background: url("@/assets/images/image-students.png") no-repeat;
  background-size: contain;
  background-position: center;
}

.image-border {
  display: flex;
  align-items: center;
  position: absolute;
  left: -48px;
  z-index: 10;
  width: 850px;
  height: 400px;
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
  right: -350px;
  width: 486px;
  height: 304px;
  min-height: 200px;
  padding: 20px 30px 20px 20px;
  border-radius: 16px;
  background-color: #1c2e51;
}
.btn-detail {
  float: right;
  margin-top: 20px;
  display: inline;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #898588;
  cursor: pointer;
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
  margin-left: 70px;
}

.news-type {
  border: 1px solid #efebee;
  padding: 12px 48px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.4s ease;
}

.news-type:hover {
  color: white;
  background-color: #3db166;
}
@media only screen and (max-width: 320px) {
  .image {
    width: 150px;
    display: flex;
    align-items: center;
    position: relative;
    height: 100px;
    margin: 3rem 2rem 2rem 0;
    background: url("@/assets/images/image-students.png") no-repeat;
    background-size: contain;
    background-position: center;
  }
  .image-border {
    width: 0px;
    height: 0px;
  }
  .image-detail {
    font-size: 8px;
    display: flex;
    color: white;
    left: 150px;
    z-index: 11;
    width: 100px;
    height: 80px;
    padding: 10px 20px 10px 10px;
    border-radius: 5px;
    background-color: #1c2e51;
  }
}
@media only screen and (max-width: 700px) {
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
    width: 0px;
    height: 0px;
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
  }
}
@media (min-width: 701px) and (max-width: 900px) {
  .image {
    width: 400px;
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
    width: 0px;
    height: 0px;
  }
  .image-detail {
    font-size: 10px;

    left: 280px;
    z-index: 11;
    width: 50%;
    height: 100px;
    padding: 10px 20px 10px 10px;
    border-radius: 16px;
    background-color: #1c2e51;
  }
}
</style>
