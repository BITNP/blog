import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'BITNP Blog',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://blog.bitnp.net',
  author: 'BITNP',
  locale: 'zh-CN',
  featuredPostCount: 3,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/BITNP',
    label: 'GitHub',
  },
  {
    href: 'https://www.bitnp.net',
    label: 'Website',
  },
  {
    href: 'https://space.bilibili.com/89756733',
    label: 'Bilibili',
  },
  {
    href: 'mailto:webmaster@bitnp.net',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Bilibili: 'lucide:tv',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
