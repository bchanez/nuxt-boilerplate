import { defineNuxtPlugin, useRequestEvent } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const event = useRequestEvent()!
  const ua = event.node.req.headers['user-agent'] || ''
  // simple détection mobile (vous pouvez affiner avec une lib comme UAParser.js)
  const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(ua)

  // expose dans le context et comme useState
  nuxtApp.provide('isMobile', isMobile)
})
