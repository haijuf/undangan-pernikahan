<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
  couple: { type: Object, required: true },
})

defineEmits(['open'])
</script>

<template>
  <div class="cover" :class="{ 'is-open': isOpen }">
    <div class="ornament ornament-top-left" aria-hidden="true">&#10047;</div>
    <div class="ornament ornament-top-right" aria-hidden="true">&#10047;</div>
    <div class="cover-card">
      <p class="eyebrow">The Wedding of</p>
      <p class="cover-names">{{ couple.shortNames }}</p>
      <p class="cover-date">{{ couple.date }}</p>
      <button class="gold-button" type="button" @click="$emit('open')">Buka Undangan</button>
    </div>
  </div>
</template>
