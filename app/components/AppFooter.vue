<script setup lang="ts">

</script>

<template>
  <USeparator />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #right>
      <p class="text-xs text-muted">
        Erstellt von
        <NuxtLink
          to="https://rinatmadreiter.github.io/"
          target="_blank"
        >Rinat</NuxtLink>
      </p>
    </template>

    <template #left>
      <div class="flex items-center gap-3">
      <UButton
        to="https://www.instagram.com/motoriki.fe/"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Motoriki auf Instagram"
        color="neutral"
        variant="ghost"
      />
      <span class="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1"></span>

        <NuxtLink 
          to="/impressum" 
          class="tracking-wider hover:text-primary-500 transition-colors"
        >
          Impressum
        </NuxtLink>

        <NuxtLink 
          to="/datenschutz" 
          class="tracking-wider hover:text-primary-500 transition-colors"
        >
          Datenschutz
        </NuxtLink>
      </div>
    </template>
  </UFooter>
</template>
