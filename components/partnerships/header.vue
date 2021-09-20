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
              <li><nuxt-link to="#">ABOUT US</nuxt-link></li>
              <li>
                <nuxt-link to="#"> ADDMISSION </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> GRANTS </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> VISITS </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> FOREIGNERS </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> EXCHANGE </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> PARTNERS </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#"> STAFF MEMBERS </nuxt-link>
              </li>
              <nuxt-link class="ml-5" to="#">
                <img src="@/assets/icons/fi_phone.png" alt="" />
              </nuxt-link>
              <nuxt-link class="ml-5" to="#">
                <img src="@/assets/icons/fi_globe.png" alt="" />
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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
</style>