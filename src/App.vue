<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import InvitationCover from './components/InvitationCover.vue'
import CoupleSection from './components/CoupleSection.vue'
import HeroSection from './components/HeroSection.vue'
import EventDetails from './components/EventDetails.vue'
import RundownSection from './components/RundownSection.vue'
import WishesSection from './components/WishesSection.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import WeddingFooter from './components/WeddingFooter.vue'
import { weddingData } from './data/wedding.js'

const isOpen = ref(false)
const isPlaying = ref(false)
const audioError = ref(false)
const audio = ref(null)

function openInvitation() {
  isOpen.value = true
  document.body.classList.remove('lock-scroll')
  if (audio.value) {
    audio.value.play()
      .then(() => { isPlaying.value = true })
      .catch(() => { isPlaying.value = false })
  }
}

function toggleAudio() {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
    isPlaying.value = false
    return
  }
  audio.value.play()
    .then(() => { isPlaying.value = true })
    .catch(() => { isPlaying.value = false })
}

function syncAudioState() {
  isPlaying.value = Boolean(audio.value && !audio.value.paused)
}

function handleAudioError() {
  audioError.value = true
  isPlaying.value = false
}

onMounted(() => { document.body.classList.add('lock-scroll') })
onBeforeUnmount(() => { document.body.classList.remove('lock-scroll') })
</script>

<template>
  <div class="page-shell">
    <audio ref="audio" :src="weddingData.music.src" loop @error="handleAudioError" @pause="syncAudioState" @play="syncAudioState" />
    <InvitationCover :is-open="isOpen" :couple="weddingData.couple" @open="openInvitation" />

    <button v-if="isOpen" class="audio-button" type="button" :title="audioError ? 'File lagu belum tersedia' : 'Putar atau jeda musik'" :aria-label="audioError ? 'File lagu belum tersedia' : 'Putar atau jeda musik'" @click="toggleAudio">
      <span class="equalizer" :class="{ active: isPlaying }"><i></i><i></i><i></i></span>
    </button>
    <p v-if="audioError && isOpen" class="audio-error">Tambahkan file lagu di <code>public/audio/lagu-pernikahan.mp3</code>.</p>

    <main>
      <HeroSection :couple="weddingData.couple" :story="weddingData.story" />

      <CoupleSection
        :couple="weddingData.couple"
        :story="weddingData.story"
        :prewedding="weddingData.prewedding"
      />
      <EventDetails :event="weddingData.event" :venue="weddingData.venue" />
      <section class="countdown-section">
        <p class="eyebrow">Menuju hari bahagia</p>
        <CountdownTimer target-date="2026-10-30T08:00:00+07:00" />
      </section>
      <RundownSection :items="weddingData.rundown" :concept="weddingData.concept" />
      <WishesSection :initial-wishes="weddingData.wishes" />
      <WeddingFooter :couple="weddingData.couple" />
    </main>
  </div>
</template>
