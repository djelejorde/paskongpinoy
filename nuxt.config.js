import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#000000'},
      { name: 'theme-color', content: '#000000'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#eb234b' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '@/assets/sass/index.scss',
      lang: 'scss'
    },
    {
      src: 'aos/dist/aos.css'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/aos",
      ssr: false
    }
    // '~/plugins/vuetify',
    // '~/plugins/axios',
    // '~/plugins/vuexpersist'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /** 
   * Custom router
   */  
  router: {
    mode: 'history',
    routeNameSplitter: '/',
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'default',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/sass/_variables.scss'],
    theme: { dark: false },
    defaultAssets: false,
    treeShake: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  vendor: [
    "aos"
  ],

}
