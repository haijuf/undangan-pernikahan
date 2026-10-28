<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  couple: { type: Object, required: true },
  story: { type: Object, required: true },
  prewedding: { type: Array, default: () => [] },
})

// Hanya dekorasi (bukan data undangan)
const root = ref(null)
let io

onMounted(() => {
  const els = root.value ? root.value.querySelectorAll('.reveal') : []
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
    { threshold: 0.2 },
  )
  els.forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())

// Karangan daun (laurel) melingkari bingkai inisial, terbuka di bagian atas
const R = 88
const rad = (d) => (d * Math.PI) / 180
const pt = (d) => [100 + R * Math.cos(rad(d)), 100 + R * Math.sin(rad(d))]
const branch = (from, to, dir) => {
  const [x1, y1] = pt(from)
  const [x2, y2] = pt(to)
  const stem = `M${x1.toFixed(1)} ${y1.toFixed(1)}A${R} ${R} 0 0 ${dir > 0 ? 1 : 0} ${x2.toFixed(1)} ${y2.toFixed(1)}`
  const leaves = []
  for (let i = 0; i < 7; i++) {
    const th = from + ((to - from) * i) / 6
    const [x, y] = pt(th)
    const tan = th + dir * 90
    const s = 1 - i * 0.04
    leaves.push({ t: `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(tan - 40).toFixed(0)}) scale(${s})`, k: i * 2 })
    leaves.push({ t: `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(tan + 40).toFixed(0)}) scale(${s})`, k: i * 2 + 1 })
  }
  return { stem, leaves }
}
const wreath = [branch(100, 238, 1), branch(80, -58, -1)]
</script>

<template>
  <section id="mempelai" ref="root" class="section couple-section">
    <div class="section-heading">
      <div class="heading-ornament reveal" style="--i: 0" aria-hidden="true">
        <svg viewBox="0 0 160 36" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
          <path class="line" pathLength="1" d="M4 18H74" />
          <path class="line" pathLength="1" d="M156 18H86" />
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
          <path d="M80 11L85 18L80 25L75 18Z" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <h2 class="reveal" style="--i: 1">Kedua Mempelai</h2>
      <p class="reveal" style="--i: 2">{{ story.title }}</p>
    </div>

    <div class="couple-grid">
      <template v-for="(person, idx) in [couple.groom, couple.bride]" :key="person.name">
        <article :class="['person-card', 'reveal', idx ? 'from-right' : 'from-left']" style="--i: 2">
          <span class="card-leaf card-leaf-l" aria-hidden="true"></span>
          <span class="card-leaf card-leaf-r" aria-hidden="true"></span>

          <div class="portrait" aria-hidden="true">
            <svg class="wreath" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
              <template v-for="(b, bi) in wreath" :key="bi">
                <path class="ws" pathLength="1" :d="b.stem" />
                <g v-for="(lf, li) in b.leaves" :key="li" :transform="lf.t">
                  <path class="wl" :style="{ '--k': lf.k }" fill="currentColor" fill-opacity=".22" d="M0 0C4 -4.5 12 -4.5 18 0C12 4.5 4 4.5 0 0Z" />
                </g>
              </template>
            </svg>
            <svg class="ring-dash" viewBox="0 0 100 100" fill="none" stroke="currentColor"><circle cx="50" cy="50" r="49" stroke-width=".5" stroke-dasharray="1.5 3" /></svg>
          </div>
          <div class="initial-frame">{{ person.initial }}</div>

          <h3>{{ person.name }}</h3>
          <p class="person-role">{{ person.role }}</p>
          <span class="divider" aria-hidden="true"></span>
          <p class="person-parents">{{ person.parents }}</p>
        </article>
        <span v-if="idx === 0" class="couple-amp reveal" style="--i: 3" aria-hidden="true">&amp;</span>
      </template>
    </div>

    <!-- Galeri prewedding: grid 2 kolom (2x2) -->
    <div class="prewedding-gallery">
      <figure
        v-for="(photo, i) in prewedding"
        :key="photo.src"
        class="prewedding-photo reveal"
        :style="{ '--i': i + 1 }"
      >
        <img :src="photo.src" :alt="photo.alt" loading="lazy" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.couple-section {
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
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(217, 194, 148, 0.2), transparent 70%),
    linear-gradient(180deg, #f8f5ee 0%, #ffffff 40%, #fdfcf9 100%);
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
.reveal.from-left { transform: translateX(-56px); }
.reveal.from-right { transform: translateX(56px); }
.reveal.in { opacity: 1; transform: none; filter: blur(0); }

/* Judul */
.section-heading { margin-bottom: clamp(44px, 8vw, 72px); }
.heading-ornament { width: 150px; margin: 0 auto 16px; color: var(--gold); }
.heading-ornament svg { width: 100%; display: block; }
.heading-ornament .line { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 2s ease 0.4s; }
.heading-ornament.in .line { stroke-dashoffset: 0; }

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

/* Grid */
.couple-grid {
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: clamp(16px, 3vw, 36px);
}

.couple-amp {
  display: inline-block;
  padding: 0 0.1em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 1;
  color: var(--gold);
  background: linear-gradient(135deg, #b08a3e 0%, #e6c987 50%, #b08a3e 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.couple-amp.in { animation: floaty 6s ease-in-out 1.5s infinite, shine 7s linear infinite; }

/* Kartu */
.person-card {
  position: relative;
  padding: clamp(34px, 5vw, 48px) clamp(22px, 4vw, 36px) clamp(32px, 5vw, 42px);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(176, 138, 62, 0.28);
  box-shadow: 0 30px 60px -36px rgba(134, 103, 42, 0.35);
}
.person-card::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(176, 138, 62, 0.14);
  border-radius: 3px;
  pointer-events: none;
}
.person-card.in { transition-property: opacity, filter, box-shadow, transform; }
.person-card.in:hover { transform: translateY(-8px); box-shadow: 0 40px 70px -34px rgba(134, 103, 42, 0.5); transition-duration: 0.6s; transition-delay: 0s; }

/* Daun kecil di sisi kartu */
.card-leaf {
  position: absolute;
  top: 18px;
  width: 22px;
  height: 9px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, rgba(176, 138, 62, 0.15), rgba(176, 138, 62, 0.55));
}
.card-leaf-l { left: 18px; transform: rotate(-20deg); }
.card-leaf-r { right: 18px; transform: scaleX(-1) rotate(-20deg); }

/* Potret inisial + karangan daun */
.portrait { position: relative; width: 220px; height: 220px; margin: 0 auto -185px; color: var(--gold); pointer-events: none; }
.wreath, .ring-dash { position: absolute; inset: 0; width: 100%; height: 100%; }
.ring-dash { inset: 30px; width: calc(100% - 60px); height: calc(100% - 60px); animation: spin 60s linear infinite; }
.ws { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 2.2s cubic-bezier(0.65, 0, 0.35, 1) 0.5s; }
.in .ws { stroke-dashoffset: 0; }
.wl { opacity: 0; transform-box: fill-box; transform-origin: 0 50%; transform: scale(0.2); transition: opacity 0.9s ease calc(0.9s + var(--k) * 0.07s), transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) calc(0.9s + var(--k) * 0.07s); }
.in .wl { opacity: 1; transform: scale(1); }

.initial-frame {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 28px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: 4.6rem;
  line-height: 1;
  background: radial-gradient(circle at 30% 25%, #ffffff, #faf6ec 70%);
  border: 1px solid rgba(176, 138, 62, 0.55);
  box-shadow: inset 0 0 0 5px #fff, inset 0 0 0 6px rgba(176, 138, 62, 0.25), 0 14px 30px -14px rgba(134, 103, 42, 0.45);
  color: var(--gold-deep);
  -webkit-text-fill-color: transparent;
  background-clip: padding-box;
}
.initial-frame { background-image: linear-gradient(135deg, #6b4f1c, #c79f4a 55%, #6b4f1c), radial-gradient(circle at 30% 25%, #ffffff, #faf6ec 70%); background-clip: text, padding-box; -webkit-background-clip: text, padding-box; }

.person-card h3 {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 4vw, 2.1rem);
  line-height: 1.2;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 35%, #d9b765 50%, #a67f33 65%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 10s linear infinite;
}
.person-role {
  margin: 10px 0 0;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-deep);
}
.divider {
  display: block;
  width: 56px;
  height: 1px;
  margin: 20px auto;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}
.person-parents {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.05rem, 2.6vw, 1.2rem);
  line-height: 1.65;
  color: var(--muted);
}

/* Galeri grid 2x2 */
.prewedding-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(8px, 2vw, 22px);
  max-width: 980px;
  margin: clamp(56px, 8vw, 84px) auto 0;
}

.prewedding-photo {
  position: relative;
  margin: 0;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(176, 138, 62, 0.35);
  border-radius: 6px;
  background: linear-gradient(135deg, #f8f5ee, #efe6d2);
  box-shadow: 0 24px 48px -30px rgba(134, 103, 42, 0.55);
  cursor: pointer;
}

.prewedding-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s ease;
}

/* Bingkai tipis di dalam foto */
.prewedding-photo::after {
  content: '';
  position: absolute;
  inset: 8px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  pointer-events: none;
  transition: inset 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.6s ease;
}

/* Overlay gelap tipis saat hover */
.prewedding-photo::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, transparent 55%, rgba(42, 36, 28, 0.35));
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

/* Hover */
.prewedding-photo:hover img {
  transform: scale(1.08);
  filter: saturate(1.1) brightness(1.03);
}
.prewedding-photo:hover::after {
  inset: 14px;
  border-color: rgba(255, 255, 255, 0.95);
}
.prewedding-photo:hover::before {
  opacity: 1;
}

@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 760px) {
  .couple-grid { grid-template-columns: 1fr; }
  .couple-amp { margin: -4px 0; }
  .reveal.from-left, .reveal.from-right { transform: translateY(34px); }
  .prewedding-gallery { margin-top: 56px; gap: 8px; }
  .prewedding-photo { border-radius: 4px; }
  .prewedding-photo::after { inset: 5px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .reveal { opacity: 1; transform: none; filter: none; }
  .ws, .heading-ornament .line { stroke-dashoffset: 0; }
  .wl { opacity: 1; transform: none; }
}
</style>