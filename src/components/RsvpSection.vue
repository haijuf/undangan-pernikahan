<script setup>
defineProps({
  contact: { type: Object, required: true },
})
</script>

<template>
  <section class="section rsvp-section">
    <div class="section-heading">
      <h2>{{ contact.name }}</h2>
      <p>{{ contact.copy }}</p>
    </div>
    <a class="gold-button" :href="contact.whatsappUrl" target="_blank" rel="noreferrer">Konfirmasi via WhatsApp</a>
  </section>
</template>
