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
      <div class="row wars">
        <div class="col-md-12">
          <img src="../assets/images/lecture-logo.png" alt="lect" />
        </div>
        <div class="col-md-12">
          <h1
            style="
              font-size: 46px;
              margin-left: 45px;
              text-align: center;
              color: white;
            "
          >
            ЎЗБЕКИСТОН ДАВЛАТ <br />
            ЖАҲОН ТИЛЛАРИ УНИВЕРСИТЕТИ
          </h1>
        </div>
      </div>
    </div>
    <div class="content-text">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-12 pt-3" style="text-align: center">
            <h3 style="font-size: 28px">
              {{ $t("lecturesh3") }}
            </h3>
            <br />
            <p style="font-size: 16px">
              {{ $t("lecturesp") }}
            </p>
          </div>
          <div class="card-group mt-5 mb-5">
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Мавзулар</h4>
            </div>
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Магистрантлар</h4>
            </div>
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Танланди</h4>
            </div>
          </div>
        </div>
        <div class="buttons">
          <button class="btn btn-primary">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                /></svg
            ></span>
            Юклаб олиш
          </button>
          <button class="btn btn-primary">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                /></svg
            ></span>
            Юклаб олиш
          </button>
          <button class="btn btn-primary">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                />
              </svg>
            </span>
            Юклаб олиш
          </button>
          <button class="btn btn-primary">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                /></svg
            ></span>
            Юклаб олиш
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container">
        <div class="lecture-content">
          <table>
            <tr>
              <td style="font-size: 28px"><strong>#</strong></td>
              <td>Мавзу</td>
              <td>Мутахассислик шифри ва номи</td>
              <td>изоҳ</td>
              <td>Маҳсулот номи</td>
              <td>Танланди / Танланмади</td>
            </tr>
            <br />
            <tr>
              <td>1</td>
              <td>
                Притчево-мифологическое повествование в современной русской
                прозе.
              </td>
              <td>5A 120101 Литературоведение (русская литература)</td>
              <td>
                Притча, миф структура, повествование, современный литературный
                процесс
              </td>
              <td></td>
              <td>
                <button
                  style="width: 110px; background-color: #3db166"
                  class="btn btn-success"
                >
                  Танланди
                </button>
              </td>
            </tr>
          </table>
        </div>

        <pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import pagination from "../components/pagination.vue";
import { mapMutations } from "vuex";
export default {
  components: { pagination, Navbar },
  data() {
    return {
      navColor: true,
      isShowMainLogo: false,
      isShowNavbar: false,
      isShowNews: true,
      navHeight: {
        height: "45vh",
      },
    };
  },
  methods: {
    ...mapMutations("colors", ["setColor"]),
  },
  mounted() {
    this.setColor(false);
  },
};
</script>

<style scoped>
.btn {
  box-sizing: border-box;
  width: 40px;
}
.wars {
  position: absolute;
  top: 70px;
}
.wars .col-md-12 img {
  position: relative;
  left: 40%;
  margin: 40px 0 0 0;
}
.content-text {
  background-color: #f2f2f2;
}
.card-group .card {
  width: 392px;
  height: 193px;
  border-radius: 7px;
  padding-top: 45px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}
.buttons .btn {
  width: 250px;
  padding: 15px 0;
  background-color: #1c2e51;
  margin-bottom: 30px;
}

.buttons .btn span {
  padding: 0 10px;
}
table {
  margin-top: 40px;
}
table tr {
  text-align: center;
  background-color: #f2f2f2;
}
table tr th,
td {
  padding: 15px;
}
</style>