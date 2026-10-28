<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  targetDate: { type: String, required: true },
})

const now = ref(Date.now())
let timer

const countdown = computed(() => {
  const difference = Math.max(new Date(props.targetDate).getTime() - now.value, 0)
  const seconds = Math.floor(difference / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  }
})

// Hanya tampilan: label bahasa Indonesia + animasi masuk saat terlihat
const labels = { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' }
const root = ref(null)
let io

onMounted(() => {
  timer = window.setInterval(() => { now.value = Date.now() }, 1000)

  if (!root.value) return
  if (!('IntersectionObserver' in window)) {
    root.value.classList.add('in')
    return
  }
  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.disconnect()
      }
    }),
    { threshold: 0.3 },
  )
  io.observe(root.value)
})
onBeforeUnmount(() => {
  window.clearInterval(timer)
  io && io.disconnect()
})
</script>

<template>
  <div ref="root" class="countdown" role="timer" aria-live="off">
    <div
      v-for="(value, key, idx) in countdown"
      :key="key"
      class="countdown-item"
      :style="{ '--i': idx }"
    >
      <span class="item-leaf" aria-hidden="true"></span>
      <strong :key="value">{{ String(value).padStart(2, '0') }}</strong>
      <span class="item-label">{{ labels[key] || key }}</span>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  --ink: #2a241c;
  --gold: #b08a3e;
  --gold-deep: #86672a;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(8px, 2.4vw, 18px);
}

.countdown-item {
  position: relative;
  padding: clamp(18px, 4vw, 28px) 4px clamp(14px, 3vw, 20px);
  text-align: center;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(176, 138, 62, 0.3);
  box-shadow: 0 22px 44px -30px rgba(134, 103, 42, 0.45);
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  filter: blur(5px);
  transition:
    opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i) * 0.14s),
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i) * 0.14s),
    filter 1.1s ease calc(var(--i) * 0.14s);
}
.countdown.in .countdown-item { opacity: 1; transform: none; filter: blur(0); }

/* Bingkai dalam tipis */
.countdown-item::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(176, 138, 62, 0.15);
  border-radius: 3px;
  pointer-events: none;
}

/* Daun kecil di atas kotak */
.item-leaf {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 26px;
  height: 11px;
  translate: -50% 0;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, rgba(176, 138, 62, 0.25), rgba(176, 138, 62, 0.8));
  transform: rotate(-12deg);
  box-shadow: 0 2px 6px rgba(134, 103, 42, 0.2);
}

strong {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(2rem, 8.5vw, 3.4rem);
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 30%, #d9b765 50%, #a67f33 70%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: tick 0.6s cubic-bezier(0.22, 1, 0.36, 1), shine 9s linear infinite;
}

.item-label {
  display: block;
  margin-top: 8px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: clamp(0.58rem, 2.2vw, 0.72rem);
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--gold-deep);
}

/* Kotak detik diberi penekanan lembut */
.countdown-item:last-child {
  background: linear-gradient(180deg, #fffdf8, #f8f0dc);
  border-color: rgba(176, 138, 62, 0.5);
}
.countdown-item:last-child::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 6px;
  border: 1px solid var(--gold);
  opacity: 0;
  animation: pulse 2s ease-out infinite;
  pointer-events: none;
}

@keyframes tick { from { opacity: 0; transform: translateY(-14px); filter: blur(3px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes pulse { 0% { opacity: 0.55; transform: scale(1); } 100% { opacity: 0; transform: scale(1.12); } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .countdown-item { opacity: 1; transform: none; filter: none; }
}
</style>