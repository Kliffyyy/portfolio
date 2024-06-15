import Link from 'next/link'
import { formatDate, getPages } from './utils'

export function Pages() {
  let allPages = getPages()

  return (
    <div>
      {allPages
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="mdx-title">
                {post.metadata.title}
              </p>
              <p className="mdx-date">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
