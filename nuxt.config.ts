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
    buildAssetsDir: '/_nuxt/',

    head: {
      title: 'MotoRiki Bewegen. Lachen. Wachsen. in Feldkirchen',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Motopädagogische Bewegungsgruppe in Feldkirchen für Kinder von 1-3 Jahren - spielerisch Motorik, Selbstvertrauen und Sozialverhalten stärken.'
        },
        { property: 'og:title', content: 'MotoRiki Bewegen. Lachen. Wachsen. in Feldkirchen' },
        { property: 'og:description', content: 'Motopädagogische Bewegungsgruppe in Feldkirchen für Kinder von 1-3 Jahren - spielerisch Motorik, Selbstvertrauen und Sozialverhalten stärken.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://motoriki.at/images/preview-img.png' },
        { name: 'twitter:image', content: 'https://motoriki.at/images/preview-img.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
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
      preload: false,
      weights: [400, 500, 600, 700, 900],
      styles: ['normal', 'italic']
    }
  }
})
