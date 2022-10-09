import Image from "next/future/image";
import Link from "next/link";
import {BsFillGearFill, BsFillPersonFill} from "react-icons/bs";
import {FaSignOutAlt} from "react-icons/fa";
export const HeaderLogged = ({signOut, user}) => {
  return (
    <>
      <header className='w-full h-20 bg-neutral-100 flex justify-center gap-52 px-40 items-center'>
        <Link href='/app' passHref>
          <a>
            <Image
              src='/logo.png'
              width={100}
              height={100}
              alt='Logomarca da Dev Running'
              className='hover:brightness-200'
            />
          </a>
        </Link>

        <div className='flex items-center justify-center gap-14 font-medium'>
          <Link href='/app/profile' passHref>
            <a
              href=''
              className='flex gap-2 items-center hover:text-neutral-600 transition-colors'>
              <BsFillPersonFill className='-mt-[0.1rem]' />
              Perfil
            </a>
          </Link>

          <Link href='/app/allcourses' passHref>
            <a className='hover:text-neutral-600 transition-colors'>Cursos</a>
          </Link>
          <Link href='/app/blog' passHref>
            <a className='hover:text-neutral-600 transition-colors'>Blog</a>
          </Link>
          <Link href='/' passHref>
            <a className='hover:text-neutral-600 transition-colors'>
              Comunidade
            </a>
          </Link>
        </div>
        <div className='flex gap-12'>
          <Link href='/app/mycourses' passHref>
            <a className='uppercase font-raj drop-shadow-lg hover:bg-yellow-400 font-bold h-auto pb-2 px-4 bg-primary rounded-md flex items-center pt-3 transition-all'>
              MEUS CURSOS
            </a>
          </Link>
          <div className='h-auto flex items-center rounded-full justify-center'>
            <Image
              className='rounded-full drop-shadow-md aspect-square'
              src={user?.avatar ? user?.avatar : "/pp.jpg"}
              quality={100}
              width={45}
              height={45}
              alt=''
            />
          </div>
          <Link href='/app/profile/settings' passHref>
            <a
              href=''
              className='flex gap-2 -mr-6 text-xl items-center hover:text-neutral-600 transition-colors'>
              <BsFillGearFill className='-mt-[0.1rem]' />
            </a>
          </Link>

          <button
            onClick={e => signOut()}
            className='flex gap-2 text-xl items-center hover:text-neutral-600 transition-colors'>
            <FaSignOutAlt className='-mt-[0.1rem]' />
          </button>
        </div>
      </header>
    </>
  );
};
