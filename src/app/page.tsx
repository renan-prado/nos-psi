import { Logo } from '@/components'
import { WhatsappIcon } from '@/components/icons'
import { MenuMain } from '@/components/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
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
      <section className="relative pl-10 w-full h-[420px] flex items-center justify-between">
        <div className="w-full -z-10 h-full absolute top-0 left-0">
          <Image
            width={1440}
            height={585}
            src="/banner-main.png"
            alt="Quote"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h2 className="text-4xl leading-12 max-w-lg">
          “Todo mundo carrega nós. Aqui, você encontra um lugar para desatar,
          compreender e se reconectar”
        </h2>
        <div className="bg-primary rounded-l-4xl overflow-hidden">
          <Image
            width={1440}
            height={585}
            src="/dupla-01.png"
            alt="Dupla"
            className="size-84 object-cover grayscale opacity-75"
          />
        </div>
      </section>
      <section className="px-6 bg-primary text-secondary-lightest py-20 flex items-center justify-center">
        <p className="text-lg leading-8 max-w-md text-center font-light">
          Na NósPsi, acreditamos no poder do encontro: entre você e sua
          história, entre o cuidado e a escuta, entre o que te atravessa e o que
          você deseja transformar.Atendemos adolescentes e adultos, com sessões
          presenciais em São Paulo ou online.
        </p>
      </section>
    </>
  )
}
