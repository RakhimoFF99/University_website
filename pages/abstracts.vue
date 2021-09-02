<template>
  <div>
    <div class="icon">
      <nuxt-link style="color: black" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-justify"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          /></svg
      ></nuxt-link>
    </div>
    <div class="container">
      <div class="text-logo mt-5">
        <h1 style="color: #1c2e51">Avtoreferatlar</h1>
      </div>
      <div class="cards mb-3">
        <div class="card-texts">
          <strong> SABIROVA GULNOZA SADIKOVNA </strong>
          <p>
            Umumta‘lim maktablari o‘qituvchilariga Ingliz tili olmoshlarini
            axborot texnologiyalari asosida o‘rgatish metodikasi
          </p>
        </div>
        <div class="button">
          <button class="btn btn-success">Yuklash</button>
        </div>
      </div>
      <div class="cards mb-3">
        <div class="card-texts">
          <strong> SABIROVA GULNOZA SADIKOVNA </strong>
          <p>
            Umumta‘lim maktablari o‘qituvchilariga Ingliz tili olmoshlarini
            axborot texnologiyalari asosida o‘rgatish metodikasi
          </p>
        </div>
        <div class="button">
          <button class="btn btn-success">Yuklash</button>
        </div>
      </div>
      <pagination />
    </div>
  </div>
</template>

<script>
import pagination from "../components/pagination.vue";
export default {
  components: { pagination },
};
</script>


<style scoped>
.icon {
  position: absolute;
  top: 75px;
  right: 0;
  width: 50px;
  height: 52px;
  background-color: #f2f2f2;
}
.icon svg {
  position: relative;
  left: 15px;
  top: 10px;
}
.cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 8px;
}
.card-texts {
  padding: 20px 0 10px 0;
}
.button .btn {
  padding: 10px 20px;
}
</style>
