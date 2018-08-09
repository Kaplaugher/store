const pkg = require('./package');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
      { src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        'data-api-key': "NzZhNThhNzgtMmQwMS00NmY1LTk1YTUtYTE2Y2RhOTg2YWM1NjM2NDc0OTEyMjUyNzMxNTI3",
        id: "snipcart" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        rel: 'stylesheet',
        type: 'text/css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['vuetify/src/stylus/main.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  },
  generate: {
    routes() {
      return ['/products/1'];
    }
  }
};
