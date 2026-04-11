// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/_nuxt/'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts'
  ],
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    static: true,
    prerender: {
      routes: [
        '/'
      ]
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
