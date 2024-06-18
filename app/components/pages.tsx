import Link from 'next/link'
import { formatDate, getPages } from './utils'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react'
import { PagesRootDirectory } from './sitemap';

// export async function Pages() {
//   let allPages = await getPages()

//   return (
//     <div>
//       {allPages
//         .sort((a: { metadata: { publishedAt: string | number | Date } }, b: { metadata: { publishedAt: string | number | Date } }) => {
//           if (
//             new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
//           ) {
//             return -1
//           }
//           return 1
//         })
//         .map((post: { slug: Key | null | undefined; metadata: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; publishedAt: string } }) => (
//           <Link
//             key={post.slug}
//             className="flex flex-col space-y-1 mb-4"
//             href={`/pages/${post.slug}`}
//           >
//             <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
//             <p className="mdx-title">
//                 {post.metadata.title}
//               </p>
//               <p className="mdx-date">
//                 {formatDate(post.metadata.publishedAt, false)}
//               </p>
//             </div>
//           </Link>
//         ))}
//     </div>
//   )
// }


export async function Pages() {
  let allFolders = await getPages();

  return (
    <div>
      {allFolders.map((folder:any) => (
        <div key={folder.folder} className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tighter mb-2">{folder.folder}</h2>
          {folder.pages
            .sort((a: { metadata: { publishedAt: string | number | Date; }; }, b: { metadata: { publishedAt: string | number | Date; }; }) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post: { slug: Key | null | undefined; metadata: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; publishedAt: string; }; }) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/${PagesRootDirectory}/${folder.folder}/${post.slug}`}
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
