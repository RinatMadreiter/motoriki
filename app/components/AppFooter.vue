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
      <UButton
        to="https://www.instagram.com/motoriki.fe/"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Motoriki auf Instagram"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
