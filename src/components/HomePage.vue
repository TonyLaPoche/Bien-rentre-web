<template>
  <main>
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <RoadmapSection />
    <FAQSection />
    <ContactSection />
  </main>
</template>

<script setup>
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import AboutSection from './AboutSection.vue'
import RoadmapSection from './RoadmapSection.vue'
import FAQSection from './FAQSection.vue'
import ContactSection from './ContactSection.vue'
</script>

<style scoped>
main {
  min-height: 100vh;
}
</style>
