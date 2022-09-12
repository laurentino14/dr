import Image from "next/future/image";
import Link from "next/link";
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
          <Link href='/' passHref>
            <a
              href=''
              className='flex gap-2 items-center hover:text-neutral-600 transition-colors'>
              <FaHome className='-mt-[0.1rem]' />
              Home
            </a>
          </Link>

          <Link href='/cursos' passHref>
            <a className='hover:text-neutral-600 transition-colors'>Cursos</a>
          </Link>
          <Link href='/blog' passHref>
            <a className='hover:text-neutral-600 transition-colors'>Blog</a>
          </Link>
          <Link href='/about' passHref>
            <a className='hover:text-neutral-600 transition-colors'>
              A Dev Running
            </a>
          </Link>
        </div>
        <div className='flex gap-12'>
          <Link href='/cursos' passHref>
            <a
              href=''
              className='uppercase font-raj font-bold pt-3 pb-2 px-4 flex gap-1 hover:text-neutral-600 transition-colors'>
              <MdDirectionsBoat className='mt-[0.17rem]' />
              Entrar
            </a>
          </Link>

          <a
            href=''
            className='uppercase font-raj drop-shadow-lg hover:bg-yellow-400 font-bold h-auto pb-2 px-4 bg-primary rounded-md flex items-center pt-3 transition-all'>
            Criar conta
          </a>
        </div>
      </header>
      {/* <div className='w-full h-2 bg-dark mb-20'></div> */}
    </>
  );
};
