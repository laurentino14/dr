import type {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {AiFillBook} from "react-icons/ai";
import {GrTechnology} from "react-icons/gr";
import {MdDirectionsBoat} from "react-icons/md";
import {TbWaveSawTool} from "react-icons/tb";

const Home: NextPage = () => {
  return (
    <main className='w-full  flex flex-col items-center justify-center gap-10 pt-40'>
      <Head>
        <title>Dev Running - Descobrindo o futuro</title>
      </Head>
      <section className='w-full  flex justify-center items-center flex-col  gap-72 mb-80'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-5xl font-bold font-raj uppercase flex gap-10'>
            <TbWaveSawTool className='animate-pulse' />
            <h1>DE O PRIMEIRO PASSO</h1>{" "}
            <TbWaveSawTool className='animate-pulse' />
          </div>
          <h2 className='font-poppins font-medium uppercase'>
            EM BUSCA DO CONHECIMENTO
          </h2>
        </div>
        <div className='flex justify-center items-center gap-96 -ml-28'>
          <div>
            <h2 className='font-poppins font-medium uppercase'>
              NAVEGUE EM DIRECAO AO
            </h2>
            <h1 className='text-5xl font-medium font-raj uppercase'>
              SEU PRIMEIRO{" "}
              <span className='font-bold text-primary bg-dark py-2 px-7 rounded-lg'>
                <strong className='animate-pulse'>EMPREGO</strong>
              </span>
            </h1>
          </div>
          <MdDirectionsBoat className='text-9xl scale-[300%] drop-shadow-md' />
        </div>
      </section>
      <section className='w-full flex flex-col justify-center gap-40 items-center pb-60 bg-gradient-to-b from-dark to-black  text-dark py-4 px-20 drop-shadow-2xl'>
        <div className='flex justify-center items-center pt-20 gap-40'>
          <div className='bg-green-500 rounded-lg drop-shadow-xl p-10'>
            <GrTechnology className='text-9xl' />
            {/* <h1 className='font-raj text-9xl'>0%</h1> */}
          </div>
          <div className='flex justify-center flex-col items-center text-neutral-100'>
            <h1 className='text-5xl font-bold font-raj uppercase'>
              COM AS TECNOLOGIAS
            </h1>
            <h2 className='font-poppins uppercase text-3xl'>
              MAIS ATUALIZADAS DO MERCADO
            </h2>
          </div>
          <div className='bg-green-500 rounded-lg drop-shadow-xl p-10'>
            <GrTechnology className='text-9xl' />
          </div>
        </div>
        <div className='bg-black w-1/2 h-[28rem] drop-shadow-2xl'></div>
        <div>
          <Link href='/cursos' passHref>
            <a className='flex gap-3 hover:bg-yellow-500 transition-colors drop-shadow-md items-center justify-center font-raj bg-primary px-6 py-2 rounded-md font-medium text-2xl'>
              <AiFillBook />
              VER CURSOS
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
