<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <MovingStickMan />
    <UPageHero
      :description="page.description"
      :links="page.hero.links"
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-3xl mx-auto'
      }"
    >
      <template #title>
        <div class="flex flex-col items-center gap-2 text-center">
          <span
            class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight"
            :value="page.title"
          >
            MotoRiki
          </span>
          <span class="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight">
            Bewegen. Lachen. Wachsen.
          </span>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      :title="page.section.title"
      orientation="horizontal"
      :ui="{
        container: 'lg:pr-0 lg:pl-4  mx-0 max-w-none md:mr-10 !pb-8',
        features: 'gap-4'
      }"
    >
      <template #title>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted sm:leading-11">
          Typische <span class="text-primary">Sorgen</span> von Eltern
        </h2>
      </template>
      <img
        :src="page.section.images.desktop"
        :alt="page.section.title"
        class="hidden lg:block w-full max-w-4xl rounded-l-3xl ring-4 ring-primary -mr-[100px] 2xl:rounded-3xl"
      >
      <img
        :src="page.section.images.mobile"
        :alt="page.section.title"
        class="block lg:hidden  w-84 2xl:w-64 rounded-3xl mx-auto rounded-l-3xl ring-4 ring-primary"
      >
    </UPageSection>

    <UPageSection
      id="features"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left max-w-3xl',
        body: 'mt-10',
        container: 'max-w-6xl mx-auto',
        wrapper: 'relative overflow-hidden',
        features: 'gap-4'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-0 bg-primary/20 blur-[180px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-0 bg-primary/20 blur-[180px]" />

      <template #title>
        <div class="relative z-10">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted leading-10 sm:leading-11">
            Und wie der Kurs <span class="text-primary">hilft</span>
          </h2>
        </div>
      </template>

      <template #description>
        <div class="space-y-4 text-base sm:text-lg leading-8 text-muted">
          <p
            v-for="(paragraph, index) in page?.intro?.paragraphs"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>
      </template>

      <template #body>
        <div class="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ul class="space-y-4">
            <IconCard
              v-for="item in page?.benefitsOverview?.items"
              :key="item.title"
              v-bind="item"
            />
          </ul>

          <div class="rounded-3xl overflow-hidden border border-default bg-elevated shadow-sm">
            <img
              src="/images/turnen.webp"
              alt="Kinder bewegen sich spielerisch in einer sicheren Kurssituation"
              class="h-full w-full object-cover"
              loading="lazy"
            >
            <div class="p-5 sm:p-6">
              <p class="sm:text-base leading-7 text-toned">
                {{ page?.benefitsOverview?.summary }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      icon="i-lucide-baby"
      :ui="{
        container: 'max-w-4xl mx-auto !pt-5 !pb-12',
        wrapper: 'mt-0 py-0',
        title: 'text-center',
        description: 'text-center max-w-2xl mx-auto text-muted'
      }"
    >
      <template #title>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-highlighted text-3xl sm:text-4xl lg:text-5xl ">
          Was euch im Kurs <span class="text-primary">erwartet</span>
        </h2>
      </template>

      <template #description>
        <p>
          {{ page?.courseFlow?.intro }}
        </p>
      </template>

      <template #body>
        <ul class="mt-10 space-y-4">
          <IconCard
            v-for="item in page?.courseFlow?.items"
            :key="item.title"
            v-bind="item"
          />
        </ul>

        <div class="mt-8 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6">
          <p class="sm:text-base leading-7 text-toned">
            {{ page?.courseFlow?.outro }}
          </p>
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="vorteile"
      :description="page.features.description"
      :features="page.features.features"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left !text-xl',
        features: '[&_[data-slot=description]]:!text-lg md:[&_[data-slot=description]]:!text-lg'
      }"
      class="relative overflow-hidden "
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <template #title>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted leading-9">
          Spielerisch lernen -
          <span class="text-primary">was dein Kind gewinnt</span>
        </h2>
      </template>
      <div class="mt-0 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6 max-w-5xl mx-auto">
        <p class="text-lg sm:text-base leading-7 text-toned leading-relaxed">
          {{ page?.features?.summary }}
        </p>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="details"
      :ui="{
        container: 'max-w-5xl mx-auto',
        wrapper: 'relative overflow-hidden',
        title: 'text-left @container relative flex',
        description: 'text-left max-w-2xl text-base sm:text-lg leading-8 text-muted',
        body: 'mt-12'
      }"
      class="relative overflow-hidden"
    >
      <div class="pointer-events-none absolute -left-10 top-10 size-[280px] rounded-full bg-primary/20 blur-[180px]" />
      <div class="pointer-events-none absolute -right-10 -bottom-10 size-[280px] rounded-full bg-primary/20 blur-[180px]" />

      <template #title>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted leading-9 sm:leading-10">
          {{ page.courseDetails.title }} -
          <span class="text-primary">Motopädagogik in Feldkirchen</span>
        </h2>
      </template>

      <template #body>
        <div class="space-y-8">
          <!-- Image: Full-width hero at top -->
          <UCard
            variant="soft"
            class="overflow-hidden rounded-3xl border border-default/70 bg-default/75 shadow-sm"
          >
            <img
              src="/images/turnen2.webp"
              alt="Kinder in sicheren Bewegungslandschaften - genau so fühlt sich der Kurs an"
              class="h-72 sm:h-80 lg:h-96 w-full object-cover rounded-3xl"
              loading="lazy"
            >
            <div class="p-6 sm:p-8">
              <p class="sm:text-base leading-7 text-muted">
                Spielerische Bewegung stärkt Selbstvertrauen, Koordination und Freude am Entdecken.
              </p>
            </div>
          </UCard>

          <!-- Details grid below image -->
          <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 pb-1">
            <!-- First item: Full-width Ort card -->
            <UCard
              variant="soft"
              class="lg:col-span-1 rounded-3xl border border-default/70 bg-default/75 shadow-sm transition hover:shadow-md"
            >
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <UIcon
                      name="i-lucide-map-pin"
                      class="size-5"
                    />
                  </div>
                  <div>
                    <p class="text-xs uppercase tracking-[0.18em] text-muted font-bold">
                      {{ page?.courseDetails?.items?.[0]?.label }}
                    </p>
                    <p class="text-lg">
                      Feldkirchen
                    </p>
                  </div>
                </div>
                <p class="sm:text-base leading-7 text-muted">
                  {{ page?.courseDetails?.items?.[0]?.value }}
                </p>
              </div>
            </UCard>

            <!-- Rest of items: Grid cards -->
            <DetailCard
              v-for="(item) in page?.courseDetails?.items?.slice(1)"
              :key="item.label"
              v-bind="item"
            />
          </div>
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    >
      <template #title>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted">
          Das sagen <span class="text-primary">Eltern </span> über
          <span class="text-primary"> MotoRiki</span>
        </h2>
      </template>

      <UContainer>
        <div class="group/testimonials">
          <UPageColumns class="xl:columns-3">
            <UPageCard
              v-for="(testimonial, index) in page.testimonials.items"
              :key="index"
              variant="subtle"
              :description="testimonial.quote"
              :ui="{
                root: 'group/card rounded-3xl border border-default/70 bg-default/80 shadow-sm transition-all duration-300 ease-out group-hover/testimonials:opacity-60 hover:!opacity-100 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20',
                description: 'italic text-base leading-8 before:content-[open-quote] after:content-[close-quote] text-toned transition-colors duration-300 group-hover/card:text-highlighted'
              }"
            >
              <template #footer>
                <UUser
                  v-bind="testimonial.user"
                  size="3xl"
                  class="transition-all duration-300"
                />
              </template>
            </UPageCard>
          </UPageColumns>
        </div>
      </UContainer>
    </UPageSection>

    <USeparator />

    <UPageCTA
        id="contact"
        :title="page.cta.title"
        :description="page.cta.description"
        variant="naked"
        class="overflow-hidden @container"
      >
        <template #title>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-highlighted">
            Bereit für
            <span class="text-primary">„Bewegen. Lachen. Wachsen.“</span>
            mit deinem Kind?
          </h2>
        </template>

        <template #links>
          <UButton
            to="https://app.formbricks.com/s/cmnulg3fkj34zth01xagg6sgz"
            target="_blank"
            color="primary"
            variant="solid"
            size="xl"
            class="!text-2xl px-8 py-3 text-base survey-btn"
          >
            Zur Umfrage
          </UButton>
        
        </template>

        <LazyStarsBg />
      </UPageCTA>

    <LazyJumpingText />
  </div>
</template>

<style>
h1>div {
  color: var(--ui-primary);
}
</style>
