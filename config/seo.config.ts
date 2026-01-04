// config/seo.config.ts
import type { SeoConfig } from '~/types/config'

export const seoConfig: SeoConfig = {
  title: 'Savory Kitchen | Fine Dining Restaurant',
  titleTemplate: '%s | Savory Kitchen',
  description: 'Experience exceptional cuisine at Savory Kitchen. Fresh, locally-sourced ingredients crafted into memorable dishes. Reserve your table today.',
  keywords: ['restaurant', 'fine dining', 'local food', 'fresh ingredients', 'dinner', 'reservations'],

  openGraph: {
    type: 'website',
    siteName: 'Savory Kitchen',
    title: 'Savory Kitchen | Fine Dining Restaurant',
    description: 'Experience exceptional cuisine at Savory Kitchen.',
    image: '/images/og-image.jpg',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Savory Kitchen Restaurant',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@savorykitchen',
    creator: '@savorykitchen',
    title: 'Savory Kitchen | Fine Dining Restaurant',
    description: 'Experience exceptional cuisine at Savory Kitchen.',
    image: '/images/twitter-card.jpg',
  },

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Savory Kitchen',
    image: ['https://example.com/images/restaurant.jpg'],
    '@id': 'https://example.com',
    url: 'https://example.com',
    telephone: '+1-555-123-4567',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Culinary Avenue',
      addressLocality: 'Foodie City',
      addressRegion: 'FC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '21:00',
      },
    ],
    menu: 'https://example.com/#menu',
    servesCuisine: ['American', 'Contemporary'],
    acceptsReservations: 'True',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  canonical: 'https://example.com',
  language: 'en',
  region: 'US',

  verification: {
    google: '',
    bing: '',
    yandex: '',
    pinterest: '',
  },
}

export default seoConfig