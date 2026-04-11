<template>
  <li class="rounded-3xl border border-default bg-default/70 p-5 sm:p-6 shadow-sm transition hover:bg-default hover:shadow-md">
    <div class="flex items-start gap-4">
      <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
        <UIcon :name="icon" class="size-5" :aria-label="title" />
      </div>
      <div class="min-w-0">
        <h3 class="text-base sm:text-lg font-semibold text-highlighted">{{ title }}</h3>
        <p class="mt-1 sm:text-base leading-7 text-muted">{{ text }}</p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  text: string
}>()

defineEmits<{}>()
</script>