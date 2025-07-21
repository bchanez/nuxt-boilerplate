// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', 'motion-v/nuxt', 'shadcn-nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/test-utils/module'],
  plugins: [
    '~/plugins/ua-detect.server.ts',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'site',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          name: 'description',
          content: '...',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph
        { property: 'og:title', content: '...' },
        {
          property: 'og:description',
          content: '...',
        },
        {
          property: 'og:image',
          content: 'https://www.site.fr/img/img.webp',
        },
        { property: 'og:url', content: 'https://www.site.fr' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.site.fr/' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
    name: 'site',
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
    nodeTsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    presets: {
      mobile: {
        modifiers: {
          format: 'webp',
          width: 768,
          quality: 60,
        },
      },
      desktop: {
        modifiers: {
          format: 'webp',
          width: 1920,
          quality: 70,
        },
      },
    },
    ipx: {
      modifiers: {
        format: 'webp',
        width: 1920,
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
