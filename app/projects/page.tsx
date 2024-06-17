import { Pages } from "../components/pages";

export const metadata = {
  title: 'Projects',
  description: 'All the projects that I are significant...',
}

export default function Page() {
  return (
    <section className="w-full max-w-xl px-0 md:px-0">
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">{metadata.title}</h1>  
      <Pages />
    </section>
  )
}
