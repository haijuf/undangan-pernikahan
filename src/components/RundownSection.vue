<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  items: { type: Array, required: true },
  concept: { type: Array, required: true },
})

// Hanya animasi saat di-scroll (bukan data undangan)
const root = ref(null)
let io

onMounted(() => {
  const els = root.value ? root.value.querySelectorAll('.reveal, .timeline') : []
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'))
    return
  }
  io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
    { threshold: 0.18 },
  )
  els.forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <section ref="root" class="section rundown-section">
    <!-- Definisi ornamen yang dipakai ulang -->
    <svg width="0" height="0" style="position: absolute" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="rd-ornament" viewBox="0 0 160 36">
          <g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
            <path d="M4 18H74" /><path d="M156 18H86" />
          </g>
          <g fill="currentColor" fill-opacity=".28">
            <path transform="translate(68 18) rotate(-155)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(68 18) rotate(155)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(54 18) rotate(-160)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(54 18) rotate(160)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(40 18) rotate(180)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(92 18) rotate(-25)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(92 18) rotate(25)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(106 18) rotate(-20)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(106 18) rotate(20)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
            <path transform="translate(120 18)" d="M0 0C3 -3.4 9 -3.4 14 0C9 3.4 3 3.4 0 0Z" />
          </g>
          <path d="M80 11L85 18L80 25L75 18Z" fill="currentColor" />
        </symbol>
        <symbol id="rd-sprig" viewBox="0 0 40 40">
          <path d="M8 34C12 24 18 14 30 6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          <g fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-width=".6">
            <path transform="translate(11 28) rotate(-100)" d="M0 0C3 -3.5 9 -3.5 13 0C9 3.5 3 3.5 0 0Z" />
            <path transform="translate(11 28) rotate(-20)" d="M0 0C3 -3.5 9 -3.5 13 0C9 3.5 3 3.5 0 0Z" />
            <path transform="translate(17 19) rotate(-110)" d="M0 0C3 -3.5 9 -3.5 13 0C9 3.5 3 3.5 0 0Z" />
            <path transform="translate(17 19) rotate(-10)" d="M0 0C3 -3.5 9 -3.5 13 0C9 3.5 3 3.5 0 0Z" />
            <path transform="translate(24 12) rotate(-120)" d="M0 0C3 -3.5 9 -3.5 12 0C9 3.5 3 3.5 0 0Z" />
            <path transform="translate(30 6) rotate(-45)" d="M0 0C3 -4 9 -4 14 0C9 4 3 4 0 0Z" />
          </g>
        </symbol>
      </defs>
    </svg>

    <!-- Rundown -->
    <div class="section-heading">
      <svg class="heading-ornament reveal" style="--i: 0" viewBox="0 0 160 36" aria-hidden="true"><use href="#rd-ornament" /></svg>
      <h2 class="reveal" style="--i: 1">Rundown Inti</h2>
      <p class="reveal" style="--i: 2">Tiga momen penuh arti</p>
    </div>

    <div class="rundown-grid timeline">
      <article
        v-for="(item, index) in items"
        :key="item.title"
        class="info-card rundown-card reveal"
        :style="{ '--i': index + 2 }"
      >
        <span class="card-number"><b>0{{ index + 1 }}</b></span>
        <h3>{{ item.title }}</h3>
        <span class="divider" aria-hidden="true"></span>
        <p>{{ item.description }}</p>
      </article>
    </div>

    <!-- Konsep -->
    <div class="section-heading concept-heading">
      <svg class="heading-ornament reveal" style="--i: 0" viewBox="0 0 160 36" aria-hidden="true"><use href="#rd-ornament" /></svg>
      <h2 class="reveal" style="--i: 1">Konsep &amp; Suasana</h2>
      <p class="reveal" style="--i: 2">Nuansa putih dan kesederhanaan</p>
    </div>

    <div class="concept-grid">
      <article
        v-for="(item, index) in concept"
        :key="item.title"
        class="concept-card reveal"
        :style="{ '--i': index + 1 }"
      >
        <span class="concept-icon" aria-hidden="true">
          <svg viewBox="0 0 40 40" :style="{ animationDelay: index * -1.6 + 's' }"><use href="#rd-sprig" /></svg>
        </span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.rundown-section {
  --ink: #2a241c;
  --muted: #5b5144;
  --gold: #b08a3e;
  --gold-deep: #86672a;
  position: relative;
  overflow: hidden;
  padding: clamp(80px, 12vw, 130px) 24px;
  text-align: center;
  color: var(--ink);
  background:
    radial-gradient(ellipse 60% 30% at 50% 0%, rgba(217, 194, 148, 0.18), transparent 70%),
    radial-gradient(ellipse 60% 30% at 50% 100%, rgba(217, 194, 148, 0.18), transparent 70%),
    linear-gradient(180deg, #f8f5ee 0%, #ffffff 30%, #fdfcf9 70%, #f8f5ee 100%);
}

/* Reveal saat di-scroll */
.reveal {
  opacity: 0;
  transform: translateY(34px);
  filter: blur(6px);
  transition:
    opacity 1.3s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 0.15s),
    transform 1.3s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 0.15s),
    filter 1.3s ease calc(var(--i, 0) * 0.15s);
}
.reveal.in { opacity: 1; transform: none; filter: blur(0); }

/* Judul */
.section-heading { margin-bottom: clamp(48px, 8vw, 76px); }
.concept-heading { margin-top: clamp(90px, 13vw, 140px); }
.heading-ornament { display: block; width: 150px; height: 34px; margin: 0 auto 16px; color: var(--gold); }

.section-heading h2 {
  margin: 0;
  display: inline-block;
  padding: 0.04em 0.08em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(2.2rem, 7vw, 3.6rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 28%, #d9b765 50%, #a67f33 72%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 9s linear infinite;
}
.section-heading p {
  margin: 10px 0 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  color: var(--muted);
}

/* Rundown: timeline + kartu */
.rundown-grid {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(40px, 5vw, 28px) clamp(18px, 3vw, 30px);
}
.rundown-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 8%;
  right: 8%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold) 15%, var(--gold) 85%, transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 2.2s cubic-bezier(0.65, 0, 0.35, 1) 0.2s;
}
.rundown-grid.in::before { transform: scaleX(1); }

.rundown-card {
  position: relative;
  padding: 50px clamp(20px, 3vw, 30px) clamp(30px, 4vw, 38px);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(176, 138, 62, 0.28);
  box-shadow: 0 30px 60px -36px rgba(134, 103, 42, 0.35);
}
.rundown-card::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(176, 138, 62, 0.14);
  border-radius: 3px;
  pointer-events: none;
}
.rundown-card.in { transition-property: opacity, filter, box-shadow, transform; }
.rundown-card.in:hover { transform: translateY(-8px); box-shadow: 0 40px 70px -34px rgba(134, 103, 42, 0.5); transition-duration: 0.6s; transition-delay: 0s; }

.card-number {
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% -50%;
  display: inline-block;
  padding: 6px 20px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(176, 138, 62, 0.5);
  box-shadow: 0 8px 20px -10px rgba(134, 103, 42, 0.5), inset 0 0 0 3px #fff, inset 0 0 0 4px rgba(176, 138, 62, 0.18);
}
.card-number b {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 1.2;
  letter-spacing: 0.08em;
  color: var(--gold-deep);
  background: linear-gradient(135deg, #6b4f1c, #c79f4a 55%, #6b4f1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rundown-card h3,
.concept-card h3 {
  margin: 0;
  display: inline-block;
  padding: 0.04em 0.06em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3.4vw, 1.9rem);
  line-height: 1.25;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 35%, #d9b765 50%, #a67f33 65%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 10s linear infinite;
}
.divider {
  display: block;
  width: 56px;
  height: 1px;
  margin: 16px auto;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}
.rundown-card p,
.concept-card p {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.08rem, 2.6vw, 1.22rem);
  line-height: 1.65;
  color: var(--muted);
}

/* Konsep */
.concept-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(18px, 3vw, 30px);
}
.concept-card {
  position: relative;
  padding: clamp(30px, 4vw, 40px) clamp(20px, 3vw, 28px);
  border-radius: 6px;
  background: linear-gradient(180deg, #ffffff, #fbf8f1);
  border: 1px solid rgba(176, 138, 62, 0.24);
  box-shadow: 0 24px 50px -38px rgba(134, 103, 42, 0.4);
}
.concept-card.in { transition-property: opacity, filter, box-shadow, transform; }
.concept-card.in:hover { transform: translateY(-8px); box-shadow: 0 36px 64px -36px rgba(134, 103, 42, 0.5); transition-duration: 0.6s; transition-delay: 0s; }

.concept-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  margin-bottom: 18px;
  border-radius: 50%;
  color: var(--gold);
  border: 1px solid rgba(176, 138, 62, 0.5);
  background: radial-gradient(circle at 30% 25%, #ffffff, #faf6ec 75%);
  box-shadow: inset 0 0 0 4px #fff, inset 0 0 0 5px rgba(176, 138, 62, 0.2);
}
.concept-icon svg { width: 36px; height: 36px; transform-origin: 20% 90%; animation: sway 7s ease-in-out infinite; }
.concept-card h3 { font-size: clamp(1.35rem, 3vw, 1.65rem); }
.concept-card h3 + p { margin-top: 12px; }

@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes sway { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }

@media (max-width: 760px) {
  .rundown-grid, .concept-grid { grid-template-columns: 1fr; }
  .rundown-grid { gap: 48px; }
  .rundown-grid::before { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .reveal { opacity: 1; transform: none; filter: none; }
  .rundown-grid::before { transform: scaleX(1); }
}
</style>