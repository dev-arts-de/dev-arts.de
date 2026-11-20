<script setup lang="ts">
import { computed } from 'vue'
import { data as projects } from '../../../projekte/projects.data'
import { GROUPS } from '../data/projects'

const groups = computed(() =>
  GROUPS.map((group) => ({
    ...group,
    items: projects.filter((p) => p.group === group.id),
  })).filter((group) => group.items.length > 0),
)
</script>

<template>
  <div class="project-index">
    <section
      v-for="group in groups"
      :key="group.id"
      class="pi-group"
      :aria-labelledby="`gruppe-${group.id}`"
    >
      <header class="pi-head">
        <h2 :id="`gruppe-${group.id}`">{{ group.title }}</h2>
        <p>{{ group.intro }}</p>
      </header>

      <ul class="pi-list">
        <li v-for="project in group.items" :key="project.url">
          <a class="pi-row" :href="project.url">
            <span class="pi-time">{{ project.zeitraum }}</span>
            <span class="pi-main">
              <span class="pi-title">{{ project.title }}</span>
              <span class="pi-desc">{{ project.description }}</span>
            </span>
            <span class="pi-status">{{ project.status }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.project-index {
  margin-top: 3rem;
}

.pi-group + .pi-group {
  margin-top: 4.5rem;
}

.pi-head h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: var(--f-display);
  font-size: var(--t-h2);
  font-weight: 650;
  font-stretch: 85%;
  letter-spacing: -0.015em;
  line-height: 1.1;
  color: var(--c-ink);
}

.pi-head p {
  margin: 0.5rem 0 0;
  font-family: var(--f-text);
  font-size: 1.05rem;
  color: var(--c-muted);
}

.pi-list {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  border-top: 1px solid var(--c-line);
}

.pi-list li {
  margin: 0;
}

.pi-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.35rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--c-line-soft);
  color: inherit;
  text-decoration: none !important;
}

.pi-time,
.pi-status {
  font-family: var(--f-display);
  font-size: var(--t-small);
  font-weight: 500;
  color: var(--c-muted);
  font-variant-numeric: tabular-nums;
}

.pi-main {
  display: block;
}

.pi-title {
  display: block;
  font-family: var(--f-display);
  font-size: clamp(1.35rem, 1.15rem + 0.8vw, 1.75rem);
  font-weight: 650;
  font-stretch: 85%;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--c-ink);
  transition: color 0.15s ease;
}

.pi-desc {
  display: block;
  margin-top: 0.3rem;
  max-width: 38rem;
  font-family: var(--f-text);
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--c-ink-soft);
}

.pi-row:hover .pi-title,
.pi-row:focus-visible .pi-title {
  color: var(--c-green);
}

@media (min-width: 760px) {
  .pi-row {
    grid-template-columns: 8.5rem minmax(0, 1fr) 9rem;
    gap: 1.5rem;
    align-items: baseline;
  }

  .pi-status {
    text-align: right;
  }
}
</style>
