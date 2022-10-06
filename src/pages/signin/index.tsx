import Cookie from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import {MdDirectionsBoat, MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {useAuthMutation} from "../../generated/graphql";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const [useAuthMut, {data}] = useAuthMutation({
    variables: {email, password},
  });

  async function SetAuth(data) {
    setTimeout(() => {
      Cookie.set("auth", data);
    }, 50);
    return Cookie.get("auth");
  }

  return (
    <main className='mt-40 flex items-center justify-center'>
      <Head>
        <title>Dev Running - Entrar</title>
      </Head>
      <section className='w-96 pb-40 flex justify-start items-center gap-5 flex-col'>
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
              useAuthMut().then(res =>
                SetAuth(res.data.authentication.token_user).then(res =>
                  console.log(res),
                ),
              );
            }}
            className='uppercase bg-primary w-96 rounded-md py-3 font-medium hover:bg-yellow-400'>
            Entrar
          </button>
        </div>
      </section>
    </main>
  );
}
