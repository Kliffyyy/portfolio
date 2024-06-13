import { CustomMDX } from "./mdx"


const subtitle = `part Engineer, part Developer`
const description = `Ambitions, what I like, most important qualification`

const mdxContent = `
#### ${subtitle}
${description}
`

export default function Introduction() {
  return (
    //   <div className="intro">
    //     <p>
    //         hi there
    //     </p>
    //     <img src='/documents/images/personal/christmas.jpeg' className=''/>
    //   </div>
    <div className="prose intro text-content">
        <CustomMDX source={mdxContent} />
        <img src="/documents/images/personal/christmas.jpeg" alt="Profile Picture" className="prose"/>
    </div>
    )
}
