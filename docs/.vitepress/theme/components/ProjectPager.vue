<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as projects } from '../../../projekte/projects.data'
import { normalizePath } from '../data/projects'

const route = useRoute()

const neighbours = computed(() => {
  const index = projects.findIndex((p) => normalizePath(p.url) === normalizePath(route.path))
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: projects[index - 1],
    next: projects[index + 1],
  }
})
</script>

<template>
  <nav v-if="neighbours.prev || neighbours.next" class="pager" aria-label="Weitere Projekte">
    <a v-if="neighbours.prev" class="pager-link" :href="neighbours.prev.url">
      <span class="pager-dir">Vorheriges Projekt</span>
      <span class="pager-title">{{ neighbours.prev.title }}</span>
    </a>
    <span v-else />
    <a v-if="neighbours.next" class="pager-link pager-link--next" :href="neighbours.next.url">
      <span class="pager-dir">Nächstes Projekt</span>
      <span class="pager-title">{{ neighbours.next.title }}</span>
    </a>
  </nav>
</template>

<style scoped>
.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--c-line);
}

.pager-link {
  display: block;
  text-decoration: none;
}

.pager-link--next {
  text-align: right;
}

.pager-dir {
  display: block;
  font-family: var(--f-display);
  font-size: var(--t-small);
  color: var(--c-muted);
}

.pager-title {
  display: block;
  margin-top: 0.25rem;
  font-family: var(--f-display);
  font-size: 1.25rem;
  font-weight: 650;
  font-stretch: 85%;
  color: var(--c-ink);
  transition: color 0.15s ease;
}

.pager-link:hover .pager-title {
  color: var(--c-green);
}
</style>
