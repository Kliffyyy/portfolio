import { CustomMDX } from "./mdx"


const subtitle = `Part Engineer, Part Developer`
const description = `This is a description of `

const mdxContent = `
#### ${subtitle}
${description}
`

export default function Introduction() {
  return (
    <div className="prose intro">
      <div className="text-content">
        <CustomMDX source={mdxContent} />
      </div>
        <img src="/documents/images/personal/christmas.jpeg" alt="Profile Picture" className="img"/>
    </div>
    )
}
