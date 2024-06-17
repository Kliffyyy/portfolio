import Link from "next/link"
import Page from "../projects/page"
import { CustomMDX } from "./mdx"

export default function Introduction() {
  return (
    <div className="prose intro">
      <div className="text-content">
        <p>
          <text>I am a student in the </text>
          <Link href={`https://www.sst.edu.sg/`}>School of Science and Technology, Singapore</Link>
          <text> I have an interest in Science, Technology, Engineering, Aesthetics and Math (STEAM) related fields. I have been led to join many programmes with regard to these fields, learning more with each experience.</text>
        </p>
        <p>
          <text>In the future, I would like to pursue manufacturing technology and create products to help others improve their daily lives. </text>
        </p>
        {/* <CustomMDX source={mdxContent} /> */}
      </div>
        {/* <img src="/documents/images/personal/christmas.jpeg" alt="Profile Picture" className="img"/> */}
    </div>
  )
}
