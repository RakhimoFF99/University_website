<template>
  <div>
    <div class="background-image" :style="height">
      <div v-if="color" class="color"></div>
      <div v-if="ShowMainLogo" class="main-logo col-md-6 mx-auto"></div>
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div v-if="ShowNavbar" ref="nav" class="navbar hide d-flex">
        <div class="navbar-list">
          <div @click="toogleNavbar" class="nav-item d-flex">
            <img
              src="@/assets/icons/fi_align-justify.svg"
              class="mb-1"
              alt="menyu"
            />
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang") }}</div>
          </div>

          <div @click="toogleNavbar" class="nav-item d-flex">
            <img src="@/assets/icons/fi_search.svg" alt="search" />
            <div class="ml-2" style="font-weight: 600">{{ $t("hlang1") }}</div>
          </div>
          <div @click="toogleNavbar" class="nav-item d-flex">
            <img src="@/assets/icons/fi_calendar.svg" alt="calendar" />
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

        <div class="navbar-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({}),
  props: ["color", "ShowNavbar", "ShowMainLogo", "height", "title"],
  methods: {
    toogleNavbar() {
      this.$refs.nav.classList.toggle("hide");
    },
  },
};
</script>

<style scoped>
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
  background-color: #1c2e51cc;
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
.hide {
  transform: translateX(300px);
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

.nav-item {
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: #1c2e51;
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