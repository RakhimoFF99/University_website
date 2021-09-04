<template>
  <div class="footer text-white bg-white">
    <section>
      <div class="container">
        <div class="row brands my-3 d-flex justify-content-around">
          <img src="@/assets/images/image-ziyonet.png" alt="ziyonet" />
          <img src="@/assets/images/image-mygov.png" alt="mygov" />
          <img src="@/assets/images/image-emblem.png" alt="emblem" />
          <img src="@/assets/images/image-data.png" alt="data" />
        </div>
      </div>
    </section>

    <section style="background-color: #1c2e51">
      <div class="container">
        <div class="footer-info">
          <div class="row d-flex justify-content-around align-items-center">
            <div class="col-md-4">
              <img
                class="footer-logo mb-4"
                src="@/assets/images/footer-logo.png"
                alt="footerLogo"
              />
            </div>
            <div class="col-md-2 text-white mb-3">
              {{ $t("flang2") }}
            </div>
            <div class="col-md-3 mb-2">
              {{ $t("flang3") }}
              <p class="mt-2 h5 text-white">{{ $t("flang4") }}</p>
            </div>
            <div class="col-md-2 pt-5 mt-5">
              {{ $t("flang5") }}
              <p>+99897 529-99-51</p>
              <div class="social-networks">{{ $t("flang6") }}</div>
              <div class="icons mt-4">
                <span class="fasebook">
                  <img src="../assets/icons/Vector.png" alt="fasebook" />
                </span>
                <span class="instagram">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M16 1.76465H6C3.23858 1.76465 1 4.00323 1 6.76465V16.7646C1 19.526 3.23858 21.7646 6 21.7646H16C18.7614 21.7646 21 19.526 21 16.7646V6.76465C21 4.00323 18.7614 1.76465 16 1.76465Z"
                        stroke="#37363C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.0002 11.1347C15.1236 11.9669 14.9815 12.8169 14.594 13.5637C14.2065 14.3105 13.5933 14.9161 12.8418 15.2944C12.0903 15.6726 11.2386 15.8043 10.408 15.6706C9.57732 15.537 8.80996 15.1448 8.21503 14.5499C7.62011 13.9549 7.22793 13.1876 7.09426 12.3569C6.9606 11.5262 7.09226 10.6746 7.47052 9.92308C7.84878 9.17156 8.45438 8.55845 9.20118 8.17095C9.94798 7.78345 10.7979 7.64129 11.6302 7.76471C12.4791 7.89059 13.265 8.28617 13.8719 8.89301C14.4787 9.49986 14.8743 10.2858 15.0002 11.1347Z"
                        stroke="#37363C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 6.26465H16.51"
                        stroke="#37363C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0 0.764648)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="telegram">
                  <img src="@/assets/icons/telegram.png" alt="" />
                </span>
                <span class="youtube">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.54 7.18465C22.4212 6.71006 22.1792 6.27522 21.8386 5.92405C21.498 5.57289 21.0707 5.31783 20.6 5.18465C18.88 4.76465 12 4.76465 12 4.76465C12 4.76465 5.11996 4.76465 3.39996 5.22465C2.92921 5.35783 2.50194 5.61289 2.16131 5.96405C1.82068 6.31522 1.57875 6.75006 1.45996 7.22465C1.14518 8.9702 0.991197 10.741 0.999961 12.5146C0.988741 14.3017 1.14273 16.086 1.45996 17.8446C1.59092 18.3045 1.83827 18.7228 2.17811 19.0591C2.51794 19.3955 2.93878 19.6385 3.39996 19.7646C5.11996 20.2246 12 20.2246 12 20.2246C12 20.2246 18.88 20.2246 20.6 19.7646C21.0707 19.6315 21.498 19.3764 21.8386 19.0252C22.1792 18.6741 22.4212 18.2392 22.54 17.7646C22.8523 16.0322 23.0063 14.275 23 12.5146C23.0112 10.7276 22.8572 8.94335 22.54 7.18465V7.18465Z"
                      stroke="#37363C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 15.7846L15.5 12.5146L9.75 9.24463V15.7846Z"
                      stroke="#37363C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <img class="mt-4" src="@/assets/images/image15.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style="background: white" />
      <div class="container py-2">© 2015 {{ $t("flang7") }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  width: 100vw;
  height: auto;
  position: relative;
  left: 0;
  top: auto;
  margin: 0;
  padding: 0;
}
.brands img {
  filter: grayscale(100%);
  cursor: pointer;
  margin: 1rem 1rem 2rem 1rem;
  width: 180px;
  height: 110px;
}
.brands img:hover {
  filter: grayscale(0);
}
.icons {
  width: 120%;
  padding-left: 10px;
}
.icons span {
  background-color: #fff;
  border-radius: 50%;
  padding: 8px;
}
.icons span img,
svg {
  padding-bottom: 5px;
}
.fasebook {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.fasebook img {
  padding: 0 5px 0 5px;
  width: 22px;
  height: 22px;
}
.telegram img {
  width: 20px;
  height: 24px;
}
@media only screen and (max-width: 800px) {
  .footer-logo {
    width: 250px;
  }
}
</style>
