<template>
  <div>
    <div class="bottom-content">
      <div class="arrow-left arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="25"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <span class="btn1" type="button">1</span>
      <span class="btn" type="button">2</span>
      <span class="btn" type="button">3</span>
      <span class="btn" type="button">...</span>
      <span class="btn" type="button">41</span>
      <div class="arrow-right arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="25"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
    <div class="icon-img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-printer"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        <path
          d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
};
</script>

<style scoped>
.bottom-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
.bottom-content span {
  margin: 0 10px;
}
.btn1 {
  background-color: #1c2e51;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
}
.arrow {
  padding: 0 20px;
}
.icon-img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: -80px;
}
</style>