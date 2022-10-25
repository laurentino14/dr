import Image from "next/image";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {BiNetworkChart} from "react-icons/bi";
import {BsFillGearFill, BsFillPersonFill} from "react-icons/bs";
import {CgClose, CgMenuGridR} from "react-icons/cg";
import {FaSignOutAlt} from "react-icons/fa";
import {MdOutlinePlayLesson, MdPlayLesson} from "react-icons/md";
import {RiBookReadFill} from "react-icons/ri";
import {SocketContext} from "../../../context/SocketContext";

export const HeaderLoggedMobile = ({signOut, user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenItens, setIsOpenItens] = useState(false);
  const {socketDisconnect} = useContext(SocketContext);
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
      {isOpen ? <div className='flex h-20 w-full lg:hidden'></div> : null}
      <header
        className={`${
          isOpen ? "fixed top-0  z-50 min-h-screen " : "relative"
        } flex w-full flex-col justify-start  lg:hidden`}>
        <section className='flex h-20 w-full items-center justify-between  gap-0 bg-neutral-100 px-20 lg:hidden'>
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
              ? "h-screen w-full  opacity-100 sm:w-[26rem] md:w-[20rem]"
              : "h-screen w-0 opacity-0"
          } absolute  right-0 top-20  z-50 flex flex-col items-center justify-start bg-dark py-20 text-neutral-100 transition-all duration-300`}>
          {isOpenItens ? (
            <ul
              className={`${
                isOpen ? "w-full opacity-100 " : "w-0 opacity-0"
              } duration-400  flex h-screen min-h-screen flex-col items-center justify-start gap-y-4 text-xl transition-all delay-200`}>
              <li className='flex h-20 w-full items-center justify-center pr-10 hover:bg-primary '>
                <Link href='/app/profile' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <BsFillPersonFill className=' left-10 text-xl' />
                    Perfil
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center pr-10 hover:bg-primary '>
                <Link href='/app/allcourses' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <MdOutlinePlayLesson className=' left-10 text-xl' />
                    Cursos
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center pr-10 hover:bg-primary '>
                <Link href='/app/blog' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <RiBookReadFill className=' left-10 text-xl' />
                    Blog
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center pr-10 hover:bg-primary '>
                <Link href='/app/' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <BiNetworkChart className=' left-10 text-xl' />
                    Comunidade
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center bg-primary pr-10 text-dark hover:bg-primary '>
                <Link href='/app/mycourses' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <MdPlayLesson className=' left-10 text-xl' />
                    Meus cursos
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center bg-primary pr-10 text-dark hover:bg-primary '>
                <Link href='/app/settings' passHref>
                  <a className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end'>
                    <BsFillGearFill className=' left-10 text-xl' />
                    Configurações
                  </a>
                </Link>
              </li>
              <li className='flex h-20 w-full items-center justify-center bg-primary pr-10 text-dark hover:bg-primary '>
                <button
                  onClick={() => {
                    signOut();
                    socketDisconnect();
                  }}
                  className='flex h-full w-full items-center justify-center gap-4 transition-all sm:justify-end '>
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
