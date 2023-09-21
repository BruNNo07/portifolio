'use client'

import { useState } from 'react'
import { CardProjects } from './CardProjects'
import { dbProjects } from '@/db/dbProjects'
import { Button } from './ui/button'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <h1 className="font-bold text-xl mb-8">Meus Projetos</h1>
      <div className="grid grid-cols-4 gap-8 w-[90%]">
        {!showAll
          ? dbProjects.map((project, index) => {
              if (index <= 3) {
                return (
                  <CardProjects
                    key={index}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    images={project.images}
                    link=""
                    repositorie={project.repositorie}
                    developing={project.developing}
                  />
                )
              }
            })
          : dbProjects.map((project, index) => {
              return (
                <CardProjects
                  key={index}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  images={project.images}
                  link=""
                  repositorie={project.repositorie}
                  developing={project.developing}
                />
              )
            })}
      </div>

      <Button className="px-4 py-2" onClick={() => setShowAll(!showAll)}>
        {!showAll ? 'Mostrar Mais' : 'Mostrar Menos'}
      </Button>
    </>
  )
}
