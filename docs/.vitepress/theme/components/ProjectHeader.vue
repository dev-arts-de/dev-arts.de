<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const technik = computed<string[]>(() =>
  Array.isArray(frontmatter.value.technik) ? frontmatter.value.technik.map(String) : [],
)

const isExternal = computed(() => /^https?:\/\//.test(frontmatter.value.link?.href ?? ''))
</script>

<template>
  <header class="ph">
    <a class="ph-back" href="/projekte/">Alle Projekte</a>
    <h1 class="ph-title">{{ frontmatter.title }}</h1>
    <p class="ph-lead">{{ frontmatter.description }}</p>

    <dl class="ph-facts">
      <div>
        <dt>Zeitraum</dt>
        <dd>{{ frontmatter.zeitraum }}</dd>
      </div>
      <div v-if="frontmatter.status">
        <dt>Stand</dt>
        <dd>{{ frontmatter.status }}</dd>
      </div>
      <div v-if="technik.length" class="ph-tech">
        <dt>Technik</dt>
        <dd>{{ technik.join(', ') }}</dd>
      </div>
      <div v-if="frontmatter.link">
        <dt>Link</dt>
        <dd>
          <a
            :href="frontmatter.link.href"
            :target="isExternal ? '_blank' : undefined"
            :rel="isExternal ? 'noopener' : undefined"
          >{{ frontmatter.link.text }}</a>
        </dd>
      </div>
    </dl>
  </header>
</template>

<style scoped>
.ph {
  margin-bottom: 3rem;
}

.ph-back {
  font-family: var(--f-display);
  font-size: var(--t-small);
  font-weight: 500;
  color: var(--c-muted);
  text-decoration: none;
}

.ph-back:hover {
  color: var(--c-green);
}

.ph-title {
  margin: 1rem 0 0;
  font-family: var(--f-display);
  font-size: var(--t-h1);
  font-weight: 700;
  font-stretch: 78%;
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--c-ink);
}

.ph-lead {
  margin: 1.25rem 0 0;
  max-width: 36rem;
  font-family: var(--f-text);
  font-size: var(--t-lead);
  line-height: 1.5;
  color: var(--c-ink);
}

.ph-facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 2rem;
  margin: 2.25rem 0 0;
  padding-top: 1.25rem;
  border-top: 1px solid var(--c-line);
}

.ph-facts dt {
  font-family: var(--f-display);
  font-size: var(--t-small);
  font-weight: 500;
  color: var(--c-muted);
}

.ph-facts dd {
  margin: 0.2rem 0 0;
  font-family: var(--f-display);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--c-ink);
}

.ph-tech {
  grid-column: 1 / -1;
}

.ph-facts a {
  color: var(--c-ink);
  text-decoration: underline;
  text-decoration-color: var(--c-green);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.ph-facts a:hover {
  color: var(--c-green);
}

@media (min-width: 640px) {
  .ph-facts {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
