<script setup>
import { onMounted, ref } from 'vue'

const messages = [
  'Diese Seite wurde refactored und nie neu deployed.',
  'NullPointerException: Seite nicht gefunden.',
  'Drei Stunden Debugging. Seite existiert schlicht nicht.',
  'Die Seite ist in keiner bekannten Datenbank.',
  'Kein Eintrag. Kein Cache. Kein Plan.',
  'HTTP 404 – auch nach ordentlicher Architektur.',
  'Branch existiert nicht. Auch nicht remote.',
]

const msg = ref('')
onMounted(() => {
  msg.value = messages[Math.floor(Math.random() * messages.length)]
})
</script>

<template>
  <div class="not-found">
    <div class="not-found-code">404</div>
    <p class="not-found-msg">{{ msg }}</p>
    <p class="not-found-sub">
      Die URL existiert nicht – oder wurde irgendwann mal gelöscht, umgezogen oder vergessen.
    </p>
    <div class="not-found-actions">
      <a href="/" class="cv-download-link">Zurück zur Startseite</a>
      <a href="/projekte/" class="not-found-alt">Projekte ansehen</a>
    </div>
  </div>
</template>
