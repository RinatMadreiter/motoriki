// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts'
  ],

  ssr: false,

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    static: true,
    prerender: {
      routes: ['/']
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic']
    }
  }
})