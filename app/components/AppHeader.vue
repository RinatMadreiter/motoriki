<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()
const route = useRoute()

const isHomePage = computed(() => route.path === '/')

const items = computed(() => [{
  label: 'Vorteile',
  to: '#vorteile',
  active: activeHeadings.value.includes('vorteile') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Kursdetails',
  to: '#details',
  active: activeHeadings.value.includes('details')
}, {
  label: 'Zeugnisse',
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

const legalItems = computed(() => [{
  label: 'Impressum',
  to: '/impressum',
  active: route.path === '/impressum'
}, {
  label: 'Datenschutz',
  to: '/datenschutz',
  active: route.path === '/datenschutz'
}])

// Only initialize scrollspy if we are on the homepage
nuxtApp.hooks.hookOnce('page:finish', () => {
  if (isHomePage.value) {
    updateHeadings([
      document.querySelector('#vorteile'),
      document.querySelector('#details'),
      document.querySelector('#testimonials')
    ].filter(Boolean) as Element[])
  }
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <p class="home-link">MotoRiki</p>
      </NuxtLink>
    </template>

    <template #right v-if="isHomePage">
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        label="Jetzt Platz sichern"
        variant="subtle"
        class="hidden lg:block"
        to="https://app.formbricks.com/s/cmnulg3fkj34zth01xagg6sgz"
        target="_blank"
      />

      <UColorModeButton />
    </template>

    <template #right v-else>
      <UNavigationMenu
        :items="legalItems"
        variant="link"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body v-if="isHomePage">
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        label="Jetzt Platz sichern"
        variant="subtle"
        to="https://app.formbricks.com/s/cmnulg3fkj34zth01xagg6sgz"
        block
      />
    </template>

    <template #body v-else>
      <UNavigationMenu
        :items="legalItems"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<style lang="css">
.home-link {
  color: var(--ui-text);
  font-size: x-large;
  text-decoration: none;
  position: relative;
  transition: color 180ms ease;
}

.home-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.12em;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
}

.home-link:hover {
  color: var(--ui-primary);
}

.home-link:hover::after {
  transform: scaleX(1);
}
</style>
