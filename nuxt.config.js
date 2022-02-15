export default {

  // to inspect with real device throught local network
  // server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // },


  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vue2-touch-events.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-svg-loader",
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      "./assets/style/sass-modules.scss",
      "./assets/style/resets.scss",
      "./assets/style/variables.scss",
      "./assets/style/fontsloader.scss",
      "./assets/style/animations.scss"
    ]
  },

  router: {
    prefetchLinks: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    // transpile: ["vue2-touch-events"],

    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }

  },

  pageTransition: {

    afterEnter(){

      // le simple fait de créer cette prop
      // permet à nuxt de faire le scrollToTop entre les pages
      // en respectant les transitions
      console.log("weh la pageTransition after");

    }

  }

}
