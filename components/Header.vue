<template>
  <div class="header-container" :style="color">
    <div class="container">
      <div class="row justify-content-between py-2">
   
        <div class="col-md-8 m-0 p-0">
            
          <div class="header-left d-flex">
            <img src="@/assets/icons/logo1.png" alt="logo" />

            <div
              class="
                col-md-6
                d-flex
                justifty-content-between
                align-items-center
                ml-4
                test
              "
            >
              <img src="@/assets/icons/image 2.png" alt="flag" />
              <img
                class="p-3"
                src="@/assets/icons/uzb-emblem.png"
                alt="emblem"
              />
              <img src="@/assets/icons/fi_music.png" alt="music" />
            </div>
          </div>
        </div>
        <div class="col-md-4 py-1">
          <div class="header-right">
            <img class="icon-style" src="@/assets/icons/fi_eye.png" alt="eye" />
            <img
              class="icon-style"
              src="@/assets/icons/fi_phone.png"
              alt="phone"
            />
            <div @click="showDropDown" class="dropdown">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({}),
  methods: {
    clickUz () {
      this.$i18n.setLocale('uz')
      this.isRu = false
    },
    clickRu () {
      this.$i18n.setLocale('ru')
      this.isUz = false
    },
    clickEn () {
      this.$i18n.setLocale('en')
      this.isRu = false
    },
    showDropDown () {
      this.$refs.drowdownContent.classList.toggle('show')
    },
    mounted () {
      windows.addEventListener('click', e => {
        if (e.target.className != 'drowdown-content') {
          this.$refs.drowdownContent.classList.remove('show')
        }
      })
    }
  },
  props: ['color']
}
</script>

<style scoped>
.icon-style {
  transition: background 0.3s ease;
  cursor: pointer;
}
.icon-style:hover svg path {
  fill: green;
}
.header-container {
  color: white;
  height: 75px;
}
.test img {
  padding: 0 20px;
}
.header-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  margin-left: 160px;
}
.header-left {
  height: 60px;
}
.header-right img {
  padding: 0 30px;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  display: none;
  top: 30px;
  right: -50px;
  background-color: #1c2e51cc;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.show {
  display: block;
}
.dropdown-content ul li a {
  text-decoration: none;
  color: #fff;
}

@media only screen and (max-width: 800px) {
  .header-right {
    display: none;
  }
}
</style>
