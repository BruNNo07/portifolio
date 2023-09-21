import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, WhatsappLogo } from 'phosphor-react'
import { Button } from './ui/button'

export function Apresentation() {
  return (
    <div className="flex justify-around items-center w-full mt-20 mb-20 flex-wrap max-sm:gap-8 max-sm:my-5">
      <div className="flex flex-col gap-2 max-sm:items-center">
        <span className="px-2 py-1 bg-violet-500/50 flex items-center w-32 rounded-md text-sm hover:scale-110 transition-all delay-75">
          👋 Bem-Vindo
        </span>
        <h1 className="text-4xl font-bold max-sm:text-center">Brunno Dalla</h1>
        <p className="text-muted-foreground max-sm:text-center">
          React Developer - Front-End Developer
        </p>
      </div>
      <div className="relative bg-slate-900 rounded-full shadow shadow-blue-400/50 max-sm:mx-4">
        <Image
          src={'react.svg'}
          alt="react logo"
          width={42}
          height={42}
          className="absolute top-5 left-44 p-2 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:top-10 max-sm:w-8 max-sm:left-5"
        />
        <Image
          src={'typescript.svg'}
          alt="typescript logo"
          width={42}
          height={42}
          className="absolute top-5 right-44 p-2 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:top-10 max-sm:w-8 max-sm:right-5"
        />
        <Image
          src={'figma.svg'}
          alt="figma logo"
          width={42}
          height={42}
          className="absolute top-36 right-12 p-2 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:w-8 max-sm:right-[-1rem]"
        />
        <Image
          src={'tailwindcss.svg'}
          alt="tailwindcss logo"
          width={42}
          height={42}
          className="absolute top-36 left-12 p-2 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:w-8 max-sm:left-[-1rem]"
        />
        <Image
          src={'html.svg'}
          alt="html logo"
          width={42}
          height={42}
          className="absolute top-72 left-[-1rem] p-2 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:w-8 max-sm:top-60 max-sm:left-4"
        />
        <GithubLogo
          size={42}
          className="absolute top-72 right-[-1rem] p-1 bg-gray-400/10 rounded-lg hover:scale-110 transition-all delay-75 max-sm:w-7 max-sm:top-60 max-sm:right-4"
        />
        <Image
          src={'avatar.svg'}
          alt=""
          width={800}
          height={600}
          className="mb-[-2rem]"
        />
      </div>

      <div className="flex flex-col gap-4 max-sm:mt-8">
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5511976434133"
          target="_blank"
        >
          <Button
            variant={'outline'}
            className="w-36 h-9 text-emerald-500 flex gap-2 hover:scale-110 transition-all delay-75 max-sm:h-8 max-sm:text-xs"
          >
            <WhatsappLogo size={32} className="max-sm:w-6" />
            Conversar
          </Button>
        </a>
        <a href={'#projects'}>
          <Button
            variant={'outline'}
            className="w-36 h-9 hover:scale-110 transition-all delay-75 max-sm:h-8 max-sm:text-xs"
          >
            Projetos
          </Button>
        </a>
      </div>
    </div>
  )
}
