// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nutsjs/strapi'],
  strapi: {
    url:'http://localhost:1337'
  }
})
