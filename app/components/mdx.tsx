import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React, { ReactNode } from 'react'
import { UrlObject } from 'url'
import { StaticImport, PlaceholderValue, OnLoadingComplete } from 'next/dist/shared/lib/get-img-props'
import { Content, Noto_Sans_Telugu } from 'next/font/google'
import { PassThrough } from 'stream'


// custom links
function CustomLink(props: (React.JSX.IntrinsicAttributes & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof { href: string | UrlObject; as?: (string | UrlObject) | undefined; replace?: boolean | undefined; scroll?: boolean | undefined; shallow?: boolean | undefined; passHref?: boolean | undefined; prefetch?: boolean | undefined; locale?: string | false | undefined; legacyBehavior?: boolean | undefined; onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement> | undefined; onTouchStart?: React.TouchEventHandler<HTMLAnchorElement> | undefined; onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined }> & { href: string | UrlObject; as?: (string | UrlObject) | undefined; replace?: boolean | undefined; scroll?: boolean | undefined; shallow?: boolean | undefined; passHref?: boolean | undefined; prefetch?: boolean | undefined; locale?: string | false | undefined; legacyBehavior?: boolean | undefined; onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement> | undefined; onTouchStart?: React.TouchEventHandler<HTMLAnchorElement> | undefined; onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined } & { children?: React.ReactNode } & React.RefAttributes<HTMLAnchorElement>) | (React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  let href = props.href

  // if (href?.toString().charAt(0) == "/") {
  if (href?.toString().startsWith("/")) {
    return (
      <Link href={href} {...props} className='scroll-mt-4'>
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

// function RoundedImage(props: React.JSX.IntrinsicAttributes & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt" | "ref" | "height" | "width" | "loading" | "src" | "srcSet"> & { src: string | StaticImport; alt: string; width?: number | `${number}` | undefined; height?: number | `${number}` | undefined; fill?: boolean | undefined; loader?: ImageLoader | undefined; quality?: number | `${number}` | undefined; priority?: boolean | undefined; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue | undefined; blurDataURL?: string | undefined; unoptimized?: boolean | undefined; overrideSrc?: string | undefined; onLoadingComplete?: OnLoadingComplete | undefined; layout?: string | undefined; objectFit?: string | undefined; objectPosition?: string | undefined; lazyBoundary?: string | undefined; lazyRoot?: string | undefined } & React.RefAttributes<HTMLImageElement | null>) {
//   // return <Image alt={props.alt} className="rounded-lg" {...props} />
//   return React.createElement('Image', {className:"rounded-lg" , ...props})
// }

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

// import React from 'react'

// export default function mdx() {
//   return (
//     <div >mdx</div>
//   )
// }


function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    // add random number to slug to avoid duplicate ids
    // Uint8Array only allows 256 custom-links per page
    let slug = `${simplify(children)}-${crypto.getRandomValues(new Uint8Array(1))}`

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

// markdown tables
const parseMarkdownTable = (markdownTable: string) => {
  if (!markdownTable) return { headers: [], rows: [] };

  const lines = markdownTable.trim().split('\n');
  if (lines.length < 2) return { headers: [], rows: [] };

  const headers = lines[0].split('|').map(header => header.trim()).filter(Boolean);
  const rows = lines.slice(2).map(line => 
    line.split('|').map(cell => cell.trim()).filter(Boolean)
  );

  return { headers, rows };
};

export const Table = ({ markdownTable }:any) => {
  if (!markdownTable) {
    return <div>Error: No table data provided.</div>;
  }

  const data = parseMarkdownTable(markdownTable);

  if (data.headers.length === 0 || data.rows.length === 0) {
    return <div>Error: Invalid table format.</div>;
  }

  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table className='table'>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

// card component
export const Card = ({ CardContent = {} }:any) => {
  const { text, imageUrl , link, description} = CardContent;
    /** Title: String
   *  imageURL: String -> large size
   *  link: String -> to destination
   *  description: String
  */

  return (
    <Link className="card" href={link ?? "/mdx"}>
      <div className="card-content">
      {imageUrl && <img src={imageUrl} alt={text || 'Card Image'} className="prose card-image" />}
        {<p className="card-title">{text}</p>}
        {description && <p className="truncate-text">{description}</p>}
        <text className='read-more text-sm'>Read More</text>
      </div>
    </Link >
  );
};

export const SmallCard = ({ cardContent = {} }:any) => {
  const { title, imageUrl , link} = cardContent;
  /** Title: String
   *  imageURL: String -> icon size
   *  link: String -> to destination
  */

  return (
    <Link className="small-card" href={link ?? "/pages"}>
      {imageUrl && <img src={imageUrl} alt={title || 'Card Icon'} className="prose icon" />}
      <div className="card-content">
        {<p className="title">{title}</p>}
      </div>
      
    </Link>
  );
};

// banner component
export const Banner = ({ BannerContent = {} }:any) => {
  const { text, imageUrl, link } = BannerContent;
  const html = (
    <div className="banner">
  <img src={imageUrl} alt={text ?? 'Banner Image'} className="img"/>
    <div className="banner-glass">
      {<div className="banner-text">
        {text}
      </div> ?? ""}
    </div>
  </div>
  )

  if (link == undefined || link == null || link == "") {
    return html
  }

  return (
    <Link href={link ?? "/mdx"}>
      {html}
    </Link>
  );
};

// image component
export const RoundedImage = ({ ImageContent = {} }:any) => {
  const { text, imageUrl, link } = ImageContent;
  const html = (
    <div className="image">
      <img src={imageUrl} alt={text ?? 'Banner Image'} className="img"/>
      <div className="banner-glass">
        {<div className="banner-text">
          {text}
        </div> ?? ""}
      </div>
    </div>
  )

  if (link == undefined || link == null || link == "") {
    return html
  }

  return (
    <Link href={link ?? "/mdx"}>
      {html}
    </Link>
  );
};



export let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Link: Link,
  
  /// Add other custom components here
  // within mdx
  a: CustomLink,
  code: Code,
  // call with <element />
  Table: Table,
  Card: Card,
  Banner: Banner,
  Image: RoundedImage,
}

export function CustomMDX(props: React.JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote 
      {...props}
      components={{ ...components, ...(props.components || {})}}
    />
  )
}

