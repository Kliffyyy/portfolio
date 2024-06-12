import Image from "next/image";
import { CustomMDX } from "./components/mdx";


const mainHeading = 'Klifton Cheng';
const description = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Ut in massa quis erat viverra 
porta. Nulla dictum consequat augue et tempor. Etiam nisl 
risus, gravida in tellus sit amet, posuere porta risus. Ut nec 
sollicitudin ante. Mauris pulvinar neque tellus, vitae pharetra 
est porttitor ac. Aenean nec ullamcorper nisl, ac venenatis 
nunc. Cras ultricies, urna nec porta suscipit, velit elit 
blandit enim, vel mollis ligula massa nec felis. Quisque 
cursus urna dolor, id tempus orci porta non. Aliquam viverra, 
sapien nec consequat pharetra, lorem metus tempus nisi, eu 
vulputate sem metus vel sapien. Nam mattis felis et iaculis 
interdum. Aliquam non lorem sed mauris ornare condimentum non 
a augue. Nulla sed justo pulvinar, facilisis est vel, 
ullamcorper risus. Nullam quis elit non turpis aliquet 
tincidunt. Cras vulputate convallis lorem, eget bibendum justo 
tempor dapibus. Ut feugiat dolor elit, vel interdum urna 
tristique sed. Aenean faucibus auctor ex, sit amet vulputate 
ex tempus sit amet.`;

const mdxContent = `
> ${description}

---
## Heading 2
### Heading 3

[The Encore Keyboard](https://www.youtube.com/watch?v=FLdCY4pKNV0)
![???]()
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
      </article>
    </section>
);
}
