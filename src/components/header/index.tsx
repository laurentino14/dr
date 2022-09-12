import Image from "next/future/image";
import {FaHome} from "react-icons/fa";
import {MdDirectionsBoat} from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header className='w-full h-20 flex justify-center gap-52 px-40 items-center'>
        <div>
          <Image
            src='/logo.png'
            width={100}
            height={100}
            alt='Logomarca da Dev Running'
          />
        </div>
        <div className='flex items-center justify-center gap-14 font-medium'>
          <a href='' className='flex gap-2 items-center'>
            <FaHome className='-mt-[0.1rem]' />
            Home
          </a>
          <a href=''>Cursos</a>
          <a href=''>Blog</a>
          <a href=''>A Dev Running</a>
        </div>
        <div className='flex gap-12'>
          <a
            href=''
            className='uppercase font-raj font-bold pt-3 pb-2 px-4 flex gap-1'>
            <MdDirectionsBoat className='mt-[0.17rem]' />
            Entrar
          </a>
          <a
            href=''
            className='uppercase font-raj drop-shadow-lg hover:brightness-95 font-bold h-auto pb-2 px-4 bg-primary rounded-md flex items-center pt-3'>
            Criar conta
          </a>
        </div>
      </header>
      {/* <div className='w-full h-2 bg-dark mb-20'></div> */}
    </>
  );
};
