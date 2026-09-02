<template>
  <section id="about" class="about section" ref="root">
    <div class="about-atmosphere" aria-hidden="true" />

    <div class="container">
      <header class="about-intro reveal" data-reveal>
        <span class="about-eyebrow">{{ $t('about.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <p class="about-lead">{{ $t('about.lead') }}</p>
      </header>

      <blockquote class="about-quote reveal" data-reveal>
        <p>{{ $t('about.quote') }}</p>
      </blockquote>

      <div class="stories">
        <article
          v-for="(story, index) in stories"
          :key="index"
          class="story reveal"
          :class="`story--${index % 2 === 0 ? 'left' : 'right'}`"
          data-reveal
        >
          <div class="story-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="story-body">
            <h3 class="story-title">{{ story.title }}</h3>
            <p class="story-text">{{ story.text }}</p>
          </div>
        </article>
      </div>

      <div class="prevention reveal" data-reveal>
        <div class="prevention-header">
          <h3 class="prevention-title">{{ $t('about.prevention.title') }}</h3>
          <p class="prevention-subtitle">{{ $t('about.prevention.subtitle') }}</p>
        </div>
        <ul class="prevention-grid">
          <li
            v-for="(item, index) in preventionItems"
            :key="index"
            class="prevention-item reveal"
            data-reveal
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <span class="prevention-mark" aria-hidden="true" />
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="message-pair reveal" data-reveal>
        <div class="bubble bubble--out">
          <span class="bubble-label">{{ $t('about.messages.outLabel') }}</span>
          <p>{{ $t('about.messages.out') }}</p>
        </div>
        <div class="message-bridge" aria-hidden="true">
          <span class="bridge-line" />
          <span class="bridge-pulse" />
        </div>
        <div class="bubble bubble--in">
          <span class="bubble-label">{{ $t('about.messages.inLabel') }}</span>
          <p>{{ $t('about.messages.in') }}</p>
        </div>
      </div>

      <p class="message-note reveal" data-reveal>{{ $t('about.messages.note') }}</p>

      <div class="future reveal" data-reveal>
        <h3 class="future-title">{{ $t('about.future.title') }}</h3>
        <p class="future-lead">{{ $t('about.future.lead') }}</p>
        <ul class="future-list">
          <li v-for="(item, index) in futureItems" :key="index">{{ item }}</li>
        </ul>
        <p class="future-close">{{ $t('about.future.close') }}</p>
      </div>

      <div class="about-cta reveal" data-reveal>
        <p>{{ $t('about.cta.text') }}</p>
        <a href="#contact" class="btn btn-primary about-cta-btn">{{ $t('about.cta.button') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const root = ref(null)
let observer

const stories = computed(() => [
  { title: t('about.stories.s1.title'), text: t('about.stories.s1.text') },
  { title: t('about.stories.s2.title'), text: t('about.stories.s2.text') },
  { title: t('about.stories.s3.title'), text: t('about.stories.s3.text') },
  { title: t('about.stories.s4.title'), text: t('about.stories.s4.text') },
])

const preventionItems = computed(() => [
  { title: t('about.prevention.items.i1.title'), text: t('about.prevention.items.i1.text') },
  { title: t('about.prevention.items.i2.title'), text: t('about.prevention.items.i2.text') },
  { title: t('about.prevention.items.i3.title'), text: t('about.prevention.items.i3.text') },
  { title: t('about.prevention.items.i4.title'), text: t('about.prevention.items.i4.text') },
])

const futureItems = computed(() => {
  const items = tm('about.future.items')
  return Array.isArray(items) ? items : []
})

onMounted(() => {
  const nodes = root.value?.querySelectorAll('[data-reveal]')
  if (!nodes?.length) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  )

  nodes.forEach((node) => observer.observe(node))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.about {
  position: relative;
  background: var(--background);
  overflow: hidden;
  padding-top: 96px;
  padding-bottom: 96px;
}

.about-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 40% at 10% 0%, rgba(99, 102, 241, 0.12), transparent 55%),
    radial-gradient(ellipse 50% 35% at 90% 30%, rgba(15, 23, 42, 0.06), transparent 50%),
    linear-gradient(180deg, #f8fafc 0%, #ffffff 35%, #ffffff 70%, #f8fafc 100%);
  pointer-events: none;
}

.container {
  position: relative;
  z-index: 1;
}

.about-intro {
  max-width: 720px;
  margin: 0 auto 40px;
  text-align: center;
}

.about-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-dark);
  margin-bottom: 16px;
}

.about-lead {
  margin-top: 12px;
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.about-quote {
  max-width: 640px;
  margin: 0 auto 64px;
  padding: 28px 32px;
  border-left: 4px solid var(--primary-color);
  background: linear-gradient(90deg, var(--primary-light), transparent);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.about-quote p {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.55;
  font-style: italic;
}

.stories {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 860px;
  margin: 0 auto 72px;
}

.story {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px 20px;
  padding: 28px 28px 28px 20px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  backdrop-filter: blur(6px);
}

.story-index {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary-color);
  opacity: 0.55;
  line-height: 1;
  padding-top: 4px;
}

.story-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.story-text {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.75;
  margin: 0;
}

.prevention {
  max-width: 900px;
  margin: 0 auto 64px;
  padding: 36px 32px;
  border-radius: 20px;
  background: #0f172a;
  color: #f8fafc;
}

.prevention-header {
  margin-bottom: 28px;
  max-width: 560px;
}

.prevention-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.prevention-subtitle {
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
}

.prevention-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin: 0;
  padding: 0;
}

.prevention-item {
  display: flex;
  gap: 14px;
  padding: 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.prevention-mark {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 50%;
  background: #a5b4fc;
  box-shadow: 0 0 0 4px rgba(165, 180, 252, 0.2);
}

.prevention-item h4 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: #fff;
}

.prevention-item p {
  margin: 0;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.55;
}

.message-pair {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: center;
  max-width: 900px;
  margin: 0 auto 20px;
}

.bubble {
  padding: 22px 24px;
  border-radius: 18px;
  border: 1px solid var(--border-color);
  background: var(--background);
  box-shadow: var(--shadow);
}

.bubble--out {
  border-top-left-radius: 4px;
}

.bubble--in {
  border-top-right-radius: 4px;
  background: var(--primary-light);
  border-color: #c7d2fe;
}

.bubble-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.bubble p {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.message-bridge {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bridge-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), #0f172a);
}

.bridge-pulse {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  animation: pulse-bridge 1.8s ease-in-out infinite;
}

.message-note {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 72px;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
}

.future {
  max-width: 820px;
  margin: 0 auto 56px;
  padding: 36px 32px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background:
    linear-gradient(180deg, rgba(224, 231, 255, 0.45), rgba(255, 255, 255, 0.9));
}

.future-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.future-lead {
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.7;
}

.future-list {
  margin: 0 0 28px;
  padding-left: 1.2rem;
  color: var(--text-primary);
}

.future-list li {
  margin-bottom: 12px;
  line-height: 1.6;
  padding-left: 4px;
}

.future-close {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.about-cta {
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
}

.about-cta p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 1.05rem;
}

.about-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: var(--border-radius);
  background: var(--primary-color);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border: none;
  transition: var(--transition);
}

.about-cta-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}

.story--right.reveal {
  transform: translateX(24px) translateY(16px);
}

.story--left.reveal {
  transform: translateX(-24px) translateY(16px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

@keyframes pulse-bridge {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.45);
  }
  50% {
    transform: scale(1.15);
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }
}

@media (max-width: 768px) {
  .story {
    grid-template-columns: 48px 1fr;
    padding: 22px 18px;
  }

  .prevention-grid {
    grid-template-columns: 1fr;
  }

  .message-pair {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .message-bridge {
    transform: rotate(90deg);
    margin: 4px auto;
  }

  .prevention,
  .future {
    padding: 28px 20px;
  }

  .story--left.reveal,
  .story--right.reveal {
    transform: translateY(24px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .bridge-pulse {
    animation: none;
  }
}
</style>
