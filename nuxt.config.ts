// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true,
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    name: 'Food Business Template',
    description: 'Delicious food and exceptional service',
    defaultLocale: 'en',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  robots: {
    allow: '/',
    sitemap: '/sitemap.xml',
  },

  ogImage: {
    enabled: true,
  },

  schemaOrg: {
    identity: 'Organization',
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Food Business',
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    minify: true,
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
})
