import Link from "next/link";
import {MdDirectionsBoat, MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

export const FormSignIn = ({
  setEmail,
  setPassword,
  signIn,
  email,
  password,
}) => {
  return (
    <>
      <div className='mb-10 flex w-[31.3rem] justify-center items-center gap-10'>
        <MdDirectionsBoat className='text-4xl' />
        <h1 className='text-4xl font-raj font-bold uppercase'>Entrar</h1>
        <MdDirectionsBoat className='text-4xl' />
      </div>
      <div className='flex justify-center items-center gap-5 relative'>
        <MdEmail className='absolute left-3 z-50' />
        <input
          placeholder='Digite seu e-mail'
          type='email'
          className='focus:drop-shadow-sm w-96 h-10 px-9 rounded-md font-medium placeholder:font-light'
          onChange={event => setEmail(event.target.value)}
          required
        />
      </div>

      <div className='flex justify-center items-center gap-5 relative'>
        <RiLockPasswordFill className='absolute left-3 z-50' />
        <input
          placeholder='Digite sua senha'
          type='password'
          className='focus:drop-shadow-sm w-96 h-10 px-9 rounded-md font-medium placeholder:font-light'
          required
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <Link href='/recover' passHref>
        <div className='w-full flex justify-center -mt-3'>
          <a className='text-sm cursor-pointer font-medium text-neutral-600 hover:text-neutral-500'>
            Esqueci minha senha
          </a>
        </div>
      </Link>
      <div className='flex justify-center items-center gap-5'>
        <button
          onClick={e => {
            signIn({email, password});
          }}
          className='uppercase bg-primary w-96 rounded-md py-3 font-medium hover:bg-yellow-400'>
          Entrar
        </button>
      </div>
    </>
  );
};
