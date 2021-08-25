<template>
  <div>
    <div class="background-image">
      <div class="main-logo col-md-6 mx-auto"></div>
      <div ref="nav" class="navbar hide d-flex">
        <div class="navbar-list flex-column">
          <div @click="toogleNavbar" class="nav-item d-flex">
            <img
              src="@/assets/icons/fi_align-justify.svg"
              class="mb-1"
              alt="menyu"
            />
            <div class="ml-2" style="font-weight: 600">Menyu</div>
          </div>

          <div @click="toogleNavbar" class="nav-item d-flex">
            <img src="@/assets/icons/fi_search.svg" alt="search" />
            <div class="ml-2" style="font-weight: 600">Search</div>
          </div>
          <div @click="toogleNavbar" class="nav-item d-flex">
            <img src="@/assets/icons/fi_calendar.svg" alt="calendar" />
            <div class="ml-2" style="font-weight: 600">Yangiliklar</div>
          </div>
          <div @click="toogleNavbar" class="nav-item d-flex">
            <div class="ml-2" style="font-weight: 600">Fakultetlar</div>
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
  methods: {
    toogleNavbar() {
      this.$refs.nav.classList.toggle("hide");
    },
  },
};
</script>

<style scoped>
.background-image {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/mainBodyImage.png") no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}
.navbar {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  transition: transform 0.7s ease;
  position: relative;
}

.hide {
  transform: translateX(300px);
}

.navbar-list {
  color: white;
  margin-top: 50px;
  display: flex;
  align-self: start;
  width: 220px;
}

.navbar-box {
  width: 300px;

  height: 100vh;
  background-color: #000000e0;
}

.nav-item {
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: #1c2e51;
  transition: background 0.5s ease;
}
.nav-item:hover {
  color: black;
  background-color: white;
}

.main-logo {
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: url("@/assets/images/main-logo.png") no-repeat;
  background-size: contain;
  background-position: center;
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