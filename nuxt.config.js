export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'university',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/globalCss/app.min.css',
    '@/globalCss/bootstrap.min.css',
    '@/globalCss/material-icons.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/owlCarousel.js',ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    "@nuxtjs/fontawesome"
  ],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/i18n

    '@nuxtjs/i18n',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // i18n Configurations
  i18n: {
    locales: [
      {
        code: "uz",
        file: "uz.js"
      },
      {
        code: "ru",
        file: "ru.js"
      },
      {
        code: "en",
        file: "en.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    strategy: "prefix_except_default",
    defaultLocale: "uz"
  }
}
