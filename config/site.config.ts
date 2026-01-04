// config/site.config.ts
import type { SiteConfig } from '~/types/config'

export const siteConfig: SiteConfig = {
  business: {
    name: 'Savory Kitchen',
    tagline: 'Where Every Bite Tells a Story',
    description: 'Experience culinary excellence with our carefully crafted dishes made from the freshest local ingredients.',
    established: '2020',
    type: 'Restaurant',
  },

  contact: {
    phone: '+1 (555) 123-4567',
    email: 'hello@savorykitchen.com',
    address: {
      street: '123 Culinary Avenue',
      city: 'Foodie City',
      state: 'FC',
      zip: '12345',
      country: 'United States',
      full: '123 Culinary Avenue, Foodie City, FC 12345',
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d0.0!3d0.0',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },

  social: {
    facebook: 'https://facebook.com/savorykitchen',
    instagram: 'https://instagram.com/savorykitchen',
    twitter: 'https://twitter.com/savorykitchen',
    tiktok: '',
    youtube: '',
    linkedin: '',
    yelp: 'https://yelp.com/biz/savory-kitchen',
    tripadvisor: '',
    googleBusiness: '',
  },

  hours: {
    monday: { open: '11:00', close: '22:00', closed: false },
    tuesday: { open: '11:00', close: '22:00', closed: false },
    wednesday: { open: '11:00', close: '22:00', closed: false },
    thursday: { open: '11:00', close: '22:00', closed: false },
    friday: { open: '11:00', close: '23:00', closed: false },
    saturday: { open: '10:00', close: '23:00', closed: false },
    sunday: { open: '10:00', close: '21:00', closed: false },
    timezone: 'America/New_York',
    specialNote: 'Kitchen closes 30 minutes before closing time',
  },

  cta: {
    primary: {
      text: 'Reserve a Table',
      href: '#contact',
      external: false,
    },
    secondary: {
      text: 'View Menu',
      href: '#menu',
      external: false,
    },
    reservation: {
      enabled: true,
      provider: 'custom',
      url: '#contact',
    },
    ordering: {
      enabled: false,
      provider: '',
      url: '',
    },
  },

  navigation: {
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Menu', href: '#menu' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  footer: {
    copyright: '© {year} Savory Kitchen. All rights reserved.',
    showSocialLinks: true,
    showQuickLinks: true,
    showNewsletter: true,
    additionalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
}

export default siteConfig