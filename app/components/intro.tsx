import { CustomMDX } from "./mdx"


const subtitle = `part Engineer, part Developer`
const description = `Ambitions, what I like, most important qualification`

const mdxContent = `
#### ${subtitle}
${description}
`

export default function Introduction() {
  return (
    <div className="prose intro">
      <div className=" text-content">
        <CustomMDX source={mdxContent} />
      </div>
        <img src="/documents/images/personal/christmas.jpeg" alt="Profile Picture" className="prose"/>
    </div>
    )
}
