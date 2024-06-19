import Link from 'next/link'
import { formatDate, getPages } from './utils'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react'
import { PagesRootDirectory } from './sitemap'

export async function Pages() {
  let allPages = await getPages()

  return (
    <div>
      {allPages
        .sort((a: { metadata: { publishedAt: string | number | Date } }, b: { metadata: { publishedAt: string | number | Date } }) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post: { slug: Key | null | undefined; metadata: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; publishedAt: string } }) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-0 mb-2 mdx-link"
            href={`/${PagesRootDirectory}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row hover:underline hover:text-gray-300">
              <p className="mdx-title">
                {post.metadata.title}
              </p>
              <p className="mdx-date no-underline">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
