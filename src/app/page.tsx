import { Logo } from '@/components'
import { WhatsappIcon } from '@/components/icons'
import { MenuMain } from '@/components/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="w-full h-16 justify-between flex items-center px-9">
        <div className="w-30">
          <Logo.Lettring className="w-20 h-auto text-primary" />
        </div>
        <div className="hidden sm:flex flex-1">
          <MenuMain />
        </div>
        <div>
          <Link target="_blank" href="https://wa.me/5511988390956">
            <button className="w-full hover:bg-primary/90 transition-all hidden sm:flex items-center gap-3 px-3 h-8 bg-primary text-base text-white rounded-full cursor-pointer">
              <WhatsappIcon className="w-4 h-4" />
              Entrar em contato
            </button>
          </Link>
          <SidebarTrigger className="flex sm:hidden" />
        </div>
      </header>
    </>
  )
}
