import Head from "next/head";
import {useRouter} from "next/router";
import {useContext, useState} from "react";
import {BsFillPersonFill, BsPhoneVibrateFill} from "react-icons/bs";
import {MdDirectionsBoat, MdEmail} from "react-icons/md";
import {RiLockFill, RiLockPasswordFill} from "react-icons/ri";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
import {AuthContext} from "../../context/AuthContext";
import {CreatUserDocument} from "../../graphql/graphql";
import {client} from "../../http/apollo";
export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [error, setError] = useState<null | string>(null);

  const {signIn} = useContext(AuthContext);
  const {push} = useRouter();

  async function createUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    password2: string,
    cellphone: string,
  ) {
    if (password != password2) {
      return setError("As senhas não são iguais!");
    }

    if (
      (firstname && lastname && email && password && password2 && cellphone) !=
      ""
    ) {
      return await client
        .mutate({
          mutation: CreatUserDocument,
          variables: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            cellphone: cellphone,
          },
        })
        .then(res => {
          if (res.data.createUser.email) {
            signIn({
              email: res.data.createUser.email,
              password: res.data.createUser.password,
            }).then(() => push("/welcome"));
          }
        });
    }
  }
  return (
    <>
      <HeaderNotLogged />
      <main className='mt-40 flex items-center justify-center'>
        <Head>
          <title>Dev Running - Crie uma conta</title>
        </Head>
        {cellphone}
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
              onChange={e => setFirstname(e.target.value)}
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
            <BsFillPersonFill className='absolute right-[13.2rem] z-50' />
            <input
              placeholder='Sobrenome'
              type='text'
              onChange={e => setLastname(e.target.value)}
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
          </div>
          <div className='flex justify-center items-center gap-5 relative'>
            <MdEmail className='absolute left-3 z-50' />
            <input
              placeholder='E-mail'
              type='email'
              onChange={e => setEmail(e.target.value)}
              className='focus:drop-shadow-sm w-[31.3rem] h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
          </div>
          <div className='flex w-[31.3rem] justify-start items-center gap-5 relative'>
            <BsPhoneVibrateFill className='absolute left-3 z-50' />
            <input
              placeholder='(xx) x xxxxxxxx'
              type='tel'
              onChange={event =>
                setCellphone(
                  `(${event?.target.value[0] + event?.target.value[1]})${" "}${
                    event?.target.value[2]
                  }${" "} ${
                    event?.target.value[3] +
                    event?.target.value[4] +
                    event?.target.value[5] +
                    event?.target.value[6] +
                    event?.target.value[7] +
                    event?.target.value[8] +
                    event?.target.value[9] +
                    event?.target.value[10]
                  } `,
                )
              }
              minLength={11}
              pattern='[0-9]{2}-[0-9]{1}-[0-9]{4}-[0-9]{4}'
              maxLength={11}
              className='focus:drop-shadow-sm w-[31.3rem] h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
          </div>

          <div className='flex justify-center items-center gap-5 relative'>
            <RiLockFill className='absolute left-3 z-50' />
            <input
              placeholder='Escolha uma senha'
              type='password'
              onChange={e => setPassword(e.target.value)}
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
            <RiLockPasswordFill className='absolute right-[13.2rem] z-50' />
            <input
              placeholder='Confirme a senha'
              type='password'
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              onChange={e => setPassword2(e.target.value)}
              required
            />
          </div>
          {error}
          <div className='flex justify-center items-center gap-5'>
            <button
              onClick={e =>
                createUser(
                  firstname,
                  lastname,
                  email,
                  password,
                  password2,
                  cellphone,
                )
              }
              className='uppercase bg-primary w-[31.3rem] rounded-md py-3 font-medium hover:bg-yellow-400'>
              Criar conta
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
