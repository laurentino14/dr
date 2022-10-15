import {createObjectURL} from "blob-util";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {BsFillPersonFill} from "react-icons/bs";
import {MdAlternateEmail, MdDirectionsBoat, MdEmail} from "react-icons/md";
import {RiLockFill, RiLockPasswordFill} from "react-icons/ri";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
import {AuthContext} from "../../context/AuthContext";
import {CreateUserDocument} from "../../graphql/graphql";
import {client} from "../../http/apollo";
export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("admin");
  const [error, setError] = useState<null | string>(null);
  const [file, setFile] = useState<any>(null);

  const {signIn} = useContext(AuthContext);
  const {push} = useRouter();

  const imageChange = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  async function createUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    password2: string,
    username: string,
    file: any,
  ) {
    if (password != password2) {
      return setError("As senhas não são iguais!");
    }

    if ((firstname && lastname && email && password && password2) != "") {
      if (file !== null) {
        return await client
          .mutate({
            mutation: CreateUserDocument,
            variables: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              username: username,
              file: file,
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
      } else if (file === null) {
        return await client
          .mutate({
            mutation: CreateUserDocument,
            variables: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              username: username,
              file: new File([], ""),
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
  }
  return (
    <>
      <HeaderNotLogged />
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
              onChange={e => setFirstname(e.target.value)}
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              required
            />
            <BsFillPersonFill className='absolute right-[13.3rem] z-50' />
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
            <MdAlternateEmail className='absolute left-3 z-50' />
            <input
              placeholder='Username'
              type='text'
              pattern='[a-z]{12}'
              onChange={e => setUsername(e.target.value)}
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
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
            <RiLockPasswordFill className='absolute right-[13.3rem] z-50' />
            <input
              placeholder='Confirme a senha'
              type='password'
              className='focus:drop-shadow-sm w-60 h-10 px-9 rounded-md font-medium placeholder:font-light'
              onChange={e => setPassword2(e.target.value)}
              required
            />
          </div>
          <span className='w-full font-medium -mb-4'>
            Escolha uma foto de perfil{" "}
            <sup className='text-red-500 text-lg'>*</sup>
          </span>
          {file != null ? (
            <div className='w-full py-4 px-4 items-center bg-bg dark:bg-dark flex rounded-sm rounded- flex-col gap-2'>
              <Image
                src={createObjectURL(file)}
                className=' w-40 rounded-lg aspect-square'
                alt=''
                width={100}
                height={100}
              />
            </div>
          ) : (
            <></>
          )}
          <div className='w-full items-center flex-col lg:flex-row flex gap-4'>
            <button
              type='button'
              className='bg-dark w-44 hover:bg-opacity-90 dark:bg-dark dark:brightness-200 dark:hover:brightness-150 hover:cursor-pointer text-bg rounded-md px-2 py-3'>
              <label
                htmlFor='profilepicture'
                className='   hover:cursor-pointer     '>
                Selecionar arquivo
              </label>
            </button>
            <span className='truncate w-60'>{file?.name}</span>
          </div>
          <input
            className='hidden'
            type='file'
            accept='image/*'
            required
            multiple={false}
            onChange={imageChange}
            name='profilepicture'
            id='profilepicture'
          />
          <div className='flex justify-center items-center gap-5'>
            <button
              onClick={e =>
                createUser(
                  firstname,
                  lastname,
                  email,
                  password,
                  password2,
                  username,
                  file,
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
