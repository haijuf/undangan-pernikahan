<script setup>
defineProps({
  couple: { type: Object, required: true },
  story: { type: Object, required: true },
})

// Hanya dekorasi (bukan data undangan)
const corners = ['tl', 'tr', 'bl', 'br']
const petals = [
  { l: '8%',  s: 14, t: 19, d: -2,  x: 60 },
  { l: '22%', s: 10, t: 24, d: -11, x: -40 },
  { l: '38%', s: 12, t: 21, d: -6,  x: 50 },
  { l: '56%', s: 9,  t: 26, d: -15, x: -55 },
  { l: '71%', s: 13, t: 20, d: -9,  x: 45 },
  { l: '86%', s: 11, t: 23, d: -4,  x: -50 },
]
</script>

<template>
  <section class="hero section">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-frame" aria-hidden="true"></div>

    <!-- Ornamen sudut -->
    <span v-for="c in corners" :key="c" :class="['corner', `corner-${c}`]" aria-hidden="true">
      <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
        <path class="draw" pathLength="1" d="M2 158C4 82 52 30 158 2" />
        <path class="draw d2" pathLength="1" d="M2 120C28 112 44 94 50 68" />
        <path class="draw d3" pathLength="1" d="M36 158C46 124 70 98 108 84" />
        <g class="leaves" fill="currentColor" fill-opacity=".14">
          <path d="M24 96C42 92 52 78 54 60C36 64 26 78 24 96Z" />
          <path d="M70 120C88 118 100 106 104 88C86 92 74 104 70 120Z" />
          <path d="M62 44C78 46 90 38 96 24C80 24 68 32 62 44Z" />
          <path d="M14 140C24 134 34 134 42 140C34 148 22 150 14 140Z" />
        </g>
        <g class="dots" fill="currentColor" stroke="none">
          <circle cx="54" cy="58" r="2.2" /><circle cx="104" cy="86" r="2" />
          <circle cx="96" cy="23" r="1.8" /><circle cx="158" cy="2" r="2.2" /><circle cx="2" cy="158" r="2.2" />
        </g>
        <path class="draw d3" pathLength="1" d="M18 66C22 48 30 32 46 16" />
        <g class="leaves sprig" fill="currentColor" fill-opacity=".22">
          <path transform="translate(21 54) rotate(-112)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(21 54) rotate(-30)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(28 38) rotate(-122)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(28 38) rotate(-22)" d="M0 0C5 -5 15 -5 22 0C15 5 5 5 0 0Z" />
          <path transform="translate(38 25) rotate(-135)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
          <path transform="translate(38 25) rotate(-10)" d="M0 0C4 -4 12 -4 18 0C12 4 4 4 0 0Z" />
          <path transform="translate(46 16) rotate(-55)" d="M0 0C5 -5 15 -5 24 0C15 5 5 5 0 0Z" />
        </g>
      </svg>
    </span>

    <!-- Kelopak melayang -->
    <span
      v-for="(p, i) in petals"
      :key="i"
      class="hero-petal"
      :style="{ '--l': p.l, '--s': p.s + 'px', '--t': p.t + 's', '--dl': p.d + 's', '--x': p.x + 'px' }"
      aria-hidden="true"
    ></span>

    <div class="hero-content">
      <div class="hero-ornament reveal" style="--i: 0" aria-hidden="true">
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

      <p class="eyebrow reveal" style="--i: 1">Undangan Pernikahan</p>

      <h1 class="reveal" style="--i: 2">
        <span class="name">{{ couple.groom.shortName }}</span>
        <em>&amp;</em>
        <span class="name">{{ couple.bride.shortName }}</span>
      </h1>

      <p class="hero-date reveal" style="--i: 3">{{ couple.date }}</p>

      <p class="hero-quote reveal" style="--i: 4">
        {{ story.quote }} <small>&#8212; {{ story.quoteSource }}</small>
      </p>

      <a class="scroll-link reveal" style="--i: 5" href="#mempelai" aria-label="Lihat detail mempelai">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10l6 6 6-6" /></svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

.hero {
  --ink: #2a241c;
  --muted: #5b5144;
  --gold: #b08a3e;
  --gold-deep: #86672a;
  --gold-soft: #d9c294;
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(72px, 12vw, 120px) 24px;
  overflow: hidden;
  isolation: isolate;
  text-align: center;
  color: var(--ink);
  background: linear-gradient(180deg, #ffffff 0%, #fdfcf9 55%, #f8f5ee 100%);
}

/* Cahaya lembut di belakang konten */
.hero-glow {
  position: absolute;
  top: 46%;
  left: 50%;
  width: min(900px, 130vw);
  aspect-ratio: 1;
  translate: -50% -50%;
  z-index: -1;
  background: radial-gradient(circle, rgba(217, 194, 148, 0.28) 0%, rgba(217, 194, 148, 0.1) 38%, transparent 68%);
  animation: breathe 9s ease-in-out infinite;
}

/* Bingkai tipis */
.hero-frame {
  position: absolute;
  inset: clamp(14px, 3vw, 34px);
  border: 1px solid rgba(180, 147, 88, 0.3);
  border-radius: 4px;
  z-index: -1;
  animation: frame-in 1.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero-frame::after {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(180, 147, 88, 0.14);
  border-radius: 2px;
}

/* Ornamen sudut */
.corner {
  position: absolute;
  width: clamp(110px, 24vw, 230px);
  color: var(--gold);
  pointer-events: none;
  z-index: -1;
}
.corner svg { width: 100%; display: block; transform-origin: 0 0; animation: sway 9s ease-in-out infinite; }
.corner-tl { top: 0; left: 0; }
.corner-tr { top: 0; right: 0; transform: scaleX(-1); }
.corner-bl { bottom: 0; left: 0; transform: scaleY(-1); }
.corner-br { bottom: 0; right: 0; transform: scale(-1, -1); }
.corner-tr svg { animation-delay: -2s; }
.corner-bl svg { animation-delay: -4s; }
.corner-br svg { animation-delay: -6s; }

.draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw 3.2s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards; }
.draw.d2 { animation-delay: 0.9s; }
.draw.d3 { animation-delay: 1.3s; }
.leaves, .bloom { opacity: 0; transform-box: fill-box; transform-origin: center; animation: bud 1.6s cubic-bezier(0.22, 1, 0.36, 1) 2s forwards; }
.dots { opacity: 0; animation: fade 1.4s ease 2.4s forwards; }

/* Kelopak melayang */
.hero-petal {
  position: absolute;
  top: -5%;
  left: var(--l);
  width: var(--s);
  height: calc(var(--s) * 1.45);
  z-index: -1;
  border-radius: 80% 0 80% 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(222, 198, 150, 0.7));
  box-shadow: 0 2px 8px rgba(180, 147, 88, 0.2);
  opacity: 0;
  animation: drift var(--t) linear var(--dl) infinite;
  pointer-events: none;
}

/* Konten */
.hero-content { position: relative; max-width: 760px; width: 100%; }

.reveal {
  opacity: 0;
  animation: rise 1.5s cubic-bezier(0.22, 1, 0.36, 1) calc(0.5s + var(--i) * 0.2s) forwards;
}

.hero-ornament { width: 150px; margin: 0 auto 18px; color: var(--gold); }
.hero-ornament svg { width: 100%; display: block; }
.hero-ornament .line { stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw 2s ease 1s forwards; }

.eyebrow {
  margin: 0 0 22px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: var(--gold-deep);
}

h1 {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.05em 0.25em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
  font-size: clamp(2.9rem, 10vw, 6.2rem);
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: var(--ink);
}
.name {
  display: inline-block;
  padding: 0.04em 0.06em;
  font-weight: 600;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 28%, #d9b765 50%, #a67f33 72%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 9s linear infinite;
}
h1 em {
  display: inline-block;
  padding: 0 0.1em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 1.1em;
  line-height: 1;
  color: var(--gold);
  background: linear-gradient(135deg, #b08a3e 0%, #e6c987 50%, #b08a3e 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: amp 1.8s cubic-bezier(0.22, 1, 0.36, 1) 1.1s both, floaty 6s ease-in-out 3s infinite, shine 7s linear 2s infinite;
}

.hero-date {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin: 26px 0 0;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: clamp(0.82rem, 2.4vw, 0.98rem);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink);
}
.hero-date::before,
.hero-date::after {
  content: '';
  width: clamp(24px, 8vw, 56px);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
}
.hero-date::after { transform: scaleX(-1); }

.hero-quote {
  max-width: 34em;
  margin: 30px auto 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.05rem, 3vw, 1.3rem);
  line-height: 1.7;
  color: var(--muted);
}
.hero-quote small {
  display: block;
  margin-top: 8px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-style: normal;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-deep);
}

.scroll-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-top: 44px;
  border: 1px solid rgba(180, 147, 88, 0.5);
  border-radius: 50%;
  color: var(--gold);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.7);
  transition: background 0.5s ease, color 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.scroll-link svg { width: 22px; height: 22px; animation: nudge 2.4s ease-in-out infinite; }
.scroll-link::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  animation: ping 2.8s ease-out infinite;
}
.scroll-link:hover { background: var(--gold); color: #fff; transform: translateY(3px); }
.scroll-link:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

/* Keyframes */
@keyframes rise { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes bud { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
@keyframes fade { to { opacity: 0.8; } }
@keyframes sway { 0%, 100% { transform: rotate(-1.8deg); } 50% { transform: rotate(1.8deg); } }
@keyframes breathe { 0%, 100% { opacity: 0.65; scale: 1; } 50% { opacity: 1; scale: 1.08; } }
@keyframes frame-in { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: none; } }
@keyframes amp { from { opacity: 0; transform: scale(0.5) rotate(-10deg); filter: blur(6px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes nudge { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(3px); } }
@keyframes ping { 0% { transform: scale(1); opacity: 0.6; } 80%, 100% { transform: scale(1.5); opacity: 0; } }
@keyframes drift {
  0%   { transform: translate3d(0, -5vh, 0) rotate(0deg); opacity: 0; }
  10%  { opacity: 0.9; }
  50%  { transform: translate3d(calc(var(--x) * 0.5), 55vh, 0) rotate(220deg); }
  100% { transform: translate3d(var(--x), 108vh, 0) rotate(480deg); opacity: 0; }
}

@media (max-width: 480px) {
  .eyebrow { letter-spacing: 0.3em; }
  .hero-date { letter-spacing: 0.14em; gap: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-delay: 0s !important; animation-iteration-count: 1 !important; }
  .reveal, .leaves, .bloom { opacity: 1; }
  .dots { opacity: 0.8; }
  .draw, .hero-ornament .line { stroke-dashoffset: 0; }
  .hero-petal { display: none; }
}
</style>