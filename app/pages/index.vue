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

const courseFlow = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Ankommen & Begrüßung',
    text: 'Ruhiger Start, jedes Kind wird persönlich willkommen geheißen - das schafft Vertrauen und Orientierung.'
  },
  {
    icon: 'i-lucide-trees',
    title: 'Bewegung & Spiel',
    text: 'Bewegungslandschaften mit Matten, Geräten und Alltagsmaterialien laden zum Klettern, Krabbeln, Hüpfen, Balancieren, Rutschen und Bauen ein - ohne starre Übungsfolgen oder Leistungsdruck.'
  },
  {
    icon: 'i-lucide-lightbulb',
    title: 'Freies Experimentieren',
    text: 'Die Kinder dürfen eigene Ideen einbringen, mit Materialien kreativ umgehen und spielerisch Lösungen finden - das stärkt Selbstständigkeit und Problemlösefähigkeit.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Miteinander statt Gegeneinander',
    text: 'Kooperative Spiele, gemeinsames Bauen und Ausprobieren fördern Rücksichtnahme, Helfen, Wartenkönnen und das Erleben von Gemeinschaft.'
  },
  {
    icon: 'i-lucide-moon-star',
    title: 'Ruhiger Abschluss',
    text: 'Kleine Entspannungsübungen sowie kurze Reflexionen helfen den Kindern, das Erlebte zu verarbeiten und zur Ruhe zu kommen.'
  }
]

const benefits = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Geschützter Rahmen',
    text: 'Kinder werden in einem sicheren, wertschätzenden Umfeld begleitet und dürfen in ihrem eigenen Tempo Erfahrungen sammeln.'
  },
  {
    icon: 'i-lucide-trees',
    title: 'Spielerisches Ausprobieren',
    text: 'Bewegungslandschaften, freies Experimentieren und kooperative Spiele fördern Motorik, Mut und den Umgang mit Frust.'
  },
  {
    icon: 'i-lucide-baby',
    title: 'Sinnvolle Struktur für 1-3 Jahre',
    text: 'Kind-Angebote greifen den natürlichen Bewegungsdrang auf und geben gleichzeitig Sicherheit, um Neues zu wagen.'
  }
]

const courseDetails = [
  {
    label: 'Ort',
    value: 'Motopädagogische Kind-Bewegungsgruppen in Feldkirchen (genaue Adresse nach Anmeldung).',
    icon: 'i-lucide-map-pin'
  },
  {
    label: 'Alter',
    value: 'Kinder von 1-3 Jahren.',
    icon: 'i-lucide-baby'
  },
  {
    label: 'Gruppengröße',
    value: 'Pro Kurs maximal 8 Kinder - so bleibt genug Zeit und Raum für jedes einzelne Kind.',
    icon: 'i-lucide-users'
  },
  {
    label: 'Kursumfang',
    value: '15 Termine / Einheiten pro Semester.',
    icon: 'i-lucide-calendar-days'
  },
  {
    label: 'Kursbeitrag',
    value: '160 € pro Semester zum Kursauftakt.',
    icon: 'i-lucide-receipt-text'
  }
]
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[850px]"
      />
    </div>

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
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>
    </UPageHero>

    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      orientation="horizontal"
      :ui="{
        container: 'lg:pr-0 lg:pl-4  mx-0 max-w-none md:mr-10 !pb-8',
        features: 'gap-4'
      }"
    >
      <template #title>
        <MDC
          :value="page.section.title"
          class="sm:*:leading-11"
        />
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
          <MDC
            :value="'Und wie der Kurs <span class=&quot;text-primary&quot;>hilft</span>'"
            class="*:leading-10 sm:*:leading-11"
          />
        </div>
      </template>

      <template #description>
        <div class="relative z-10 space-y-4 text-base sm:text-lg leading-8 text-muted">
          <p>
            In der Motopädagogik werden Kinder in einem geschützten Rahmen begleitet,
            in dem sie in ihrem eigenen Tempo Erfahrungen sammeln dürfen.
          </p>
          <p>
            Durch spielerische Bewegungslandschaften, freies Ausprobieren und
            kooperative Spiele entwickeln Kinder nicht nur ihre Motorik, sondern auch
            Mut, Frustrationstoleranz und soziale Sicherheit.
          </p>
        </div>
      </template>

      <template #body>
        <div class="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ul class="space-y-4">
            <li
              v-for="item in benefits"
              :key="item.title"
              class="rounded-3xl border border-default bg-default/70 p-5 sm:p-6 shadow-sm transition hover:bg-default hover:shadow-md"
            >
              <div class="flex items-start gap-4">
                <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <UIcon
                    :name="item.icon"
                    class="size-5"
                  />
                </div>
                <div class="min-w-0">
                  <h3 class="text-base sm:text-lg font-semibold text-highlighted">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1 sm:text-base leading-7 text-muted">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </li>
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
                Kinder erleben Bewegung als etwas Sicheres, Positives und Stärkendes -
                ohne Leistungsdruck, aber mit viel Raum zum Lernen.
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
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-highlighted">
          Was euch im Kurs <span class="text-primary">erwartet</span>
        </h2>
      </template>

      <template #description>
        <p>
          Jede Einheit folgt einem klaren, kindgerechten Ablauf, der Sicherheit gibt
          und gleichzeitig viel Raum für freies Entdecken lässt.
        </p>
      </template>

      <template #body>
        <ul class="mt-10 space-y-4">
          <li
            v-for="item in courseFlow"
            :key="item.title"
            class="rounded-3xl border border-default bg-default/60 p-5 sm:p-6 shadow-sm transition hover:bg-default hover:shadow-md"
          >
            <div class="flex items-start gap-4">
              <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <UIcon
                  :name="item.icon"
                  class="size-5"
                />
              </div>

              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-highlighted">
                  {{ item.title }}
                </h3>
                <p class="mt-1 sm:text-base leading-7 text-muted">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div class="mt-8 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6">
          <p class="sm:text-base leading-7 text-toned">
            So entsteht ein sicherer, wertschätzender Raum, in dem Kinder lernen dürfen,
            ohne bewertet zu werden - und in dem es kein „richtig“ oder „falsch“ gibt,
            sondern vor allem wertvolle Erfahrungen.
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
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[85%]"
          />
        </div>
      </template>
      <div class="mt-0 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6 max-w-5xl mx-auto">
        <p class="text-lg sm:text-base leading-7 text-toned leading-relaxed">
          Alles passiert spielerisch, ohne Druck und ohne Leistungsbewertung -
          Kinder dürfen ausprobieren, scheitern, neu versuchen und ihren eigenen Weg finden.
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
        <MDC
          :value="'Kursdetails - <span class=&quot;text-primary&quot;>Motopädagogik in Feldkirchen</span>'"
          class="*:leading-9 sm:*:leading-10"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[92%]"
          />
        </div>
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
                      Ort
                    </p>
                    <p class="text-lg">
                      Feldkirchen
                    </p>
                  </div>
                </div>
                <p class="sm:text-base leading-7 text-muted">
                  Motopädagogische Kind-Bewegungsgruppen in Feldkirchen
                  (genaue Adresse nach Anmeldung).
                </p>
              </div>
            </UCard>

            <UCard
              v-for="item in courseDetails.slice(1)"
              :key="item.label"
              variant="soft"
              class="rounded-3xl border border-default/70 bg-default/75 shadow-sm transition hover:shadow-md"
            >
              <div class="flex items-start gap-4">
                <div class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <UIcon
                    :name="item.icon"
                    class="size-5"
                  />
                </div>

                <div class="min-w-0">
                  <p class="text-xs uppercase tracking-[0.18em] text-muted font-bold">
                    {{ item.label }}
                  </p>
                  <p class="mt-2 sm:text-base leading-7 text-toned text-lg">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </UCard>
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
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>

      <template #title>
        <MDC :value="page.testimonials.title" />
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
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="page.cta.title" />

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
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
