import Image from "next/image";
export default function About() {
  return (
    <main className='py-40 flex items-center justify-center flex-col gap-40'>
      <section className='w-full flex items-center justify-center gap-40'>
        <h1 className='font-raj font-medium text-5xl'>
          COMO A <strong className='font-bold'>DR</strong> SURGIU?{" "}
        </h1>
        <div className='bg-dark w-[28rem] text-white p-10 flex flex-col items-center justify-center gap-5 font-poppins text-base rounded-xl drop-shadow-2xl'>
          <p className='text-justify'>
            A{" "}
            <strong className='font-bold font-raj text-primary text-2xl'>
              Dev Running
            </strong>{" "}
            foi criada com o intuito de formar os novos desenvolvedores da
            comunidade e do mercado de trabalho.
          </p>
          <p className='text-justify'>
            Com um sistema de educacao mais acessível para as pessoas
            desempregadas e jovens que estão iniciando sua carreira, pretendemos
            chegar ao topo do ensino no Brasil, levando o conhecimento
            necessário para uma pessoa comum alcancar cargos que são tão
            desejados pelos jovens do nosso país.
          </p>
        </div>
      </section>
      <section className='w-full flex items-center justify-center gap-40'>
        <div className=' w-[28rem]  p-10 flex flex-col items-center justify-center gap-5 text-lg rounded-xl drop-shadow-2xl'>
          <div className='drop-shadow-2xl rounded-full'>
            <Image
              quality={100}
              src='/83848032.jpg'
              className='rounded-full '
              width='300'
              height='300'
              alt=''
            />
          </div>
          <h1 className=' h-20 w-full flex justify-center items-center gap-2 text-sm font-medium '>
            LUCAS{" "}
            <strong className='text-dark font-bold text-xl mb-1'>
              LAURENTINO
            </strong>{" "}
            CAZEMIRO
          </h1>
          <p className=' text-sm -mt-12 font-bold text-black'>
            Full Cycle Developer
          </p>
          <a
            href='http://www.laurentino.vercel.app'
            target='_blank'
            className=' w-full flex justify-center items-center gap-2 text-sm font-medium -mt-2 hover:text-neutral-600 transition-colors '>
            www.laurentino.vercel.app
          </a>
        </div>
        <h1 className='font-raj font-medium text-5xl'>
          QUEM FUNDOU A <strong className='font-bold'>DR</strong>?
        </h1>
      </section>
    </main>
  );
}
