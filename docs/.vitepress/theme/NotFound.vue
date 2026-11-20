<script setup lang="ts">
import FanLines from './components/FanLines.vue'
</script>

<template>
  <div class="not-found">
    <div class="not-found-fan">
      <FanLines />
    </div>
    <p class="not-found-code">404</p>
    <h1 class="not-found-msg">Diese Seite gibt es nicht.</h1>
    <p class="not-found-sub">
      Vielleicht ist sie umgezogen, vielleicht hat es sie nie gegeben.
      Von hier aus geht es weiter:
    </p>
    <div class="action-row not-found-actions">
      <a class="btn" href="/">Zur Startseite</a>
      <a class="text-link" href="/projekte/">Projekte</a>
    </div>
  </div>
</template>
