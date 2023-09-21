import Image from 'next/image'
import { ArrowSquareOut, GithubLogo } from 'phosphor-react'
import { AnimatePresence, motion } from 'framer-motion'

export interface CardProjectsProps {
  title: string
  description: string
  link: string
  repositorie: string
  images: string[]
  skills: string[]
  developing?: boolean
}

export function CardProjects({
  title,
  description,
  images,
  link,
  repositorie,
  skills,
  developing,
}: CardProjectsProps) {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { type: 'spring', duration: 0.3 } }}
      className="relative flex flex-col rounded-md border bg-card text-card-foreground shadow"
    >
      <Image
        src={images[0]}
        alt=""
        width={400}
        height={300}
        className="rounded-md object-cover w-full max-h-52"
      />
      <div className="flex flex-col gap-2 h-full p-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-muted-foreground text-justify flex-1">
          {description}
        </p>

        <div className="flex gap-2 text-sm flex-wrap justify-between">
          {skills.map((skill, index) => {
            return (
              <p
                key={index}
                className="rounded-md px-2 py-1 bg-violet-500/50 text-xs w-fit"
              >
                {skill.toLowerCase()}
              </p>
            )
          })}
        </div>
      </div>

      <div className="absolute top-1 right-1 flex gap-2">
        {repositorie && (
          <a href={repositorie} target="_blank">
            <GithubLogo
              size={28}
              className="hover:text-gray-900 transition-all delay-75"
            />
          </a>
        )}
        {link && (
          <a href="" target="_blank">
            <ArrowSquareOut
              size={28}
              className="hover:text-blue-500 transition-all delay-75"
            />
          </a>
        )}
      </div>
      {developing === true && (
        <p className="px-2 py-1 absolute top-0 left-0 bg-emerald-500 rounded-md text-xs">
          Em Desenvolvimento
        </p>
      )}
    </motion.div>
  )
}
