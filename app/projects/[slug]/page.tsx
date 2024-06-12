import { notFound } from 'next/navigation'
import { CustomMDX } from '../../components/mdx'
import { formatDate, getPages } from '../../components/utils'
import { baseUrl } from '../../components/sitemap'

export async function generateStaticParams() {
  let pages = getPages()

  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export function generateMetadata({ params }: any) {
  let page = getPages().find((page) => page.slug === params.slug)
  if (!page) {
    return {}
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = page.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${page.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Page({ params }: any) {
  let page = getPages().find((page) => page.slug === params.slug)

  // 404 PAGE NOT FOUND 
  if (!page) {
    notFound()
  }
  
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            // '@context': 'https://schema.org',
            // '@type': 'BlogPosting',
            headline: page.metadata.title,
            datePublished: page.metadata.publishedAt,
            dateModified: page.metadata.publishedAt,
            description: page.metadata.summary,
            image: page.metadata.image
              ? `${baseUrl}${page.metadata.image}`
              : `/og?title=${encodeURIComponent(page.metadata.title)}`,
            url: `${baseUrl}/projects/${page.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {page.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(page.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={page.content} />
      </article>
    </section>
  )
}
