<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  couple: { type: Object, required: true },
})

// Hanya animasi saat di-scroll (bukan data undangan)
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
    { threshold: 0.3 },
  )
  els.forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <footer ref="root" class="footer">
    <!-- Ranting daun di kedua sudut bawah -->
    <span v-for="side in ['l', 'r']" :key="side" :class="['foot-sprig', `foot-sprig-${side}`]" aria-hidden="true">
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

    <div class="footer-ornament reveal" style="--i: 0" aria-hidden="true">
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

    <p class="footer-names reveal" style="--i: 1">{{ couple.shortNames }}</p>
    <p class="footer-thanks reveal" style="--i: 2">Terima kasih atas doa dan kehadiran Anda.</p>
  </footer>
</template>

<style scoped>
.footer {
  --ink: #2a241c;
  --muted: #5b5144;
  --gold: #b08a3e;
  --gold-deep: #86672a;
  position: relative;
  overflow: hidden;
  padding: clamp(70px, 11vw, 110px) 24px clamp(60px, 9vw, 90px);
  text-align: center;
  color: var(--ink);
  background:
    radial-gradient(ellipse 55% 60% at 50% 100%, rgba(217, 194, 148, 0.28), transparent 70%),
    linear-gradient(180deg, #fdfcf9 0%, #f8f5ee 100%);
}
/* Garis emas tipis di tepi atas */
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

/* Ranting sudut bawah */
.foot-sprig { position: absolute; bottom: 0; width: clamp(70px, 14vw, 150px); color: var(--gold); pointer-events: none; opacity: 0.8; transform-origin: 0 100%; animation: sway 9s ease-in-out infinite; }
.foot-sprig svg { width: 100%; display: block; }
.foot-sprig-l { left: 0; transform: scaleY(-1); }
.foot-sprig-r { right: 0; transform: scale(-1, -1); animation-delay: -4s; }

/* Reveal saat di-scroll */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(6px);
  transition:
    opacity 1.3s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 0.18s),
    transform 1.3s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 0.18s),
    filter 1.3s ease calc(var(--i, 0) * 0.18s);
}
.reveal.in { opacity: 1; transform: none; filter: blur(0); }

.footer-ornament { position: relative; width: 150px; margin: 0 auto 20px; color: var(--gold); }
.footer-ornament svg { width: 100%; display: block; }
.footer-ornament .line { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 2s ease 0.4s; }
.footer-ornament.in .line { stroke-dashoffset: 0; }

.footer-names {
  position: relative;
  margin: 0;
  display: inline-block;
  padding: 0.04em 0.1em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: clamp(2.4rem, 8vw, 4rem);
  line-height: 1.1;
  letter-spacing: 0.03em;
  color: var(--gold-deep);
  background: linear-gradient(110deg, #6b4f1c 0%, #a67f33 28%, #d9b765 50%, #a67f33 72%, #6b4f1c 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 9s linear infinite;
}

.footer-thanks {
  position: relative;
  margin: 14px 0 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  line-height: 1.6;
  color: var(--muted);
}

@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }
@keyframes sway { 0%, 100% { rotate: -1.5deg; } 50% { rotate: 1.5deg; } }

@media (max-width: 720px) {
  .foot-sprig { opacity: 0.55; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .reveal { opacity: 1; transform: none; filter: none; }
  .footer-ornament .line { stroke-dashoffset: 0; }
}
</style>