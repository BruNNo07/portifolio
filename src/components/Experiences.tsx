import { CardWithDetails } from './CardWithDetails'

export function Experiences() {
  return (
    <section className="flex justify-around w-full flex-wrap">
      <div className="flex flex-col gap-4">
        <h1 className="text-center">Acadêmicas</h1>
        <CardWithDetails
          title="Bacharelado em Ciência da Computação"
          duration="até 2023"
          conclusion={false}
          description="Cursando bacharelado em ciencia da computação na universidade São Judas Tadeu (último semestre)"
        />

        <CardWithDetails
          title="Ensino médio - Colégio Angélica"
          duration="até 2018"
          conclusion={true}
          description="Formado no Ensino médio pelo Colégio Angélica"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-center">Profissionais</h1>
        <CardWithDetails
          title="Desenvolvedor Web - Autônomo"
          duration="2020 - Atualmente"
          conclusion={false}
          description="Criação de aplicações modernas utilizando as melhores técnologias do mercado e todo o conhecimento que possuo em Desenvolvimento Web"
        />

        <CardWithDetails
          title="Analista Junior de Suply Chain - Life Fitness"
          duration="2022 - Atualmente"
          conclusion={false}
          description="Criação de analise de dados e Dashboards em Excel e em Power BI. Automação de processos empresáriais"
        />

        <CardWithDetails
          title="Estágio - LifeFitness"
          duration="2020 - 2022"
          conclusion={true}
          description="Gerenciamento de pedidos e estoque com a ferramenta Dynamic AX. Criação de dashboards e relatórios em Excel."
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-center">Certificação</h1>
        <CardWithDetails
          title="RocketSeat - Ignite - React e React Native"
          duration="Cursando"
          conclusion={false}
          description="Curso focado no Front-end, boas praticas, tudo sobre o Framework React, React Hooks, diversas libs, entre outros assuntos. (já estou bem avançado nesse curso, porem como estão em constante atualização dos assuntos do curso, ainda não liberaram a certificação)."
        />
        <CardWithDetails
          title="RocketSeat - Ignite - NodeJs"
          duration="Cursando"
          conclusion={false}
          description="Curso focado no Back-end: Fastify, Express, Prisma, banco de dados, docker, aws, entre outros assuntos."
        />
        <CardWithDetails
          title="RocketSeat - Fundamentar"
          duration="2022"
          conclusion={true}
          description="Curso focado em aprender todos os fundamentos web, HTML, CSS, JAVASCRIPT, GITHUB, PROTOCOLO HTTP, Requisições para API, entre outros diversos assuntos. "
          certificate="https://app.rocketseat.com.br/certificates/2df42127-55c6-4c9e-b1b5-aa47b8158acc"
        />
        <CardWithDetails
          title="Figma"
          duration="2023"
          conclusion={true}
          description="Curso focado em aprender tudo o que é necessário para desenvolver otimos templates no Figma"
          certificate="https://app.rocketseat.com.br/certificates/adc65e29-1a01-4706-9ed5-eececef345c2"
        />
      </div>
    </section>
  )
}
