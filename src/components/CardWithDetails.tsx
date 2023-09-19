import { ArrowSquareOut } from 'phosphor-react'
import { Card } from './ui/card'
import { Certificate } from 'crypto'

interface CardWithDetailsProps {
  title: string
  duration: string
  description: string
  conclusion: boolean
  certificate?: string
}

export function CardWithDetails({
  title,
  description,
  conclusion,
  duration,
  certificate,
}: CardWithDetailsProps) {
  return (
    <Card
      className={`border ${
        conclusion
          ? 'border-emerald-500 bg-emerald-500/20 hover:bg-emerald-600/20'
          : 'border-violet-500 hover:bg-violet-500/20'
      } transition-all delay-75 w-[30rem] p-6 flex flex-col gap-4 relative`}
    >
      {certificate && (
        <a
          href={certificate}
          target="_blank"
          className="absolute top-2 right-2"
          title="Visualizar Certificado"
        >
          <ArrowSquareOut size={24} />
        </a>
      )}

      <div className="flex flex-col gap-2">
        <h1 className="text-bold">{title}</h1>
        <p className="text-muted-foreground text-justify">{description}</p>
      </div>
      <div>
        <span>{duration}</span>
      </div>
    </Card>
  )
}
