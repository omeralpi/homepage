import { getAllPageSlugs } from '@/lib/contentful'
import { getBookmarks } from '@/lib/raindrop'

export default async function sitemap() {
  const [bookmarks, allPages] = await Promise.all([getBookmarks(), getAllPageSlugs()])

  const mappedBookmarks = bookmarks.map((bookmark) => {
    return {
      url: `https://alpi.dev/bookmarks/${bookmark.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
  })

  const pages = allPages.map((page) => {
    let changeFrequency = 'yearly'
    if (['journey'].includes(page.slug)) changeFrequency = 'monthly'
    if (['bookmarks'].includes(page.slug)) changeFrequency = 'daily'

    let lastModified = page.sys.publishedAt
    if (['journey', 'bookmarks'].includes(page.slug)) lastModified = new Date()

    let priority = 0.5
    if (['journey'].includes(page.slug)) priority = 0.8
    if (['bookmarks'].includes(page.slug)) priority = 1

    return {
      url: `https://alpi.dev/${page.slug}`,
      lastModified,
      changeFrequency,
      priority
    }
  })

  return [
    {
      url: 'https://alpi.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...pages,
    ...mappedBookmarks
  ]
}
