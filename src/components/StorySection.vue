<script setup>
defineProps({
  story: { type: Object, required: true },
})
</script>

<template>
  <section class="section story-section">
    <p class="eyebrow">Our story</p>
    <h2>{{ story.title }}</h2>
    <p class="story-copy">{{ story.copy }}</p>
    <p class="story-quote">{{ story.quote }}</p>
  </section>
</template>
