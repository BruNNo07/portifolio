'use client'

import { About } from '@/components/About'
import { Apresentation } from '@/components/Apresentation'
import { Experiences } from '@/components/Experiences'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <main className="flex-1 flex w-screen items-center justify-around flex-wrap overflow-hidden flex-col gap-4">
        <Apresentation />
        <Separator className="w-[90%] bg-violet-500/50 my-12 max-sm:my-8" />
        <About />
        <Separator className="w-[90%] bg-violet-500/50 my-12" />
        <Experiences />
        <Separator className="w-[90%] bg-violet-500/50 my-12" />
        <Projects />
      </main>
    </div>
  )
}
