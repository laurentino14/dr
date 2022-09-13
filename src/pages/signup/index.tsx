import Head from "next/head";
import React from "react";
import {
  BsCalendarDateFill,
  BsFillPersonFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import {MdArrowDropDown, MdDirectionsBoat, MdEmail} from "react-icons/md";
import {RiLockFill, RiLockPasswordFill} from "react-icons/ri";
export default function SignUp() {
  return (
    <main className='mt-40 flex items-center justify-center'>
      <Head>
        <title>Dev Running - Crie uma conta</title>
      </Head>

      <section className='w-96 pb-40 flex justify-start items-center gap-5 flex-col'>
        <div className='mb-10 flex w-[31.3rem] justify-center items-center gap-10'>
          {" "}
          <MdDirectionsBoat className='text-4xl' />
          <h1 className='text-4xl font-raj font-bold uppercase'>
            Crie uma Conta
          </h1>
          <MdDirectionsBoat className='text-4xl' />
        </div>
        <div className='flex justify-center items-center gap-5 relative'>
          <BsFillPersonFill className='absolute left-3 z-50' />

          <input
            placeholder='Nome'
            type='text'
            className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
          <BsFillPersonFill className='absolute right-[13.2rem] z-50' />
          <input
            placeholder='Sobrenome'
            type='text'
            className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
        </div>
        <div className='flex justify-center items-center gap-5 relative'>
          <MdEmail className='absolute left-3 z-50' />
          <input
            placeholder='E-mail'
            type='email'
            className='focus:drop-shadow-sm w-[31.3rem] h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
        </div>
        <div className='flex w-[31.3rem] justify-start items-center gap-5 relative'>
          <BsPhoneVibrateFill className='absolute left-3 z-50' />
          <input
            placeholder='Celular'
            type='tel'
            className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
          <BsCalendarDateFill className='absolute right-[13.2rem] z-50' />
          <MdArrowDropDown className='absolute right-2 ' />
          <input
            type='date'
            id='nascimento'
            className='focus:drop-shadow-sm w-60 h-10 px-9 pr-1 rounded-md font-medium placeholder:font-light pt-1'
            required
          />
        </div>

        <div className='flex justify-center items-center gap-5 relative'>
          <RiLockFill className='absolute left-3 z-50' />
          <input
            placeholder='Escolha uma senha'
            type='password'
            className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
          <RiLockPasswordFill className='absolute right-[13.2rem] z-50' />
          <input
            placeholder='Confirme a senha'
            type='password'
            className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
            required
          />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <button className='uppercase bg-primary w-[31.3rem] rounded-md py-3 font-medium hover:bg-yellow-400'>
            Criar conta
          </button>
        </div>
      </section>
    </main>
  );
}
