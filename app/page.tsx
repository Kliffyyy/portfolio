import Image from "next/image";

import { Navbar } from "./components/nav";
import { Pages } from "./components/pages";
import Footer  from "./components/footer";


const mainHeading = "WELCOME";
const description = `I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
Vim's keystroke commands and tabs' flexibility for personal viewing
preferences. This extends to my support for static typing, where its
early error detection ensures cleaner code, and my preference for dark
mode, which eases long coding sessions by reducing eye strain.`;
 

export default function Home() {
  return (
    <section className="w-full max-w-xl px-4 md:px-0">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {mainHeading}
      </h1>
      <p className="mb-4">
        {description}
      </p>
      <Pages />
    </section>
);
}
