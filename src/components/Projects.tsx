import { CardProjects } from './CardProjects'
import { dbProjects } from '@/db/dbProjects'

export function Projects() {
  return (
    <>
      <h1 className="font-bold text-xl mb-8">Meus Projetos</h1>
      <div className="grid grid-cols-4 gap-8 w-[90%]">
        {dbProjects.map((project, index) => {
          return (
            <CardProjects
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              images={project.images}
              link=""
              repositorie={project.repositorie}
            />
          )
        })}
      </div>
    </>
  )
}
