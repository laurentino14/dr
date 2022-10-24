import Image from "next/future/image";
import Link from "next/link";
import {FaSignOutAlt} from "react-icons/fa";
export const HeaderLogged = ({signOut, user}) => {
  return (
    <>
      <header className='z-50 hidden h-20 w-full items-center justify-around gap-0 bg-dark px-40 text-neutral-300 drop-shadow-2xl lg:flex lg:gap-16 xl:gap-20 2xl:gap-52'>
        <Link href='/app' passHref>
          <a>
            <Image
              src='/logo-dark.png'
              width={100}
              height={100}
              alt='Logomarca da Dev Running'
              className='hover:brightness-200 '
            />
          </a>
        </Link>

        {/* <div className='flex items-center justify-center gap-14 text-sm font-medium lg:text-base'> */}
        {/* <Link href='/app/profile' passHref>
            <a
              href=''
              className='flex items-center gap-2 transition-colors hover:text-neutral-100'>
              <BsFillPersonFill className='-mt-[0.1rem]' />
              Perfil
            </a>
          </Link> */}

        {/* <Link href='/app/allcourses' passHref>
            <a className='transition-colors hover:text-neutral-100'>Cursos</a>
          </Link> */}
        {/* <Link href='/app/blog' passHref>
            <a className='transition-colors hover:text-neutral-100'>Blog</a>
          </Link> */}
        {/* <Link href='/' passHref>
            <a className='transition-colors hover:text-neutral-100'>
              Comunidade
            </a>
          </Link> */}
        {/* </div> */}
        <div className='flex gap-12'>
          <Link href='/app' passHref>
            <a className='hidden h-auto items-center justify-center rounded-md bg-primary px-4 pb-2 pt-3 font-raj font-bold uppercase text-dark drop-shadow-lg transition-all hover:bg-yellow-400 xl:flex'>
              dashboard
            </a>
          </Link>
          <div className='-mr-6  hidden h-auto items-center  justify-center rounded-full xl:flex'>
            <Link href='/app/profile'>
              <a href=''>
                {" "}
                <Image
                  className='aspect-square rounded-full drop-shadow-md'
                  src={user?.avatar ? user?.avatar : "/pp.jpg"}
                  quality={100}
                  width={45}
                  height={45}
                  alt=''
                />
              </a>
            </Link>
          </div>
          {/* <Link href='/app/profile/settings' passHref>
            <a
              href=''
              className='-mr-6 flex items-center gap-2 text-xl transition-colors hover:text-neutral-100'>
              <BsFillGearFill className='-mt-[0.1rem]' />
            </a>
          </Link> */}

          <button
            onClick={e => signOut()}
            className='flex items-center gap-2 text-xl transition-colors hover:text-neutral-100'>
            <FaSignOutAlt className='-mt-[0.1rem]' />
          </button>
        </div>
      </header>
    </>
  );
};
