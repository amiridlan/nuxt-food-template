<script setup lang="ts">
import { useConfig } from '~/composables/useConfig'

const { site, content, seo } = useConfig()

useHead({
  title: seo.value.title,
})
</script>

<template>
  <div>
    <!-- Hero Section Placeholder -->
    <section id="hero" class="min-h-screen flex items-center justify-center bg-muted">
      <div class="container-custom text-center">
        <h1 class="heading-1 mb-4">
          {{ content.hero.headline }}
          <span class="block text-primary font-accent text-5xl md:text-7xl mt-2">
            {{ content.hero.headlineAccent }}
          </span>
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {{ content.hero.subheadline }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="site.cta.primary.href" class="btn-primary">
            {{ site.cta.primary.text }}
          </a>
          <a :href="site.cta.secondary.href" class="btn-outline">
            {{ site.cta.secondary.text }}
          </a>
        </div>
      </div>
    </section>

    <!-- About Section Placeholder -->
    <section id="about" class="section bg-background">
      <div class="container-custom text-center">
        <p class="text-sm text-primary font-medium mb-2">{{ content.about.sectionSubtitle }}</p>
        <h2 class="heading-2 mb-4">{{ content.about.sectionTitle }}</h2>
        <p class="text-muted-foreground">Component coming in Sprint 3</p>
      </div>
    </section>

    <!-- Menu Section Placeholder -->
    <section id="menu" class="section bg-muted">
      <div class="container-custom text-center">
        <p class="text-sm text-primary font-medium mb-2">{{ content.menu.sectionSubtitle }}</p>
        <h2 class="heading-2 mb-4">{{ content.menu.sectionTitle }}</h2>
        <p class="text-muted-foreground">Component coming in Sprint 4</p>
      </div>
    </section>

    <!-- Gallery Section Placeholder -->
    <section id="gallery" class="section bg-background">
      <div class="container-custom text-center">
        <p class="text-sm text-primary font-medium mb-2">{{ content.gallery.sectionSubtitle }}</p>
        <h2 class="heading-2 mb-4">{{ content.gallery.sectionTitle }}</h2>
        <p class="text-muted-foreground">Component coming in Sprint 4</p>
      </div>
    </section>

    <!-- Testimonials Section Placeholder -->
    <section id="testimonials" class="section bg-muted">
      <div class="container-custom text-center">
        <p class="text-sm text-primary font-medium mb-2">{{ content.testimonials.sectionSubtitle }}</p>
        <h2 class="heading-2 mb-4">{{ content.testimonials.sectionTitle }}</h2>
        <p class="text-muted-foreground">Component coming in Sprint 5</p>
      </div>
    </section>

    <!-- Contact Section Placeholder -->
    <section id="contact" class="section bg-background">
      <div class="container-custom text-center">
        <p class="text-sm text-primary font-medium mb-2">{{ content.contact.sectionSubtitle }}</p>
        <h2 class="heading-2 mb-4">{{ content.contact.sectionTitle }}</h2>
        <p class="text-muted-foreground">Component coming in Sprint 6</p>
      </div>
    </section>
  </div>
</template>