import { title } from 'process'
import { Pages } from "../components/pages";

export const metadata = {
  title: 'Projects',
  description: 'Nothing here yet!',
}

export default function Page() {
  return (
<section className="w-full max-w-xl px-4 md:px-0">
  <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{metadata.title}</h1>  
  <Pages />
</section>
  )
}
