import { getPages } from './utils'

export const baseUrl = 'https://klifton-portfolio.vercel.app/'

export const PagesRootDirectory = "pages"

export default async function sitemap() {
  let getpages = await getPages()
  let pages = getpages.map((page: { slug: any; metadata: { publishedAt: any } }) => ({
    url: `${baseUrl}/${PagesRootDirectory}/${page.slug}`,
    lastModified: page.metadata.publishedAt,
  }))

  let routes = ['', `/${PagesRootDirectory}`].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...pages]
}
