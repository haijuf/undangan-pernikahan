<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  initialWishes: { type: Array, required: true },
})

const wishes = ref([])
const form = ref({ name: '', message: '' })
const submitted = ref(false)
const storageKey = 'undangan-wishes'

// Hanya animasi saat di-scroll (bukan data undangan)
const root = ref(null)
let io

onMounted(() => {
  const saved = window.localStorage.getItem(storageKey)
  wishes.value = saved ? JSON.parse(saved) : [...props.initialWishes]

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
    { threshold: 0.15 },
  )
  els.forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())

function submitWish() {
  if (!form.value.name.trim() || !form.value.message.trim()) return
  wishes.value.unshift({
    id: Date.now(),
    name: form.value.name.trim(),
    message: form.value.message.trim(),
    createdAt: new Date().toISOString(),
  })
  window.localStorage.setItem(storageKey, JSON.stringify(wishes.value))
  form.value = { name: '', message: '' }
  submitted.value = true
  window.setTimeout(() => { submitted.value = false }, 3000)
}
</script>

<template>
  <section ref="root" class="section wishes-section">
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
      <h2 class="reveal" style="--i: 1">Doa &amp; Ucapan</h2>
      <p class="reveal" style="--i: 2">Kirimkan doa terbaik untuk kami</p>
    </div>

    <form class="wish-form reveal" style="--i: 2" @submit.prevent="submitWish">
      <span class="form-leaf form-leaf-l" aria-hidden="true"></span>
      <span class="form-leaf form-leaf-r" aria-hidden="true"></span>
      <input v-model="form.name" type="text" placeholder="Nama Anda" required>
      <textarea v-model="form.message" rows="3" placeholder="Tuliskan doa dan ucapan..." required></textarea>
      <button class="gold-button" type="submit">Kirim Ucapan</button>
      <Transition name="pop">
        <small v-if="submitted" class="success-message">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          Ucapan berhasil disimpan di perangkat ini.
        </small>
      </Transition>
    </form>

    <div class="wish-list reveal" style="--i: 3">
      <TransitionGroup name="wish">
        <article
          v-for="(wish, idx) in wishes"
          :key="wish.id"
          class="wish-card"
          :style="{ transitionDelay: Math.min(idx, 6) * 0.08 + 's' }"
        >
          <span class="wish-avatar" aria-hidden="true">{{ wish.name.trim().charAt(0).toUpperCase() }}</span>
          <div class="wish-body">
            <strong>{{ wish.name }}</strong>
            <p>{{ wish.message }}</p>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.wishes-section {
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
    radial-gradient(ellipse 60% 35% at 50% 0%, rgba(217, 194, 148, 0.2), transparent 70%),
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
.reveal.in { opacity: 1; transform: none; filter: blur(0); }

/* Judul */
.section-heading { margin-bottom: clamp(40px, 7vw, 64px); }
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

/* Form */
.wish-form {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
  padding: clamp(34px, 5vw, 46px) clamp(20px, 5vw, 38px) clamp(28px, 4vw, 38px);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(176, 138, 62, 0.3);
  box-shadow: 0 30px 60px -36px rgba(134, 103, 42, 0.4);
}
.wish-form::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(176, 138, 62, 0.14);
  border-radius: 3px;
  pointer-events: none;
}
.form-leaf {
  position: absolute;
  top: 18px;
  width: 22px;
  height: 9px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, rgba(176, 138, 62, 0.15), rgba(176, 138, 62, 0.55));
  pointer-events: none;
}
.form-leaf-l { left: 18px; transform: rotate(-20deg); }
.form-leaf-r { right: 18px; transform: scaleX(-1) rotate(-20deg); }

.wish-form input,
.wish-form textarea {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink);
  background: #fdfcf9;
  border: 1px solid rgba(176, 138, 62, 0.3);
  border-radius: 4px;
  outline: none;
  resize: none;
  transition: border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
}
.wish-form input::placeholder,
.wish-form textarea::placeholder { color: #9a8f80; }
.wish-form input:focus,
.wish-form textarea:focus {
  background: #fff;
  border-color: var(--gold);
  box-shadow: 0 0 0 4px rgba(176, 138, 62, 0.15), 0 10px 24px -16px rgba(134, 103, 42, 0.5);
}

.gold-button {
  position: relative;
  justify-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: 200px;
  margin-top: 6px;
  padding: 14px 36px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
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
.gold-button:active { transform: translateY(0) scale(0.98); }
.gold-button:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

.success-message {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--gold-deep);
}
.success-message svg { width: 18px; height: 18px; padding: 3px; box-sizing: border-box; border-radius: 50%; color: #fff; background: var(--gold); }
.pop-enter-active, .pop-leave-active { transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(8px); }

/* Daftar ucapan */
.wish-list {
  max-width: 600px;
  max-height: 520px;
  margin: clamp(34px, 6vw, 52px) auto 0;
  padding: 6px 10px 28px 4px;
  display: grid;
  gap: 14px;
  overflow-y: auto;
  text-align: left;
  scrollbar-width: thin;
  scrollbar-color: var(--gold) transparent;
  -webkit-mask-image: linear-gradient(180deg, #000 88%, transparent);
  mask-image: linear-gradient(180deg, #000 88%, transparent);
}
.wish-list::-webkit-scrollbar { width: 6px; }
.wish-list::-webkit-scrollbar-thumb { background: rgba(176, 138, 62, 0.6); border-radius: 3px; }

.wish-card {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 22px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(176, 138, 62, 0.22);
  box-shadow: 0 18px 38px -30px rgba(134, 103, 42, 0.45);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}
.wish-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  bottom: 18px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, transparent, var(--gold), transparent);
}
.wish-card:hover { box-shadow: 0 24px 44px -28px rgba(134, 103, 42, 0.6); }

.wish-avatar {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--gold-deep);
  border: 1px solid rgba(176, 138, 62, 0.5);
  background: radial-gradient(circle at 30% 25%, #ffffff, #faf6ec 75%);
  box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 4px rgba(176, 138, 62, 0.2);
}
.wish-body { min-width: 0; }
.wish-body strong {
  display: block;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--gold-deep);
  overflow-wrap: anywhere;
}
.wish-body p {
  margin: 6px 0 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: clamp(1.08rem, 2.6vw, 1.2rem);
  line-height: 1.6;
  color: var(--muted);
  overflow-wrap: anywhere;
  white-space: pre-line;
}

.wish-enter-from { opacity: 0; transform: translateY(-20px) scale(0.97); }
.wish-leave-active { position: absolute; }
.wish-leave-to { opacity: 0; }
.wish-move { transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1); }

@keyframes shine { from { background-position: 0% center; } to { background-position: 220% center; } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
  .reveal { opacity: 1; transform: none; filter: none; }
  .heading-ornament .line { stroke-dashoffset: 0; }
}
</style>