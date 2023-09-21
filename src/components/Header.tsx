import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Header() {
  return (
    <header className="w-[90%] my-4 flex flex-col border-gray-50/25 bg-blue-950/60 rounded-lg max-sm:hidden">
      <nav className="flex w-full gap-6 flex-1 items-center justify-end text-sm font-semibold mr-5">
        <Link href={'/'}>
          <button className="px-4 py-2 hover:bg-blue-600/25 transition-all delay-50 rounded-lg">
            Início
          </button>
        </Link>
        <Link href={'/about'}>
          <button className="px-4 py-2 hover:bg-blue-600/25 transition-all delay-50 rounded-lg">
            Sobre Mim
          </button>
        </Link>
        <Link href={'/experience'}>
          <button className="px-4 py-2 hover:bg-blue-600/25 transition-all delay-50 rounded-lg">
            Experiencias
          </button>
        </Link>
        <Link href={'/projects'}>
          <button className="px-4 py-2 hover:bg-blue-600/25 transition-all delay-50 rounded-lg">
            Projetos
          </button>
        </Link>
        <Link href={'/contact'}>
          <button className="px-4 py-2 hover:bg-blue-600/25 transition-all delay-50 rounded-lg">
            Contatos
          </button>
        </Link>
      </nav>
    </header>
  )
}
