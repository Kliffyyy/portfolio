import { UrlObject } from "url"
import { CustomMDX } from "./mdx"
import { url } from "inspector"

export function LargeCard(title: string, description?: string, image?: string, alt?: string, link?: string) {
  const cardText = ` ## ${title} \n${description}` 

  return (
    <a className="prose card-large" href={link}>
      <div className="text-content">
        <CustomMDX source={cardText} />
      </div>
        <img src={image} alt={alt} className="prose"/>
    </a>
    )
}
