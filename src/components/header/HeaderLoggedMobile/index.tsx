import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {BiNetworkChart} from "react-icons/bi";
import {BsFillGearFill, BsFillPersonFill} from "react-icons/bs";
import {CgClose, CgMenuGridR} from "react-icons/cg";
import {FaSignOutAlt} from "react-icons/fa";
import {MdOutlinePlayLesson, MdPlayLesson} from "react-icons/md";
import {RiBookReadFill} from "react-icons/ri";

export const HeaderLoggedMobile = ({signOut, user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenItens, setIsOpenItens] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsOpenItens(true);
    } else {
      setIsOpenItens(false);
    }
  }, [isOpen]);
  return (
    <>
      {" "}
      {isOpen ? <div className='w-full h-20 flex lg:hidden'></div> : null}
      <header
        className={`${
          isOpen ? "fixed top-0  min-h-screen z-50 " : "relative"
        } flex lg:hidden flex-col w-full  justify-start`}>
        <section className='lg:hidden flex w-full h-20 bg-neutral-100  justify-between px-20 gap-0 items-center'>
          <Link href='/app' passHref>
            <a>
              <Image
                src='/logo.png'
                width={100}
                height={100}
                alt='Logomarca da Dev Running'
                className='hover:brightness-200 '
              />
            </a>
          </Link>

          <button
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}>
            {isOpen ? (
              <CgClose className='text-4xl' />
            ) : (
              <CgMenuGridR className='text-4xl' />
            )}
          </button>
        </section>
        <section
          className={`${
            isOpen
              ? "w-full h-screen  sm:w-[26rem] md:w-[20rem] opacity-100"
              : "w-0 opacity-0 h-screen"
          } absolute  transition-all duration-300  right-0 top-20 py-20 z-50 bg-dark text-neutral-100 flex flex-col items-center justify-start`}>
          {isOpenItens ? (
            <ul
              className={`${
                isOpen ? "opacity-100 w-full " : "opacity-0 w-0"
              } flex  h-screen min-h-screen items-center flex-col justify-start text-xl gap-y-4 transition-all delay-200 duration-400`}>
              <li className='h-20 w-full flex items-center justify-center hover:bg-primary pr-10 '>
                <Link href='/app/profile' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <BsFillPersonFill className=' left-10 text-xl' />
                    Perfil
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center hover:bg-primary pr-10 '>
                <Link href='/app/allcourses' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <MdOutlinePlayLesson className=' left-10 text-xl' />
                    Cursos
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center hover:bg-primary pr-10 '>
                <Link href='/app/blog' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <RiBookReadFill className=' left-10 text-xl' />
                    Blog
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center hover:bg-primary pr-10 '>
                <Link href='/app/' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <BiNetworkChart className=' left-10 text-xl' />
                    Comunidade
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center bg-primary hover:bg-primary pr-10 text-dark '>
                <Link href='/app/mycourses' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <MdPlayLesson className=' left-10 text-xl' />
                    Meus cursos
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center bg-primary hover:bg-primary pr-10 text-dark '>
                <Link href='/app/settings' passHref>
                  <a className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all'>
                    <BsFillGearFill className=' left-10 text-xl' />
                    Configurações
                  </a>
                </Link>
              </li>
              <li className='h-20 w-full flex items-center justify-center bg-primary hover:bg-primary pr-10 text-dark '>
                <button
                  onClick={() => signOut()}
                  className='w-full h-full flex items-center gap-4 justify-center sm:justify-end transition-all '>
                  <FaSignOutAlt className=' left-10 text-xl' />
                  Desconectar
                </button>
              </li>
            </ul>
          ) : null}
        </section>
      </header>
    </>
  );
};
