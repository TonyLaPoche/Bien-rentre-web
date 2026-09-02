<template>
  <section id="roadmap" class="roadmap section">
    <div class="container">
      <div class="roadmap-hero">
        <span class="roadmap-badge">{{ $t('roadmap.badge') }}</span>
        <h2 class="section-title">{{ $t('roadmap.title') }}</h2>
        <p class="section-subtitle">{{ $t('roadmap.subtitle') }}</p>

        <div class="launch-card">
          <p class="launch-label">{{ $t('roadmap.launchLabel') }}</p>
          <p class="launch-date">{{ $t('roadmap.launchDate') }}</p>
          <p class="launch-hint">{{ $t('roadmap.launchHint') }}</p>
        </div>
      </div>

      <ol class="timeline">
        <li
          v-for="(item, index) in steps"
          :key="index"
          class="timeline-item"
          :class="`timeline-item--${item.status}`"
        >
          <div class="timeline-marker" aria-hidden="true">
            <span class="timeline-dot" />
          </div>
          <div class="timeline-card">
            <div class="timeline-meta">
              <span class="timeline-status">{{ item.statusLabel }}</span>
              <span class="timeline-when">{{ item.when }}</span>
            </div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-desc">{{ item.description }}</p>
          </div>
        </li>
      </ol>

      <div class="fomo-panel">
        <div class="fomo-copy">
          <p class="fomo-kicker">{{ $t('roadmap.fomo.kicker') }}</p>
          <h3 class="fomo-title">{{ $t('roadmap.fomo.title') }}</h3>
          <p class="fomo-text">{{ $t('roadmap.fomo.text') }}</p>
        </div>
        <a href="#contact" class="btn btn-primary fomo-cta">
          {{ $t('roadmap.fomo.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    status: 'done',
    statusLabel: t('roadmap.steps.s1.status'),
    when: t('roadmap.steps.s1.when'),
    title: t('roadmap.steps.s1.title'),
    description: t('roadmap.steps.s1.description'),
  },
  {
    status: 'now',
    statusLabel: t('roadmap.steps.s2.status'),
    when: t('roadmap.steps.s2.when'),
    title: t('roadmap.steps.s2.title'),
    description: t('roadmap.steps.s2.description'),
  },
  {
    status: 'next',
    statusLabel: t('roadmap.steps.s3.status'),
    when: t('roadmap.steps.s3.when'),
    title: t('roadmap.steps.s3.title'),
    description: t('roadmap.steps.s3.description'),
  },
  {
    status: 'launch',
    statusLabel: t('roadmap.steps.s4.status'),
    when: t('roadmap.steps.s4.when'),
    title: t('roadmap.steps.s4.title'),
    description: t('roadmap.steps.s4.description'),
  },
])
</script>

<style scoped>
.roadmap {
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99, 102, 241, 0.18), transparent),
    var(--background);
  position: relative;
  overflow: hidden;
}

.roadmap-hero {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}

.roadmap-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background: #0f172a;
  color: #f8fafc;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 20px;
  animation: pulse-badge 2.4s ease-in-out infinite;
}

.launch-card {
  margin-top: 28px;
  padding: 28px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);
}

.launch-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.75;
  margin-bottom: 8px;
}

.launch-date {
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #fff 0%, #c7d2fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.launch-hint {
  font-size: 1rem;
  opacity: 0.85;
  max-width: 420px;
  margin: 0 auto;
}

.timeline {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 720px;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    #22c55e,
    var(--primary-color),
    #94a3b8,
    #0f172a
  );
}

.timeline-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
}

.timeline-marker {
  display: flex;
  justify-content: center;
  padding-top: 18px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--border-color);
  border: 3px solid var(--background);
  box-shadow: 0 0 0 2px var(--border-color);
  z-index: 1;
}

.timeline-item--done .timeline-dot {
  background: #22c55e;
  box-shadow: 0 0 0 2px #22c55e;
}

.timeline-item--now .timeline-dot {
  background: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.35);
  animation: pulse-dot 1.8s ease-in-out infinite;
}

.timeline-item--next .timeline-dot {
  background: #64748b;
  box-shadow: 0 0 0 2px #64748b;
}

.timeline-item--launch .timeline-dot {
  background: #0f172a;
  box-shadow: 0 0 0 2px #0f172a;
}

.timeline-card {
  background: var(--background);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px 22px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.timeline-item--now .timeline-card {
  border-color: var(--primary-color);
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
}

.timeline-card:hover {
  transform: translateY(-2px);
}

.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  align-items: center;
  margin-bottom: 8px;
}

.timeline-status {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--background-light);
  color: var(--text-secondary);
}

.timeline-item--done .timeline-status {
  background: #dcfce7;
  color: #166534;
}

.timeline-item--now .timeline-status {
  background: var(--primary-light);
  color: var(--primary-dark);
}

.timeline-item--launch .timeline-status {
  background: #0f172a;
  color: #f8fafc;
}

.timeline-when {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.timeline-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 0.98rem;
  margin: 0;
}

.fomo-panel {
  margin-top: 48px;
  padding: 28px;
  border-radius: 16px;
  background: linear-gradient(120deg, #fff7ed 0%, #ffedd5 45%, #e0e7ff 100%);
  border: 1px solid #fdba74;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}

.fomo-kicker {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c2410c;
  margin-bottom: 6px;
}

.fomo-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.fomo-text {
  color: var(--text-secondary);
  margin: 0;
  max-width: 520px;
}

.fomo-cta {
  white-space: nowrap;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: var(--border-radius);
  background: #0f172a;
  color: #fff;
  font-weight: 700;
  border: none;
  transition: var(--transition);
}

.fomo-cta:hover {
  background: #1e293b;
  transform: translateY(-2px);
}

@keyframes pulse-dot {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.35);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.15);
  }
}

@keyframes pulse-badge {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

@media (max-width: 768px) {
  .fomo-panel {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
  }

  .fomo-cta {
    width: 100%;
  }
}
</style>
