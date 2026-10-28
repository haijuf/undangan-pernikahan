<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  event: { type: Object, required: true },
  venue: { type: Object, required: true },
})

// Hanya dekorasi / animasi (bukan data undangan)
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
    { threshold: 0.18 },
  )
  els.forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <section ref="root" class="section event-section">
    <!-- Ranting daun di sisi atas -->
    <span class="side-sprig side-sprig-l" aria-hidden="true">
      <svg viewBox="0 0 100 160" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
        <path d="M6 0C14 40 20 90 50 150" />
        <g fill="currentColor" fill-opacity=".2">
          <path transform="translate(10 24) rotate(20)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(10 24) rotate(150)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(15 56) rotate(15)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(15 56) rotate(145)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(24 90) rotate(25)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(24 90) rotate(150)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(38 122) rotate(40)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
          <path transform="translate(38 122) rotate(155)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
        </g>
      </svg>
    </span>
    <span class="side-sprig side-sprig-r" aria-hidden="true">
      <svg viewBox="0 0 100 160" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round">
        <path d="M6 0C14 40 20 90 50 150" />
        <g fill="currentColor" fill-opacity=".2">
          <path transform="translate(10 24) rotate(20)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(10 24) rotate(150)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(15 56) rotate(15)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(15 56) rotate(145)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
          <path transform="translate(24 90) rotate(25)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(24 90) rotate(150)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(38 122) rotate(40)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
          <path transform="translate(38 122) rotate(155)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
        </g>
      </svg>
    </span>

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
      <h2 class="reveal" style="--i: 1">Informasi Acara</h2>
      <p class="reveal" style="--i: 2">Akad hingga makan bersama</p>
    </div>

    <div class="event-grid">
      <article
        v-for="(item, idx) in [event.akad, event.reception]"
        :key="item.title"
        :class="['info-card', 'event-card', 'reveal', idx ? 'from-right' : 'from-left']"
        style="--i: 2"
      >
        <span class="event-icon" aria-hidden="true">
          <svg v-if="idx === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="13" r="5.5" /><circle cx="15" cy="13" r="5.5" /><path d="M12 3l1.2 2L12 7l-1.2-2z" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 3v5a2 2 0 004 0V3M7 10v11" /><path d="M18 3c-2.2 2-2.2 6 0 8v10M18 3c2.2 2 2.2 6 0 8" />
          </svg>
        </span>
        <h3>{{ item.title }}</h3>
        <span class="divider" aria-hidden="true"></span>
        <p class="event-date"><strong>{{ item.date }}</strong></p>
        <p class="event-time">{{ item.time }}</p>
        <p v-if="item.venueName" class="event-location">{{ item.venueName }}</p>
        <a v-if="item.mapUrl" class="event-map-link" :href="item.mapUrl" target="_blank" rel="noreferrer">Lihat lokasi makan bersama &#8599;</a>
      </article>
    </div>

    <div class="venue-card reveal" style="--i: 1">
      <p class="eyebrow">Lokasi Akad Nikah</p>
      <h3>{{ venue.name }}</h3>
      <p class="venue-address">{{ venue.address }}</p>
      <a class="gold-button inline-button" :href="venue.mapUrl" target="_blank" rel="noreferrer">Buka Google Maps &#8599;</a>
    </div>

    <div class="map-frame reveal" style="--i: 2">
      <iframe title="Peta lokasi akad nikah" :src="venue.embedUrl" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>

<style scoped>
.event-section {
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
    radial-gradient(ellipse 55% 35% at 50% 100%, rgba(217, 194, 148, 0.2), transparent 70%),
    linear-gradient(180deg, #fdfcf9 0%, #ffffff 45%, #f8f5ee 100%);
}

/* Ranting samping */
.side-sprig { position: absolute; top: 0; width: clamp(70px, 14vw, 150px); color: var(--gold); pointer-events: none; opacity: 0.8; transform-origin: 0 0; animation: sway 9s ease-in-out infinite; }
.side-sprig svg { width: 100%; display: block; }
.side-sprig-l { left: 0; }
.side-sprig-r { right: 0; transform: scaleX(-1); animation-delay: -4s; }

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
.section-heading { position: relative; margin-bottom: clamp(44px, 8vw, 72px); }
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

/* Kartu acara */
.event-grid {
  position: relative;
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(18px, 3vw, 32px);
}
.event-card {
  position: relative;
  padding: clamp(34px, 5vw, 46px) clamp(22px, 4vw, 34px) clamp(30px, 5vw, 40px);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(176, 138, 62, 0.28);
  box-shadow: 0 30px 60px -36px rgba(134, 103, 42, 0.35);
}
.event-card::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(176, 138, 62, 0.14);
  border-radius: 3px;
  pointer-events: none;
}
.event-card.in { transition-property: opacity, filter, box-shadow, transform; }
.event-card.in:hover { transform: translateY(-8px); box-shadow: 0 40px 70px -34px rgba(134, 103, 42, 0.5); transition-duration: 0.6s; transition-delay: 0s; }

.event-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 18px;
  border-radius: 50%;
  color: var(--gold);
  border: 1px solid rgba(176, 138, 62, 0.5);
  background: radial-gradient(circle at 30% 25%, #ffffff, #faf6ec 75%);
  box-shadow: inset 0 0 0 4px #fff, inset 0 0 0 5px rgba(176, 138, 62, 0.2);
}
.event-icon svg { width: 28px; height: 28px; }
.event-icon::before,
.event-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 8px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, rgba(176, 138, 62, 0.15), rgba(176, 138, 62, 0.55));
}
.event-icon::before { left: -30px; transform: translateY(-50%) rotate(-12deg) scaleX(-1); }
.event-icon::after { right: -30px; transform: translateY(-50%) rotate(12deg); }

.event-card h3,
.venue-card h3 {
  margin: 0;
  display: inline-block;
  padding: 0.04em 0.06em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  line-height: 1.2;
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
  margin: 18px auto;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}
.event-card p { margin: 0; }
.event-date { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 0.95rem; letter-spacing: 0.04em; color: var(--ink); }
.event-date strong { font-weight: 600; }
.event-time { margin-top: 6px !important; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 0.88rem; letter-spacing: 0.1em; color: var(--gold-deep); font-weight: 600; }
.event-location { margin-top: 14px !important; font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; font-size: 1.2rem; line-height: 1.5; color: var(--muted); }

.event-map-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 22px;
  border: 1px solid rgba(176, 138, 62, 0.55);
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gold-deep);
  transition: background 0.5s ease, color 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}
.event-map-link:hover { background: var(--gold); color: #fff; transform: translateY(-2px); box-shadow: 0 12px 24px -12px rgba(134, 103, 42, 0.6); }
.event-map-link:focus-visible,
.gold-button:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

/* Kartu lokasi akad */
.venue-card {
  position: relative;
  max-width: 920px;
  margin: clamp(26px, 4vw, 40px) auto 0;
  padding: clamp(34px, 5vw, 50px) clamp(22px, 5vw, 48px);
  border-radius: 6px;
  background: linear-gradient(180deg, #ffffff, #fbf8f1);
  border: 1px solid rgba(176, 138, 62, 0.3);
  box-shadow: 0 30px 60px -38px rgba(134, 103, 42, 0.4);
}
.venue-card::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(176, 138, 62, 0.14);
  border-radius: 3px;
  pointer-events: none;
}
.eyebrow {
  margin: 0 0 14px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: var(--gold-deep);
}
.venue-address {
  max-width: 32em;
  margin: 14px auto 26px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.1rem, 2.8vw, 1.28rem);
  line-height: 1.65;
  color: var(--muted);
}

.gold-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 14px 34px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 1px 2px rgba(80, 58, 18, 0.35);
  background: linear-gradient(135deg, #8f6c27, #c9a24f 50%, #8f6c27);
  box-shadow: 0 16px 30px -14px rgba(134, 103, 42, 0.7);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}
.gold-button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.55) 50%, transparent 65%);
  transform: translateX(-120%);
  transition: transform 0.9s ease;
}
.gold-button:hover { transform: translateY(-3px); box-shadow: 0 22px 36px -14px rgba(134, 103, 42, 0.8); }
.gold-button:hover::after { transform: translateX(120%); }

/* Peta */
.map-frame {
  position: relative;
  max-width: 920px;
  margin: clamp(26px, 4vw, 40px) auto 0;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid rgba(176, 138, 62, 0.35);
  box-shadow: 0 30px 60px -36px rgba(134, 103, 42, 0.4);
}
.map-frame::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(176, 138, 62, 0.16);
  border-radius: 5px;
  pointer-events: none;
}
.map-frame iframe {
  display: block;
  width: 100%;
  height: clamp(280px, 52vw, 420px);
  border: 0;
  border-radius: 4px;
  filter: saturate(0.85) sepia(0.08);
}

@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes sway { 0%, 100% { rotate: -1.5deg; } 50% { rotate: 1.5deg; } }

@media (max-width: 720px) {
  .event-grid { grid-template-columns: 1fr; }
  .reveal.from-left, .reveal.from-right { transform: translateY(34px); }
  .side-sprig { opacity: 0.55; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .reveal { opacity: 1; transform: none; filter: none; }
  .heading-ornament .line { stroke-dashoffset: 0; }
}
</style>