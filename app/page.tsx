import Image from "next/image";
import { CustomMDX } from "./components/mdx";


const mainHeading = 'Klifton Cheng';
const description = `I'm a student who enjoys`;

const mdxContent = `
> ${description}

---
## Heading 2

[The Encore Keyboard](https://www.youtube.com/watch?v=FLdCY4pKNV0)
![christmas](./documents/images/personal/christmas.jpeg)
\`\`\`js
console.log('Hello, world!');
\`\`\`
`;
 

export default function Home() {
  return (
    <section className="w-full max-w-xl px-0 md:px-0">

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {mainHeading}
      </h1>

      <article className="prose">
        <CustomMDX source={mdxContent} />
        <img src={"/documents/images/personal/christmas.jpeg"} alt="image" width={700} height={700}/>
      </article>
    </section>
);
}
