import {GetServerSideProps} from "next";
import {useSession} from "next-auth/react";
import Head from "next/head";
import {parseCookies} from "nookies";
import {useContext, useState} from "react";
import {HeaderNotLogged} from "../../components/header/HeaderNotLogged";
import {AlternativeLogin} from "../../components/signin/alternativeLogin";
import {FormSignIn} from "../../components/signin/formSignIn";
import {AuthContext} from "../../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useContext(AuthContext);
  const {data} = useSession();

  return (
    <>
      <HeaderNotLogged />
      <main className='mt-40 flex items-center justify-center'>
        <Head>
          <title>Dev Running - Entrar</title>
        </Head>
        <section className='w-96 pb-40 flex justify-start items-center gap-5 flex-col'>
          <FormSignIn
            email={email}
            password={password}
            signIn={signIn}
            setEmail={setEmail}
            setPassword={setPassword}
          />
          <AlternativeLogin />
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {["auth"]: token} = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
