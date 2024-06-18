import { notFound } from 'next/navigation'
import { CustomMDX } from '../../components/mdx'
import { Folder, Page, formatDate, getPages } from '../../components/utils'
import { baseUrl, PagesRootDirectory } from '../../components/sitemap'
import Link from 'next/link';
import { metadata } from '../page';

export async function generateStaticParams() {
  const folders: Folder[] = await getPages();
  const paths = folders.flatMap((folder) =>
    folder.pages.map((page:any) => ({
      // slug: page.slug,
      slug: page.slug.split('/'),
    }))
  );

  return paths;
}

export async function generateMetadata({ params }: any) {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  let pages = await getPages()
  let page = pages.find((page: any) => page.slug === slug)
  
  if (!page) {
    return {};
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image: image,
  } = page.pages[0].metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${PagesRootDirectory}/${page.pages}`,
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
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Pages() {
  // let allFolders = await getPages();
  const allFolders: Folder[] = await getPages();

  return (
    <div>
      {allFolders.map((folder) => (
        <div key={folder.folder} className="mb-8">
          <h2 className="folder-title">{folder.folder}</h2>
          {folder.pages
            .sort((a:any, b:any) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post:any) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/pages/${folder.folder === '.' ? '' : `${folder.folder}/`}${post.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="mdx-title">{post.metadata.title}</p>
                  <p className="mdx-date">{formatDate(post.metadata.publishedAt, false)}</p>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export const PageComponent: React.FC<PageProps> = async ({ params }) => {
  const { slug } = params;
  const pages = await getPages();
  const page = pages.flatMap(folder => folder.pages).find(p => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
      <p className="title">{page.metadata.title}</p>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(page.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={page.content} />
      </article>
    </section>
  );
};
