import {GetServerSideProps} from "next";
import Head from "next/head";
import {useContext} from "react";
import {HeaderLogged} from "../../../components/header/HeaderLogged";
import {CardsTech} from "../../../components/profile/cardsTech";
import {ProfileHeader} from "../../../components/profile/header";
import {NewPost} from "../../../components/profile/newPost";
import {AuthContext, User} from "../../../context/AuthContext";
import {GetUserAuthenticatedDocument} from "../../../graphql/graphql";
import {client} from "../../../http/apollo";

type UserT = {
  user: User;
};
export default function Profile({user}: UserT) {
  const {signOut} = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Dev Running - {user.firstname + " " + user.lastname} </title>
      </Head>
      <HeaderLogged user={user} signOut={signOut} />
      <main className='       '>
        <div
          className={`h-[370px]  bg-neutral-200  bg-cover`}

          // [url('/space-1665272099546-1738.jpg')]
        />
        <section className='flex justify-between px-40 pb-40 bg-gradient-to-t from-dark to-black w-full  '>
          <ProfileHeader user={user} />

          <div className='min-h-screen'>
            <section className='w-96 mt-96 h-72 rounded-lg bg-[#111111aa] pt-4 pb-8 px-4 flex flex-col items-center justify-between gap-4'>
              <h1 className='w-full text-center font-bold font-raj text-xl animate-pulse text-neutral-100 uppercase'>
                TECNOLOGIAS
              </h1>

              <div className=' w-full h-full flex gap-4 justify-evenly items-center flex-wrap'>
                <CardsTech />
                <CardsTech />
                <CardsTech />
                <CardsTech />
                <CardsTech />
                <CardsTech />
              </div>
            </section>
          </div>
          <div className='min-h-screen w-2/3 '>
            <NewPost />
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {auth: token} = ctx.req.cookies;

  if (token) {
    const user = await client
      .query<User>({
        query: GetUserAuthenticatedDocument,
        variables: {token: token},
      })
      .then(res => res.data.userAuthenticated);

    return {
      props: {
        user,
      },
    };
  }

  return {
    redirect: {
      destination: "/signin",
      permanent: false,
    },
  };
};
