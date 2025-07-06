<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
useHead({
  title: 'Politique de cookies | [entreprise]',
  meta: [
    {
      name: 'description',
      content: 'Ce site n’utilise pas de cookies. [entreprise] respecte votre vie privée.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <div class="max-w-5xl mx-auto py-20 px-4 space-y-16">
    <div class="text-center">
      <h1 class="text-5xl font-bold">
        Politique de cookies
      </h1>
    </div>

    <div class="space-y-6 text-lg">
      <p>
        Ce site ne dépose aucun cookie, y compris les cookies techniques ou de session.
        Aucune donnée de navigation n’est collectée à des fins statistiques, publicitaires ou fonctionnelles.
      </p>

      <p>
        Ce site ne fait appel à aucun service tiers susceptible de collecter des données personnelles ou de navigation.
      </p>

      <p>
        Nous respectons pleinement votre vie privée. Pour en savoir plus, vous pouvez consulter notre
        <a
          href="/politique-confidentialite"
          class="underline text-blue-600 hover:text-blue-800"
        >
          politique de confidentialité
        </a>.
      </p>

      <p class="text-sm text-gray-500">
        Dernière mise à jour : 25 avril 2025
      </p>
    </div>
  </div>
</template>
