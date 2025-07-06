<template>
  <div>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white p-2 z-50"
    >
      Passer au contenu
    </a>
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <SectionContact />
    <AppFooter />
  </div>
</template>
