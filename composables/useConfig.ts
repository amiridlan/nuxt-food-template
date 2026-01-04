import { siteConfig, themeConfig, contentConfig, seoConfig } from '~/config'
import type { SiteConfig, ThemeConfig, ContentConfig, SeoConfig } from '~/types/config'

export function useConfig() {
  const site = computed<SiteConfig>(() => siteConfig)
  const theme = computed<ThemeConfig>(() => themeConfig)
  const content = computed<ContentConfig>(() => contentConfig)
  const seo = computed<SeoConfig>(() => seoConfig)

  const businessName = computed(() => site.value.business.name)

  const formatHours = (day: keyof typeof siteConfig.hours) => {
    const hours = site.value.hours[day]
    if (typeof hours === 'object' && 'closed' in hours) {
      if (hours.closed) return 'Closed'
      return `${hours.open} - ${hours.close}`
    }
    return ''
  }

  const isOpen = computed(() => {
    const now = new Date()
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const
    const today = days[now.getDay()]
    const hours = site.value.hours[today]

    if (typeof hours === 'object' && 'closed' in hours) {
      if (hours.closed) return false
      const currentTime = now.getHours() * 100 + now.getMinutes()
      const openTime = parseInt(hours.open.replace(':', ''))
      const closeTime = parseInt(hours.close.replace(':', ''))
      return currentTime >= openTime && currentTime <= closeTime
    }
    return false
  })

  const fullAddress = computed(() => site.value.contact.address.full)

  const phoneLink = computed(() => `tel:${site.value.contact.phone.replace(/\D/g, '')}`)

  const emailLink = computed(() => `mailto:${site.value.contact.email}`)

  const activeSocialLinks = computed(() => {
    return Object.entries(site.value.social)
      .filter(([_, url]) => url && url.length > 0)
      .map(([platform, url]) => ({ platform, url }))
  })

  const copyrightText = computed(() => {
    const year = new Date().getFullYear()
    return site.value.footer.copyright.replace('{year}', year.toString())
  })

  return {
    site,
    theme,
    content,
    seo,
    businessName,
    fullAddress,
    phoneLink,
    emailLink,
    activeSocialLinks,
    copyrightText,
    isOpen,
    formatHours,
  }
}