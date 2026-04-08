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
    icon: 'i-lucide-activity',
    title: 'Motorische Fähigkeiten',
    text: 'Klettern, Springen, Kriechen, Balancieren und Bauen fördern Grob- und Feinmotorik, Gleichgewicht, Koordination und ein gutes Körpergefühl.'
  },
  {
    icon: 'i-lucide-badge-check',
    title: 'Selbstvertrauen & Mut',
    text: 'Eigene Ideen umsetzen, Hindernisse bewältigen und Erfolgserlebnisse in der Gruppe stärken das Vertrauen in die eigenen Fähigkeiten.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Soziale Kompetenzen',
    text: 'In der Kleingruppe lernt dein Kind Rücksicht, Warten, Helfen, Regeln verstehen, Konflikte aushalten und Freundschaften knüpfen.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Emotionale Entwicklung',
    text: 'Bewegung und Spiel helfen, Gefühle auszudrücken, Frust abzubauen und einen gesunden Umgang mit Emotionen zu entwickeln.'
  },
  {
    icon: 'i-lucide-brain',
    title: 'Konzentration & Ausdauer',
    text: 'Abwechslungsreiche Bewegungsaufgaben, die Spaß machen, unterstützen Konzentration und Durchhaltevermögen – eine wichtige Basis für späteres Lernen.'
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
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
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
       icon="i-lucide-arrow-down"

      :ui="{
        container: 'max-w-4xl mx-auto !pt-0 !pb-s',
        description: 'text-center',
        wrapper: 'mt-0 py-0',
        title: 'text-center'
      }"
    >
      <template #title>
        <h2 class="sm:*:leading-11">
         und wie der Kurs <span class="text-primary">hilft</span>
        </h2>
      </template>

      <template #description>
        <div class="max-w-2xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">
          <p class="text-lg md:text-xl leading-relaxed">
            In der Motopädagogik werden genau solche Kinder in einem <span class="text-primary font-bold">geschützten Rahmen</span> begleitet, in dem sie in ihrem <span class="text-primary font-bold">eigenen Tempo</span> Erfahrungen sammeln dürfen.
          </p>
          <p class="text-lg md:text-xl leading-relaxed">Durch <span class="text-primary font-bold">spielerische</span> Bewegungslandschaften, <span class="text-primary font-bold">freies</span> Ausprobieren und <span class="text-primary font-bold">kooperative</span> Spiele verbessern Kinder nicht nur ihre Motorik, sondern gewinnen auch <span class="text-primary font-bold">Mut</span>, lernen mit Frust umzugehen und ihren Platz in einer Gruppe zu finden.</p>
          <p class="text-lg md:text-xl leading-relaxed">
              Eltern-Kind-Angebote im Alter von 1-3 Jahren nutzen den <span class="text-primary font-bold">natürlichen Bewegungsdrang</span> der Kleinsten und geben ihnen  <span class="text-primary font-bold">sichere Strukturen</span>, um Neues zu wagen.
              Gleichzeitig erleben erleben Kinder neue Bewegungen, machen Fortschritte und bekommen Ideen, wie sie es auch zu Hause sinnvoll und <span class="text-primary font-bold">ohne Leistungsdruck</span> ausleben können.
          </p>
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <template>
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
              class=" rounded-3xl border border-default bg-elevated/60 p-5 sm:p-6"
            >
              <div class="flex items-start gap-4">
                <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <UIcon :name="item.icon" class="size-5" />
                </div>

                <div class="min-w-0">
                  <h3 class="text-base sm:text-lg font-semibold text-highlighted">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1 text-sm sm:text-base leading-7 text-muted">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div class="mt-8 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6">
            <p class="text-sm sm:text-base leading-7 text-toned">
              So entsteht ein sicherer, wertschätzender Raum, in dem Kinder lernen dürfen,
              ohne bewertet zu werden - und in dem es kein „richtig“ oder „falsch“ gibt,
              sondern vor allem wertvolle Erfahrungen.
            </p>
          </div>
        </template>
      </UPageSection>
    </template>

    <USeparator :ui="{ border: 'border-primary/30' }" />
    <template>
      <UPageSection
        icon="i-lucide-sprout"
        :ui="{
          container: 'max-w-4xl mx-auto !pt-5 !pb-12',
          wrapper: 'mt-0 py-0',
          title: 'text-center',
          description: 'text-center max-w-3xl mx-auto text-muted',
          body: 'mt-10'
        }"
      >
        <template #title>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-highlighted">
            Spielerisch lernen –
            <span class="text-primary">was dein Kind gewinnt</span>
          </h2>
        </template>

        <template #description>
          <p>
            In den 15 Kurseinheiten profitiert dein Kind auf mehreren Ebenen – ganz
            spielerisch, ohne Druck und ohne Leistungsbewertung.
          </p>
        </template>

        <template #body>
          <ul class="space-y-4">
            <li
              v-for="item in benefits"
              :key="item.title"
              class="rounded-2xl border border-default bg-default/60 p-5 sm:p-6 shadow-sm transition hover:bg-default hover:shadow-md"
            >
              <div class="flex items-start gap-4">
                <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <UIcon :name="item.icon" class="size-5" />
                </div>

                <div class="min-w-0">
                  <h3 class="text-base sm:text-lg font-semibold text-highlighted">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1 text-sm sm:text-base leading-7 text-muted">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div class="mt-8 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 sm:p-6">
            <p class="text-sm sm:text-base leading-7 text-toned">
              Alles passiert spielerisch, ohne Druck und ohne Leistungsbewertung –
              Kinder dürfen ausprobieren, scheitern, neu versuchen und ihren eigenen
              Weg finden.
            </p>
          </div>
        </template>
      </UPageSection>
    </template>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="features"
      :description="page.features.description"
      :features="page.features.features"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
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
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
          />
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="steps"
      :description="page.steps.description"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <UColorModeImage
            v-if="step.image"
            :light="step.image?.light"
            :dark="step.image?.dark"
            :alt="step.title"
            class="size-full"
          />

          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-muted">
              {{ step.description }}
            </span>
          </div>
        </UPageCard>
      </template>
    </UPageSection>


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
        <UPageColumns class="xl:columns-3">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
          >
            <template #footer>
              <UUser
                v-bind="testimonial.user"
                size="xl"
              />
            </template>
          </UPageCard>
        </UPageColumns>
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