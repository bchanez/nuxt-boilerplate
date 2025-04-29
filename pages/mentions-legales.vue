<script setup>
definePageMeta({
  colorMode: 'light',
})
useHead({
  title: 'Mentions légales | [entreprise]',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales du site [entreprise] — éditeur, hébergeur, propriété intellectuelle, confidentialité.',
    },
  ],
})
</script>

<template>
  <div class="max-w-7xl mx-auto py-20 px-4 space-y-16">
    <div class="flex flex-col space-y-16">
      <div class="text-center space-y-2">
        <h2 class="text-5xl font-bold">
          Mentions légales
        </h2>
      </div>

      <div class="space-y-8 text-lg">
        <div>
          <h2 class="text-2xl font-semibold">
            Éditeur du site
          </h2>
          <p>
            Le site <strong>[entreprise]</strong> est édité par :<br>
            <strong>B. Chanez Consultant</strong><br>
            Forme juridique : SARL (libérale non réglementée)<br>
            SIRET : 938 945 896 00018<br>
            Siège social : 60 rue François 1er, 75008 Paris, France<br>
            Code APE : 5829C – Édition de logiciels applicatifs<br>
            Email : <a
              href="mailto:bastien.chanez@gmail.com"
              class="underline text-blue-600 hover:text-blue-800"
            >bastien.chanez@gmail.com</a><br>
            Dirigeant : Bastien Chanez
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">
            Directeur de la publication
          </h2>
          <p>
            Bastien Chanez, en qualité de gérant de la société B. Chanez Consultant.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">
            Hébergement
          </h2>
          <p>
            Le site est hébergé par :<br>
            <strong>Vercel Inc.</strong><br>
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br>
            Site : <a
              href="https://vercel.com"
              target="_blank"
              class="underline text-blue-600 hover:text-blue-800"
            >vercel.com</a>
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">
            Propriété intellectuelle
          </h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, code, logos, etc.) sont la propriété exclusive de [entreprise] ou de leurs auteurs respectifs, sauf mention contraire. Toute reproduction ou utilisation sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">
            Confidentialité
          </h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Aucun formulaire, service tiers ou outil de suivi n’est utilisé. Aucune donnée n’est partagée, stockée ou exploitée à des fins commerciales.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold">
            Cookies
          </h2>
          <p>
            Ce site n’utilise pas de cookies, à l’exception d’un enregistrement local de la fermeture d’une fenêtre d’information (via localStorage). Aucune information n’est transmise à des tiers. Pour en savoir plus, consultez notre <a
              href="/politique-cookies"
              class="underline text-blue-600 hover:text-blue-800"
            >politique de cookies</a>.
          </p>
        </div>

        <p class="text-sm text-gray-500">
          Dernière mise à jour : 25 avril 2025
        </p>
      </div>
    </div>
  </div>
</template>
