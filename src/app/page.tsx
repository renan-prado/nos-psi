import { Logo } from '@/components'
import { WhatsappIcon } from '@/components/icons'
import { MenuMain } from '@/components/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="w-full h-16 justify-between flex items-center px-6 sm:px-9">
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
      {/* Botão flutuante WhatsApp (mobile) */}
      <Link
        href="https://wa.me/5511988390956"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-primary text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-primary/90 active:bg-primary/95 border border-white hover:scale-110 transition-all"
      >
        <WhatsappIcon className="w-6 h-6" />
      </Link>
      <section className="relative px-6 sm:pl-10 w-full min-h-[320px] sm:h-[420px] flex flex-col-reverse sm:flex-row gap-6 sm:gap-0 items-center justify-between">
        <div className="w-full -z-10 h-full absolute top-0 left-0">
          <Image
            width={1440}
            height={585}
            src="/banner-main.png"
            alt="Quote"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h2 className="text-2xl sm:text-4xl leading-9 sm:leading-12 max-w-lg text-center sm:text-left">
          “Todo mundo carrega nós. Aqui, você encontra um lugar para desatar,
          compreender e se reconectar”
        </h2>
        <div className="hidden sm:block bg-primary rounded-l-4xl overflow-hidden">
          <Image
            width={1440}
            height={585}
            src="/dupla-01.png"
            alt="Dupla"
            className="w-120 h-90 object-cover"
          />
        </div>
      </section>
      <section className="px-6 bg-primary relative text-secondary-lightest py-16 sm:py-20 flex items-center justify-center">
        <div className="text-primary">
          <Logo.Lettring className="w-full h-full absolute top-0 left-0 opacity-[0.03] py-10" />
        </div>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white max-w-md text-center font-light">
          <span>Na </span>
          <Logo.Lettring className="w-[60px] h-auto inline-block text-white/90 align-middle mx-0.5 mb-2" />
          <span>
            , acreditamos no poder do encontro: entre você e sua história, entre
            o cuidado e a escuta, entre o que te atravessa e o que você deseja
            transformar. Atendemos adolescentes e adultos, com sessões
            presenciais em São Paulo ou online.
          </span>
        </p>
      </section>
      <section className="px-6 sm:px-8 py-12 sm:py-16 text-base sm:text-lg flex flex-col max-w-7xl mx-auto">
        <h2 className="text-4xl leading-12 max-w-lg">Sobre nós</h2>

        <div className="flex flex-col gap-12 sm:gap-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
            <p className="flex-1 max-w-none sm:max-w-md text-center sm:text-left">
              NósPsi nasceu do encontro entre duas psicólogas que compartilham o
              mesmo propósito:{' '}
              <b>
                acolher com escuta, caminhar com presença e cuidar dos nós que
                habitam em cada um de nós.
              </b>
            </p>
            <div className="flex justify-end w-full sm:w-2/4 h-56 sm:h-80">
              <Image
                width={400}
                height={60}
                src="/dani-psi.png"
                alt="About"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
            <div className="order-2 sm:order-none flex justify-end w-full sm:w-2/4 h-56 sm:h-80">
              <Image
                width={400}
                height={60}
                src="/nos-sofa.png"
                alt="About"
                className="w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
            <p className="flex-1 max-w-none sm:max-w-md text-center sm:text-left">
              Somos <b>Danielle Sousa</b> e <b>Fernanda Shimizu</b>, psicólogas
              formadas pela Universidade Presbiteriana Mackenzie, com
              experiências clínicas, sociais e educacionais no Brasil e no
              exterior. Nosso trabalho é guiado por uma escuta sensível, ética e
              comprometida com a subjetividade de cada pessoa que nos procura.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
            <p className="flex-1 max-w-none sm:max-w-md text-primary text-center sm:text-left">
              <span>Na </span>
              <Logo.Lettring className="w-[60px] h-auto inline-block text-primary align-middle mx-0.5 mb-2" />
              <span>
                , acolhemos adolescentes e adultos que estão passando por
                momentos de dúvida, ansiedade, transições, dores ou simplesmente
                desejam olhar para si com mais profundidade. Cada trajetória é
                única — e nosso papel é construir, junto com você, um espaço
                seguro para entender, ressignificar e transformar.
              </span>
            </p>
            <div className="flex justify-end w-full sm:w-2/4 h-56 sm:h-80">
              <Image
                width={400}
                height={60}
                src="/fer-psi.jpg"
                alt="About"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-0 py-12 sm:py-16 text-base sm:text-lg flex flex-col sm:flex-row max-w-7xl mx-auto gap-6">
        <div className="bg-primary-light w-full sm:w-1/2 rounded-2xl sm:rounded-l-4xl sm:rounded-r-none py-10 sm:py-16 px-8 sm:px-16  text-white">
          <h2 className="italic text-3xl font-base font-light">
            Nossa trajetória inclui
          </h2>
          <div className="w-full flex mt-6 sm:mt-10">
            <ul className="text-sm sm:text-base list-disc max-w-none sm:max-w-md flex flex-col gap-3 sm:gap-4">
              <li>
                Atuação com adolescentes, orientação profissional e treinamento
                para mercado de trabalho
              </li>

              <li>
                Rodas de conversa em contextos de acolhimento institucional
              </li>

              <li>
                Atendimento em hospitais com foco em apoio emocional (Child
                Life)
              </li>

              <li>Avaliação neuropsicológica</li>

              <li>Projetos sociais em comunidades e centros de convivência</li>

              <li>
                Competências interculturais: Intercâmbios internacionais em
                Portugal (Universidade do Porto) e nos EUA (Gordon College)
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-secondary w-full sm:w-1/2 rounded-2xl sm:rounded-r-4xl sm:rounded-l-none overflow-hidden h-56 sm:h-auto">
          <Image
            width={400}
            height={60}
            src="/nos-sofa.png"
            alt="About"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>
      <section className="text-base sm:text-lg flex mx-auto bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-20 px-6 sm:px-0">
          <div className="mx-auto py-12 sm:py-16 w-full">
            <h2 className="text-3xl sm:text-4xl leading-10 sm:leading-12 sm:h-24 max-w-lg">
              Serviços
            </h2>

            <div className="flex flex-col gap-8 sm:gap-20 pt-6 sm:pt-10">
              <div className="flex flex-col gap-10">
                <p className="flex-1 max-w-none sm:max-w-md">
                  Na NósPsi, oferecemos psicoterapia individual para
                  adolescentes e adultos, com atendimentos presenciais (em
                  Barueri/SP) e online, sempre com escuta ética, acolhedora e
                  personalizada.
                </p>
                <p className="flex-1 max-w-none sm:max-w-md">
                  Para a psicoterapia online, recomendamos que escolha um lugar
                  reservado e confortável, com boa conexão à internet (seja
                  celular ou computador). Usar fones de ouvido ajuda na
                  privacidade. Verifique se áudio e vídeo estão funcionando
                  antes da sessão.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto py-12 sm:py-16 w-full">
            <h2 className="text-3xl sm:text-4xl leading-10 sm:leading-12 sm:h-24 max-w-lg">
              Principais demandas que atendemos:
            </h2>

            <div className="flex flex-col gap-8 sm:gap-20 pt-6 sm:pt-10">
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li>Ansiedade e crises de pânico</li>
                <li>TDAH e dificuldades de foco</li>
                <li>TOC (Transtorno Obsessivo-Compulsivo)</li>
                <li>Depressão e oscilações de humor</li>
                <li>Fobia social e inseguranças em relacionamentos</li>
                <li>Questões familiares e amorosas</li>
                <li>Luto e perdas</li>
                <li>Autoconhecimento e desenvolvimento pessoal</li>
                <li>TEA (Transtorno do Espectro Autista - nível leve)</li>
                <li>Dúvidas sobre carreira e orientação profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="px-6 sm:px-8 py-12 sm:py-16 text-base sm:text-lg"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl leading-10 sm:leading-12 max-w-lg mb-6 sm:mb-8">
            Perguntas frequentes
          </h2>

          <div className="flex flex-col divide-y">
            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  1. Como saber se eu preciso fazer terapia?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  Se você tem se sentido sobrecarregado(a), ansioso(a), com
                  dificuldades nos relacionamentos, nos estudos, no trabalho ou
                  lidando com emoções intensas, a terapia pode te ajudar. Mas
                  não é preciso esperar chegar ao limite para buscar ajuda. A
                  psicoterapia também é um espaço de autoconhecimento,
                  crescimento pessoal e prevenção.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  2. O que esperar das primeiras sessões?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  As primeiras sessões são voltadas para acolher sua história,
                  entender o que te trouxe até aqui e construir, junto comigo,
                  um espaço seguro e de confiança. Não é preciso saber por onde
                  começar — a escuta cuidadosa e respeitosa faz parte do
                  processo desde o início. Vamos no seu ritmo.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  3. A psicoterapia online é eficaz?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  Sim! A terapia online é uma modalidade reconhecida pelo
                  Conselho Federal de Psicologia e oferece os mesmos benefícios
                  da presencial, com a vantagem da praticidade. Desde que você
                  tenha um ambiente reservado e acesso à internet, podemos
                  construir um espaço terapêutico acolhedor e transformador.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  4. Qual o valor da sessão de terapia?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  O valor das sessões pode variar conforme a frequência, a
                  modalidade (online ou presencial) e as necessidades de cada
                  pessoa. Por isso, preferimos conversar diretamente com você
                  para apresentar as condições de forma transparente e
                  personalizada. Entendemos a psicoterapia como um investimento
                  essencial na saúde mental e na qualidade de vida.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  5. Você atende plano de saúde?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  O atendimento é particular, mas muitos planos oferecem
                  reembolso para sessões com psicólogo(a). Posso te orientar
                  sobre como solicitar esse reembolso e fornecer a documentação
                  necessária.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  6. Qual o tempo médio de duração do tratamento?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  A duração da psicoterapia varia de acordo com cada pessoa, sua
                  história, objetivos e demandas. Algumas questões podem ser
                  trabalhadas em menos tempo, enquanto outras exigem um
                  acompanhamento mais contínuo. O mais importante é respeitar
                  seu processo e ir percebendo as mudanças ao longo do caminho.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-xl font-medium">
                  7. Com que frequência acontecem as sessões?
                </span>
                <span className="shrink-0 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <p>
                  Geralmente, as sessões são semanais, com duração de 50
                  minutos. Em alguns casos, podemos adaptar para sessões
                  quinzenais, conforme a necessidade e possibilidade do
                  paciente.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
