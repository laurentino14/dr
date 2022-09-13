import Head from "next/head";
import Image from "next/image";
import {BsPlusLg} from "react-icons/bs";
import {MdOutlineGroups} from "react-icons/md";
import {SiKubernetes} from "react-icons/si";
import {TbNetwork} from "react-icons/tb";
export default function About() {
  return (
    <main className='pt-40 flex items-center justify-center flex-col gap-40'>
      <Head>
        <title>Dev Running - Sobre</title>
      </Head>
      <section className='w-full flex items-center justify-center gap-40'>
        <h1 className='font-raj font-medium text-5xl'>
          COMO A <strong className='font-bold'>DR</strong> SURGIU?{" "}
        </h1>
        <div className='bg-gradient-to-b from-dark to-black w-[28rem] text-white p-10 flex flex-col items-center justify-center gap-5 font-poppins text-base rounded-xl drop-shadow-2xl'>
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
      <section className='w-full h-[40rem] bg-dark flex flex-col items-center justify-between '>
        <h1 className='text-white text-4xl font-raj font-medium mt-32'>
          O QUE A <strong className='text-primary text-5xl'>DR</strong> TEM A
          OFERECER?
        </h1>
        <div className='w-full h-40 flex justify-center gap-20'>
          <div className='w-52 h-52 bg-green-500 hover:bg-[#2af675] rounded-full drop-shadow-2xl -rotate-12 flex items-center justify-center flex-col gap-4 font-bold font-raj hover:-translate-y-5 hover:-translate-x-5 transition-all cursor-pointer duration-500'>
            <BsPlusLg className='text-7xl' />
            <p>VISIBILIDADE</p>
            <p className='-mt-6'>NA COMUNIDADE</p>
          </div>
          <div className='w-52 h-52 bg-green-500 hover:bg-[#2af675] rounded-full  drop-shadow-2xl -rotate-6 -translate-y-20 flex items-center justify-center flex-col gap-4 font-bold font-raj hover:-translate-y-24 hover:-translate-x-5 transition-all cursor-pointer duration-500'>
            <MdOutlineGroups className='text-7xl' />
            <p>ATIVIDADES</p>
            <p className='-mt-6'>EM GRUPO</p>
          </div>
          <div className='w-52 h-52 bg-green-500 hover:bg-[#2af675] rounded-full  drop-shadow-2xl -translate-y-32 flex items-center justify-center flex-col gap-4 font-bold font-raj hover:-translate-y-40  transition-all cursor-pointer duration-500 '>
            <TbNetwork className='text-7xl' />
            <p>INDICACOES DOS</p>
            <p className='-mt-6'>ALUNOS DESTAQUES</p>
          </div>
          <div className='w-52 h-52 bg-green-500 hover:bg-[#2af675] rounded-full  drop-shadow-2xl rotate-6 -translate-y-20 flex items-center justify-center flex-col gap-4 font-bold font-raj hover:-translate-y-24 hover:translate-x-5 transition-all cursor-pointer duration-500'>
            <SiKubernetes className='text-7xl' />
            <p>CONHECIMENTOS EM</p>
            <p className='-mt-6'>GRANDES SISTEMAS</p>
          </div>
          <div className='w-52 h-52 bg-green-500 hover:bg-[#2af675] rounded-full  drop-shadow-2xl rotate-12 flex items-center justify-center flex-col gap-4 font-bold font-raj hover:-translate-y-5 hover:translate-x-5 transition-all cursor-pointer duration-500'>
            <TbNetwork className='text-7xl' />
            <p>SUPORTE TOTAL</p>
            <p className='-mt-6'>AOS ALUNOS</p>
          </div>
        </div>
      </section>
    </main>
  );
}
