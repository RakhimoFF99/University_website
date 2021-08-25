<template>
  <div class="footer text-white">
  
    <section>
      <div class="container">
        <div class="row  brands mb-2 mt-2 d-flex justify-content-around">
          <img src="@/assets/images/image-ziyonet.png" alt="ziyonet" />
          <img src="@/assets/images/image-mygov.png" alt="mygov" />
          <img src="@/assets/images/image-emblem.png" alt="emblem" />
          <img src="@/assets/images/image-data.png" alt="data" />
        </div>
      </div>
    </section>

    <section style="background-color:#1C2E51">
      <div class="container">
        <div class="footer-info">
          <div class="row d-flex justify-content-around align-items-center">
            <div class="col-md-4">
              <img
                class="footer-logo mt-3"
                src="@/assets/images/footer-logo.png"
                alt="footerLogo"
              />
              <p class="text-white mt-2">OKS.UZ - create-site</p>
            </div>
            <div class=" col-md-2 text-white mb-1 ">
              Royxatga o`tganglar 4 Foydalanuvchilar 1 So'nggi yangilanish:
              2021-08-12
            </div>
            <div class="col-md-3 mb-2">
              Matnda xato ko'rsangiz? Uni belgilab Ctrl + Enter ni bosing
              <p class="mt-2 h5">Sayt xaritasi</p>
            </div>
            <div class="col-md-2 mb-4">
              Ishonch telefoni:
              <p>+99897 529-99-51</p>
              <div class="social-networks">
                Ijtimoiy tarmoqlar
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <hr style="background:white" />
      <div class="container py-2">
        © 2015 O`zDJTU - O`zbekiston Davlat JAHON TILLARI UNIVERSITETI
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.brands img {
  margin: 1rem 1rem 2rem 1rem;
  width: 180px;
}
@media only screen and (max-width: 800px) {
  .footer-logo {
    width: 250px;
  }
}
</style>
