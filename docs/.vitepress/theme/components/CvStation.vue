<script setup lang="ts">
interface Props {
  zeit: string
  rolle: string
  firma: string
  ort?: string
  aktuell?: boolean
}

defineProps<Props>()
</script>

<template>
  <article class="cv-station" :class="{ 'cv-station--current': aktuell }">
    <p class="cv-time">{{ zeit }}</p>
    <div class="cv-body">
      <h3 class="cv-role">{{ rolle }}</h3>
      <p class="cv-org">
        {{ firma }}<template v-if="ort">, {{ ort }}</template>
      </p>
      <div class="cv-text">
        <slot />
      </div>
    </div>
  </article>
</template>
