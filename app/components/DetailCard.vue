<template>
  <UCard
    variant="soft"
    class="rounded-3xl border border-default/70 bg-default/75 shadow-sm transition hover:shadow-md"
  >
    <div class="flex items-start gap-4">
      <div class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
        <UIcon :name="icon" class="size-5" :aria-label="label" />
      </div>

      <div class="min-w-0">
        <p class="text-xs uppercase tracking-[0.18em] text-muted font-bold">
          {{ label }}
        </p>
        <p class="mt-2 sm:text-base leading-7 text-toned text-lg">
          {{ value }}
        </p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
  icon: string
}>()

defineEmits<{}>()
</script>