<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center">
        <img src="@/assets/images/image-teacher.png" alt="image" />
      </div>

      <div class="col-md-8 px-5">
        <div class="header my-1">
          <h1 style="font-weight: 700">Alisher Ulugbek Botirovich</h1>
          <h5 class="my-3">
            {{ $t("rektorantT") }}
          </h5>
          <br />
        </div>
        <div class="row">
          <div class="col-md-6">
            <div style="color: #666666; font-weight: 500" class="entrance">
              {{ $t("Acceptance") }}:
              <h5 class="mt-2 text-dark">
                {{ $t("rektor-today") }}, 16.00 - 18.00
              </h5>
              <br />
            </div>
            <div style="color: #666666; font-weight: 500">
              E-mail:
              <h5 class="mt-2 text-dark">rektor@uzswlu.uz</h5>
            </div>
          </div>
          <div class="col-md-6">
            <div style="color: #666666; font-weight: 500" class="tel">
              Tel:
              <h5 class="mt-2 text-dark">+998 71 230-12-91</h5>
              <br />
            </div>
            <div style="color: #666666; font-weight: 500">
              Faks:
              <h5 class="mt-2 text-dark">+998 71 230-12-91</h5>
            </div>
          </div>
          <button class="btn btn-success">{{ $t("rektor-acceptance") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RektorantCard",
};
</script>

<style  scoped>
.body {
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: space-between;
}
.btn {
  position: absolute;
  right: 0;
  width: 180px;
  top: 235px;
  background: #3db166;
}
</style>