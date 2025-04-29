<script setup>
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
  ],
})
</script>

<template>
  <div class="max-w-5xl mx-auto py-20 px-4 space-y-16">
    <div class="text-center">
      <h2 class="text-5xl font-bold">
        Politique de cookies
      </h2>
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
        Nous utilisons uniquement un mécanisme de stockage local (localStorage) pour mémoriser certaines préférences,
        comme la fermeture d’une fenêtre d’information. Ces données sont conservées uniquement dans votre navigateur
        et ne sont pas partagées ni utilisées à des fins de suivi.
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
