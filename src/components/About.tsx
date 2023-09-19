import Image from 'next/image'

export function About() {
  return (
    <section className="flex items-center justify-around w-full flex-wrap">
      <Image
        src={'https://images2.imgbox.com/ec/f0/KZ3qaYvB_o.png'}
        alt=""
        width={400}
        height={400}
        className="rounded-full bg-cover shadow shadow-blue-400/50"
      />
      <div className="flex flex-col gap-2">
        <span className="px-2 py-1 rounded-md bg-violet-500/50 mb-2 text-sm w-32 hover:scale-110 transition-all delay-75 text-center flex">
          🕵️‍♂️ Sobre Mim
        </span>
        <p>👋 Sou o Brunno, tenho 23 anos, nascido e criado em São Paulo.</p>
        <p>
          📖 Desde muito cedo sou apaixonado por programação e a mais de 3 anos,
          crio Aplicações Web, meu principal foco é o Front-End.
        </p>
        <p>
          👨‍🎓 Curso Ciência da Computação na Universidade São Judas, e estou no
          último semestre.
        </p>
        <p>🏃 Gosto muito de futebol e treinar na academia</p>
      </div>
    </section>
  )
}
