<script setup lang="ts">
/*
 * Karlsruhe is laid out as a fan: 32 streets radiate from the palace
 * tower. The nine rays opening to the south form the city, the rest run
 * into the forest. This draws that plan as a quiet line figure.
 */
const RAY_COUNT = 32
const STEP = 360 / RAY_COUNT
const ORIGIN = { x: 300, y: 200 }
const CITY_RAYS = 4 // rays on each side of due south that form the city
const RING_RADIUS = 118

interface Ray {
  d: string
  city: boolean
  delay: number
}

function rayLength(offset: number): number {
  if (Math.abs(offset) <= CITY_RAYS) return 390 - Math.abs(offset) * 14
  // forest paths: deterministic variation so the figure stays stable
  return 120 + ((Math.abs(offset) * 37) % 70)
}

const rays: Ray[] = Array.from({ length: RAY_COUNT }, (_, i) => {
  const offset = i - RAY_COUNT / 2
  const angle = ((90 + offset * STEP) * Math.PI) / 180
  const len = rayLength(offset)
  const x = ORIGIN.x + Math.cos(angle) * len
  const y = ORIGIN.y + Math.sin(angle) * len
  return {
    d: `M${ORIGIN.x} ${ORIGIN.y} L${x.toFixed(1)} ${y.toFixed(1)}`,
    city: Math.abs(offset) <= CITY_RAYS,
    delay: Math.abs(offset) * 45,
  }
})

// The "Zirkel": a half ring around the palace, open to the north.
const ring = `M${ORIGIN.x - RING_RADIUS} ${ORIGIN.y} A${RING_RADIUS} ${RING_RADIUS} 0 0 0 ${ORIGIN.x + RING_RADIUS} ${ORIGIN.y}`
</script>

<template>
  <svg
    class="fan"
    viewBox="0 0 600 600"
    aria-hidden="true"
    focusable="false"
  >
    <path
      v-for="(ray, i) in rays"
      :key="i"
      :d="ray.d"
      pathLength="1"
      class="fan-ray"
      :class="{ 'fan-ray--city': ray.city }"
      :style="{ animationDelay: `${ray.delay}ms` }"
    />
    <path :d="ring" pathLength="1" class="fan-ray fan-ring" style="animation-delay: 700ms" />
    <circle :cx="ORIGIN.x" :cy="ORIGIN.y" r="5" class="fan-tower" />
  </svg>
</template>

<style scoped>
.fan {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.fan-ray {
  fill: none;
  stroke: var(--c-fan);
  stroke-width: 1;
  stroke-linecap: butt;
  opacity: 0.45;
  stroke-dasharray: 1 1.01;
  stroke-dashoffset: 1;
  animation: draw 1.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

.fan-ray--city {
  stroke-width: 1.4;
  opacity: 1;
}

.fan-ring {
  opacity: 0.7;
}

.fan-tower {
  fill: var(--c-green);
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fan-ray {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
