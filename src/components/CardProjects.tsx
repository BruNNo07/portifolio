import Image from 'next/image'
import { Card } from './ui/card'
import { ArrowSquareOut, GithubLogo } from 'phosphor-react'
import { AspectRatio } from './ui/aspect-ratio'

export interface CardProjectsProps {
  title: string
  description: string
  link: string
  repositorie: string
  images: string[]
  skills: string[]
}

export function CardProjects({
  title,
  description,
  images,
  link,
  repositorie,
  skills,
}: CardProjectsProps) {
  return (
    <Card className="relative flex flex-col">
      <Image
        src={images[0]}
        alt=""
        width={400}
        height={300}
        className="rounded-md object-cover w-full"
      />
      <div className="flex flex-col gap-2 h-full p-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-muted-foreground text-justify flex-1">
          {description}
        </p>

        <div className="flex gap-2 text-sm flex-wrap">
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
    </Card>
  )
}
