import {useRouter} from "next/router";
import {useContext, useState} from "react";
import {BiSupport} from "react-icons/bi";
import {BsFillGearFill, BsFillPersonFill} from "react-icons/bs";
import {FaSignOutAlt} from "react-icons/fa";
import {GiArchiveResearch, GiEnergyArrow} from "react-icons/gi";

import {
  MdDashboard,
  MdOutlineDashboardCustomize,
  MdPlayLesson,
} from "react-icons/md";
import {AuthContext} from "../../../context/AuthContext";

export const AsideDashboard = () => {
  const [nav, setNav] = useState("feed");
  const {signOut} = useContext(AuthContext);
  const {push} = useRouter();
  return (
    <aside className=' min-w-96 sticky top-0 flex min-h-screen w-96 flex-col gap-y-16 py-10 pt-28'>
      <h1 className='flex w-full items-center justify-center gap-1 font-raj text-2xl font-semibold uppercase text-neutral-100'>
        <MdOutlineDashboardCustomize /> Dashboard
      </h1>
      <div className='flex min-h-[70vh] flex-col justify-between'>
        <div className=' flex h-full w-full flex-col gap-y-2 text-sm font-medium text-neutral-300 '>
          <button
            onClick={() => push("/app/profile")}
            className='group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase text-neutral-300 transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] '>
            <BsFillPersonFill className='text-2xl text-primary group-hover:animate-pulse' />{" "}
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Meu perfil
            </p>
          </button>
          <button
            onClick={() => setNav("feed")}
            className={`${
              nav === "feed" ? "bg-[#111111ff]" : ""
            } group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] `}>
            <MdDashboard className='text-2xl text-primary group-hover:animate-pulse' />
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Publicações recentes
            </p>
          </button>

          <button
            onClick={() => setNav("mycourses")}
            className={`${
              nav === "mycourses" ? "bg-[#111111ff]" : ""
            } group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa]`}>
            <MdPlayLesson className='text-2xl text-primary group-hover:animate-pulse' />{" "}
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Meus cursos
            </p>
          </button>
          <button
            onClick={() => push("/blog")}
            className='group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] '>
            <GiArchiveResearch className='text-2xl text-primary group-hover:animate-pulse' />{" "}
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Blog
            </p>
          </button>
          <button
            onClick={() => setNav("community")}
            className={` ${
              nav === "community" ? "bg-[#111111ff]" : ""
            }  group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] `}>
            <GiEnergyArrow className='text-2xl text-primary group-hover:animate-pulse' />
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Comunidade
            </p>
          </button>
        </div>
        <div className='text-sm font-medium'>
          <button
            onClick={() => setNav("settings")}
            className={` ${
              nav === "settings" ? "bg-[#111111ff]" : ""
            } group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase text-neutral-300 transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] hover:text-neutral-100`}>
            <BsFillGearFill className='text-2xl group-hover:animate-pulse' />
            Configurações
          </button>
          <button
            onClick={() => setNav("support")}
            className={` ${
              nav === "support" ? "bg-[#111111ff]" : ""
            } group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase text-neutral-300 transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] `}>
            <BiSupport className='text-2xl  group-hover:animate-pulse' />{" "}
            <p className='transition-colors  duration-200 group-hover:text-neutral-100'>
              Suporte
            </p>
          </button>
          <button
            onClick={() => signOut()}
            className='group flex h-14 w-full items-center justify-start gap-2 px-16 uppercase text-neutral-300 transition-colors duration-200 hover:cursor-pointer hover:bg-[#111111aa] hover:text-neutral-100'>
            <FaSignOutAlt className='text-2xl group-hover:animate-pulse' />
            Sair
          </button>
        </div>
      </div>
    </aside>
  );
};
