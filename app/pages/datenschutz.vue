<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutz',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  robots: 'noindex, nofollow'
})

const mailUser = 'motoriki'
const mailDomain = 'gmx.at'

const openMailClient = () => {
    window.location.href = `mailto:${mailUser}@${mailDomain}`
}
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <div class="mx-auto max-w-4xl">
      <UCard :ui="{ body: 'prose prose-neutral dark:prose-invert max-w-none' }">
        <template #header>
          <div class="space-y-2">
            <p class="text-sm text-gray-500 dark:text-gray-400">Rechtliches</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Datenschutzerklärung
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Stand: 15.04.2026
            </p>
          </div>
        </template>

        <section>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
            Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des
            österreichischen Datenschutzgesetzes (DSG).
          </p>
          <p>
            In dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen
            Daten wir beim Besuch unserer Website und bei der Nutzung unseres Formulars zur
            unverbindlichen Interessenbekundung verarbeiten.
          </p>
        </section>

        <h2>1. Verantwortlicher</h2>
        <section>
          <p>
            Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:
          </p>
          <p>
            Marieke Scherer<br>
            Liebetig 42<br>
            9560 Feldkirchen in Kärnten<br>
            Österreich
          </p>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-center gap-3 p-2 -ml-2 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                @click="openMailClient">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400 dark:text-gray-500" />

                <span class="text-base text-gray-600 dark:text-gray-300">
                    E-Mail schreiben
                </span>
            </li>
          </ul>
          <p>
            Sofern kein Datenschutzbeauftragter bestellt wurde, ist datenschutzrechtlicher
            Ansprechpartner ebenfalls die oben genannte Stelle.
          </p>
        </section>

        <h2>2. Hosting über GitHub Pages</h2>
        <section>
          <p>
            Diese Website wird über GitHub Pages bereitgestellt.
            Beim Aufruf der Website werden aus technischen Gründen Informationen verarbeitet,
            die erforderlich sind, um die Website korrekt auszuliefern und die Sicherheit
            und Stabilität des Betriebs zu gewährleisten.
          </p>
          <p>
            Dabei können insbesondere folgende Daten verarbeitet werden:
          </p>
          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seiten bzw. Dateien</li>
            <li>Browsertyp und Browserversion</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäß
            Art. 6 Abs. 1 lit. f DSGVO an der sicheren, stabilen und technisch ordnungsgemäßen
            Bereitstellung dieser Website.
          </p>
          <p>
            Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in der
            Datenschutzerklärung von GitHub:
            <a
              href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
            </a>
          </p>
        </section>

        <h2>3. Formular zur unverbindlichen Interessenbekundung</h2>
        <section>
          <p>
            Auf unserer Website bieten wir die Möglichkeit, unverbindlich Interesse an unserem
            motopädagogischen Kursangebot zu bekunden.
          </p>
          <p>
            Wenn Sie dieses Formular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten,
            insbesondere:
          </p>
          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Anzahl der Kinder</li>
            <li>Alter der Kinder</li>
            <li>sonstige freiwillige Angaben, sofern im Formular vorgesehen.</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt zum Zweck der Bearbeitung Ihrer Anfrage, der Kontaktaufnahme,
            der Organisation von Interessentenlisten sowie der Einschätzung, ob und welches
            Kursangebot für Sie bzw. Ihr Kind passend sein könnte.
          </p>
          <p>
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Bearbeitung von Anfragen, der Organisation unseres
            Kursangebots und der Kommunikation mit Interessenten).
          </p>
          <p>
            Soweit die Kontaktaufnahme auf den späteren Abschluss eines Vertrages abzielt oder
            der Durchführung vorvertraglicher Maßnahmen dient, kann ergänzend auch
            Art. 6 Abs. 1 lit. b DSGVO einschlägig sein.
          </p>
          <p>
            Die von Ihnen im Rahmen der Interessenbekundung übermittelten Daten speichern wir
            grundsätzlich für <strong>sechs Monate</strong> ab dem Zeitpunkt der letzten
            Kontaktaufnahme, sofern keine gesetzliche Aufbewahrungspflicht oder ein anderer
            berechtigter Grund für eine längere Speicherung besteht.
          </p>
        </section>

        <h2>4. Angaben zu Kindern</h2>
        <section>
          <p>
            Im Rahmen des Formulars fragen wir auch Angaben zur Anzahl und zum Alter der Kinder ab,
            da diese Informationen für die Planung, altersgerechte Einteilung und organisatorische
            Einschätzung unseres Angebots erforderlich sein können.
          </p>
          <p>
            Wir ersuchen darum, uns über das Formular keine sensiblen personenbezogenen Daten
            – insbesondere keine Gesundheitsdaten – zu übermitteln, sofern dies nicht ausdrücklich
            erforderlich und von uns angefordert ist.
          </p>
          <p>
            Die Angaben zu Kindern werden ausschließlich in dem Umfang verarbeitet, der für die
            Bearbeitung Ihrer Interessenbekundung und die Organisation des Angebots erforderlich ist.
          </p>
        </section>

        <h2>5. Einsatz von Formbricks Cloud</h2>
        <section>
          <p>
            Für die technische Bereitstellung und Verarbeitung unseres Formulars nutzen wir
            <strong>Formbricks Cloud</strong>.
          </p>
          <p>
            Die von Ihnen im Formular eingegebenen Daten werden an Formbricks übermittelt und dort
            in unserem Auftrag verarbeitet. Formbricks wird dabei als Auftragsverarbeiter für uns tätig,
            während wir datenschutzrechtlich Verantwortliche für die übermittelten Inhalte bleiben.
          </p>
          <p>
            Nach Angaben von Formbricks ist das Unternehmen in Deutschland ansässig und speichert
            die Daten in Deutschland.
          </p>
          <p>
            Weitere Informationen finden Sie unter:
            <a
              href="https://formbricks.com/gdpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://formbricks.com/gdpr
            </a>
          </p>
        </section>

        <h2>6. Empfänger der Daten</h2>
        <section>
          <p>
            Ihre personenbezogenen Daten werden grundsätzlich nicht an unberechtigte Dritte
            weitergegeben.
          </p>
          <p>
            Eine Weitergabe erfolgt nur, soweit dies zur technischen Bereitstellung der Website
            und des Formulars erforderlich ist, insbesondere an:
          </p>
          <ul>
            <li>GitHub Pages als Hosting-Dienst</li>
            <li>Formbricks Cloud als Formular-Dienstleister</li>
            <li>allfällige IT-Dienstleister, sofern dies für Wartung und Support erforderlich ist</li>
          </ul>
        </section>

        <h2>7. Drittlandübermittlung</h2>
        <section>
          <p>
            Eine Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union
            oder des Europäischen Wirtschaftsraums erfolgt nur dann, wenn dies im Einzelfall
            erforderlich ist oder von eingesetzten Dienstleistern technisch veranlasst wird.
          </p>
          <p>
            Sofern eine solche Übermittlung stattfindet, erfolgt sie nur unter Beachtung der
            gesetzlichen Vorgaben der Art. 44 ff. DSGVO.
          </p>
        </section>

        <h2>8. Cookies und ähnliche Technologien</h2>
        <section>
          <p>
            Diese Website verwendet nach aktuellem Stand keine eigenen Analyse-, Marketing- oder
            Tracking-Tools.
          </p>
        </section>

        <h2>9. Externe Icons (Iconify)</h2>
        <section>
          <p>
            Auf dieser Website werden zur Darstellung von Symbolen teilweise externe Icon-Ressourcen
            über den Dienst <strong>Iconify</strong> geladen.
          </p>
          <p>
            Beim Abruf dieser Icons kann es aus technischen Gründen dazu kommen, dass personenbezogene
            Daten, insbesondere Ihre IP-Adresse, Informationen zu Ihrem Browser, Ihrem Endgerät sowie
            Datum und Uhrzeit des Abrufs, an Server des jeweiligen Anbieters übermittelt werden.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäß
            Art. 6 Abs. 1 lit. f DSGVO an einer einheitlichen, technisch effizienten und ansprechenden
            Darstellung unserer Website.
          </p>
          <p>
            Sofern dabei eine Übermittlung personenbezogener Daten in Drittländer nicht ausgeschlossen
            werden kann, erfolgt diese nur unter Beachtung der gesetzlichen Vorgaben der Art. 44 ff. DSGVO.
          </p>
          <p>
            Weitere Informationen finden Sie in den Datenschutzinformationen des Anbieters:
            <a
              href="https://iconify.design/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://iconify.design/privacy/
            </a>
          </p>
        </section>

        <h2>10. Ihre Rechte</h2>
        <section>
          <p>
            Ihnen stehen hinsichtlich Ihrer von uns verarbeiteten personenbezogenen Daten
            grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch zu.
          </p>
          <p>
            Sofern eine Verarbeitung auf Ihrer Einwilligung beruht, haben Sie außerdem das Recht,
            diese Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
          </p>
          
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte hier:
              <li class="flex items-center gap-3 p-2 -ml-2 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  @click="openMailClient">
                  <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400 dark:text-gray-500" />

                  <span class="text-base text-gray-600 dark:text-gray-300">
                      E-Mail schreiben
                  </span>
              </li>
          </ul>
          
        </section>

        <h2>11. Beschwerderecht</h2>
        <section>
          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht
            verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden
            sind, haben Sie das Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen.
          </p>
          <p>
            In Österreich ist dies die:
          </p>
          <p>
            <strong>Österreichische Datenschutzbehörde</strong><br>
            Barichgasse 40–42<br>
            1030 Wien<br>
            Website:
            <a
              href="https://www.dsb.gv.at/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.dsb.gv.at/
            </a>
          </p>
        </section>

        <h2>12. Keine automatisierte Entscheidungsfindung</h2>
        <section>
          <p>
            Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des
            Art. 22 DSGVO findet nicht statt.
          </p>
        </section>

        <h2>13. Änderungen dieser Datenschutzerklärung</h2>
        <section>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Website,
            der eingesetzten Dienste oder der rechtlichen Anforderungen anzupassen.
          </p>
          <p>
            Es gilt die jeweils auf dieser Website veröffentlichte Fassung.
          </p>
        </section>
      </UCard>
    </div>
  </UContainer>
</template>