<template>
  <div>
    <div class="container">
      <div class="image">
        <div class="image-border">
          <div class="slide-left"></div>
        </div>
        <div class="image-detail">
          MAGISTRATURA BOSQICHIGA MUTAXASSISLIK FANLARIDAN TEST SINOVLARI 17 VA
          18 AVGUST KUNLARI UNIVERSITET HUDUDIDA QUYIDAGI JADVAL
          <div class="slide-right"></div>
          <div class="btn-detail">Batafsil malumot</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tab-bar">
        <div class="news">Yangiliklar</div>
        <div class="events">Tadbirlar</div>
        <div class="announcement">E'lonlar</div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="news-box">
        <div class="image-news">
          <div class="image-text">
            Filologiya fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasini
            olish uchun yozilgan dissertatsiya himoyasi
          </div>
        </div>
        <div class="image-news">
          <div class="image-text">
            Filologiya fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasini
            olish uchun yozilgan dissertatsiya himoyasi
          </div>
        </div>
        <div class="image-news">
          <div class="image-text">
            Filologiya fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasini
            olish uchun yozilgan dissertatsiya himoyasi
          </div>
        </div>
        <div class="image-news">
          <div class="image-text">
            Filologiya fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasini
            olish uchun yozilgan dissertatsiya himoyasi
          </div>
        </div>
        <button class="btn-show-detail">Barchasini ko'rish</button>
      </div>
    </div>
    <section style="background-color:#1C2E51">
    <div
      class="container-fluid text-white mt-4 d-flex justify-content-around flex-wrap"
      style="padding:0 2.5rem"
    >
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-emblem-small.png" alt="emblem" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasi xalq ta'limi vazirligi
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-emblem-small.png" alt="emblem" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasi Oliy va o'rta maxsus talim vazirligi
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-tax.png" alt="tax" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasi davlat soliq qo'mitasi http://soliq.uz
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-gov.png" alt="gov" />
        <div class="ml-3 mt-1 font-weight-bolder">
          Yagona interaktiv davlat xizmatlari portali http://my.gov.uz
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-foreign-lang.png" alt="foreign-lang" />
        <div class="ml-3 mt-1 font-weight-bolder">
          "O‘zbekistonda xorijiy tillar" internet portali va ilmiy-metodik
          elektron jurnali
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img
          src="@/assets/images/image-economical-organization.png"
          alt="economical"
        />
        <div class="ml-3 mt-1  font-weight-bolder">
          Внешнеэкономические связи Республики Узбекистан, инвестиции ...
          http://mfer.uz
        </div>
      </div>
      <div class="items  col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-governmental-portal.png" alt="tax" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasining Hukumat portali http://gov.uz
        </div>
      </div>
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-investition.png" alt="tax" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasi moliya vazirligi http://mf.uz
        </div>
      </div>
     
      <div class="items col-md-3 d-flex align-items-center">
        <img src="@/assets/images/image-presidential-service.png" alt="tax" />
        <div class="ml-3 mt-1 font-weight-bolder">
          O'zbekiston Respublikasi Prezidentining matbuot xizmati
          http://press-service.uz
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script> 
 import {mapState} from 'vuex'
export default {
  data() {
    return {
      ...mapState
    }
  },

  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style>
.btn-show-detail {
  color: white;
  padding: 10px 20px;
  background-color: #3db166;
  margin-top: 2rem;
  border: none;
  font-weight: 500;
}

.items {
  height: 100px;
  margin: 1.5rem;
}

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
  background-image: url('@/assets/images/image-students-news.png');
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.image {
  width: 700px;
  display: flex;
  align-items: center;
  position: relative;
  height: 400px;
  margin: 3rem 2rem 2rem 0;
  background: url('@/assets/images/image-students.png') no-repeat;
  background-size: contain;
  background-position: center;
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

.image-border {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 700px;
  height: 300px;
  border-radius: 16px;
  border: 4px solid #85657c;
}

.image-detail {
  word-break: break-word;
  font-weight: 500;
  display: flex;
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
  background-color: #d7c7d2;
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
  background-image: url('@/assets/icons/arrow-left.png');
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
  background-image: url('@/assets/icons/arrow-right.png');
  background-repeat: no-repeat;
  position: absolute;
  right: -25px;
}
.tab-bar {
  display: flex;
}
.news {
  border: 1px solid #efebee;
  padding: 5px 25px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.4s ease;
}
.events {
  border: 1px solid #efebee;
  padding: 5px 25px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.4s ease;
}
.announcement {
  border: 1px solid #efebee;
  padding: 5px 25px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.8s ease;
}
.news:hover {
  color: white;
  background-color: #85657c;
}
.events:hover {
  color: white;
  background-color: #85657c;
}
.announcement:hover {
  color: white;
  background-color: #85657c;
}
.news-card {
  border-radius: 30px;
  margin: 4rem 1rem;
  position: relative;
}
.news-body {
  width: 450px;

  height: 300px;
  background-image: url('@/assets/images/image-students-news.png');
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
    margin: 0 1rem;
  }
  .image-border {
    position: absolute;
    z-index: 10;
    width: 480px;
    height: 200px;
    right: 0;
    border-radius: 16px;
    border: 4px solid #85657c;
  }
}
</style>
