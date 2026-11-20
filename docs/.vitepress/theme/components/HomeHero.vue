<script setup lang="ts">
import FanLines from './FanLines.vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-name">
    <div class="hero-fan">
      <FanLines />
    </div>

    <div class="hero-text">
      <h1 id="hero-name" class="hero-name">
        <span>Arthur</span>
        <span>Schimpf</span>
      </h1>
      <p class="hero-role">Softwareentwickler in Karlsruhe</p>
      <p class="hero-intro">
        Ich entwickle Backends mit Java und Spring Boot und kümmere mich darum,
        wie sie gebaut, getestet und ausgeliefert werden. Seit Mai 2026 arbeite
        ich bei der init SE an der CI/CD-Strecke für eine neue Cloud-Plattform.
      </p>
      <div class="action-row">
        <a class="btn" href="/projekte/">Projekte ansehen</a>
        <a class="text-link" href="/lebenslauf">Lebenslauf</a>
      </div>
    </div>

    <dl class="hero-facts">
      <div>
        <dt>Arbeit</dt>
        <dd>Software Engineer bei der init SE, öffentlicher Verkehr</dd>
      </div>
      <div>
        <dt>Davor</dt>
        <dd>Hellmann Worldwide Logistics, Infokom, abas Software</dd>
      </div>
      <div>
        <dt>Zuletzt gebaut</dt>
        <dd>
          <a href="/projekte/fundus">Fundus</a>, ein Dokumentenarchiv mit
          Volltextsuche, das Claude direkt befragen kann
        </dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: var(--w-page);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) var(--gutter) 0;
  overflow-x: clip;
}

.hero-fan {
  position: absolute;
  top: -2rem;
  right: -18%;
  width: min(118vw, 640px);
  opacity: 0.35;
  pointer-events: none;
}

.hero-text {
  position: relative;
}

.hero-name {
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: var(--f-display);
  font-size: var(--t-name);
  font-weight: 750;
  font-stretch: 75%;
  line-height: 0.84;
  letter-spacing: -0.012em;
  color: var(--c-ink);
}

.hero-role {
  margin: 1.5rem 0 0;
  font-family: var(--f-display);
  font-size: var(--t-lead);
  font-weight: 500;
  color: var(--c-green);
}

.hero-intro {
  max-width: 33rem;
  margin: 1.25rem 0 0;
  font-family: var(--f-text);
  font-size: clamp(1.15rem, 1.05rem + 0.4vw, 1.375rem);
  line-height: 1.55;
  color: var(--c-ink-soft);
}

.hero-facts {
  position: relative;
  display: grid;
  gap: 1.25rem;
  margin: clamp(3rem, 7vw, 5.5rem) 0 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--c-line);
}

.hero-facts dt {
  font-family: var(--f-display);
  font-size: var(--t-small);
  font-weight: 500;
  color: var(--c-muted);
}

.hero-facts dd {
  margin: 0.25rem 0 0;
  font-family: var(--f-display);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--c-ink);
}

.hero-facts a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--c-green);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.hero-facts a:hover {
  color: var(--c-green);
}

@media (min-width: 720px) {
  .hero-facts {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    column-gap: 3rem;
  }

  .hero-fan {
    position: relative;
    top: auto;
    right: auto;
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    margin-top: -1.5rem;
    opacity: 1;
  }

  .hero-text {
    grid-column: 1;
    grid-row: 1;
  }

  .hero-facts {
    grid-column: 1 / -1;
  }
}
</style>
