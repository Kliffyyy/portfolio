import { getPages } from './utils'

export const baseUrl = 'https://klifton-portfolio.vercel.app/'

export default async function sitemap() {
  let pages = getPages().map((page) => ({
    url: `${baseUrl}/projects/${page.slug}`,
    lastModified: page.metadata.publishedAt,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...pages]
}
