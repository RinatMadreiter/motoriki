<template>
    <UContainer class="py-12 max-w-2xl">
        <h1 class="text-3xl font-bold mb-8 tracking-tight">Impressum</h1>

        <UCard>
            <div class="space-y-8">

                <section>
                    <h2 class="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
                    <div class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>{{ name }}</p>
                        <p>{{ street }}</p>
                        <p>{{ city }}</p>
                    </div>
                </section>

                <br>

                <section>
                    <h2 class="text-xl font-semibold mb-3">Kontakt</h2>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">

                        <li class="flex items-center gap-3 p-2 -ml-2 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            @click="openMailClient">
                            <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400 dark:text-gray-500" />

                            <span class="text-base text-gray-600 dark:text-gray-300">
                                E-Mail schreiben
                            </span>
                        </li>
                    </ul>
                </section>

            </div>
        </UCard>
    </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Impressum',
    robots: 'noindex, nofollow'
})


const name = 'Marieke Scherer'
const street = 'Liebetig 42'
const city = '9560 Feldkirchen in Kärnten'
const mailUser = 'motoriki'
const mailDomain = 'gmx.at'

const openMailClient = () => {
    window.location.href = `mailto:${mailUser}@${mailDomain}`
}
</script>