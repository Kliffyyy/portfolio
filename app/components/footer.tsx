import Link from "next/link"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const items = {
  'mailto: klifton_cheng@s2021.ssts.edu.sg': {
    name: 'email',
  },
  'https://github.com/kliffyyy': {
    name: 'github',
  },
}

export default function Footer() {
  return (
    <footer className="mb-16 flex-row mt-8">
      <code className="font-bold opacity-80">Student | Engineer | Coder?</code>
      <div className="font-sm mt-2 flex flex-col shrink space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      {Object.entries(items).map(([path, { name }]) => {
        return (
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              key={name}
              href={path}
            >
            <ArrowIcon />
            <p className="ml-2 h-7">{name}</p>
            </a>
        )
      })}
      </div>
    </footer>
  )
}
