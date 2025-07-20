<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
useHead({
  title: 'Plan du site | [entreprise]',
  meta: [
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <div class="max-w-5xl mx-auto py-20 px-4 space-y-16">
    <div class="text-center">
      <h1 class="text-5xl">
        Plan du site
      </h1>
    </div>
    <div class="space-y-6">
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>
          <a
            href="/"
            class="hover:underline"
          >Accueil</a>
        </li>

        <li>
          <a
            href="/mentions-legales"
            class="hover:underline"
          >Mentions légales</a>
        </li>
        <li>
          <a
            href="/cgu"
            class="hover:underline"
          >Conditions Générales d'Utilisation</a>
        </li>
        <li>
          <a
            href="/politique-confidentialite"
            class="hover:underline"
          >Politique de confidentialité</a>
        </li>
        <li>
          <a
            href="/politique-cookies"
            class="hover:underline"
          >Politique de cookies</a>
        </li>
        <li>
          <a
            href="/plan-du-site"
            class="hover:underline"
          >Plan du site</a>
        </li>
      </ul>
    </div>
  </div>
</template>
