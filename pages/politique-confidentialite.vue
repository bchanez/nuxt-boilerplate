<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
useHead({
  title: 'Politique de confidentialité | [entreprise]',
  meta: [
    {
      name: 'description',
      content: 'Notre politique de confidentialité explique comment nous protégeons vos données personnelles sur le site [entreprise].',
    },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <div class="max-w-5xl mx-auto py-20 px-4 space-y-16">
    <div class="text-center">
      <h1 class="text-5xl font-bold">
        Politique de confidentialité
      </h1>
    </div>

    <div class="space-y-6 text-lg">
      <p>
        [entreprise] respecte votre vie privée. Ce site ne collecte aucune donnée personnelle.
      </p>

      <p>
        Aucun formulaire, service tiers ou outil d’analyse n’est intégré. Aucune donnée n’est partagée, vendue, ou utilisée à des fins de prospection.
      </p>

      <p>
        Aucune information permettant de vous identifier n’est stockée ou traitée.
      </p>

      <p>
        Pour toute question concernant la confidentialité ou vos droits, vous pouvez nous contacter à
        <a
          href="mailto:contact@"
          class="underline text-blue-600 hover:text-blue-800"
        >contact@</a>.
      </p>

      <p class="text-sm text-gray-500">
        Dernière mise à jour : 25 avril 2025
      </p>
    </div>
  </div>
</template>
