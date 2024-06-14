import { CustomMDX } from "./components/mdx";
import Introduction from "./components/intro";

const title = 'Klifton Cheng';

const mdxContent = `
this is a placeholder image?
---
---
**:description here:**

---

\`\`\`js
console.log('Hello, world!');
\`\`\`
`;

// ![align-right](/documents/images/personal/christmas.jpeg)
 

export default function Home() {
  return (
    <section className="w-full max-w-xl px-0 md:px-0">

      <h1 className="titles">
        {title}
      </h1>
      <Introduction />
      <article className="prose">
        <CustomMDX source={mdxContent} />
      </article>
    </section>
);
}
