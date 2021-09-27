<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mt-3" style="margin-top: -80px">
            <img src="@/assets/partnership/image3.png" alt="" />
          </div>

          <div class="col-md-2">
            <div class="social-networks ml-3" style="color: white">
              {{ $t("flang6") }}
            </div>
            <div class="icons mt-3">
              <span class="fasebook">
                <img src="@/assets/icons/Vector.png" alt="fasebook" />
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
            </div>
          </div>
          <div class="col-md-3 mt-2">
            <div style="font-size: 16px; color: white">
              {{ $t("flang5") }}
              <p>+99897 529-99-51</p>
            </div>
          </div>
        </div>
      </div>
      <hr style="background: white" />
      <div style="color: white" class="container py-2">
        2021 - {{ $t("footer-t") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #1c2e51;
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons {
  width: 120%;
  padding-left: 10px;
  color: white;
}
.icons span {
  background-color: #fff;
  border-radius: 50%;
  padding: 8px;
}
.icons span img,
svg {
  padding-bottom: 3px;
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
</style>