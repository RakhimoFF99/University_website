<template>
  <div>
    <div class="background-image" :style="height">
      <div v-if="color" class="color"></div>
      <div v-if="ShowMainLogo" class="main-logo col-md-6 mx-auto"></div>
      <div class="title">
        <h1 class="text-white">
          {{ title }} <br />
          {{ title1 }}
        </h1>
      </div>
      <div v-if="ShowNavbar" ref="nav" class="navbar hide d-flex">
        <div class="navbar-list">
          <div :style="bg_color" @click="toogleNavbar" class="nav-item d-flex">
            <fa class="m-1" icon="align-justify" />
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang") }}</div>
          </div>

          <div :style="bg_color" @click="toogleNavbar" class="nav-item d-flex">
            <fa class="m-1" icon="search" />
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang1") }}</div>
          </div>
          <div :style="bg_color" @click="toogleNavbar" class="nav-item d-flex">
            <fa class="m-1" icon="calendar" />
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang2") }}</div>
          </div>
          <div @click="toogleNavbar" class="nav-item smaller-nav d-flex">
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang3") }}</div>
          </div>
          <div @click="toogleNavbar" class="nav-item smaller-nav d-flex">
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang4") }}</div>
          </div>
          <div @click="toogleNavbar" class="nav-item smaller-nav d-flex">
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang5") }}</div>
          </div>
        </div>

        <div class="navbar-box">
          <div
            class="box-scroll"
            style="float: left; position: relative; left: 20px; top: 60px"
          >
            <table style="border: none">
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-1
                      variant="white"
                      style="color: white"
                      >UNIVERSITET
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-1" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-2
                      variant="white"
                      style="color: white"
                      >ABITURIENT
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-2" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-3
                      variant="white"
                      style="color: white"
                      >FAOLIYAT
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-3" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-4
                      variant="white"
                      style="color: white"
                      >TALABALAR
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-4" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-5
                      variant="white"
                      style="color: white"
                      >XALQARO ALOQALAR
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-5" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="/partnership"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-6
                      variant="white"
                      style="color: white"
                      >INTERAKTIV XIZMATLAR
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-6" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-7
                      variant="white"
                      style="color: white"
                      >HUJJATLAR
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-7" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-8
                      variant="white"
                      style="color: white"
                      >QABUL 2021
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-8" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-9
                      variant="white"
                      style="color: white"
                      >KORRUPSIYAGA QARSHI
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-9" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-10
                      variant="white"
                      style="color: white"
                      >YOSHLAR BILAN ISHLASH
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-10" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-11
                      variant="white"
                      style="color: white"
                      >ELEKTRON IMZO
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-11" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-12
                      variant="white"
                      style="color: white"
                      >ALOQA
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-12" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          Universitet #1
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
              <thead>
                <tr>
                  <th>
                    <b-text
                      v-b-toggle.collapse-13
                      variant="white"
                      style="color: white"
                      >O'QUV TURLARI
                    </b-text>
                  </th>
                  <th>
                    <fa
                      style="margin-left: 50px; font-size: 16px; color: white"
                      icon="angle-down"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-collapse id="collapse-13" class="mt-1 mb-1">
                      <b-text>
                        <nuxt-link
                          to="#"
                          class="card-text"
                          style="color: white"
                        >
                          <div class="" style="color: rgba(255, 255, 255, 0.6)">
                            <fa style="font-size: 18px" icon="envelope" />
                            <span class="ml-3">Korparativ Pochta</span>
                          </div>
                          <div class="" style="color: rgba(255, 255, 255, 0.6)">
                            <img
                              style="width: 18px; height: 18px"
                              src="@/assets/icons/Vector-s.png"
                              alt=""
                            />
                            <span class="ml-3">Kredit modul tizimi</span>
                          </div>
                        </nuxt-link>
                      </b-text>
                    </b-collapse>
                  </th>
                </tr>
              </tbody>
              <br />
            </table>

            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({}),
  props: [
    "color",
    "ShowNavbar",
    "ShowMainLogo",
    "height",
    "title",
    "title1",
    "bg_color",
  ],
  methods: {
    toogleNavbar() {
      this.$refs.nav.classList.toggle("hide");
    },
    showSubMenu() {
      this.$refs.ul1.classList.toggle("mm-show");
    },
  },
};
</script>

<style scoped>
.table {
  list-style: none;
  text-decoration: none;
}
.background-image {
  position: relative;
  width: 100%;
  background: url("@/assets/images/mainBodyImage.png") no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}
.color {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(28, 46, 81, 0.7);
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  color: white;
  left: 0;
  bottom: 0;
  right: 0;
}

.title h1 {
  font-weight: 700;
  margin: 0 20px;
}

.hide {
  transform: translateX(300px);
}
.navbar {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  justify-content: flex-end;
  transition: transform 0.7s ease;
  position: relative;
}

.navbar-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  margin-top: 50px;
  width: 220px;
}

.navbar-box {
  width: 300px;
  height: 100vh;
  background-color: #000000e0;
}
.box-scroll::-webkit-scrollbar {
  width: 8px;
}
.box-scroll::-webkit-scrollbar-track {
  background-color: #626262;
}
.box-scroll::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 8px;
}

.nav-item {
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: rgba(28, 46, 81, 0.7);
  transition: background 0.5s ease;
}
.smaller-nav {
  position: relative;
  color: black;
  width: 80%;
  background-color: white;
}
.smaller-nav::before {
  content: "";
  width: 102%;
  top: 4px;
  left: -4px;
  background-color: #3db166;
  height: 100%;
  position: absolute;
  z-index: -5;
}
.nav-item:hover {
  color: black;
  background-color: white;
}

.main-logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("@/assets/images/main-logo.png") no-repeat;
  background-size: contain;
  background-position: center;
}

#nav ul.sub-nav {
  display: none;
}
#nav ul.visible {
  display: block;
}

@media only screen and (max-width: 800px) {
  .navbar-box {
    width: 200px;
  }
  .hide {
    transform: translateX(200px);
  }
  .navbar-list {
    width: 150px;
  }
}
</style>
