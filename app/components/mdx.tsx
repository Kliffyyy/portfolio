import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React, { ReactNode } from 'react'
import { UrlObject } from 'url'
import { StaticImport, PlaceholderValue, OnLoadingComplete } from 'next/dist/shared/lib/get-img-props'
import { MDXProvider } from '@mdx-js/react'

function Table({ data }:any) {
  let headers = data.headers.map((header: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row: any[], index: React.Key | null | undefined) => (
    <tr key={index}>
      {row.map((cell: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, cellIndex: React.Key | null | undefined) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: (React.JSX.IntrinsicAttributes & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof { href: string | UrlObject; as?: (string | UrlObject) | undefined; replace?: boolean | undefined; scroll?: boolean | undefined; shallow?: boolean | undefined; passHref?: boolean | undefined; prefetch?: boolean | undefined; locale?: string | false | undefined; legacyBehavior?: boolean | undefined; onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement> | undefined; onTouchStart?: React.TouchEventHandler<HTMLAnchorElement> | undefined; onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined }> & { href: string | UrlObject; as?: (string | UrlObject) | undefined; replace?: boolean | undefined; scroll?: boolean | undefined; shallow?: boolean | undefined; passHref?: boolean | undefined; prefetch?: boolean | undefined; locale?: string | false | undefined; legacyBehavior?: boolean | undefined; onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement> | undefined; onTouchStart?: React.TouchEventHandler<HTMLAnchorElement> | undefined; onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined } & { children?: React.ReactNode } & React.RefAttributes<HTMLAnchorElement>) | (React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  let href = props.href

  // if (href?.toString().charAt(0) == "/") {
  if (href?.toString().startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  // if (href?.toString().charAt(0) == "#") {
  if (href?.toString().startsWith("#")) {
    // return <a {...props} />
    return React.createElement('a', {...props})
  }

  // return <a target="_blank" rel="noopener noreferrer" {...props} />
  return React.createElement('a', {target:"_blank" , rel: "noopener noreferrer" , ...props})
}

function RoundedImage(props: React.JSX.IntrinsicAttributes & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt" | "ref" | "height" | "width" | "loading" | "src" | "srcSet"> & { src: string | StaticImport; alt: string; width?: number | `${number}` | undefined; height?: number | `${number}` | undefined; fill?: boolean | undefined; loader?: ImageLoader | undefined; quality?: number | `${number}` | undefined; priority?: boolean | undefined; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue | undefined; blurDataURL?: string | undefined; unoptimized?: boolean | undefined; overrideSrc?: string | undefined; onLoadingComplete?: OnLoadingComplete | undefined; layout?: string | undefined; objectFit?: string | undefined; objectPosition?: string | undefined; lazyBoundary?: string | undefined; lazyRoot?: string | undefined } & React.RefAttributes<HTMLImageElement | null>) {
  // return <Image alt={props.alt} className="rounded-lg" {...props} />
  return React.createElement('Image', {className:"rounded-lg" , ...props})
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function simplify(str: { toString: () => string }) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    let slug = simplify(children)

    return (React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    ));
  }

  Heading.displayName = `Heading${level}`

  return Heading
}


let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: React.JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {})}}
    />
  )
}
