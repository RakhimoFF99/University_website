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
          <h1 style="font-size: 46px; text-align: center; color: white">
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
            <h3>
              2019-2020 ўқув йили учун таклиф этилаётган магистрлик диссертация
              мавзулари
            </h3>
            <br />
            <p>
              Тақдим этилаётган қуйидаги магистрлик диссертация мавзулари
              университетнинг 2018 йил 20 августдаги 596-сонли буйруғига асосан
              мутахассислик кафедраларида фаолият юритаётган фан номзоди (PhD)
              ва фан доктори (DSc)лар томонидан тақдим этилган, кафедраларда,
              факультетларда ва Илмий-услубий кенгашда муҳокама қилинган ва
              тасдиқланган.
            </p>
          </div>
          <div class="card-group mt-5 mb-5">
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Mavzular</h4>
            </div>
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Magistrantlar</h4>
            </div>
            <div class="card ml-3" style="text-align: center">
              <h1 style="color: #3db166">706 TA</h1>
              <h4>Tanlandi</h4>
            </div>
          </div>
        </div>
        <pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import pagination from "../components/pagination.vue";
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
};
</script>

<style scoped>
.wars {
  position: absolute;
  top: 70px;
}
.wars .col-md-12 img {
  position: relative;
  left: 39%;
  margin: 40px 0;
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
</style>