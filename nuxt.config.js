export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sst-pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keyword', content: '这是一个个人项目' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },
  env: {
    // 环境变量
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'http://test.com'
        : 'http://127.0.0.1:8000',
  },
  // mode: 'universal',
  target: 'server',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/public.scss',
    '@/assets/reset.css',
    // 'swiper/swiper-bundle.css', // (>= Swiper 6.x)
    'swiper/css/swiper.css', // (<= Swiper 5.x)
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '@/plugins/swiper.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  loading: [
    {
      color: 'blue',
      height: '5px',
    },
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy', // 添加proxy模块
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://example.com', // /api开头=>就会往http://example.com 发送请求
      changeOrigin: true,
      // pathRewrite:{//任何 /api开头的 可以重写成 /
      //   '^/api':'/'
      // }
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios'],
  },
  server: {
    port: 8000,
    host: '127.0.0.1',
  },
}
