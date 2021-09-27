<template>
  <div>
    <div class="header-container">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-1 m-0 p-0">
            <img class="logo" src="@/assets/partnership/image.png" alt="" />
          </div>
          <div class="col-md-11 justify-content-between">
            <ul class="d-flex nav mt-4">
              <li>
                <nuxt-link to="#">{{ $t("about us") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("addmission") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("grants") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("visits") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("foreigners") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">{{ $t("exchange") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("partners") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> {{ $t("s-members") }} </nuxt-link>
              </li>
              <nuxt-link class="ml-5 mr-5 icon-img" to="#">
                <img src="@/assets/icons/fi_phone.png" alt="" />
              </nuxt-link>

              <div @click="showDropDown" class="dropdown icon-img">
                <img
                  class="icon-style"
                  src="@/assets/icons/fi_globe.png"
                  alt="globes"
                />
                <div ref="drowdownContent" class="dropdown-content">
                  <ul>
                    <li><a @click.prevent="clickUz" href="/uz">Uz</a></li>
                    <li><a @click.prevent="clickRu" href="/ru">Ru</a></li>
                    <li><a @click.prevent="clickEn" href="/en">En</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    clickUz() {
      this.$i18n.setLocale("uz");
      this.isRu = false;
    },
    clickRu() {
      this.$i18n.setLocale("ru");
      this.isUz = false;
    },
    clickEn() {
      this.$i18n.setLocale("en");
      this.isRu = false;
    },
    showDropDown() {
      this.$refs.drowdownContent.classList.toggle("show");
    },
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 90px;
  background-color: #1e73be;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 5px;
}
.logo {
  cursor: pointer;
}
.nav li {
  list-style: none;
}
.nav li a {
  padding: 0 15px;
  color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.dropdown-content {
  position: absolute;
  display: none;
  top: 30px;
  right: -50px;
  background-color: #1c2e51cc;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  z-index: 1;
}
.show {
  display: block;
}
.dropdown-content ul li a {
  color: #fff;
}

@media only screen and (max-width: 600px) {
  .logo {
    margin-left: 20px;
  }
  .nav li {
    display: none;
  }
  .icon-img {
    position: relative;
    top: -90px;
    left: 250px;
  }
}
</style>