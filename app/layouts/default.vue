<script setup lang="ts">
import { useConfig } from '~/composables/useConfig'
import { seoConfig } from '~/config'

const { seo } = useConfig()

useHead({
  htmlAttrs: {
    lang: seo.value.language,
  },
  titleTemplate: seo.value.titleTemplate,
  meta: [
    { name: 'description', content: seo.value.description },
    { name: 'keywords', content: seo.value.keywords.join(', ') },
    { property: 'og:type', content: seo.value.openGraph.type },
    { property: 'og:site_name', content: seo.value.openGraph.siteName },
    { property: 'og:title', content: seo.value.openGraph.title },
    { property: 'og:description', content: seo.value.openGraph.description },
    { property: 'og:image', content: seo.value.openGraph.image },
    { property: 'og:locale', content: seo.value.openGraph.locale },
    { name: 'twitter:card', content: seo.value.twitter.card },
    { name: 'twitter:site', content: seo.value.twitter.site },
    { name: 'twitter:title', content: seo.value.twitter.title },
    { name: 'twitter:description', content: seo.value.twitter.description },
    { name: 'twitter:image', content: seo.value.twitter.image },
  ],
  link: [
    { rel: 'canonical', href: seo.value.canonical },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(seoConfig.structuredData),
    },
  ],
})

useSeoMeta({
  title: seo.value.title,
  description: seo.value.description,
  ogTitle: seo.value.openGraph.title,
  ogDescription: seo.value.openGraph.description,
  ogImage: seo.value.openGraph.image,
  twitterCard: seo.value.twitter.card,
  twitterTitle: seo.value.twitter.title,
  twitterDescription: seo.value.twitter.description,
  twitterImage: seo.value.twitter.image,
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
    >
      Skip to main content
    </a>

    <slot name="header" />

    <main id="main-content" class="flex-1">
      <slot />
    </main>

    <slot name="footer" />
  </div>
</template>