// ============================================
// SITE CONFIGURATION TYPES
// ============================================

export interface BusinessInfo {
  name: string
  tagline: string
  description: string
  established: string
  type: string
}

export interface Address {
  street: string
  city: string
  state: string
  zip: string
  country: string
  full: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface ContactInfo {
  phone: string
  email: string
  address: Address
  mapUrl: string
  coordinates: Coordinates
}

export interface SocialLinks {
  facebook?: string
  instagram?: string
  twitter?: string
  tiktok?: string
  youtube?: string
  linkedin?: string
  yelp?: string
  tripadvisor?: string
  googleBusiness?: string
}

export interface DayHours {
  open: string
  close: string
  closed: boolean
}

export interface OperatingHours {
  monday: DayHours
  tuesday: DayHours
  wednesday: DayHours
  thursday: DayHours
  friday: DayHours
  saturday: DayHours
  sunday: DayHours
  timezone: string
  specialNote?: string
}

export interface CTAButton {
  text: string
  href: string
  external: boolean
}

export interface ReservationConfig {
  enabled: boolean
  provider: 'opentable' | 'resy' | 'yelp' | 'custom' | ''
  url: string
}

export interface OrderingConfig {
  enabled: boolean
  provider: 'doordash' | 'ubereats' | 'grubhub' | 'custom' | ''
  url: string
}

export interface CTAConfig {
  primary: CTAButton
  secondary: CTAButton
  reservation: ReservationConfig
  ordering: OrderingConfig
}

export interface NavLink {
  label: string
  href: string
}

export interface NavigationConfig {
  links: NavLink[]
}

export interface FooterConfig {
  copyright: string
  showSocialLinks: boolean
  showQuickLinks: boolean
  showNewsletter: boolean
  additionalLinks: NavLink[]
}

export interface SiteConfig {
  business: BusinessInfo
  contact: ContactInfo
  social: SocialLinks
  hours: OperatingHours
  cta: CTAConfig
  navigation: NavigationConfig
  footer: FooterConfig
}

// ============================================
// THEME CONFIGURATION TYPES
// ============================================

export interface ThemeColors {
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  background: string
  foreground: string
  accent: string
  accentForeground: string
  muted: string
  mutedForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  ring: string
  destructive: string
  destructiveForeground: string
}

export interface BrandScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface ThemeFonts {
  sans: string
  heading: string
  accent: string
}

export interface DarkModeConfig {
  enabled: boolean
  default: 'light' | 'dark' | 'system'
}

export type ThemePreset = 'warm-orange' | 'forest-green' | 'ocean-blue' | 'burgundy' | 'golden-yellow' | 'espresso-brown' | 'custom'

export interface ThemeConfig {
  preset: ThemePreset
  colors: ThemeColors
  brandScale: BrandScale
  fonts: ThemeFonts
  googleFonts: string[]
  radius: string
  darkMode: DarkModeConfig
}

// ============================================
// CONTENT CONFIGURATION TYPES
// ============================================

export interface HeroContent {
  headline: string
  headlineAccent: string
  subheadline: string
  backgroundImage: string
  backgroundVideo?: string
  overlay: boolean
  overlayOpacity: number
  alignment: 'left' | 'center' | 'right'
  showScrollIndicator: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface AboutContent {
  enabled: boolean
  sectionTitle: string
  sectionSubtitle: string
  content: string[]
  image: string
  imageAlt: string
  stats: Stat[]
  features: Feature[]
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  tags: string[]
  dietary: string[]
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export interface MenuContent {
  enabled: boolean
  sectionTitle: string
  sectionSubtitle: string
  showPrices: boolean
  currency: string
  categories: MenuCategory[]
}

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export interface GalleryContent {
  enabled: boolean
  sectionTitle: string
  sectionSubtitle: string
  images: GalleryImage[]
  showCategories: boolean
  categories: string[]
  layout: 'grid' | 'masonry'
  columns: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  date: string
  source: string
}

export interface TestimonialsContent {
  enabled: boolean
  sectionTitle: string
  sectionSubtitle: string
  showRating: boolean
  items: Testimonial[]
  display: 'carousel' | 'grid'
  autoplay: boolean
  autoplayInterval: number
}

export interface ContactContent {
  enabled: boolean
  sectionTitle: string
  sectionSubtitle: string
  showMap: boolean
  showForm: boolean
  showHours: boolean
  formFields: string[]
  formEndpoint: string
  successMessage: string
}

export interface ContentConfig {
  hero: HeroContent
  about: AboutContent
  menu: MenuContent
  gallery: GalleryContent
  testimonials: TestimonialsContent
  contact: ContactContent
}

// ============================================
// SEO CONFIGURATION TYPES
// ============================================

export interface OpenGraphConfig {
  type: string
  siteName: string
  title: string
  description: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  locale: string
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
  site: string
  creator: string
  title: string
  description: string
  image: string
}

export interface RobotsConfig {
  index: boolean
  follow: boolean
  googleBot: {
    index: boolean
    follow: boolean
    'max-video-preview': number
    'max-image-preview': string
    'max-snippet': number
  }
}

export interface VerificationConfig {
  google: string
  bing: string
  yandex: string
  pinterest: string
}

export interface SeoConfig {
  title: string
  titleTemplate: string
  description: string
  keywords: string[]
  openGraph: OpenGraphConfig
  twitter: TwitterConfig
  structuredData: Record<string, unknown>
  robots: RobotsConfig
  canonical: string
  language: string
  region: string
  verification: VerificationConfig
}