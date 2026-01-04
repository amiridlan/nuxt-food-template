// config/content.config.ts
import type { ContentConfig } from '~/types/config'

export const contentConfig: ContentConfig = {
  hero: {
    headline: 'Crafted with Passion,',
    headlineAccent: 'Served with Love',
    subheadline: 'Experience the perfect blend of traditional recipes and modern culinary techniques in every dish we create.',
    backgroundImage: '/images/hero-bg.jpg',
    backgroundVideo: '',
    overlay: true,
    overlayOpacity: 0.5,
    alignment: 'center',
    showScrollIndicator: true,
  },

  about: {
    enabled: true,
    sectionTitle: 'Our Story',
    sectionSubtitle: 'A Passion for Good Food',
    content: [
      'Founded in 2020, Savory Kitchen began as a small family dream to bring authentic, home-cooked flavors to our community.',
      'Every dish we serve tells a story – of carefully sourced ingredients, time-honored recipes passed down through generations, and the joy of bringing people together around a table.',
      'Our commitment to quality means we partner with local farmers and suppliers, ensuring the freshest ingredients make their way to your plate.',
    ],
    image: '/images/about.jpg',
    imageAlt: 'Chef preparing food in kitchen',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '50K+', label: 'Happy Customers' },
      { value: '100+', label: 'Menu Items' },
      { value: '4.9', label: 'Average Rating' },
    ],
    features: [
      { icon: 'Utensils', title: 'Fresh Ingredients', description: 'Locally sourced, seasonal ingredients' },
      { icon: 'ChefHat', title: 'Expert Chefs', description: 'Award-winning culinary team' },
      { icon: 'Heart', title: 'Made with Love', description: 'Passion in every dish' },
    ],
  },

  menu: {
    enabled: true,
    sectionTitle: 'Our Menu',
    sectionSubtitle: 'Discover Our Delicious Offerings',
    showPrices: true,
    currency: '$',
    categories: [
      {
        id: 'starters',
        name: 'Starters',
        description: 'Begin your culinary journey',
        items: [
          {
            id: '1',
            name: 'Crispy Calamari',
            description: 'Tender calamari rings with spicy aioli and lemon',
            price: 14.99,
            image: '/images/menu/calamari.jpg',
            tags: ['Popular', 'Seafood'],
            dietary: [],
          },
          {
            id: '2',
            name: 'Bruschetta Trio',
            description: 'Classic tomato, mushroom, and olive tapenade on toasted bread',
            price: 12.99,
            image: '/images/menu/bruschetta.jpg',
            tags: [],
            dietary: ['Vegetarian'],
          },
        ],
      },
      {
        id: 'mains',
        name: 'Main Courses',
        description: 'Signature dishes crafted to perfection',
        items: [
          {
            id: '3',
            name: 'Grilled Ribeye Steak',
            description: '12oz premium ribeye with herb butter, roasted vegetables',
            price: 38.99,
            image: '/images/menu/steak.jpg',
            tags: ["Chef's Choice"],
            dietary: ['Gluten-Free'],
          },
          {
            id: '4',
            name: 'Pan-Seared Salmon',
            description: 'Atlantic salmon with citrus glaze, quinoa, and seasonal greens',
            price: 32.99,
            image: '/images/menu/salmon.jpg',
            tags: ['Healthy Choice'],
            dietary: ['Gluten-Free'],
          },
        ],
      },
      {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet endings to your meal',
        items: [
          {
            id: '5',
            name: 'Tiramisu',
            description: 'Classic Italian dessert with espresso-soaked ladyfingers',
            price: 10.99,
            image: '/images/menu/tiramisu.jpg',
            tags: ['Signature'],
            dietary: ['Vegetarian'],
          },
        ],
      },
    ],
  },

  gallery: {
    enabled: true,
    sectionTitle: 'Gallery',
    sectionSubtitle: 'A Glimpse Into Our World',
    images: [
      { src: '/images/gallery/1.jpg', alt: 'Restaurant interior', category: 'ambiance' },
      { src: '/images/gallery/2.jpg', alt: 'Signature dish', category: 'food' },
      { src: '/images/gallery/3.jpg', alt: 'Chef at work', category: 'kitchen' },
      { src: '/images/gallery/4.jpg', alt: 'Outdoor seating', category: 'ambiance' },
    ],
    showCategories: true,
    categories: ['all', 'food', 'ambiance', 'kitchen'],
    layout: 'masonry',
    columns: 4,
  },

  testimonials: {
    enabled: true,
    sectionTitle: 'What Our Guests Say',
    sectionSubtitle: 'Reviews from Happy Customers',
    showRating: true,
    items: [
      {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Food Blogger',
        avatar: '/images/testimonials/avatar1.jpg',
        rating: 5,
        text: 'Absolutely incredible dining experience! The attention to detail in every dish is remarkable.',
        date: '2024-01-15',
        source: 'Google',
      },
      {
        id: '2',
        name: 'Michael Chen',
        role: 'Local Guide',
        avatar: '/images/testimonials/avatar2.jpg',
        rating: 5,
        text: "I've been coming here for years and it never disappoints. Great atmosphere for date nights.",
        date: '2024-02-20',
        source: 'Yelp',
      },
      {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Verified Diner',
        avatar: '/images/testimonials/avatar3.jpg',
        rating: 5,
        text: 'Best restaurant in town! The staff made my birthday celebration truly special.',
        date: '2024-03-10',
        source: 'TripAdvisor',
      },
    ],
    display: 'carousel',
    autoplay: true,
    autoplayInterval: 5000,
  },

  contact: {
    enabled: true,
    sectionTitle: 'Get in Touch',
    sectionSubtitle: "We'd Love to Hear from You",
    showMap: true,
    showForm: true,
    showHours: true,
    formFields: ['name', 'email', 'phone', 'date', 'guests', 'message'],
    formEndpoint: '/api/contact',
    successMessage: "Thank you for your message! We'll get back to you within 24 hours.",
  },
}

export default contentConfig