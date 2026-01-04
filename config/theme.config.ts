// config/theme.config.ts
import type { ThemeConfig } from '~/types/config'

export const themeConfig: ThemeConfig = {
  preset: 'warm-orange',

  colors: {
    primary: '24 95% 53%',
    primaryForeground: '60 9% 98%',
    secondary: '60 5% 96%',
    secondaryForeground: '24 10% 10%',
    background: '0 0% 100%',
    foreground: '20 14% 4%',
    accent: '60 5% 96%',
    accentForeground: '24 10% 10%',
    muted: '60 5% 96%',
    mutedForeground: '25 5% 45%',
    card: '0 0% 100%',
    cardForeground: '20 14% 4%',
    border: '20 6% 90%',
    input: '20 6% 90%',
    ring: '24 95% 53%',
    destructive: '0 84% 60%',
    destructiveForeground: '60 9% 98%',
  },

  brandScale: {
    50: '33 100% 96%',
    100: '34 100% 91%',
    200: '32 98% 83%',
    300: '31 97% 72%',
    400: '27 96% 61%',
    500: '24 95% 53%',
    600: '21 90% 48%',
    700: '17 88% 40%',
    800: '15 79% 34%',
    900: '15 75% 28%',
    950: '13 81% 15%',
  },

  fonts: {
    sans: "'Inter', system-ui, sans-serif",
    heading: "'Playfair Display', Georgia, serif",
    accent: "'Dancing Script', cursive",
  },

  googleFonts: [
    'Inter:wght@400;500;600;700',
    'Playfair+Display:wght@400;500;600;700',
    'Dancing+Script:wght@400;500;600;700',
  ],

  radius: '0.5rem',

  darkMode: {
    enabled: false,
    default: 'light',
  },
}

export const colorPresets = {
  'warm-orange': {
    primary: '24 95% 53%',
    description: 'Warm, inviting orange - great for restaurants and cafes',
  },
  'forest-green': {
    primary: '142 76% 36%',
    description: 'Fresh green - perfect for healthy food, organic, vegetarian',
  },
  'ocean-blue': {
    primary: '199 89% 48%',
    description: 'Cool blue - ideal for seafood restaurants',
  },
  'burgundy': {
    primary: '345 83% 41%',
    description: 'Rich burgundy - elegant for fine dining, wine bars',
  },
  'golden-yellow': {
    primary: '45 93% 47%',
    description: 'Bright yellow - cheerful for bakeries, breakfast spots',
  },
  'espresso-brown': {
    primary: '30 41% 27%',
    description: 'Rich brown - perfect for coffee shops',
  },
}

export default themeConfig