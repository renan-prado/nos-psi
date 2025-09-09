import Link from 'next/link'

export function MenuMain() {
  return (
    <nav className="flex-1 pl-4 lg:pl-10 text-lg font-medium pt-6 sm:pt-0">
      <ul className="flex sm:items-center sm:gap-6 flex-col sm:flex-row px-2 sm:px-0">
        <li className="h-10 cursor-pointer group flex flex-col justify-center sm:items-center">
          <Link href="/">Início</Link>
          <div className="w-0 group-hover:w-full h-0.5 bg-black transition-all" />
        </li>
        <li className="h-10 cursor-pointer group flex flex-col justify-center sm:items-center">
          <Link href="/">Sobre Nós</Link>
          <div className="w-0 group-hover:w-full h-0.5 bg-black transition-all" />
        </li>
        <li className="h-10 cursor-pointer group flex flex-col justify-center sm:items-center">
          <Link href="/">Serviços</Link>
          <div className="w-0 group-hover:w-full h-0.5 bg-black transition-all" />
        </li>
      </ul>
    </nav>
  )
}
