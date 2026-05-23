<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    user?: string
    domain?: string
    label?: string
  }>(),
  {
    user: 'Arthur.Schimpf',
    domain: 'gmx.de',
    label: ''
  }
)

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const address = computed(() => `${props.user}@${props.domain}`)
const display = computed(() => props.label || address.value)
</script>

<template>
  <a
    v-if="mounted"
    :href="`mailto:${address}`"
    class="mail-link"
  >
    {{ display }}
  </a>
  <span v-else class="mail-link mail-link--placeholder" aria-label="Email-Adresse wird geladen">
    {{ props.user }}<span aria-hidden="true"> [at] </span>{{ props.domain }}
  </span>
</template>
